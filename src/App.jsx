import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Join from './Components/Join/Join'
import LogIn from './Components/LogIn/LogIn'
import WelcomePage from './Components/WelcomePage/WelcomePage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to={'/welcome'} />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  )
}

export default App
