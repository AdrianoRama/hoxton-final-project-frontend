import React, { useEffect, useState } from 'react'



function UserFollowing({ userFound }) {

    const [following, setFollowing] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4001/getFollowing/${userFound.id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setFollowing(data)
                }
            })
    }, [userFound])


    return (
        <ul>
            {
                following.map(follow => {
                    return <div className='profile_followedUser'>
                        <img src={follow.avatar} alt="" />
                        <span className='profile_followingUser'>{follow.name}</span>
                        <button>Following</button>
                    </div>
                })
            }
        </ul>

    )
}

export default UserFollowing