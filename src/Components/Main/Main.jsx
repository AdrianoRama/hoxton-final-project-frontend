import React, { useEffect, useState } from 'react'
import './main.css'
import { useStore } from "../../Store"


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

    console.log(images)

    return (
        <div className='app__main'>
            {images?.map(image => (
                <div className="app__main-img">
                    <img src={image.link} alt="" />
                </div>
            ))}
        </div>
    )
}
