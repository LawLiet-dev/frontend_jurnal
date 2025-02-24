import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';

const UnsubmittedJournalModal = ({ isOpen, onClose, studentData, journalData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const modalRef = useRef();

  // Reset page when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
    }
  }, [isOpen]);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Filter students who haven't submitted today
  const unsubmittedStudents = studentData.filter(student => {
    return !journalData.some(journal => 
      journal.data.name_student === student.data.name && 
      journal.data.date === today
    );
  });

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = unsubmittedStudents.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(unsubmittedStudents.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto relative"
      >
        {/* Header with back and close buttons */}
        <div className="sticky top-0 bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-semibold" style={{ marginLeft:"10px" }}>Siswa yang belum mengisi jurnal hari ini</h1>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="text-left py-2 px-9 border-b">Nama</th>
                  <th className="text-left py-2 px-9 border-b">Dudi</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((student) => (
                  <tr key={student.data.id}>
                    <td className="py-2 px-9 border-b">{student.data.name}</td>
                    <td className="py-2 px-9 border-b">{student.data.dudi_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {unsubmittedStudents.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                Semua siswa telah mengisi jurnal hari ini
              </div>
            )}
          </div>

          {unsubmittedStudents.length > 0 && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded text-sm ${
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
                className={`px-4 py-2 rounded text-sm ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 border border-gray-300'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnsubmittedJournalModal;