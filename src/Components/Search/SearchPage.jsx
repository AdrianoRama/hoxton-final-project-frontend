import { Avatar, Input } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import './searchPage.css'
import { Outlet, useNavigate } from 'react-router-dom'


export default function SearchPage({ setSaved, saved }) {
    const setChangeHeaderColor = useStore(store => store.setChangeHeaderColor)
    setChangeHeaderColor(false)
    const users = useStore(store => store.users)
    const getUsers = useStore(store => store.getUsers)
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
    }, [])

    console.log('users:', users)

    return (
        <div className='app__searchPage'>
            <div className="app__searchPage-input">
                <form className="btn" onSubmit={(e) => {
                    e.preventDefault()
                    console.log('searching for:', e.target.search.value)
                    navigate(`/home/search/images/${e.target.search.value}`)
                }}>
                    <Input type='text' name="search" placeholder='Search new inspiration'  />
                </form>
                <div className="search">
                    <button>by color</button>
                </div>
            </div>
            <Outlet setSaved={setSaved} saved={saved}/>
        </div>
    )
}
function setChangeHeaderColor(arg0) {
    throw new Error('Function not implemented.')
}

