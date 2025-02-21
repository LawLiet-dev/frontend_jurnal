import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nisn: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user types
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await Api.post('/api/register', formData);

      if (response.data.success) {
        navigate('/login');
      }
    } catch (err) {
      if (err.response?.status === 422) {
        // Validation errors from backend
        setErrors(err.response.data.errors || {
          general: 'Please check your input and try again'
        });
      } else {
        // General error
        setErrors({
          general: err.response?.data?.message || 'An error occurred during registration'
        });
      }
    } finally {
      setLoading(false);
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
          <h2 className="text-2xl font-medium">Create Your Account</h2>
          <p className="text-gray-600 mb-6">
            Don't have an account? Create your account, it takes less than a minute.
          </p>

          {errors.general && (
            <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">NISN *</label>
                <input
                  type="text"
                  name="nisn"
                  value={formData.nisn}
                  onChange={handleChange}
                  placeholder="Your NISN"
                  className={`w-full border ${errors.nisn ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  required
                />
                {errors.nisn && (
                  <p className="text-red-500 text-sm mt-1">{errors.nisn}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium">Confirm Password *</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full border ${errors.password_confirmation ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                  required
                />
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>
                )}
              </div>
            </div>
            <div className="col-span-2 mt-5">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 flex justify-center items-center hidden md:block">
          <img src="/assets/images/icons/smk.png" alt="School Emblem" className="w-90 h-120 mb-3" />
        </div>
      </div>

      <div className="text-center text-sm mt-4">
        Apakah anda sudah mempunyai akun? <Link to="/login" className="text-blue-500">Login</Link>
      </div>
    </div>
  );
};

export default Register;