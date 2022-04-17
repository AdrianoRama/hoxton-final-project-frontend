import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'

export default function UserListItem({ user }) {
    const followUser = useStore(store => store.followUser)
    const setFollowUserFromList = useStore(store => store.setFollowUserFromList)

    const [followed, setFollowed] = useState(false)

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



    return (

        <div className='userList-container'>
            <div className="image__div">
                <img src={user.avatar} alt="" />
            </div>

            <div className='user__info'>
                <h3>{user.name}</h3>
                <p>@{user.username}</p>
            </div>
            <div className="button-container">

                {followed ?
                    (<Button variant="contained" className='userList__follow' style={{
                        color: "black",
                        fontSize: "9px",
                        backgroundColor: 'white',
                        borderRadius: "5rem",
                        width: "4.8rem",
                        fontWeight: "400"
                    }}
                        onClick={(e) => {

                            followUserFunc(user.username)

                        }}
                    >Following</Button>
                    )

                    :
                    (<Button variant="contained" className='userList__follow' style={{
                        color: "black",
                        fontSize: "9px",
                        backgroundColor: 'white',
                        borderRadius: "5rem",
                        width: "4.8rem",
                        fontWeight: "400"
                    }}
                        onClick={() => {
                            followUserFunc(user.username)
                        }}
                    >Follow</Button>
                    )
                }

            </div>
        </div>
    )
}
