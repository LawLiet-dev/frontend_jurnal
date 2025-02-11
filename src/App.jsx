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
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/siswa' element={<Siswa/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/jurnal' element={<Jurnal/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
