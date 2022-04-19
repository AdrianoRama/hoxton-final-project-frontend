import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store'
import './Colors.css'
export default function Colors() {
    const getColors = useStore(store => store.getColors)
    const colors = useStore(store => store.colors)
    const navigate = useNavigate()

    useEffect(() => {
        getColors()
    }, [])

    return (
        <div className='colors-container'>
            {colors.map(color => <div onClick={() => {
                navigate(`/search?q=${color.name}`)
            }} className='colors-item' style={{ background: color.name }}>Colors</div>)}
        </div>


    )
}
