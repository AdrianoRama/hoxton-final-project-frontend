import { Avatar, Input } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import Main from '../Main/Main'
import './searchPage.css'

export default function SearchPage({ setSaved, saved }) {
    const setChangeHeaderColor = useStore(store => store.setChangeHeaderColor)
    setChangeHeaderColor(false)

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
                        <div className="user-info">
                            <img src="https://dr.savee-cdn.com/things/thumbnails/6/2/4f4da3382470053e181c72.jpg" alt="" />
                            <div className="username-avatar">
                                <Avatar src='https://images.genius.com/afd4d325e2f476aa5cc281aac517e36f.1000x1000x1.png' style={{ width: '20px', height: '20px' }} />
                                <p>@maxKruseman</p>
                            </div>
                            <button>follow</button>
                        </div>
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

