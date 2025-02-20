import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from "../services/api";

const Reset = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const response = await Api.post('/api/forgot-password', formData);
      
      // Since Api.post likely returns the data directly, we don't need to call .json()
      if (response.data) {
        setSuccess(response.data.message);
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      // Handle different types of errors
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.message || 'Terjadi kesalahan saat mereset password');
      } else if (err.request) {
        // The request was made but no response was received
        setError('Tidak dapat terhubung ke server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Terjadi kesalahan pada sistem');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div className="flex items-center mb-3">
            <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
            <h1 className="ml-1 text-xl font-semibold text-black">
              PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
            </h1>
          </div>
          <h2 className="text-2xl font-medium ml-1">Get Access Back</h2>
          <p className="text-gray-600 mb-6 md:ml-1">
            Can't log in? Fill in the form below to regain
            <span className="hidden md:block md:whitespace-pre-line">access.</span>
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">Email *</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password *</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Confirm Password *</label>
              <input
                type="password"
                placeholder="Enter your confirmation password"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
            <Link to="/login" className="text-blue-500 text-sm mb-4 inline-block">
              Ingat Password?
            </Link>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:bg-blue-300"
              disabled={isLoading}
            >
              {isLoading ? 'Memproses...' : 'Perbarui'}
            </button>
          </form>
        </div>
        <div className="md:w-1/2 flex justify-center items-center hidden md:block">
          <img src="/assets/images/icons/smk.png" alt="School Emblem" className="w-90 h-120 mb-3" />
        </div>
      </div>
    </div>
  );
};

export default Reset;