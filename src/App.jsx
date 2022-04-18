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
import Main from './Components/Main/Main'
import OneImage from './Components/OneImagePage/OneImage'
import UserFollowing from './Components/userFollowing/UserFollowing'
import SavedImages from './Components/profilePage/SavedImages'
import Board from './Components/BoardPage/Board'
import UserFollowers from './Components/userFollowers/UserFollowers'
import CollectionPage from './Components/CollectionPage/CollectionPage'

function App() {
  const user = useStore(store => store.user)
  const validate = useStore(store => store.validate)
  const [profVisible, setProfVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)
  const [saved, setSaved] = useState(null)
  const setShowUserList = useStore(store => store.setShowUserList)


  useEffect(() => {
    validate()
  }, [])

  return (
    <div onClick={(e) => {
      e.stopPropagation()
      setProfVisible(false), setAddVisible(false), setShowUserList(false)
    }} className="App">
      <Routes>
        <Route index element={<Navigate replace to={'/welcome'} />} />
        <Route path='/welcome' element={<WelcomePage />} />
        {/* <Route path='/profile/:username' element={<ProfilePage />} /> */}
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/oneImage/:id' element={<OneImage setSaved={setSaved} />} />
        <Route path='/home' element={<Home setProfVisible={setProfVisible} profVisible={profVisible} setAddVisible={setAddVisible} addVisible={addVisible} />} >
          <Route path='/home/:username/board/:collection' element={<CollectionPage />} />
          <Route path='/home/:username' element={<ProfilePage />} >
            <Route path='/home/:username/board' element={<Board />} >
            </Route>
            <Route path='/home/:username/following' element={<UserFollowing />} />
            <Route path='/home/:username/followedBy' element={<UserFollowers />} />
            <Route path='/home/:username' element={<SavedImages setSaved={setSaved} saved={saved} />} />
          </Route>
          <Route path='/home' element={<Main setSaved={setSaved} saved={saved} />} />
        </Route >
      </Routes>
    </div>
  )
}

export default App
