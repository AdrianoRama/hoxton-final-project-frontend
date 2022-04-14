import React, { useEffect, useState } from 'react'
import './main.css'
import { useStore } from "../../Store"
import { AddBox } from '@material-ui/icons'
import Masonry from 'react-masonry-css'


export default function Main() {
    const user = useStore(store => store.user)

    const [images, setImages] = useState([])

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

    const breakpoints = {
        default: 5,
        1100: 2,
        700: 1
    }

    return (
        <div className='app__main'>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {images?.map(image => (
                    <>
                        <div className="app__main-img">
                            <img key={image.id} src={image.link} alt="" />
                            <div className="app__main-save">
                                <AddBox style={{ fontSize: 50 }} className='addBox' />
                            </div>
                        </div>
                    </>
                ))}
            </Masonry>
        </div>
    )
}
