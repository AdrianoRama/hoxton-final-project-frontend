import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ProfilePage from './Components/profilePage/ProfilePage'
import Join from './Components/Join/Join'
import LogIn from './Components/LogIn/LogIn'
import WelcomePage from './Components/WelcomePage/WelcomePage'
import { useStore } from "../src/Store"
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'


function App() {
  const user = useStore(store => store.user)
  const validate = useStore(store => store.validate)

  useEffect(() => {
    validate()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to={'/welcome'} />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/home' element={<Home />} >
          <Route path={user?.username} element={<ProfilePage />} />
        </Route >
      </Routes>
    </div>
  )
}

export default App
