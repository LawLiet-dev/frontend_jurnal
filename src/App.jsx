import React, { useEffect, useState } from 'react'
import Login from './auth/login'
import Register from './auth/Register'
import Reset from './auth/Reset'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Teacher from './teacher/Teacher'
import Siswa from './teacher/Siswa'
import Student from './student/Student'
import Jurnal from './student/Jurnal'
import Journal from './teacher/Journal'
import List from './student/List'
import Custom404 from './errors/404'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from './store/auth';
import ProtectedRoute from './components/ProtectedRoute';
import AccessDenied from './errors/403';

// Main App with Router
function App() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

// URL Cleaner + Routes component
function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isValidating, setIsValidating] = useState(true);
  
  useEffect(() => {
    // Define patterns to check
    const patterns = [
      { match: /^\/teacher\/.*$/, redirect: '/teacher' },
      { match: /^\/siswa\/.*$/, redirect: '/siswa' },
      { match: /^\/journal\/.*$/, redirect: '/journal' },
      { match: /^\/student\/.*$/, redirect: '/student' },
      { match: /^\/jurnal\/.*$/, redirect: '/jurnal' }
    ];
    
    let shouldRedirect = false;
    let redirectTo = '';
    
    // Check if current path matches any pattern
    for (const pattern of patterns) {
      if (pattern.match.test(location.pathname) && location.pathname !== pattern.redirect) {
        shouldRedirect = true;
        redirectTo = pattern.redirect;
        break;
      }
    }
    
    if (shouldRedirect) {
      // Redirect dan reload halaman secara langsung
      window.location.href = redirectTo;
      return; // Hentikan eksekusi lebih lanjut
    }
    
    // Set validating to false once we've checked
    setIsValidating(false);
  }, [location.pathname]);
  
  // Don't render routes until URL validation is complete
  if (isValidating) {
    return <div className="flex items-center justify-center min-h-screen">
      {/* You could add a loading spinner here if needed */}
    </div>;
  }
  
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/403" element={<AccessDenied />} />
                
      {/* Protected routes */}
      <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/siswa" element={<Siswa />} />
        <Route path="/journal" element={<Journal />} />
      </Route>
                
      <Route element={<ProtectedRoute allowedRoles={['student']} />}>
        <Route path="/student" element={<Student />} />
        <Route path="/jurnal" element={<Jurnal />} />
      </Route>
                
      {/* Catch-all route for any other invalid URL */}
      <Route path="*" element={<Custom404 />} />
    </Routes>
  );
}

export default App