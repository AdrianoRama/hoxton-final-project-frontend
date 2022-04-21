import './FollowingItem.css';
import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import { useNavigate } from 'react-router-dom';


export default function FollowingItem({ follow, following }) {
    const [followed, setFollowed] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        const alreadyFollowsUser = following.find(userFromData => userFromData.id === follow.id)
        if (alreadyFollowsUser) {
            setFollowed(true)
        } else {
            setFollowed(false)
        }
    }, [following])

    return (
        <div className='followingItem__container'>
            <div className='profile_followedUser' key={follow.id} onClick={() => navigate(`/home/${follow.username}`)}>
                <img src={follow.avatar} alt="" />
                <span className='profile_followingUser'>{follow.name}</span>
                <button>{followed ? 'Following' : 'Follow'}</button>
            </div>
            <div className='followingItem__user-photos'>
                {
                    follow.images?.map(photo => {
                        return <img src={photo.link} alt="" key={photo.id} onClick={() => navigate(`/oneImage/${photo.id}`)} />
                    })
                }
            </div>
        </div>
    )
}

