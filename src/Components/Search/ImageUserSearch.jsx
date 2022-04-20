import React from 'react'
import './ImageUserSearch.css'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ImageMain from './ImageMain'
import { Outlet } from 'react-router-dom'


export default function ImageUserSearch() {

    const userSelected = useStore(store => store.userSelected)
    const imageSelected = useStore(store => store.imageSelected)

    const togleUserSelected = useStore(store => store.togleUserSelected)
    const togleImageSelected = useStore(store => store.togleImageSelected)
    const navigate = useNavigate()
    const searchValue = useStore(store => store.searchValue)
    // const setSearchValue = useStore(store => store.setSearchValue)

    return (<>
        <div className="imageUserSearch">
            <div className="imageUserSearch-container">
                <div className={imageSelected ? "imageSearch-active" : "imageSearch"} onClick={() => {
                    togleUserSelected(false)
                    togleImageSelected(true)
                    navigate(`/home/search/images/${searchValue ? searchValue : ''}`)
                }} >Image</div>
                <div className={userSelected ? "userSearch-active" : "userSearch"}
                    onClick={() => {
                        togleUserSelected(true)
                        togleImageSelected(false)
                        navigate(`/home/search/users/${searchValue ? searchValue : ''}`)
                    }}>User</div>
            </div>
        </div>
        <Outlet />
    </>
    )
}
