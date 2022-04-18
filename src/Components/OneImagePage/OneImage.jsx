import './OneImage.css';
import { useStore } from "../../Store"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderPeople from './HeaderPeople';
import { displayOnlyFiveUsers } from '../../helpers';
import UserList from './UserList';
import MoreInfo from './MoreInfo';
import { ArrowRight, ArrowRightAlt, ArrowRightAltOutlined, ArrowRightOutlined } from '@material-ui/icons';

export default function OneImage({ setSaved }) {
    const navigate = useNavigate()

    const params = useParams()
    const getImageById = useStore(store => store.getImageById)
    const getUsersWhoSavedImage = useStore(store => store.getUsersWhoSavedImage)
    const usersWhoSavedImage = useStore(store => store.usersWhoSavedImage)
    const showUserList = useStore(store => store.showUserList)
    const setShowUserList = useStore(store => store.setShowUserList)
    const [alreadySaved, setAlreadySaved] = useState(false)

    const getUserImages = useStore(store => store.getUserImages)
    const userFoundImages = useStore(store => store.userFoundImages)
    const user = useStore(store => store.user)
    const image = useStore(store => store.image)


    const [showRightMenu, setShowRightMenu] = useState(true)

    useEffect(() => {
        getImageById(params.id)
    }, [])

    useEffect(() => {
        getUsersWhoSavedImage(Number(params.id))
    }, [])

    useEffect(() => {
        if (user) {
            getUserImages(user?.username)
        }



    }, [user])

    console.log('Already saved: ', alreadySaved)

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
            .then(saveFromServer => {
                setSaved(saveFromServer)
                setAlreadySaved(true)
            }
            )
    }
    useEffect(() => {
        if (userFoundImages) {
            const checkIfSaved = userFoundImages.find(i => i.id === image?.id)
            if (checkIfSaved) {
                setAlreadySaved(true)
            } else {
                setAlreadySaved(false)
            }
        }

    }, [userFoundImages])

    console.log('user images', userFoundImages)

    return (
        <div className="oneImage">
            <div className="left__side">
                <div className="header">
                    <div className='people-components' onMouseOver={() => {
                        setShowUserList(true)
                    }}>
                        {displayOnlyFiveUsers(usersWhoSavedImage).usersToReturn.map(u => <HeaderPeople key={u.id} user={u} />)}
                        {displayOnlyFiveUsers(usersWhoSavedImage).peopleLeft !== 0 ? <span className='people-num-left'>{displayOnlyFiveUsers(usersWhoSavedImage).peopleLeft} +</span> : null}
                    </div>

                    <div className="header-right">

                        <span className="header-save" onClick={() => {
                            saveImg(image.id)
                        }}> {alreadySaved ? null : 'SAVE'} </span>

                        {showRightMenu ? <span onClick={() => {
                            setShowRightMenu(false)
                        }} className='header-close'>HIDE INFO {<ArrowRightOutlined />}</span> :
                            <span className="header-show" onClick={() => {
                                setShowRightMenu(true)
                            }}>SHOW INFO</span>}


                        <span onClick={() => { navigate(-1) }} className="header-close">X</span>
                    </div>

                </div>
                <div className="oneImage-main">
                    <img className="oneImage-image" src={image?.link} alt="image" />
                </div>
                {showUserList ? <UserList imageId={Number(params.id)} /> : null}
            </div>

            {showRightMenu ? <MoreInfo /> : null}
        </div>
    )

}