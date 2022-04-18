import React, { useEffect, useState } from 'react'
import '../Main/main.css'
import { useStore } from "../../Store"
import { AddBox } from '@material-ui/icons'
import Masonry from 'react-masonry-css'
import { useLocation, useNavigate } from 'react-router-dom'


export default function CollectionImages() {
    const user = useStore(store => store.user)
    const navigate = useNavigate()
    const [images, setImages] = useState([])

    const clickedCollection = useStore(store => store.clickedCollection)
    const getCollectionImages = useStore(store => store.getCollectionImages)
    const collectionImages = useStore(store => store.collectionImages)
    console.log('clickedCollection: ', clickedCollection)
    const location = useLocation()

    useEffect(() => {
        if (clickedCollection) {
            getCollectionImages(clickedCollection.id)
        }

    }, [location])



    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4001/images`,
                { headers: { Authorization: localStorage.token } }
            ).then(resp => resp.json())
                .then(imagesFromServer =>
                    setImages(imagesFromServer)
                )
        }
        else {
            fetch(`http://localhost:4001/images`).then(resp => resp.json())
                .then(imagesFromServer =>
                    setImages(imagesFromServer)
                )
        }
    }, [])
    console.log('collectionImages:', collectionImages)
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
                {collectionImages?.map(image => (
                    <>
                        <div className="app__main-img" onClick={() => { navigate(`/oneImage/${image.image.id}`) }} >
                            <img key={image.image.id} src={image.image.link} alt="" />
                        </div>

                    </>
                ))}
            </Masonry>
            {collectionImages.length === 0 ? <h1 className='no-images-h1'>There is nothing here yet.</h1> : null}
        </div>
    )
}
