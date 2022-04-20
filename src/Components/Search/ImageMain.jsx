import React, { useEffect, useState } from 'react'
import '../Main/main.css'
import { useStore } from "../../Store"
import { AddBox } from '@material-ui/icons'
import Masonry from 'react-masonry-css'
import { useNavigate, useParams } from 'react-router-dom'


export default function ImageMain({ setSaved, saved }) {
    const user = useStore(store => store.user)
    const navigate = useNavigate()
    const [images, setImages] = useState([])

    const params = useParams()

    function saveImg(id) {
        fetch(`http://localhost:4001/save`, {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageId: id
            })
        }).then(resp => resp.json())
            .then(saveFromServer =>
                setSaved(saveFromServer)
            )
    }

    useEffect(() => {
        fetch(`http://localhost:4001/search?q=${params.q}&type=items`).then(resp => resp.json())
            .then(imagesFromServer =>
                setImages(imagesFromServer)
            )
    }, [params.q])

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
                {images?.map(image => (
                    <>
                        <div className="app__main-img" onClick={() => { navigate(`/oneImage/${image.id}`) }} >
                            <img key={image.id} src={image.link} alt="" />
                            <div className="app__main-save">
                                <AddBox style={{ fontSize: 50 }} className='addBox' onClick={(e) => { myClickHandler(e), saveImg(image.id) }} />
                            </div>
                        </div>
                    </>
                ))}
            </Masonry>
        </div>
    )
}
