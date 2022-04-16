import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import FollowingItem from '../Following/FollowingItem'

export default function UserFollowers() {
    const [followers, setFollowers] = useState([])
    const userFound = useStore(store => store.userFound)

    useEffect(() => {
        fetch(`http://localhost:4001/getFollowers/${userFound?.id}`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setFollowers(data)
                }
            })
    }, [userFound])

    return (
        <div className='all-following'>
            {followers.map(follower => <FollowingItem follow={follower} key={follower.id} />)}
        </div>
    )
}
