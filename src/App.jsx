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
import Jurnal from './student/jurnal'
import List from './student/List'
// import ProtectedRoute from '../utils/ProtectedRoute';
// import ProtectedRoute from '../utils/ProtectedRoute'
// import AccessDenied from './error/403_pages'
// import Notfound from './error/404_pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
     {/* <BrowserRouter> */}
     {/* <Router>
      <Routes> */}
        {/* <Route path='/'  element={<Home/>}/>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/about'  element={<About/>}/> */}
        {/* <Route path='/register' element={<Register/>}/> */}
        {/* <Route path='/reset' element={<Reset/>}/> */}
        {/* <Route path='/login'  element={<Login/>}/>
        <Route path='/teacher'  element={<Teacher/>}/>
        <Route path='/siswa'  element={<Siswa/>}/>
        <Route path='/student'  element={<Student/>}/>
        <Route path='/jurnal'  element={<Jurnal/>}/>
        <Route path='/list'  element={<List/>}/> */}
      {/* </Routes> */}
     {/* </BrowserRouter> */}
    {/* //  </Router> */}
     {/* <BrowserRouter> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} /> 
        {/* <Route path='/access_denied' element={<AccessDenied />} />
        <Route path='/not_found' element={<Notfound />} /> */}
        {/* <Route element={<ProtectedRoute allowedRoles={['teacher']} />}> */}
          <Route path='/teacher' element={<Teacher />} /> 
        {/* </Route> */}
        {/* <Route element={<ProtectedRoute allowedRoles={['student']} />}> */}
          <Route path='/student' element={<Student />} />
        {/* </Route> */}
      </Routes>
    </Router>
    {/* // </BrowserRouter> */}
    </div>
  )
}

export default App
