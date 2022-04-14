import React, { useEffect, useState } from 'react'
import '../Main/main.css'
import { useStore } from "../../Store"
import { AddBox } from '@material-ui/icons'
import Masonry from 'react-masonry-css'
import { useNavigate } from 'react-router-dom'


export default function SavedImages({ setSaved, saved }) {
    const user = useStore(store => store.user)
    const navigate = useNavigate()
    const userFoundImages = useStore(store => store.userFoundImages)


    const breakpoints = {
        default: 5,
        1100: 3,
        850: 2,
        700: 1
    }

    function myClickHandler(e) {
        // @ts-ignore
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    return (
        <div className='app__main'>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {userFoundImages?.map(image => (
                    <>
                        <div className="app__main-img" onClick={() => { navigate(`/oneImage/${image.id}`) }} >
                            <img key={image.id} src={image.link} alt="" />
                        </div>
                    </>
                ))}
            </Masonry>
        </div>
    )
}
