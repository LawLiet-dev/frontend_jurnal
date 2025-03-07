import React, { useState, useEffect } from 'react';
import HeaderTeacher from '../components/HeaderGuru';
import JournalModal from '../components/JournalModal';
import UnsubmittedJournalModal from '../components/UnsubmittedJournalModal';
import Api from "../services/api";
import Cookies from "js-cookie";

function Teacher() {
  const [dudiData, setDudiData] = useState([]);
  const [journalData, setJournalData] = useState([]);
  const [isUnsubmittedModalOpen, setIsUnsubmittedModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Fetch both student and journal data
  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      // Fetch both endpoints simultaneously
      const [studentResponse, journalResponse] = await Promise.all([
        Api.get('/api/mentor/student'),
        Api.get('/api/mentor/journal')
      ]);

      if (studentResponse.data.status) {
        setDudiData(studentResponse.data.data);
      }

      if (journalResponse.data.status) {
        setJournalData(journalResponse.data.data);
      }
      
      // Update last updated timestamp
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchData();
  }, []);

  // Set up polling for data updates every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 30000); // 30 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Get unique dudi names
  const uniqueDudiNames = [...new Set(dudiData.map(item => item.data.dudi_name))];

  // Calculate journal statistics
  const calculateJournalStats = () => {
    const today = new Date().toISOString().split('T')[0];
    
    // Count journals per student
    const journalsPerStudent = journalData.reduce((acc, journal) => {
      const studentName = journal.data.name_student;
      acc[studentName] = (acc[studentName] || 0) + 1;
      return acc;
    }, {});

    // Count students who haven't submitted today
    const studentsWithoutTodayJournal = dudiData.filter(student => {
      const studentName = student.data.name;
      return !journalData.some(journal => 
        journal.data.name_student === studentName && 
        journal.data.date === today
      );
    }).length;

    return {
      journalsPerStudent,
      studentsWithoutTodayJournal
    };
  };

  const stats = calculateJournalStats();

  const LoadingSpinner = () => (
    <div className="flex flex-col justify-center items-center h-40 space-y-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1">
          <animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"/>
          <animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"/>
          <animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"/>
          <animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"/>
        </rect>
        <rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1">
          <animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"/>
          <animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"/>
          <animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"/>
          <animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"/>
        </rect>
      </svg>
      <div className="text-sm text-gray-500">
        Mohon tunggu sebentar...
      </div>
    </div>
  );

  return (
    <div>
      <HeaderTeacher />
      
      <div className="hidden md:block">
        <div className="bg-white flex justify-center items-start min-h-screen py-4 lg:px-10">
          <div className="mx-auto flex justify-between w-11/12">
            
            {/* Collaborator Section */}
            <div className="collaborator bg-white p-4" style={{ width:"350px" }}>
              <h2 className="text-lg font-semibold mb-6 rounded-full h-8 text-center pt-1" style={{ width:"100px", backgroundColor:"#F0F2F5", color:"#121417" }}>Dudi</h2>
              {loading ? (
                <LoadingSpinner />
              ) : uniqueDudiNames.length > 0 ? (
                uniqueDudiNames.map((dudiName, index) => (
                  <div key={index} className="collaborator-item flex items-center mb-2">
                    <img 
                      alt={dudiName} 
                      className="rounded-full w-10 h-10 mr-2" 
                      src="/assets/images/profile/user-4.jpg"
                      width="40" 
                      height="40" 
                    />
                    <div className="info flex-grow">
                      <p className="name font-bold">{dudiName}</p>
                    </div>
                    <div className="arrow text-gray-500">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Tidak ada dudi</p>
              )}
            </div>

            {/* Statistics Section */}
            <div 
            style={{
              borderRight: "7px solid #3B82F6", 
              borderBottom: "7px solid #3B82F6",
              borderLeft: "7px solid #3B82F6",
              borderRadius: "10px"
            }} 
            className="bg-white rounded-lg w-4/5 max-w-4xl"
            >
              <div className="bg-blue-500 text-white p-4 rounded-t-lg text-lg flex justify-between items-center">
                <span>Statistik Jurnal</span>
                {lastUpdated && (
                  <span className="text-xs opacity-80">
                    Terakhir diperbarui: {lastUpdated.toLocaleTimeString()}
                  </span>
                )}
              </div>
              <div className="p-6">
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-left">
                        <span className="block text-gray-600">Total Jurnal</span>
                        <span className="block text-gray-600">Terisi</span>
                      </div>
                      <div className="bg-blue-100 text-blue-500 text-center py-2 px-4 rounded-lg w-16">
                        {journalData.length}X
                      </div>
                      <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="text-white py-2 px-4 rounded-lg flex items-center" 
                        style={{ backgroundColor:"#2563EB" }}>
                        Detail <i className="fas fa-chevron-right ml-2"></i>
                      </button>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="text-left">
                        <span className="block text-gray-600">Belum mengisi</span>
                        <span className="block text-gray-600">Journal Hari Ini</span>
                      </div>
                      <div className="bg-blue-100 text-blue-500 text-center py-2 px-4 rounded-lg w-16 mr-[20px]">
                        {stats.studentsWithoutTodayJournal}X
                      </div>
                      <button 
                        onClick={() => setIsUnsubmittedModalOpen(true)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center" 
                        style={{ backgroundColor:"#2563EB" }}>
                        Detail <i className="fas fa-chevron-right ml-2"></i>
                      </button>
                    </div>

                    {/* Journal Modal */}
                    <JournalModal 
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      journalData={journalData}
                      studentData={dudiData}  // Add this prop
                    />

                    <UnsubmittedJournalModal 
                      isOpen={isUnsubmittedModalOpen}
                      onClose={() => setIsUnsubmittedModalOpen(false)}
                      studentData={dudiData}
                      journalData={journalData}
                    />

                    {/* Student List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {dudiData.map((student, index) => (
                        <div key={index} className="flex items-center">
                          <img 
                            src="/assets/images/profile/user-5.jpg"
                            alt={student.data.name} 
                            className="rounded-full w-12 h-12 mr-4" 
                          />
                          <div className="flex-grow">
                            <div className="font-bold">{student.data.name}</div>
                            <div className="text-gray-600">Journals: {stats.journalsPerStudent[student.data.name] || 0}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
      <div className="bg-white flex justify-center items-start min-h-screen py-4 lg:px-10">
        <div className="mx-auto flex flex-col md:flex-row justify-between w-11/12">
          
          {/* Collaborator Section */}
          <div className="collaborator bg-white p-4 w-full md:w-[350px] mb-10">
            <h2 className="text-lg font-semibold mb-6 rounded-full h-8 text-center pt-1 w-[100px] bg-gray-200 text-gray-900">
              Dudi
            </h2>
            {loading ? (
              <LoadingSpinner />
            ) : uniqueDudiNames.length > 0 ? (
              uniqueDudiNames.map((dudiName, index) => (
                <div key={index} className="collaborator-item flex items-center mb-2">
                  <img 
                    alt={dudiName} 
                    className="rounded-full w-10 h-10 mr-2" 
                    src="/assets/images/profile/user-4.jpg"
                    width="40" 
                    height="40" 
                  />
                  <div className="info flex-grow">
                    <p className="name font-bold">{dudiName}</p>
                  </div>
                  <div className="arrow text-gray-500">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Tidak ada dudi</p>
            )}
          </div>

          {/* Statistics Section */}
          <div 
            style={{
              borderRight: "7px solid #3B82F6", 
              borderBottom: "7px solid #3B82F6",
              borderLeft: "7px solid #3B82F6",
              borderRadius: "10px"
            }} 
            className="bg-white rounded-lg w-4/5 max-w-4xl w-full "
            >
            <div className="bg-blue-500 text-white p-4 rounded-t-lg text-lg flex justify-between items-center">
              <span>Statistik Jurnal</span>
              {lastUpdated && (
                <span className="text-xs opacity-80">
                  Terakhir diperbarui: {lastUpdated.toLocaleTimeString()}
                </span>
              )}
            </div>
            <div className="p-6">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-left">
                      <span className="block text-gray-600">Total Jurnal</span>
                      <span className="block text-gray-600">Terisi</span>
                    </div>
                    <div className="bg-blue-100 text-blue-500 text-center py-2 px-4 rounded-lg w-16 ml-5">
                      {journalData.length}X
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(true)} 
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                      Detail <i className="fas fa-chevron-right ml-2"></i>
                    </button>
                  </div>

                  {/* Journal Modal */}
                  <JournalModal 
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      journalData={journalData}
                      studentData={dudiData}  // Add this prop
                    />

                    <UnsubmittedJournalModal 
                      isOpen={isUnsubmittedModalOpen}
                      onClose={() => setIsUnsubmittedModalOpen(false)}
                      studentData={dudiData}
                      journalData={journalData}
                    />

                  <div className="flex justify-between items-center mb-6">
                    <div className="text-left">
                      <span className="block text-gray-600">Belum mengisi</span>
                      <span className="block text-gray-600">Journal Hari Ini</span>
                    </div>
                    <div className="bg-blue-100 text-blue-500 text-center py-2 px-4 rounded-lg w-16">
                      {stats.studentsWithoutTodayJournal}X
                    </div>
                    <button 
                      onClick={() => setIsUnsubmittedModalOpen(true)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                      Detail <i className="fas fa-chevron-right ml-2"></i>
                    </button>
                  </div>

                  {/* Student List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {dudiData.map((student, index) => (
                      <div key={index} className="flex items-center mt-5">
                        <img 
                          src="/assets/images/profile/user-5.jpg"
                          alt={student.data.name} 
                          className="rounded-full w-12 h-12 mr-4" 
                        />
                        <div className="flex-grow">
                          <div className="font-bold">{student.data.name}</div>
                          <div className="text-gray-600">
                            Journals: {stats.journalsPerStudent[student.data.name] || 0}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Teacher;