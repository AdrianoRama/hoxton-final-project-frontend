import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store'


export default function UsersSearchedItem({ follow }) {
    const navigate = useNavigate()
    const followingForUser = useStore(store => store.followingForUser)
    const user = useStore(store => store.user)
    const getFollowingForUser = useStore(store => store.getFollowingForUser)

    const followUser = useStore(store => store.followUser)
    const unfollowUser = useStore(store => store.unfollowUser)

    const [followed, setFollowed] = useState(false)

    useEffect(() => {
        if (user) getFollowingForUser(user.id)
    }, [user])

    console.log(followingForUser)

    useEffect(() => {

        const alreadyFollowsUser = followingForUser.find(userFromData => userFromData.id === follow.id)
        if (alreadyFollowsUser) {
            setFollowed(true)
        } else {
            setFollowed(false)
        }
    }, [followingForUser])

    return (
        <div className='followingItem__container'>
            <div className='profile_followedUser' key={follow.id}>
                <img src={follow.avatar} alt="" onClick={() => navigate(`/home/${follow.username}`)} />
                <span className='profile_followingUser' onClick={() => navigate(`/home/${follow.username}`)} >{follow.name}</span>
                {followed ? <button onClick={() => { unfollowUser(follow.username).then(data => {
                    if(data.error) {
                        alert(data.error)
                    } else {
                        setFollowed(false)
                    } } )
                
                    console.log(follow.username)
                
                }
                } >Following</button>
                 : <button onClick={() => { followUser(follow.username).then(data => {
                    if(data.error) {
                        alert(data.error)
                    } else {
                        setFollowed(true)
                    } } ) }} >Follow</button>}
            </div>
            <div className='followingItem__user-photos'>
                {
                    follow.images?.map(photo => {
                        return <img src={photo.link} alt="" key={photo.id} />
                    })
                }
            </div>
        </div>
    )
}
