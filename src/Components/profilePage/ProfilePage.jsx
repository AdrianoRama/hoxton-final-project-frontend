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
    const userFollows = useStore(store => store.userFollows)
    const [userFollowers, setFollowers] = useState([])
    const [userFollowing, setFollowing] = useState([])
    const user = useStore(store => store.user)
    const setUserFollowsFunction = useStore(store => store.setUserFollowsFunction)
    const followUser = useStore(store => store.followUser)
    const unfollowUser = useStore(store => store.unfollowUser)
    const getUserCreatedImages = useStore(store => store.getUserCreatedImages)
    const userFoundCreatedImages = useStore(store => store.userFoundCreatedImages)

    const validate = useStore(store => store.validate)


    useEffect(() => {
        validate()
    }, [])

    useEffect(() => {
        getUserByUsername(params.username)
    }, [params.username, user])

    useEffect(() => {
        if (userFound) {
            getUserImages(params.username)
            getUserCreatedImages(userFound?.id)

        }
    }, [params.username, userFound, user])

    useEffect(() => {
        if (userFound) {
            fetch(`http://localhost:4001/getFollowers/${userFound?.id}`).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setFollowers(data)
                        const matches = data.find(u => u.id === user?.id)
                        if (matches) {
                            setUserFollowsFunction(true)
                        } else {
                            setUserFollowsFunction(false)
                        }
                    }
                })
        }

    }, [userFound?.id, user])

    useEffect(() => {
        if (userFound) {
            fetch(`http://localhost:4001/getFollowing/${userFound?.id}`)
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setFollowing(data)
                    }
                })
        }
    }, [userFound?.id, user])

    if (!user && !userFound) return <div>You must be logged in to view this page</div>

    return (
        <div className='profileWrapper'>
            <div className='profile_info'>
                <img className='profile_picture' src={userFound?.avatar} alt="" />
                <h1 className='profile_name'>{userFound?.name}</h1>
                {(user?.username === userFound?.username) ? <Button variant="outlined" className='editButton' style={
                    {
                        backgroundColor: '#212121',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5rem',
                        fontWeight: '400',
                        width: '9rem',
                    }
                }
                    onClick={() => navigate('/home/settings')
                    } >Edit Profile</Button> :
                    (userFollows ? <Button onClick={() => {
                        unfollowUser(userFound?.username).then(data => {
                            let userFollowersCopy = JSON.parse(JSON.stringify(userFollowers))
                            userFollowersCopy = userFollowersCopy.filter(u => u.id !== user.id)
                            setFollowers(userFollowersCopy)
                            setUserFollowsFunction(false)
                        })
                    }} variant="outlined" className='editButton' style={{
                        backgroundColor: '#212121',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5rem',
                        fontWeight: '400',
                        width: '7rem'
                    }}>Unfollow</Button>
                        : <Button onClick={() => {
                            followUser(userFound?.username).then(data => {
                                let userFollowersCopy = JSON.parse(JSON.stringify(userFollowers))
                                userFollowersCopy.push(data)
                                setFollowers(userFollowersCopy)
                                setUserFollowsFunction(true)
                            })
                        }} variant="outlined" className='editButton' style={{
                            backgroundColor: '#212121',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5rem',
                            fontWeight: '400',
                            width: '7rem'
                        }}>Follow</Button>)
                }

            </div>
            <div className='profile_main'>
                <div className="profile-section">
                    <ul className='profile_ul'>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}`) }}>{userFoundImages.length + userFoundCreatedImages.length} Images</p>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}/board`) }}> {userFoundCollections.length} Boards</p>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}/following`) }}>{userFollowing.length} Following</p>
                        <p className='profile_li' onClick={() => { navigate(`/home/${params.username}/followedBy`) }}>{userFollowers.length} Followers</p>
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