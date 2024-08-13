import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

import Homepage from './pages/Homepage'
import Exam from './pages/Exam'
import AdminDash from './pages/auth/AdminDash'
import PrivateRoute from './components/auth/PrivateRoute'
import PublicRoute from './components/auth/PublicRoute'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/exam/:id' element={<Exam />} />
            <Route path='/admin' element={<AdminDash />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
