import './OneImage.css';
import { useStore } from "../../Store"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderPeople from './HeaderPeople';
import { displayOnlyFiveUsers } from '../../helpers';

export default function OneImage() {
    const navigate = useNavigate()

    const params = useParams()
    const getImageById = useStore(store => store.getImageById)
    const getUsersWhoSavedImage = useStore(store => store.getUsersWhoSavedImage)
    const usersWhoSavedImage = useStore(store => store.usersWhoSavedImage)

    useEffect(() => {
        getImageById(params.id)
    }, [])

    useEffect(() => {
        getUsersWhoSavedImage(Number(params.id))
    }, [])

    const image = useStore(store => store.image)
    console.log(image)

    return (
        <div className="oneImage">
            <div className="header">
                <div className='people-components'>
                    {displayOnlyFiveUsers(usersWhoSavedImage).usersToReturn.map(u => <HeaderPeople key={u.id} user={u} />)}
                    {displayOnlyFiveUsers(usersWhoSavedImage).peopleLeft < 5 ? <span className='people-num-left'>{displayOnlyFiveUsers(usersWhoSavedImage).peopleLeft} +</span> : null}
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