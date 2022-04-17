import './OneImage.css';
import { useStore } from "../../Store"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderPeople from './HeaderPeople';

export default function OneImage() {
    const navigate = useNavigate()

    const params = useParams()
    const getImageById = useStore(store => store.getImageById)

    useEffect(() => {
        getImageById(params.id)
    }, [])

    const image = useStore(store => store.image)
    console.log(image)

    return (
        <div className="oneImage">
            <div className="header">
                <div className='people-components'>
                    <HeaderPeople />
                    <HeaderPeople />
                    <HeaderPeople />
                    <HeaderPeople />
                    <HeaderPeople />
                    <span className='people-num-left'>21+</span>
                </div>

                <div className="header-right">
                    <span className="header-save">SAVE</span>
                    <span className="header-close">ShOW INFO</span>
                    <span onClick={() => { navigate(-1) }} className="header-close">X</span>
                </div>

            </div>
            <div className="oneImage-main">
                <img className="oneImage-image" src={image?.link} alt="image" />
            </div>
        </div>
    )

}