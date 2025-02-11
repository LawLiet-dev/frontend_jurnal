import React from 'react'
// import Account from './account/setting/Account'
// import Password from './account/setting/Password'
import Login from './auth/login'
import Register from './auth/Register'
import Reset from './auth/Reset'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Teacher from './teacher/Teacher'
import Pembimbing from './student/Pembimbing'
import Journal from './teacher/Journal'
import Siswa from './teacher/Siswa'
import Detail from './teacher/menu/Detail'
import Student from './student/Student'
import Jurnal from './student/jurnal'
import Add from './student/menu/Add'
import Edit from './student/menu/Edit'
import Notification from './student/menu/Notification'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/akun' element={<Account/>}/> */}
        {/* <Route path='/password' element={<Password/>}/> */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/siswa' element={<Siswa/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/pembimbing' element={<Pembimbing/>}/>
        <Route path='/jurnal' element={<Jurnal/>}/>
        <Route path='/notification' element={<Notification/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
