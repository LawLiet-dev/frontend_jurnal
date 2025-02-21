import React from 'react'
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
import List from './student/List'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthStore } from './store/auth';
import ProtectedRoute from './components/ProtectedRoute';
import AccessDenied from './errors/403';


function App() {

  return (
    <div>
     <Router>
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
                    <Route path="/teacher/*" element={<Teacher />} />
                    <Route path="/siswa/*" element={<Siswa />} />
                </Route>
                
                <Route element={<ProtectedRoute allowedRoles={['student']} />}>
                    <Route path="/student/*" element={<Student />} />
                    <Route path="/jurnal/*" element={<Jurnal />} />
                </Route>
            </Routes>
        </Router>
    {/* // </BrowserRouter> */}
    </div>
  )
}

export default App
