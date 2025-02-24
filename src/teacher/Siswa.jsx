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

  return (
    <div>
      <HeaderTeacher />
      
      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="md:hidden">
          <div className="mb-1">
            <h1 className="text-2xl font-bold text-gray-900 " style={{ marginLeft:"10px" }} >Daftar Siswa</h1>
            <p className="mt-1 text-sm text-gray-600" style={{ marginLeft:"10px" }}>
              Pantau data siswa Anda
            </p>
          </div>
          </div>
          {/* <div className="mb-1">
            <h1 className="text-2xl font-bold text-gray-900 " style={{ marginLeft:"45px" }}>Daftar Siswa</h1>
            <p className="mt-1 text-sm text-gray-600" style={{ marginLeft:"45px" }}>
              Pantau data siswa Anda
            </p>
          </div> */}

          {/* Card Container */}
          <div>

            {/* Card Content */}
            <div className="px-6 py-4 lg:container">
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
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="">
                        <th className="px-12 py-3 text-sm font-medium text-gray-700">Nama</th>
                        <th className="px-12 py-3 text-sm font-medium text-gray-700">NISN</th>
                        <th className="px-12 py-3 text-sm font-medium text-gray-700">Email</th>
                        {/* <th className="px-4 py-3 text-sm font-medium text-gray-700">Guru</th> */}
                        {/* <th className="px-12 py-3 text-sm font-medium text-gray-700">DUDI</th> */}
                        <th className="px-12 py-3 text-sm font-medium text-gray-700">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {students.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-12 py-4 text-sm text-gray-600">{student.name}</td>
                          <td className="px-12 py-4 text-sm text-blue-500">{student.nisn}</td>
                          <td className="px-12 py-4 text-sm text-gray-900">{student.email}</td>
                          {/* <td className="px-4 py-4 text-sm text-gray-600">{student.name_teacher}</td> */}
                          {/* <td className="px-12 py-4 text-sm text-gray-600">{student.dudi_name}</td> */}
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