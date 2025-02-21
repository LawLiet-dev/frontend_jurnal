import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Api from '../services/api';
import HeaderTeacher from '../components/HeaderGuru';

const Journal = () => {
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJournals = async () => {
    const token = Cookies.get('token');

    if (!token) {
      setError('Token tidak tersedia. Silakan login kembali.');
      setIsLoading(false);
      return;
    }

    try {
      Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await Api.get('/api/mentor/journal');
      
      const today = new Date().toISOString().split('T')[0];
      const transformedData = response.data.data
        .map(item => item.data)
        .filter(journal => journal.date === today);
      
      setJournals(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil data jurnal.');
      setIsLoading(false);
      console.error('Error fetching journals:', error);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return (
    <div>
      <HeaderTeacher />
      <div className="bg-white text-gray-800 lg:px-20">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-7 mt-3">
            <h1 className="text-2xl font-bold lg:ml-4">
              Jurnal Harian Siswa
            </h1>
            <div className="text-gray-600">
              {new Date().toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

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
          ) : journals.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Tidak ada jurnal untuk hari ini
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left">Nama Siswa</th>
                    <th className="py-2 px-4 text-left">Nama Guru</th>
                    <th className="py-2 px-4 text-left">Kegiatan</th>
                    <th className="py-2 px-4 text-left">Deskripsi</th>
                    <th className="py-2 px-4 text-left">Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {journals.map((journal) => (
                    <tr key={journal.id} className="border-t">
                      <td className="py-2 px-4">{journal.name_student}</td>
                      <td className="py-2 px-4">{journal.name_teachers}</td>
                      <td className="py-2 px-4">{journal.name}</td>
                      <td className="py-2 px-4">
                        {journal.description.length > 100
                          ? `${journal.description.substring(0, 100)}...`
                          : journal.description}
                      </td>
                      <td className="py-2 px-4 text-blue-500">
                        {new Date(journal.date).toLocaleDateString('id-ID')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;