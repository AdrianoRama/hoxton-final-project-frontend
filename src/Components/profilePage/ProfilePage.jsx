import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import "./profilepage.css"
import { useStore } from "../../Store"
import { Button } from '@mui/material'


function ProfilePage() {

    const navigate = useNavigate()

    const params = useParams()

    const userFound = useStore(store => store.userFound)
    const getUserByUsername = useStore(store => store.getUserByUsername)

    const userFoundImages = useStore(store => store.userFoundImages)
    const getUserImages = useStore(store => store.getUserImages)

    const userFoundCollections = useStore(store => store.userFoundCollections)

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
                {(user?.username === userFound?.username) ? <Button variant="outlined" className='editButton'>Edit Profile</Button> : <Button variant="outlined" className='editButton'>Follow</Button>}
            </div>
            <div className='profile_main'>
                <div className="profile-section">
                    <ul className='profile_ul'>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}`) }}>{userFoundImages.length} Image</p>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}/board`) }}> {userFoundCollections.length} Board</p>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}/following`) }}>{userFound?._count.following} Following</p>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}/followedBy`) }}>{userFound?._count.followedBy} Followers</p>
                    </ul>
                </div>
                <div className="profile_options">

                    <Outlet />

                </div>
            </div>
        </div>
    )
}

export default ProfilePage