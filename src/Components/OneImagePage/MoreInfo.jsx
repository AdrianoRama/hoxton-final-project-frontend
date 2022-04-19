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

    }, [image?.id])

    return (
        <div className='more__info__container'>
            <h1>{image?.title}</h1>
            <div className="add__to_board" onClick={() => {
                if (showCollectionsMenu) {
                    setShowCollectionsMenu(false)
                } else {
                    setShowCollectionsMenu(true)
                }

            }}>
                <span className='text' > Add to board</span>
                <span className='arrow'>{<ArrowDropDownOutlined />}</span>

            </div>
            {showCollectionsMenu ? <CollectionsMenu /> : null}
            <div className='list__container'>

                {collectionsPerImage.map(c => <div className='list__container__collection__item'>
                    <img src={image.link} alt="" />
                    <span>{c.name}</span>
                </div>)}

            </div>

        </div>
    )
}
