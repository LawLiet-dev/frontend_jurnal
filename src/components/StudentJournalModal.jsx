import React, { useState, useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import Api from '../services/api';
import Cookies from 'js-cookie';

const StudentJournalModal = ({ studentId, isOpen, onClose }) => {
  const [journalData, setJournalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Set items per page based on screen size
  const itemsPerPage = isMobile ? 2 : 5;

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth < 768);

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const fetchJournalData = async () => {
    setIsLoading(true);
    setError(null);
    
    const token = Cookies.get('token');
    if (!token) {
      setError('Token tidak tersedia. Silakan login kembali.');
      setIsLoading(false);
      return;
    }

    try {
      Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await Api.get(`/api/detail/student/${studentId}`);
      setJournalData(response.data.data.map(item => item.data));
      // Reset to page 1 whenever new data is fetched
      setCurrentPage(1);
    } catch (error) {
      setError('Gagal mengambil data jurnal');
      console.error('Error fetching journal data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && studentId) {
      fetchJournalData();
    }
  }, [isOpen, studentId]); // This effect runs when studentId changes

  // Reset page when screen size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  // Reset page when studentId changes
  useEffect(() => {
    setCurrentPage(1);
  }, [studentId]);

  if (!isOpen) return null;

  const totalPages = Math.ceil(journalData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = journalData.slice(startIndex, endIndex);

  // Get student name from the first journal entry if available
  const studentName = journalData[0]?.name_student || '';

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div 
                  onClick={onClose}
                  className="hidden md:flex items-center cursor-pointer hover:text-blue-500 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </div>
              <h1 className="text-lg font-semibold">
                Data Jurnal Siswa {studentName && <span className="text-blue-500">{studentName}</span>}
              </h1>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"/></rect></svg>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-4">{error}</div>
          ) : journalData.length === 0 ? (
            <div className="text-center text-gray-500 py-4">Tidak ada data jurnal untuk siswa ini</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b p-3 text-left text-sm font-medium text-gray-700">Nama</th>
                      <th className="border-b p-3 text-left text-sm font-medium text-gray-700">Kegiatan</th>
                      <th className="border-b p-3 text-left text-sm font-medium text-gray-700">Deskripsi</th>
                      <th className="border-b p-3 text-left text-sm font-medium text-gray-700">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((item) => (
                      <tr key={item.id}>
                        <td className="border-b p-3 text-sm">
                          <div 
                            className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-help"
                            title={item.name_student}
                          >
                            {item.name_student}
                          </div>
                        </td>
                        <td className="border-b p-3 text-sm">
                          <div 
                            className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-help"
                            title={item.name}
                          >
                            {item.name}
                          </div>
                        </td>
                        <td className="border-b p-3 text-sm">
                          <div 
                            className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-help"
                            title={item.description}
                          >
                            {item.description}
                          </div>
                        </td>
                        <td className="border-b p-3 text-sm">
                          <span className="text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
                            {new Date(item.date).toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`border border-blue-500 px-4 py-2 rounded-full text-sm transition-colors ${
                    currentPage === 1
                      ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                      : 'text-blue-500 hover:bg-blue-500 hover:text-black'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`border border-blue-500 px-4 py-2 rounded-full text-sm transition-colors ${
                    currentPage === totalPages
                      ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                      : 'text-blue-500 hover:bg-blue-500 hover:text-black'
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentJournalModal;