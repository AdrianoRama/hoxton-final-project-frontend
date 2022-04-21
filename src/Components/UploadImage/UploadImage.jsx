import { Remove, RemoveCircle, RemoveCircleOutline } from '@material-ui/icons'
import { Button, Input } from '@mui/material'
import React from 'react'
import { useStore } from '../../Store'
import './UploadImage.css'

export default function UploadImage() {
    const setShowUploadForm = useStore(store => store.setShowUploadForm)
    return (
        <div className='upload__image__container'>
            <form>
                <RemoveCircleOutline style={{
                    color: "#1976d2",
                    fontSize: "2rem"
                }} className='remove-btn' onClick={() => {
                    setShowUploadForm(false)

                }} />
                <h1>Upload your image here.</h1>
                <Input placeholder='Write a title...' className='title__input' color="primary" />
                <Input placeholder='Your link here...' />
                <Button variant='outlined'>Upload</Button>
            </form>
        </div>
    )
}
