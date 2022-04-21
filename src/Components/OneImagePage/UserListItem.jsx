import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store'

export default function UserListItem({ u }) {
    const followUser = useStore(store => store.followUser)
    const setFollowUserFromList = useStore(store => store.setFollowUserFromList)
    const user = useStore(store => store.user)
    const [userFollowsList, setUserFollowsList] = useState([])
    const [followed, setFollowed] = useState(false)
    const navigate = useNavigate()


    function followUserFunc(username) {
        followUser(username).then(data => {
            if (data.error) {
                alert(data.error)
                setFollowed(false)
            } else {
                setFollowUserFromList(data)
                setFollowed(true)
            }
        })
    }

    useEffect(() => {
        fetch(`http://localhost:4001/getFollowing/${user?.id}`).then(res => res.json()).then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                setUserFollowsList(data)
                const alreadyFollowsUser = data.find(userFromData => userFromData.id === u.id)
                if (alreadyFollowsUser) {
                    setFollowed(true)
                } else {
                    setFollowed(false)
                }
            }
        })
    }, [followed])

    return (

        <div className='userList-container'>
            <div className="image__div">
                <img src={u.avatar} alt="" onClick={() => navigate(`/home/${u.username}`)} />
            </div>

            <div className='user__info' onClick={() => navigate(`/home/${u.username}`)} >
                <h3>{u.name}</h3>
                <p>@{u.username}</p>
            </div>
            <div className="button-container">


                <Button variant="contained" className='userList__follow' style={{
                    color: "black",
                    fontSize: "9px",
                    backgroundColor: 'white',
                    borderRadius: "5rem",
                    width: "4.8rem",
                    fontWeight: "400"
                }}
                    onClick={(e) => {

                        followUserFunc(u.username)
                        console.log(u.username)

                    }}
                >{followed ? 'Following' : 'Follow'}</Button>


            </div>
        </div>
    )
}
