import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'
import FollowingItem from '../Following/FollowingItem'

export default function UserFollowers() {
    const [followers, setFollowers] = useState([])
    const user = useStore(store => store.user)
    const userFound = useStore(store => store.userFound)
    const setUserFollowsFunction = useStore(store => store.setUserFollowsFunction)

    useEffect(() => {
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
    }, [userFound, user])

    return (
        <div className='all-following'>
            {followers.map(follower => <FollowingItem follow={follower} key={follower.id} />)}
        </div>
    )
}
