import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ProfilePage from './Components/profilePage/ProfilePage'
import WelcomePage from './Components/WelcomePage/WelcomePage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to={'/welcome'} />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
