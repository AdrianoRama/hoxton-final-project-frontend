// @ts-ignore
import { Remove, RemoveCircle, RemoveCircleOutline } from '@material-ui/icons'
import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store'
import './UploadImage.css'

export default function UploadImage() {
    // @ts-ignore
    const navigate = useNavigate()
    const setShowUploadForm = useStore(store => store.setShowUploadForm)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    function uploadImage(title, link) {
        fetch(`http://localhost:4001/images`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({ title, link })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setShowSuccessMessage(true)
                }
            })
    }

    return (
        <div className='upload__image__container'>
            {showSuccessMessage ? <div className='upload__image__container__form'>
                <p className='success-msg'>Image uploaded successfully!</p>
                <Button className='try-btn' onClick={() => {
                    setShowSuccessMessage(false)
                }} >Upload again!</Button>

            </div> : <form className='upload__image__container__form' onSubmit={(e) => {
                e.preventDefault()
                // @ts-ignore
                const title = e.target.title.value;
                // @ts-ignore
                const link = e.target.link.value;
                uploadImage(title, link)
            }}>
                <RemoveCircleOutline style={{
                    color: "#1976d2",
                    fontSize: "2rem"
                }} className='remove-btn' onClick={() => {
                    setShowUploadForm(false)

                }} />
                <h1>Upload your image here.</h1>

                <Input placeholder='Write a title...' className='title__input' color="primary" name="title" required />
                <Input placeholder='Your link here...' name="link" required />
                <Button type='submit' variant='text'>Upload</Button>
            </form>}


        </div>
    )
}
