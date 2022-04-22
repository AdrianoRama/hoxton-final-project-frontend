import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store'
import './Colors.css'
export default function Colors({ setShowColorPalette }) {
    const getColors = useStore(store => store.getColors)
    const colors = useStore(store => store.colors)
    const setSearchValue = useStore(store => store.setSearchValue)
    const navigate = useNavigate()

    useEffect(() => {
        getColors()
    }, [])

    return (
        <div className='colors-container'>
            {colors.map(color => <div onClick={() => {
                navigate(`/home/search/color/${color.name}`)
                setShowColorPalette(false)
                setSearchValue(color.name)
            }} className='colors-item' style={{ background: `#${color.name}` }}></div>)}
        </div>


    )
}
