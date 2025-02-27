import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';

const JournalModal = ({ isOpen, onClose, journalData, studentData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 2 : 5;
  const modalRef = useRef();

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

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
    }
  }, [isOpen]);

  useEffect(() => {
      setCurrentPage(1);
    }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Tambahkan pengecekan untuk memastikan click terjadi di outside area
      if (modalRef.current && 
          !modalRef.current.contains(event.target) && 
          !event.target.closest('button')) { // Mencegah trigger ketika klik tombol
        onClose();
      }
    };

    const handleTouchStart = (event) => {
      // Mencegah touch events di dalam modal trigger close
      if (modalRef.current && modalRef.current.contains(event.target)) {
        event.stopPropagation();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const studentDudiMap = studentData.reduce((acc, student) => {
    acc[student.data.name] = student.data.dudi_name;
    return acc;
  }, {});

  const enrichedJournalData = journalData.map(journal => ({
    ...journal,
    dudi_name: studentDudiMap[journal.data.name_student] || 'N/A'
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = enrichedJournalData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(enrichedJournalData.length / itemsPerPage);

  const handlePrevious = (e) => {
    e.stopPropagation(); // Mencegah event bubbling
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Mencegah event bubbling
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        ref={modalRef}
        className="w-full max-w-lg bg-white border border-gray-300 rounded-lg p-6 shadow-lg max-h-[90vh] overflow-y-auto relative"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors mr-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold" style={{ marginLeft:"10px" }}>Siswa yang telah mengisi jurnal</h1>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr>
                <th className="text-left py-2 px-9 border-b">Nama</th>
                <th className="text-left py-2 px-9 border-b">Dudi</th>
                <th className="text-left py-2 px-9 border-b">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.data.id}>
                  <td className="py-2 px-9 border-b">{item.data.name_student}</td>
                  <td className="py-2 px-9 border-b">{item.dudi_name}</td>
                  <td className="py-2 px-9 border-b">
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      className="text-blue-500 hover:underline"
                    >
                      {item.data.date}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-xl ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300 border border-gray-300'
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-xl ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300 border border-gray-300'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalModal;