import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import "./profilepage.css"
import { useStore } from "../../Store"


function ProfilePage() {

    const navigate = useNavigate()

    const params = useParams()

    const userFound = useStore(store => store.userFound)
    const getUserByUsername = useStore(store => store.getUserByUsername)

    const userFoundImages = useStore(store => store.userFoundImages)
    const getUserImages = useStore(store => store.getUserImages)

    useEffect(() => {
        getUserByUsername(params.username)
    }, [params.username])

    useEffect(() => {
        if (userFound) {
            getUserImages(userFound.username)
        }
    }, [params.username, userFound])

    console.log(userFoundImages)

    const user = useStore(store => store.user)

    // if (user) {
    //     navigate('/login')
    // }
    if (!user && !userFound) return <div>You must be logged in to view this page</div>

    return (
        <div className='profileWrapper'>
            <div className='profile_info'>
                <img className='profile_picture' src={userFound?.avatar} alt="" />
                <h1 className='profile_name'>{userFound?.name}</h1>
                {(user?.username === userFound?.username) ? <button className='editButton'>Edit Profile</button> : <button className='editButton'>Follow</button>}
            </div>
            <div className='profile_main'>
                <div className="profile_options">
                    <ul className='profile_ul'>
                        <li className='profile_li' onClick={() => { navigate(`/home/${params.username}`) }}>{userFoundImages.length} Image</li>
                        <li className='profile_li' onClick={() => { navigate(`/home/${params.username}/board`) }}>Board</li>
                        <li className='profile_li' onClick={() => { navigate(`/home/${params.username}/following`) }}>{userFound?._count.following} Following</li>
                        <li className='profile_li' onClick={() => { navigate(`/home/${params.username}/followedBy`) }}>{userFound?._count.followedBy} Followers</li>
                    </ul>
                    <Outlet />

                </div>
            </div>
        </div>
    )
}

export default ProfilePage