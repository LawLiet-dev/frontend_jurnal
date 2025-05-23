import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import HeaderSiswa from "../components/HeaderSiswa";
import Api from "../services/api";
import Notification from '../components/Notification';

const Jurnal = () => {
  // States for form
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  
  // States for journal data and pagination
  const [journals, setJournals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [tableLoading, setTableLoading] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [nameStatus, setNameStatus] = useState({
      studentsName: ''
    });
  
  const token = Cookies.get('token');

  // Handle API errors
//   const handleErrors = (error) => {
//     if (error.response && error.response.data) {
//       const responseData = error.response.data;
      
//       // Handle validation errors
//       if (responseData.errors) {
//         setErrors(responseData.errors);
//         // Show first error message in toast
//         const firstError = Object.values(responseData.errors)[0];
//         if (Array.isArray(firstError)) {
//           toast.error(firstError[0]);
//         }
//       } 
//       // Handle general error message
//       else if (responseData.message) {
//         toast.error(responseData.message);
//       }
//     } else {
//       toast.error("Terjadi kesalahan pada server!");
//     }
//   };
    const handleErrors = (error) => {
        if (error.response) {
        const { data, status } = error.response;
        
        // Case 1: Validation errors (status 422)
        if (status === 422 && data.errors) {
            setErrors(data.errors);
            Object.values(data.errors).forEach(errorMessages => {
            if (Array.isArray(errorMessages)) {
                errorMessages.forEach(message => toast.error(message));
            }
            });
            return;
        }
        
        // Case 2: Journal update restriction error (status 400 or status false)
        if (status === 400 || data.status === false) {
            // Handle the specific update restriction message
            if (data.message?.includes('Update jurnal hanya dapat dilakukan')) {
              setApiError(data.message);
              toast.error(data.message);
              resetForm();
              fetchJournals(currentPage); 
              return;
            }
            
            // Handle other error messages
            if (data.message) {
            toast.error(data.message);
            resetForm();
            return;
            }
        }
        
        // Case 3: Generic error message from API
        if (data.message) {
            toast.error(data.message);
            return;
        }
        }
        
        // Case 4: Network or unexpected errors
        toast.error("Terjadi kesalahan pada server!");
    };

    const handleDateChange = (e) => {
      if (isEditing) {
        toast.error("Anda tidak bisa merubah tanggal");
        return;
      }
      setDate(e.target.value);
    };

  // Fetch journals
  const fetchJournals = async (page = 1) => {
    try {
      setTableLoading(true);
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get(`/api/journal?page=${page}`);
      
      if (response.data.status) {
        setJournals(response.data.data.data);
        setTotalPages(response.data.data.last_page);
        setCurrentPage(page);
      }
    } catch (error) {
      handleErrors(error);
    } finally {
      setTableLoading(false);
    }
  };

  // Handle form submission (create/update)
  const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors({}); // Clear previous errors
      
      try {
        setFormSubmitting(true);
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        
        let response;
        if (isEditing) {
          response = await Api.put(`/api/journal/${editingId}`, {
            date,
            name,
            description
          });
        } else {
          response = await Api.post('/api/journal', {
            date,
            name,
            description
          });
        }
    
        if (response.data.status) {
          toast.success(response.data.message);
          resetForm();
          fetchJournals(currentPage);
        }
      } catch (error) {
          handleErrors(error);
      } finally {
          setFormSubmitting(false);
      }
    };

  // Reset form and editing state
  const resetForm = () => {
    setDate('');
    setName('');
    setDescription('');
    setIsEditing(false);
    setEditingId(null);
    setErrors({});
  };

  // Handle edit button click
  const handleEdit = async (journal) => {
    setIsEditing(true);
    setEditingId(journal.id);
    setDate(journal.date);
    setName(journal.name);
    setDescription(journal.description);
    setErrors({});
  };

  // Handle delete confirmation
  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Konfirmasi Hapus',
      message: 'Apakah Anda yakin ingin menghapus jurnal ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => deleteJournal(id)
        },
        {
          label: 'Tidak',
          onClick: () => {}
        }
      ]
    });
  };

  // Handle delete
  const deleteJournal = async (id) => {
    try {
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.delete(`/api/journal/${id}`);
      
      if (response.data.status) {
        toast.success(response.data.message);
        fetchJournals(currentPage);
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  useEffect(() => {
    const fetchnameStatus = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) return;

        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await Api.get("/api/settings");
        
        if (response.data.status) {
          const { students} = response.data.data;

          setNameStatus({
            studentsName: students?.name
          });
        }
      } catch (error) {
        console.error('Error fetching submission status:', error);
      }
    };

    fetchnameStatus();
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchJournals(1);
  }, []);

  return (
    <div>
      <HeaderSiswa />
      {/* <Notification /> */}
      <div className="bg-white p-4 lg:!px-24 lg:!py-4">
        <div className="px-1">
          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="lg:!w-[500px] bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0 w-full overflow-hidden">
            {/* style={{ width:"500px" }} */}
              {/* <h1 className="text-gray-600 font-bold" style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "700" }}>
                Pengisian Jurnal {nameStatus.studentsName}
              </h1> */}
              <h1 
                className="text-gray-600 font-bold max-w-full overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-help" 
                style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "700" }}
                title={`Pengisian Jurnal ${nameStatus.studentsName}`}
              >
                Pengisian Jurnal {nameStatus.studentsName}
              </h1>
              <Toaster position="top-right" />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="tanggal">Tanggal</label>
                    <div className="relative">
                        <input 
                        className={`w-full border ${errors.date ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                        id="tanggal" 
                        type="date"
                        value={date}
                        // onChange={(e) => setDate(e.target.value)}
                        onChange={handleDateChange}
                        required
                        // readOnly={isEditing}
                        // disabled={isEditing}
                        />
                        {errors.date && (
                        <p className="text-red-500 text-sm mt-1">
                            {Array.isArray(errors.date) ? errors.date[0] : errors.date}
                        </p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="kegiatan">Kegiatan
                    <span className={`text-sm ml-2 ${
                        name.length > 200 
                        ? 'text-red-500' 
                        : name.length > 150 
                        ? 'text-yellow-500' 
                        : 'text-gray-500'
                        }`}>
                        ({name.length}/255 karakter)
                    </span>
                  </label>
                  <input 
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                    id="kegiatan" 
                    placeholder="Nama Kegiatan" 
                    type="text"
                    value={name}
                    onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue.length <= 255) {
                        setName(inputValue);
                    } else {
                        setName(inputValue.slice(0, 255));
                    }
                    }}
                    maxLength="255"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
                )}
                </div>
                <div className="mb-15">
                  <label className="block text-gray-700" htmlFor="deskripsi">Deskripsi</label>
                  <textarea 
                    className={`w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                    id="deskripsi" 
                    placeholder="Deskripsi"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description[0]}</p>
                  )}
                </div>
                <div className="flex gap-18">
                  <button 
                    type="submit" 
                    disabled={formSubmitting}
                    className={`${
                        formSubmitting ? 'bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white px-4 py-2 rounded transition-colors w-full`}
                    >
                    {formSubmitting ? 'Loading...' : isEditing ? 'Update' : 'Submit'}
                  </button>
                  {/* <button className='bg-blue-500 hover:bg-blue-600 text-white w-full h-10 rounded transition-colors'>Submit</button> */}
                  {/* <button 
                    type="button"
                    onClick={resetForm}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button> */}
                </div>
              </form>
            </div>

            {/* Table Section */}
            <div className="w-full bg-white p-6 rounded-lg shadow-md md:h-[448px] overflow-x-auto">
                {tableLoading ? (
                    // <div className="text-center py-4">Loading...</div>
                    <div className="flex flex-col justify-center items-center h-30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"/></rect></svg>
                      <div className="text-sm text-gray-500">
                        Mohon tunggu sebentar...
                      </div>
                    </div>
                ) : journals.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">Anda belum membuat jurnal</div>
                ) : (
                <>
                  <table className="w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 text-left">Kegiatan</th>
                        <th className="py-2 px-4 text-left">Deskripsi</th>
                        <th className="py-2 px-4 text-left">Tanggal</th>
                        <th className="py-2 px-4 text-left">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {journals.map((journal) => (
                        <tr key={journal.id} className="border-t">
                          <td className="py-2 px-4">
                          <div 
                              className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-help"
                              title={journal.name}
                            >
                              {journal.name}
                            </div>
                          </td>
                          <td className="py-2 px-4">
                            <div 
                                className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-help"
                                title={journal.description}
                            >
                                {journal.description}
                            </div>
                          </td>
                          <td className="py-2 px-4 text-blue-500">
                            {new Date(journal.date).toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </td>
                          {/* <td className="py-2 px-4 flex flex-col md:flex-row md:space-y-0 space-x-2">
                            <button 
                              onClick={() => handleEdit(journal)}
                              className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 mx-auto md:px-4"
                              // style={{ marginRight:"10px" }}
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => confirmDelete(journal.id)}
                              className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </td> */}
                          <td className="py-2 px-4">
                              <div className="flex flex-col md:flex-row space-x-2 gap-2">
                                <button 
                                  onClick={() => handleEdit(journal)}
                                  className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                                  // style={{ marginRight`:"10px" }}
                                >
                                  Edit
                                </button>
                                <button 
                                  onClick={() => confirmDelete(journal.id)}
                                  className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-between mt-22">
                      <button
                        onClick={() => fetchJournals(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          currentPage === 1 
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        Previous
                      </button>
                      
                      {/* {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => fetchJournals(index + 1)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            currentPage === index + 1
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))} */}
                      
                      <button
                        onClick={() => fetchJournals(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          currentPage === totalPages
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurnal;