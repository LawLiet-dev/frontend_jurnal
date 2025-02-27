import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Api from "../services/api"
import { Link } from 'react-router-dom';

function Notification() {
  const [showWarning, setShowWarning] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [journalTime, setJournalTime] = useState('');
  const [loading, setLoading] = useState(true);

  const closeWarning = () => setShowWarning(false);
  const closeDone = () => setShowDone(false);

  const fetchJournals = async () => {
    try {
      setLoading(true);
      const token = Cookies.get("token");

      if (!token) {
        console.error("Token is not available!");
        setShowWarning(true);
        setLoading(false);
        return;
      }

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get('/api/journal');

      console.log("API Response:", response.data);

      if (response.data.status) {
        const today = new Date();
        const currentDate = today.toISOString().split('T')[0]; // Format YYYY-MM-DD

        const journalEntries = response.data.data.data || []; // Pastikan data tidak undefined/null
        console.log("Journal Entries:", journalEntries);

        const todayEntry = journalEntries.find(entry => {
          const entryDate = entry.date.split('T')[0]; // Menghindari perbedaan format
          return entryDate === currentDate;
        });

        if (todayEntry) {
          setShowDone(true);
          setShowWarning(false);

          const createdAt = new Date(todayEntry.created_at);
          const hours = String(createdAt.getHours()).padStart(2, '0');
          const minutes = String(createdAt.getMinutes()).padStart(2, '0');
          setJournalTime(`${hours}.${minutes}`);
        } else {
          setShowWarning(true);
          setShowDone(false);
        }
      } else {
        setShowWarning(true);
        setShowDone(false);
      }
    } catch (error) {
      console.error("Error fetching journal data:", error);
      setShowWarning(true);
      setShowDone(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  if (loading) return null;

  return (
    <div>
      {showWarning && (
        <main className="container mx-auto my-5">
          <div className="flex items-center justify-center" role="alert">
            <div className="flex items-center bg-red-100 rounded-lg p-4 w-full shadow-md">
              <button className="bg-red-500 text-white rounded-full px-4 py-2 font-bold text-sm mr-4">Warning !!!</button>
              <div className="flex-grow text-sm text-gray-700 ml-2">
                Anda Belum mengisi jurnal hari ini. <Link to="/jurnal" className="text-blue-500">Isi Jurnal</Link>
              </div>
              <div className="text-red-500 text-lg cursor-pointer" onClick={closeWarning}>
                <div className="px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="none" />
                    <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {showDone && (
        <main className="container mx-auto mt-4 px-10">
          <div className="flex items-center justify-center" role="alert">
            <div className="flex items-center bg-blue-100 rounded-lg p-4 w-full shadow-md">
              <button className="bg-blue-500 text-white rounded-full px-4 py-2 font-bold text-sm mr-4">Done !!!</button>
              <div className="flex-grow text-sm text-gray-700 ml-2">
                Anda Sudah mengisi jurnal hari ini pada jam: <span className="text-blue-500">{journalTime}</span>
              </div>
              <div className="text-blue-500 text-lg cursor-pointer" onClick={closeDone}>
                <div className="px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="none" />
                    <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Notification;
