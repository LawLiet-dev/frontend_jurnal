import React, { useState, useEffect, useCallback, useRef } from 'react';
import HeaderSiswa from "../components/HeaderSiswa";
import Notification from '../components/Notification';
import { Toaster, toast } from "react-hot-toast";
import Api from "../services/api";
import Cookies from "js-cookie";

const Student = () => {
  const [journalData, setJournalData] = useState({
    data: [],
    current_page: 1,
    last_page: 1,
    links: []
  });
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 0,
    perPage: 10
  });
  
  const [submissionStatus, setSubmissionStatus] = useState({
    isSubmitted: false,
    status: 'pending',
    rejectReason: null,
    teacherName: '',
    dudiName: ''
  });

  const [missedEntries, setMissedEntries] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // Use refs to store previous data for comparison
  const prevJournalDataRef = useRef(null);
  const prevSubmissionStatusRef = useRef(null);
  
  // Polling interval in milliseconds - can be adjusted as needed
  const POLLING_INTERVAL = 5000; // Poll every 5 seconds for real-time feel
  
  // const calculateMissedEntries = (journalEntries) => {
  //   // Get current date
  //   const currentDate = new Date();
    
  //   // Get date from 2 weeks ago
  //   const twoWeeksAgo = new Date();
  //   twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    
  //   // Expected number of entries (assuming one per weekday for 2 weeks)
  //   // This counts weekdays (Monday-Friday) in the last 2 weeks
  //   let expectedEntries = 0;
  //   let tempDate = new Date(twoWeeksAgo);
    
  //   while (tempDate <= currentDate) {
  //     const dayOfWeek = tempDate.getDay();
  //     // Check if it's a weekday (1-5 represents Monday-Friday)
  //     if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  //       expectedEntries++;
  //     }
  //     tempDate.setDate(tempDate.getDate() + 1);
  //   }
    
  //   // Count actual entries in the last 2 weeks
  //   const actualEntries = journalEntries.filter(entry => {
  //     const entryDate = new Date(entry.date);
  //     return entryDate >= twoWeeksAgo && entryDate <= currentDate;
  //   }).length;
    
  //   // Calculate missed entries
  //   const missed = Math.max(0, expectedEntries - actualEntries);
  //   setMissedEntries(missed);
  // };

  const calculateMissedEntries = (journalEntries) => {
    // Get current date and reset time to beginning of day
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    // Get user account creation date
    const userCreatedAt = localStorage.getItem('user_created_at') ? 
      new Date(localStorage.getItem('user_created_at')) : 
      new Date(); // Fallback to current date if not available
    userCreatedAt.setHours(0, 0, 0, 0);
    
    // Use the later of: account creation date or two weeks ago
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    twoWeeksAgo.setHours(0, 0, 0, 0);
    
    // Starting date for our calculation should be the later of user creation date or two weeks ago
    const startDate = userCreatedAt > twoWeeksAgo ? userCreatedAt : twoWeeksAgo;
    
    // Create a map of dates to check if entries exist for each required date
    const requiredDatesMap = {};
    let tempDate = new Date(startDate);
    
    // Initialize map with all required weekdays
    while (tempDate <= currentDate) {
      const dayOfWeek = tempDate.getDay();
      // Check if it's a weekday (1-5 represents Monday-Friday)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Use date string as key to ensure uniqueness
        const dateStr = tempDate.toISOString().split('T')[0];
        requiredDatesMap[dateStr] = false; // Initially mark as not filled
      }
      tempDate.setDate(tempDate.getDate() + 1);
    }
    
    // Mark dates that have entries as filled
    journalEntries.forEach(entry => {
      // Normalize the entry date to YYYY-MM-DD format
      const entryDate = new Date(entry.date);
      entryDate.setHours(0, 0, 0, 0);
      const entryDateStr = entryDate.toISOString().split('T')[0];
      
      // If this date is in our required dates map, mark it as filled
      if (requiredDatesMap.hasOwnProperty(entryDateStr)) {
        requiredDatesMap[entryDateStr] = true;
      }
    });
    
    // Count unfilled dates
    const missedDays = Object.values(requiredDatesMap).filter(filled => !filled).length;
    
    // Set the state with the accurate count
    setMissedEntries(missedDays);
    
    // For debugging
    // console.log("Required dates:", Object.keys(requiredDatesMap).length);
    // console.log("Filled dates:", Object.values(requiredDatesMap).filter(filled => filled).length);
    // console.log("Missed days:", missedDays);
  };

  // Function to check if journal data has changed
  const hasJournalDataChanged = (newData) => {
    if (!prevJournalDataRef.current) return true;
    
    // Check if total count changed
    if (newData.total !== prevJournalDataRef.current.total) return true;
    
    // Check if we have different journal entries
    if (newData.data.length !== prevJournalDataRef.current.data.length) return true;
    
    // Compare each journal entry
    for (let i = 0; i < newData.data.length; i++) {
      const newEntry = newData.data[i];
      const oldEntry = prevJournalDataRef.current.data[i];
      
      if (newEntry.id !== oldEntry.id ||
          newEntry.name !== oldEntry.name ||
          newEntry.description !== oldEntry.description ||
          newEntry.date !== oldEntry.date) {
        return true;
      }
    }
    
    return false;
  };

  // Function to check if submission status has changed
  const hasSubmissionStatusChanged = (newStatus) => {
    if (!prevSubmissionStatusRef.current) return true;
    
    return (
      newStatus.isSubmitted !== prevSubmissionStatusRef.current.isSubmitted ||
      newStatus.status !== prevSubmissionStatusRef.current.status ||
      newStatus.rejectReason !== prevSubmissionStatusRef.current.rejectReason ||
      newStatus.teacherName !== prevSubmissionStatusRef.current.teacherName ||
      newStatus.dudiName !== prevSubmissionStatusRef.current.dudiName
    );
  };

  const fetchJournalData = useCallback(async (pageNumber = 1, silent = true) => {
    if (!silent) setLoading(true);
    
    try {
      const token = Cookies.get("token");
            
      if (!token) {
        console.error("No token found");
        return;
      } 

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get(`/api/journal?page=${pageNumber}`);
      
      if (response.data.status) {
        // Check if the data is different from what we already have
        if (hasJournalDataChanged(response.data.data)) {
          // Update the data only if it's changed
          setJournalData(response.data.data);
          setPagination({
            currentPage: response.data.data.current_page,
            total: response.data.data.total,
            perPage: response.data.data.per_page
          });

          calculateMissedEntries(response.data.data.data);
          setLastUpdated(new Date());
          
          // Store the new data for future comparison
          prevJournalDataRef.current = response.data.data;
          
          // Only show notification if this wasn't the initial load
          if (prevJournalDataRef.current && !silent) {
            toast.success("Data jurnal telah diperbarui", { duration: 2000 });
          }
        }
      }
    } catch (error) {
      console.error('Error fetching journal data:', error);
      if (!silent) {
        toast.error("Gagal memuat data jurnal");
      }
    } finally {
      if (!silent) setLoading(false);
    }
  }, []);

  // const fetchSubmissionStatus = useCallback(async (silent = true) => {
  //   try {
  //     const token = Cookies.get("token");
  //     if (!token) return;

  //     Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //     const response = await Api.get("/api/settings");
      
  //     if (response.data.status) {
  //       const { students, teacher, dudi } = response.data.data;
        
  //       // Find the matching teacher and dudi names
  //       const selectedTeacher = teacher.find(t => t.id === students?.teachers_id);
  //       const selectedDudi = dudi.find(d => d.id === students?.dudis_id);

  //       // Check if a request has been made
  //       const hasRequestedAssignment = 
  //         students?.status !== undefined || 
  //         students?.teachers_id !== undefined || 
  //         students?.dudis_id !== undefined;

  //       const newStatus = {
  //         isSubmitted: hasRequestedAssignment,
  //         status: students?.status || 'pending',
  //         rejectReason: students?.reject_reason,
  //         teacherName: selectedTeacher?.name || '',
  //         dudiName: selectedDudi?.name || ''
  //       };
        
  //       // Check if the status has changed
  //       if (hasSubmissionStatusChanged(newStatus)) {
  //         setSubmissionStatus(newStatus);
  //         prevSubmissionStatusRef.current = newStatus;
          
  //         // Show notification if status has changed and this isn't the initial load
  //         if (prevSubmissionStatusRef.current && !silent) {
  //           toast.success("Status permintaan telah diperbarui", { duration: 2000 });
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error fetching submission status:', error);
  //   }
  // }, []);

    // Replace the existing fetchSubmissionStatus function with this corrected version
    const fetchSubmissionStatus = useCallback(async (silent = true) => {
      try {
        const token = Cookies.get("token");
        if (!token) return;
    
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        
        // First get the settings data
        const settingsResponse = await Api.get("/api/settings");
        let teacherList = [];
        let dudiList = [];
        
        if (settingsResponse.data.status) {
          const { students, teacher, dudi } = settingsResponse.data.data;
          teacherList = teacher || [];
          dudiList = dudi || [];
          
          // Find the matching teacher and dudi names
          const selectedTeacher = teacherList.find(t => t.id === students?.teachers_id);
          const selectedDudi = dudiList.find(d => d.id === students?.dudis_id);
    
          // Check if approved or rejected status exists
          if (students?.status === 'approved' || students?.status === 'rejected') {
            const newStatus = {
              isSubmitted: true,
              status: students.status,
              rejectReason: students?.reject_reason,
              teacherName: selectedTeacher?.name || '',
              dudiName: selectedDudi?.name || ''
            };
            
            if (hasSubmissionStatusChanged(newStatus)) {
              setSubmissionStatus(newStatus);
              prevSubmissionStatusRef.current = newStatus;
              
              if (prevSubmissionStatusRef.current && !silent) {
                toast.success("Status permintaan telah diperbarui", { duration: 2000 });
              }
            }
            return;
          }
        }
        
        // If we get here, check for pending status in studentRequests
        const requestsResponse = await Api.get("/api/studentRequest");
        
        if (requestsResponse.data.status && 
            requestsResponse.data.studentRequests && 
            requestsResponse.data.studentRequests.length > 0) {
          // Assuming the first request is the active one
          const pendingRequest = requestsResponse.data.studentRequests[0];
          
          if (pendingRequest.status === 'pending') {
            // Find the teacher and dudi details if needed
            const selectedTeacher = teacherList.find(t => t.id === pendingRequest.teacher_id);
            const selectedDudi = dudiList.find(d => d.id === pendingRequest.dudi_id);
            
            const newStatus = {
              isSubmitted: true,
              status: 'pending',
              rejectReason: null,
              teacherName: selectedTeacher?.name || pendingRequest.teacher_name || '',
              dudiName: selectedDudi?.name || pendingRequest.dudi_name || ''
            };
            
            if (hasSubmissionStatusChanged(newStatus)) {
              setSubmissionStatus(newStatus);
              prevSubmissionStatusRef.current = newStatus;
              
              if (prevSubmissionStatusRef.current && !silent) {
                toast.success("Status permintaan telah diperbarui", { duration: 2000 });
              }
            }
          }
        } else {
          // No request found
          const newStatus = {
            isSubmitted: false,
            status: '',
            rejectReason: null,
            teacherName: '',
            dudiName: ''
          };
          
          if (hasSubmissionStatusChanged(newStatus)) {
            setSubmissionStatus(newStatus);
            prevSubmissionStatusRef.current = newStatus;
          }
        }
      } catch (error) {
        console.error('Error fetching submission status:', error);
      }
    }, []);    

  // Initial data loading
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      await Promise.all([
        fetchJournalData(1, true),
        fetchSubmissionStatus(true)
      ]);
      setLoading(false);
    };
    
    loadInitialData();
  }, [fetchJournalData, fetchSubmissionStatus]);

  // Set up polling interval to check for data changes
  useEffect(() => {
    const pollData = () => {
      fetchJournalData(pagination.currentPage, true);
      fetchSubmissionStatus(true);
    };
    
    // Start polling
    const intervalId = setInterval(pollData, POLLING_INTERVAL);
    
    // Clean up on component unmount
    return () => clearInterval(intervalId);
  }, [fetchJournalData, fetchSubmissionStatus, pagination.currentPage]);

  // Set up event listener for page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Refresh data when page becomes visible again, silently
        fetchJournalData(pagination.currentPage, true);
        fetchSubmissionStatus(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchJournalData, fetchSubmissionStatus, pagination.currentPage]);

  // Setup real-time updates with a focus event listener
  useEffect(() => {
    const handleFocus = () => {
      // Refresh data when window regains focus, silently
      fetchJournalData(pagination.currentPage, true);
      fetchSubmissionStatus(true);
    };
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [fetchJournalData, fetchSubmissionStatus, pagination.currentPage]);

  // Set up network status detection
  useEffect(() => {
    const handleOnline = () => {
      // When connection is restored, refresh data
      toast.success("Koneksi terhubung kembali, memperbarui data...");
      fetchJournalData(pagination.currentPage, false);
      fetchSubmissionStatus(false);
    };
    
    window.addEventListener('online', handleOnline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [fetchJournalData, fetchSubmissionStatus, pagination.currentPage]);

  const truncateText = (text, maxLength = 30) => {
    return text?.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const renderSubmissionStatus = () => {
    console.log('Current submission status:', submissionStatus);
    
    // If status field exists in the response, we consider it a submission
    if (submissionStatus.isSubmitted) {
      switch (submissionStatus.status.toLowerCase()) {
        case 'approved':
          return (
            <p className="text-sm text-green-800">
              Permintaan disetujui. Guru anda sekarang adalah {submissionStatus.teacherName} dan pkl di industri {submissionStatus.dudiName}
            </p>
          );
        case 'rejected':
          return (
            <p className="text-sm text-red-800">
              Permintaan ditolak. Alasan: {submissionStatus.rejectReason || 'Tidak ada alasan yang diberikan'}
            </p>
          );
        case 'pending':
          return (
            <p className="text-sm text-yellow-800">
              Masih menunggu konfirmasi dari admin
            </p>
          );
        default:
          return (
            <p className="text-sm text-yellow-800">
              Status permintaan: {submissionStatus.status}
            </p>
          );
      }
    } else {
      // No status field found
      return (
        <p className="text-sm text-gray-600">
          Mohon memilih pembimbing dan dudi terlebih dahulu di setting
        </p>
      );
    }
  };

  // const hasSubmissionStatusChanged = (newStatus) => {
  //   if (!prevSubmissionStatusRef.current) return true;
    
  //   return (
  //     prevSubmissionStatusRef.current.isSubmitted !== newStatus.isSubmitted ||
  //     prevSubmissionStatusRef.current.status !== newStatus.status ||
  //     prevSubmissionStatusRef.current.rejectReason !== newStatus.rejectReason ||
  //     prevSubmissionStatusRef.current.teacherName !== newStatus.teacherName ||
  //     prevSubmissionStatusRef.current.dudiName !== newStatus.dudiName
  //   );
  // };
  

  return (
    <div>
      <HeaderSiswa />
      <Notification/>
      <div className="min-h-screen lg:px-20 mt-10">
        <Toaster position="top-right" />
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 mx-4 md:mx-0">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-xl font-semibold">Journal Saya</h1>
                  {renderSubmissionStatus()}
                </div>
                {/* <div className="text-xs text-gray-500">
                  Update otomatis setiap {POLLING_INTERVAL/1000} detik
                </div> */}
              </div>

              <div className="text-xs text-gray-500 mb-2">
                Terakhir diperbarui: {lastUpdated.toLocaleTimeString('id-ID')}
              </div>

              {loading ? (
                <div className="flex flex-col justify-center items-center h-40 space-y-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"/></rect></svg>
                  <div className="text-sm text-gray-500">
                    Mohon tunggu sebentar...
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Unit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Deskripsi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tanggal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {journalData.data.length > 0 ? (
                        journalData.data.map((journal) => (
                          <tr key={journal.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {journal.name}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {truncateText(journal.description, 50)}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-blue-500">
                                {formatDate(journal.date)}
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                            Anda belum mengisi jurnal
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {journalData.data.length > 0 && journalData.links && journalData.links.length > 3 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {journalData.links.map((link, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (link.url) {
                              const pageNumber = link.url.split('page=')[1];
                              fetchJournalData(pageNumber, false);
                            }
                          }}
                          disabled={!link.url}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            link.active
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                          dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div
              className="bg-blue-500 rounded-lg shadow-lg py-6 p-6 lg:w-1/3 w-full max-w-[90%] mx-auto"
              // style={{ marginRight: is1920px ? "50px" : "50px" }}
            >
              <h2 className="text-white text-xl font-semibold mb-2">
                Statistik Jurnal
              </h2>
              <p className="text-white opacity-80 mb-6">jurnal siswa</p>
              
              <img
                alt="School logo"
                className="mx-auto w-40 h-40 object-contain mb-6"
                src="/assets/images/smk.png"
              />
              
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-gray-700 text-lg font-semibold">Mengisi</p>
                    <p className="text-gray-500">Journal</p>
                  </div>
                  <div className="text-blue-500 bg-blue-100 rounded-lg px-4 py-2 font-medium">
                    {pagination.total || 0} X
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 text-lg font-semibold">
                      Tidak mengisi
                    </p>
                    <p className="text-gray-500">Journal</p>
                  </div>
                  <div className="text-blue-500 bg-blue-100 rounded-lg px-4 py-2 font-medium">
                      {missedEntries || 0} X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;