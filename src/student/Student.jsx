import React, { useState, useEffect } from 'react';
import HeaderSiswa from "../components/HeaderSiswa";
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
  // const [teacherStatus, setTeacherStatus] = useState({
  //   name: '',
  //   status: 'pending'
  // });
  const [submissionStatus, setSubmissionStatus] = useState({
    isSubmitted: false,
    status: 'pending',
    rejectReason: null,
    teacherName: '',
    dudiName: ''
  });

  const fetchJournalData = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const token = Cookies.get("token");
            
      if (!token) {
        console.error("No token found");
        return;
      } 

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get(`/api/journal?page=${pageNumber}`);
      
      if (response.data.status) {
        setJournalData(response.data.data);
        setPagination({
          currentPage: response.data.data.current_page,
          total: response.data.data.total,
          perPage: response.data.data.per_page
        });
      }
    } catch (error) {
      console.error('Error fetching journal data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSubmissionStatus = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) return;

        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await Api.get("/api/settings");
        
        if (response.data.status) {
          const { students, teacher, dudi } = response.data.data;
          
          // Find the matching teacher and dudi names
          const selectedTeacher = teacher.find(t => t.id === students?.teachers_id);
          const selectedDudi = dudi.find(d => d.id === students?.dudis_id);

          setSubmissionStatus({
            isSubmitted: !!(students?.teachers_id && students?.dudis_id),
            status: students?.status || 'pending',
            rejectReason: students?.reject_reason,
            teacherName: selectedTeacher?.name || '',
            dudiName: selectedDudi?.name || ''
          });
        }
      } catch (error) {
        console.error('Error fetching submission status:', error);
      }
    };

    fetchSubmissionStatus();
  }, []);

  useEffect(() => {
    fetchJournalData();
  }, []);

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
    if (!submissionStatus.isSubmitted) {
      return null;
    }

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
              Permintaan ditolak. Alasan {submissionStatus.rejectReason}
          </p>
        );
      default:
        return (
          <p className="text-sm text-yellow-800">
              Menunggu Persetujuan
          </p>
        );
    }
  };

  return (
    <div>
      <HeaderSiswa />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-xl font-semibold">Journal Saya</h1>
                  {/* <p className="text-sm text-gray-600">
                    Pembimbing: Anda belum memilih pembimbing &nbsp;
                    <a href="list" className="text-blue-500 hover:text-blue-700 underline">
                      Pilih
                    </a>
                  </p> */}
                  {renderSubmissionStatus()}
                </div>
              </div>

              {loading ? (
                <div className="flex flex-col justify-center items-center h-40 space-y-4">
                  {/* <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  <div className="text-gray-600 font-medium">
                    Sedang memuat data journal...
                  </div>
                  <div className="text-sm text-gray-500">
                    Mohon tunggu sebentar
                  </div> */}
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
                        {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th> */}
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
                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200">
                                Details
                              </button>
                            </td> */}
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
                              fetchJournalData(pageNumber);
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

            <div className="bg-blue-500 rounded-lg shadow-lg p-6 lg:w-1/3">
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
                    10 X
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