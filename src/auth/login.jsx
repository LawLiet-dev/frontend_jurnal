import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from '../store/auth';
import { handleErrors } from "../utils/handleErrors";

const ATTEMPTS_BEFORE_FIRST_TIMEOUT = 5;
const ATTEMPTS_BEFORE_SECOND_TIMEOUT = 10;
const FIRST_TIMEOUT_DURATION = 5 * 60 * 1000; 
const SECOND_TIMEOUT_DURATION = 10 * 60 * 1000; 

export default function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
      email: "",
      password: ""
  });
  
  // const [errors, setErrors] = useState({});
  // const [loginFailed, setLoginFailed] = useState('');
  // const [attempts, setAttempts] = useState(() => {
  //   const savedAttempts = localStorage.getItem('loginAttempts');
  //   return savedAttempts ? JSON.parse(savedAttempts) : {
  //     count: 0,
  //     lastAttempt: null,
  //     timeoutUntil: null
  //   };
  // });
  // const [timeLeft, setTimeLeft] = useState(null);
  // const [isLocked, setIsLocked] = useState(false);

  const [errors, setErrors] = useState({});
  const [loginFailed, setLoginFailed] = useState('');
  const [attempts, setAttempts] = useState(() => {
    const savedAttempts = localStorage.getItem('loginAttempts');
    return savedAttempts ? JSON.parse(savedAttempts) : {
      count: 0,
      lastAttempt: null,
      timeoutUntil: null
    };
  });
  const [timeLeft, setTimeLeft] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  // useEffect(() => {
  //   // Check if there's an existing timeout
  //   if (attempts.timeoutUntil) {
  //     const now = new Date().getTime();
  //     if (now >= attempts.timeoutUntil) {
  //       // If timeout has expired, reset it
  //       setAttempts(prev => ({
  //         ...prev,
  //         timeoutUntil: null
  //       }));
  //       setTimeLeft(null);
  //       setIsLocked(false);
  //       localStorage.setItem('loginAttempts', JSON.stringify({
  //         ...attempts,
  //         timeoutUntil: null
  //       }));
  //     } else {
  //       // If timeout is still active
  //       setIsLocked(true);
  //       const interval = setInterval(() => {
  //         const currentTime = new Date().getTime();
  //         const remaining = attempts.timeoutUntil - currentTime;

  //         if (remaining <= 0) {
  //           // When timeout expires
  //           setTimeLeft(null);
  //           setIsLocked(false);
  //           setAttempts(prev => ({
  //             ...prev,
  //             timeoutUntil: null
  //           }));
  //           localStorage.setItem('loginAttempts', JSON.stringify({
  //             ...attempts,
  //             timeoutUntil: null
  //           }));
  //           clearInterval(interval);
  //         } else {
  //           const minutes = Math.floor(remaining / (60 * 1000));
  //           setTimeLeft(`${minutes} menit`);
  //         }
  //       }, 1000);

  //       return () => clearInterval(interval);
  //     }
  //   }
  // }, [attempts]);

  // useEffect(() => {
  //   // Check if there's an existing timeout
  //   if (attempts.timeoutUntil) {
  //     const now = new Date().getTime();
  //     if (now >= attempts.timeoutUntil) {
  //       // If timeout has expired, reset it
  //       setAttempts(prev => ({
  //         ...prev,
  //         timeoutUntil: null
  //       }));
  //       setTimeLeft(null);
  //       setIsLocked(false);
  //       localStorage.setItem('loginAttempts', JSON.stringify({
  //         ...attempts,
  //         timeoutUntil: null
  //       }));
  //     } else {
  //       // If timeout is still active
  //       setIsLocked(true);
  //       const interval = setInterval(() => {
  //         const currentTime = new Date().getTime();
  //         const remaining = attempts.timeoutUntil - currentTime;

  //         if (remaining <= 0) {
  //           // When timeout expires
  //           setTimeLeft(null);
  //           setIsLocked(false);
  //           setAttempts(prev => ({
  //             ...prev,
  //             timeoutUntil: null
  //           }));
  //           localStorage.setItem('loginAttempts', JSON.stringify({
  //             ...attempts,
  //             timeoutUntil: null
  //           }));
  //           clearInterval(interval);
  //         } else {
  //           const minutes = Math.floor(remaining / (60 * 1000));
  //           const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
            
  //           // Format the time display
  //           let timeDisplay = '';
  //           if (minutes > 0) {
  //             timeDisplay += `${minutes} menit`;
  //             if (seconds > 0) {
  //               timeDisplay += ` ${seconds} detik`;
  //             }
  //           } else {
  //             timeDisplay = `${seconds} detik`;
  //           }
            
  //           setTimeLeft(timeDisplay);
  //         }
  //       }, 1000);

  //       return () => clearInterval(interval);
  //     }
  //   }
  // }, [attempts]);

  // useEffect(() => {
  //   // Check if there's an existing timeout
  //   if (attempts.timeoutUntil) {
  //     const now = new Date().getTime();
  //     if (now >= attempts.timeoutUntil) {
  //       // If timeout has expired, reset attempt count if it was the second timeout
  //       const shouldResetCount = attempts.count >= ATTEMPTS_BEFORE_SECOND_TIMEOUT;
  //       setAttempts(prev => ({
  //         count: shouldResetCount ? 0 : prev.count,
  //         lastAttempt: null,
  //         timeoutUntil: null
  //       }));
  //       setTimeLeft(null);
  //       setIsLocked(false);
  //       localStorage.setItem('loginAttempts', JSON.stringify({
  //         count: shouldResetCount ? 0 : attempts.count,
  //         lastAttempt: null,
  //         timeoutUntil: null
  //       }));
  //     } else {
  //       // If timeout is still active
  //       setIsLocked(true);
  //       const interval = setInterval(() => {
  //         const currentTime = new Date().getTime();
  //         const remaining = attempts.timeoutUntil - currentTime;

  //         if (remaining <= 0) {
  //           // When timeout expires, reset count if it was the second timeout
  //           const shouldResetCount = attempts.count >= ATTEMPTS_BEFORE_SECOND_TIMEOUT;
  //           setTimeLeft(null);
  //           setIsLocked(false);
  //           setAttempts(prev => ({
  //             count: shouldResetCount ? 0 : prev.count,
  //             lastAttempt: null,
  //             timeoutUntil: null
  //           }));
  //           localStorage.setItem('loginAttempts', JSON.stringify({
  //             count: shouldResetCount ? 0 : attempts.count,
  //             lastAttempt: null,
  //             timeoutUntil: null
  //           }));
  //           clearInterval(interval);
  //         } else {
  //           const minutes = Math.floor(remaining / (60 * 1000));
  //           const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
            
  //           let timeDisplay = '';
  //           if (minutes > 0) {
  //             timeDisplay += `${minutes} menit`;
  //             if (seconds > 0) {
  //               timeDisplay += ` ${seconds} detik`;
  //             }
  //           } else {
  //             timeDisplay = `${seconds} detik`;
  //           }
            
  //           setTimeLeft(timeDisplay);
  //         }
  //       }, 1000);

  //       return () => clearInterval(interval);
  //     }
  //   }
  // }, [attempts]);

  useEffect(() => {
    if (attempts.timeoutUntil) {
      const now = new Date().getTime();
      if (now >= attempts.timeoutUntil) {
        // Reset only after second timeout (10 attempts)
        const shouldResetCount = attempts.count >= ATTEMPTS_BEFORE_SECOND_TIMEOUT;
        setAttempts(prev => ({
          count: shouldResetCount ? 0 : prev.count, // Keep count if not second timeout
          lastAttempt: null,
          timeoutUntil: null
        }));
        setTimeLeft(null);
        setIsLocked(false);
        localStorage.setItem('loginAttempts', JSON.stringify({
          count: shouldResetCount ? 0 : attempts.count,
          lastAttempt: null,
          timeoutUntil: null
        }));
      } else {
        setIsLocked(true);
        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const remaining = attempts.timeoutUntil - currentTime;

          if (remaining <= 0) {
            const shouldResetCount = attempts.count >= ATTEMPTS_BEFORE_SECOND_TIMEOUT;
            setTimeLeft(null);
            setIsLocked(false);
            setAttempts(prev => ({
              count: shouldResetCount ? 0 : prev.count, // Keep count if not second timeout
              lastAttempt: null,
              timeoutUntil: null
            }));
            localStorage.setItem('loginAttempts', JSON.stringify({
              count: shouldResetCount ? 0 : attempts.count,
              lastAttempt: null,
              timeoutUntil: null
            }));
            clearInterval(interval);
          } else {
            const minutes = Math.floor(remaining / (60 * 1000));
            const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
            
            let timeDisplay = '';
            if (minutes > 0) {
              timeDisplay += `${minutes} menit`;
              if (seconds > 0) {
                timeDisplay += ` ${seconds} detik`;
              }
            } else {
              timeDisplay = `${seconds} detik`;
            }
            
            setTimeLeft(timeDisplay);
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    }
  }, [attempts]);

  useEffect(() => {
      if (user) {
          const role = user.role?.toLowerCase();
          if (role === 'teacher') {
              navigate('/teacher');
          } else if (role === 'student') {
              navigate('/student');
          }
      }
  }, [user, navigate]);

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
      if (errors[e.target.name]) {
          setErrors({
              ...errors,
              [e.target.name]: ''
          });
      }
      setLoginFailed('');
  };

  // const handleLoginAttempt = () => {
  //   const now = new Date().getTime();
  //   let newAttempts = {
  //     count: attempts.count + 1,
  //     lastAttempt: now,
  //     timeoutUntil: null
  //   };

  const handleLoginAttempt = () => {
    const now = new Date().getTime();
    let newAttempts = {
      count: attempts.count + 1,
      lastAttempt: now,
      timeoutUntil: null
    };

    // Jika mencapai 10 kali percobaan
    if (newAttempts.count === ATTEMPTS_BEFORE_SECOND_TIMEOUT) {
      newAttempts.timeoutUntil = now + SECOND_TIMEOUT_DURATION;
      setIsLocked(true);
    } 
    // Jika mencapai 5 kali percobaan
    else if (newAttempts.count === ATTEMPTS_BEFORE_FIRST_TIMEOUT) {
      newAttempts.timeoutUntil = now + FIRST_TIMEOUT_DURATION;
      setIsLocked(true);
    }

    setAttempts(newAttempts);
    localStorage.setItem('loginAttempts', JSON.stringify(newAttempts));
    return true;
  };

  const loginHandler = async (e) => {
        e.preventDefault();
        
        if (isLocked) return;

        setErrors({});
        setLoginFailed('');
        setIsLoading(true);

        try {
            const response = await login(formData);
            
            if (!response.success) {
                if (!handleLoginAttempt()) {
                  return;
                }
                setLoginFailed('Login gagal. Silakan coba lagi.');
                return;
            }

            // Reset attempts on successful login
            const resetAttempts = {
              count: 0,
              lastAttempt: null,
              timeoutUntil: null
            };
            setAttempts(resetAttempts);
            setIsLocked(false);
            localStorage.setItem('loginAttempts', JSON.stringify(resetAttempts));

            const role = response.user.role?.toLowerCase();
            if (role === 'teacher') {
                navigate('/teacher');
            } else if (role === 'student') {
                navigate('/student');
            } else {
                setLoginFailed('Invalid user role');
            }
        } catch (error) {
            console.error('Login error:', error);
            
            if (!handleLoginAttempt()) {
              return;
            }
            
            if (error.response?.data?.message) {
                setLoginFailed(error.response.data.message);
            } else if (error.response?.data?.errors) {
                handleErrors(error.response.data, setErrors);
            } else {
                setLoginFailed('Terjadi kesalahan. Silakan coba lagi.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    // const getAttemptsMessage = () => {
    //   const remainingAttempts = 
    //     attempts.count >= ATTEMPTS_BEFORE_FIRST_TIMEOUT 
    //       ? ATTEMPTS_BEFORE_SECOND_TIMEOUT - attempts.count
    //       : ATTEMPTS_BEFORE_FIRST_TIMEOUT - attempts.count;
      
    //   if (remainingAttempts > 0) {
    //     return `Sisa ${remainingAttempts} percobaan sebelum timeout.`;
    //   }
    //   return '';
    // };

    // const getAttemptsMessage = () => {
    //   if (attempts.timeoutUntil) return '';
      
    //   const remainingBeforeTimeout = attempts.count >= ATTEMPTS_BEFORE_FIRST_TIMEOUT
    //     ? ATTEMPTS_BEFORE_SECOND_TIMEOUT - attempts.count
    //     : ATTEMPTS_BEFORE_FIRST_TIMEOUT - attempts.count;
      
    //   return `Sisa ${remainingBeforeTimeout} percobaan sebelum timeout.`;
    // };

    const getAttemptsMessage = () => {
      if (attempts.timeoutUntil) return '';
      
      // Jika sudah lebih dari 5 kali, hitung sisa menuju 10 kali
      const remainingBeforeTimeout = attempts.count >= ATTEMPTS_BEFORE_FIRST_TIMEOUT
        ? ATTEMPTS_BEFORE_SECOND_TIMEOUT - attempts.count
        : ATTEMPTS_BEFORE_FIRST_TIMEOUT - attempts.count;
      
      return `Sisa ${remainingBeforeTimeout} percobaan sebelum timeout.`;
    };

  return (
      <>
          <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2">
                      <div className="flex items-center mb-3">
                          <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
                          <h1 className="text-xl font-semibold text-black">
                              PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                          </h1>
                      </div>
                      <h2 className="text-2xl font-medium ml-1">Login Your Account</h2>
                      <p className="text-gray-600 mb-6 md:ml-1">
                          Enter your email address and password 
                          <span className='hidden md:block md:whitespace-pre-line'></span>
                          to access journal.
                      </p>
                      
                      {loginFailed && (
                          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                              {loginFailed}
                              {getAttemptsMessage() && (
                                <p className="mt-1 text-sm">{getAttemptsMessage()}</p>
                              )}
                          </div>
                      )}

                      {timeLeft && (
                          <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded">
                              Silakan tunggu {timeLeft} sebelum mencoba lagi.
                          </div>
                      )}

                      <form onSubmit={loginHandler}>
                          <div>
                              <label className="block text-gray-700 font-medium">Email *</label>
                              <input 
                                  type="email"
                                  name="email"
                                  placeholder="your@email.com"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className={`w-full p-3 mb-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                                  disabled={isLocked}
                              />
                              {errors.email && (
                                  <p className="text-red-500 text-sm mb-3">{errors.email}</p>
                              )}
                          </div>
                          
                          <div>
                              <label className="block text-gray-700 font-medium">Password *</label>
                              <input 
                                  type="password"
                                  name="password"
                                  placeholder="Your password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  className={`w-full p-3 mb-1 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                                  disabled={isLocked}
                              />
                              {errors.password && (
                                  <p className="text-red-500 text-sm mb-3">{errors.password}</p>
                              )}
                          </div>
                          
                          <Link to="/reset" className="text-blue-500 text-sm mb-4 inline-block">
                              Lupa Password?
                          </Link>
                          
                          <button 
                              type="submit" 
                              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
                              disabled={isLoading || isLocked}
                          >
                              {isLoading ? 'Memproses...' : 'Login'}
                          </button>
                      </form>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center items-center hidden md:block">
                      <img src="/assets/images/icons/smk.png" alt="School Emblem" className="w-90 h-120 mb-3" />
                  </div>
              </div>
              
              <div className="text-center text-sm mt-4">
                  Apakah anda belum mempunyai akun? {' '}
                  <Link to="/register" className="text-blue-500">
                      Registrasi
                  </Link>
              </div>
          </div>
      </>
  );
}