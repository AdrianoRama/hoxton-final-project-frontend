import { Button } from '@mui/material'
import React from 'react'
import './welcomePage.css'

export default function WelcomePage() {
    return (
        <div className='app__welcome'>
            <div className="app__logo">
                <h3>Savee</h3>
            </div>
            <div className="app__text">
                <h1>The platform for creative minds.</h1>
                <p>Browse and save curated inspiration from designers all around the world.</p>
            </div>
            <div className="app__form">
                <Button>Join</Button>
                <Button>Log in</Button>
            </div>
            <div className="app__footer">
                <div className="app__footer-left">
                    <h3>MADE BY IMMIGRANTS IN AMERICA.</h3>
                </div>
                <div className="app__footer-right">
                    <ul>
                        <li>APP</li>
                        <li>SHOP</li>
                        <li>PORTOFOLIO</li>
                        <li>TERMS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
