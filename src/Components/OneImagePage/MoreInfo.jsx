import { AddBoxOutlined, ArrowDropDownOutlined } from '@material-ui/icons'

import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import CollectionsMenu from './CollectionsMenu'
import './MoreInfo.css'
export default function MoreInfo() {
    const [showCollectionsMenu, setShowCollectionsMenu] = useState(false)
    const image = useStore(store => store.image)
    const collectionsPerImage = useStore(store => store.collectionsPerImage)
    const getCollectionsPerImage = useStore(store => store.getCollectionsPerImage)

    useEffect(() => {
        if (image) {
            getCollectionsPerImage(image.id)
        }

    }, [image])

    return (
        <div className='more__info__container'>
            <h1>Title</h1>
            <div className="add__to_board">
                <span className='text' onClick={() => {
                    if (showCollectionsMenu) {
                        setShowCollectionsMenu(false)
                    } else {
                        setShowCollectionsMenu(true)
                    }

                }}> Add to board</span>
                <span className='arrow'>{<ArrowDropDownOutlined />}</span>

            </div>
            {showCollectionsMenu ? <CollectionsMenu /> : null}
            <div className='list__container'>
                <ul className='boards__list'>
                    {collectionsPerImage.map(c => <li>{c.name}</li>)}
                </ul>
            </div>

        </div>
    )
}
