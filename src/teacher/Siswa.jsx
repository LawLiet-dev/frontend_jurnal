import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Api from '../services/api';
import HeaderTeacher from '../components/HeaderGuru';
import StudentJournalModal from "../components/StudentJournalModal";

const Siswa = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const itemsPerPage = 6;

  const fetchStudents = async () => {
    const token = Cookies.get('token');

    if (!token) {
      setError('Token tidak tersedia. Silakan login kembali.');
      setIsLoading(false);
      return;
    }

    try {
      Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await Api.get('/api/mentor/student');
      const transformedData = response.data.data.map(item => item.data);
      setStudents(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil data siswa.');
      setIsLoading(false);
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    // Fungsi untuk memperbarui state lebar window
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Tambahkan event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = students.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(students.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <HeaderTeacher />
      
      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-8xl">
          {/* Page Header */}
          <div className="md:hidden">
            <div className="mb-1">
              <h1 className="text-2xl font-bold text-gray-900" style={{ marginLeft:"10px" }}>Daftar Siswa</h1>
              <p className="mt-1 text-sm text-gray-600" style={{ marginLeft:"10px" }}>
                Pantau data siswa Anda
              </p>
            </div>
          </div>

          {/* Card Container */}
          <div>
            {/* Card Content */}
            <div className="px-10 py-4 lg:w-[1500px]">
              {isLoading ? (
                <div className="flex flex-col justify-center items-center h-40 space-y-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"/></rect></svg>
                  <div className="text-sm text-gray-500">
                    Mohon tunggu sebentar...
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-8 text-red-500">
                  {error}
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="">
                          <th className="px-12 py-3 text-sm font-medium text-gray-700">Nama</th>
                          <th className="px-12 py-3 text-sm font-medium text-gray-700">NISN</th>
                          <th className="px-12 py-3 text-sm font-medium text-gray-700">Email</th>
                          <th className="px-12 py-3 text-sm font-medium text-gray-700">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {currentItems.map((student) => (
                          <tr key={student.id} className="hover:bg-gray-50">
                            <td className="px-12 py-4 text-sm text-gray-600">{student.name}</td>
                            <td className="px-12 py-4 text-sm text-blue-500">{student.nisn}</td>
                            <td className="px-12 py-4 text-sm text-gray-900">{student.email}</td>
                            <td className="px-12 py-4 text-sm">
                              <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm transition-colors"
                                onClick={() => {
                                  setSelectedStudentId(student.id);
                                  setIsModalOpen(true);
                                }}
                              >
                                Detail
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-between items-center mt-6 px-4">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      Previous
                    </button>
                    
                    <div className="hidden md:block">
                      <div className="text-center text-gray-600">
                        Page {currentPage} of {totalPages}
                      </div>
                    </div>

                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      style={windowWidth === 1366 ? { marginRight: "150px" } : {}}
                      className={`px-4 py-2 rounded ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      Next
                    </button>
                  </div>

                  <div className='hidden md:block'>
                    <div className="text-center mt-4 text-sm text-gray-500" 
                        style={windowWidth === 1366 ? { marginRight: "130px" } : {}}
                    >
                      Menampilkan {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, students.length)} dari {students.length} data
                    </div>
                  </div>
                </>
              )}
            </div>
            <StudentJournalModal
              studentId={selectedStudentId}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Siswa;