import React from 'react'
import './ImageUserSearch.css'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import Main from '../Main/Main'
import { Avatar, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export default function SearchMain({ setSaved, saved }) {


    const setChangeHeaderColor = useStore(store => store.setChangeHeaderColor)
    setChangeHeaderColor(false)
    const users = useStore(store => store.users)
    const getUsers = useStore(store => store.getUsers)
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
    }, [])



    return (
        <>
            <div className="app__searchPage-users">
                <div className="app__searchPage-wrapper">
                    <h1>Some rad users you should follow</h1>
                    <div className="app__searchPage_user-wrapper">
                        {users.map(user => (
                            <>
                                <div className="user-info" onClick={() => {
                                    navigate(`/home/${user.username}`)
                                }}>
                                    <img src={user.images[0]?.link} alt="" />

                                    <div className="username-avatar">
                                        <Avatar src={user.avatar} style={{ width: '20px', height: '20px' }} />
                                        <p>@{user.username}</p>
                                    </div>
                                    <button>follow</button>
                                </div></>
                        ))}

                    </div>
                </div>
            </div>
            <div className="popular-images">
                <div className="popular-images-title">
                    <h1>Popular images</h1>
                </div>
                <Main setSaved={setSaved} saved={saved} />
            </div>
        </>
    )
}
