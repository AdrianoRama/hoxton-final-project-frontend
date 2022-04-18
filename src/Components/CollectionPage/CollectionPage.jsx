import React, { useEffect } from 'react'
import { useStore } from '../../Store'
import CollectionImages from './CollectionImages'
import './collectionPage.css'

export default function CollectionPage() {
    const clickedCollection = useStore(store => store.clickedCollection)
    const user = useStore(store => store.user)
    const userFound = useStore(store => store.userFound)

    return (
        <>
            <div className='app__collection'>
                <div className="app__collection-info">
                    <h1>{clickedCollection?.name}</h1>
                    <img src={userFound?.avatar} alt="" />
                </div>
                <CollectionImages />

            </div>
        </>
    )
}
