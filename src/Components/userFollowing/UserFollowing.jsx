import React, { useEffect, useState } from 'react'
import { useStore } from "../../Store"
import FollowingItem from '../Following/FollowingItem'


function UserFollowing() {

    const [following, setFollowing] = useState([])
    const [followingLogged, setFollowingLogged] = useState([])

    const userFound = useStore(store => store.userFound)
    const user = useStore(store => store.user)

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

    }, [userFound?.id])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4001/getFollowing/${user?.id}`)
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setFollowingLogged(data)
                    }
                })
        }

    }, [user?.id])


    return (
        <div className="all-following">
            {
                following.map(follow => {
                    return (
                        <FollowingItem key={follow.id} follow={follow} following={followingLogged} />
                    )
                })
            }
        </div>
    )
}

export default UserFollowing