import React, { useEffect, useState } from 'react'
import { useStore } from "../../Store"
import FollowingItem from '../Following/FollowingItem'


function UserFollowing() {

    const [following, setFollowing] = useState([])

    const userFound = useStore(store => store.userFound)

    useEffect(() => {
        fetch(`http://localhost:4001/getFollowing/${userFound?.id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setFollowing(data)
                }
            })
    }, [userFound?.id])


    return (
        <div className="all-following">
            {
                following.map(follow => {
                    return (
                        <FollowingItem key={follow.id} follow={follow} />
                    )
                })
            }
        </div>
    )
}

export default UserFollowing