import { Avatar, Input } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import Main from '../Main/Main'
import './searchPage.css'

export default function SearchPage({ setSaved, saved }) {
    const setChangeHeaderColor = useStore(store => store.setChangeHeaderColor)
    setChangeHeaderColor(false)
    const users = useStore(store => store.users)
    const getUsers = useStore(store => store.getUsers)

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className='app__searchPage'>
            <div className="app__searchPage-input">
                <div className="btn">
                    <Input type='text' placeholder='Search new inspiration' />
                </div>
                <div className="search">
                    <button>by color</button>
                </div>
            </div>
            <div className="app__searchPage-users">
                <div className="app__searchPage-wrapper">
                    <h1>Some rad users you should follow</h1>
                    <div className="app__searchPage_user-wrapper">
                        {users.map(user => (
                            <>
                                <div className="user-info">
                                    <img src={user.images[0].link} alt="" />
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
        </div>
    )
}
function setChangeHeaderColor(arg0) {
    throw new Error('Function not implemented.')
}

