import React from 'react'
import './ImageUserSearch.css'
import { useEffect } from 'react'
import { useStore } from '../../Store'
import { useSearchParams } from 'react-router-dom'
import ImageMain from './ImageMain'
import { Outlet } from 'react-router-dom'


export default function ImageUserSearch() {

    const userSelected = useStore(store => store.userSelected)
    const imageSelected = useStore(store => store.imageSelected)

    const togleUserSelected = useStore(store => store.togleUserSelected)
    const togleImageSelected = useStore(store => store.togleImageSelected)

    return (<>
        <div className="imageUserSearch">
            <div className="imageUserSearch-container">
                <div className={imageSelected ? "imageSearch-active" : "imageSearch"} onClick={() => {
                    togleUserSelected(false)
                    togleImageSelected(true)
                }} >Image</div>
                <div className={userSelected ? "userSearch-active" : "userSearch"}
                    onClick={() => {
                        togleUserSelected(true)
                        togleImageSelected(false)
                    }}>User</div>
            </div>
        </div>
        <Outlet />
    </>
    )
}
