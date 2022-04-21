// @ts-ignore
// save the project
import { Avatar, Input } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import './searchPage.css'
import { Outlet, useNavigate } from 'react-router-dom'


export default function SearchPage({ setSaved, saved, setShowColorPalette }) {
    const setChangeHeaderColor = useStore(store => store.setChangeHeaderColor)
    setChangeHeaderColor(false)
    const users = useStore(store => store.users)
    const getUsers = useStore(store => store.getUsers)
    const navigate = useNavigate()
    const searchValue = useStore(store => store.searchValue)
    const setSearchValue = useStore(store => store.setSearchValue)

    const userSelected = useStore(store => store.userSelected)
    const imageSelected = useStore(store => store.imageSelected)

    useEffect(() => {
        getUsers()
    }, [])

    console.log('users:', users)

    return (
        <div className='app__searchPage'>
            <div className="app__searchPage-input">
                <form className="btn" onSubmit={(e) => {
                    e.preventDefault()
                    // @ts-ignore
                    console.log('searching for:', e.target.search.value)
                    // @ts-ignore
                    { imageSelected ? navigate(`/home/search/images/${e.target.search.value}`) : navigate(`/home/search/users/${e.target.search.value}`) }
                    //@ts-ignore
                    setSearchValue(e.target.search.value)
                }}>
                    <Input type='text' name="search" placeholder='Search new inspiration' required />
                </form>
                <div className="search">
                    <button className='byColor-btn' onClick={() => {
                        setShowColorPalette(true)
                        console.log('inside button')
                    }}>by color</button>
                </div>
            </div>
            <Outlet

                setSaved={setSaved} saved={saved}

            />
        </div>
    )
}
// @ts-ignore
function setChangeHeaderColor(arg0) {
    throw new Error('Function not implemented.')
}

