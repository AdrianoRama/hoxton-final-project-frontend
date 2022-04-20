import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UsersSearch.css'
import UsersSearchedItem from './UsersSearchedItem'
export default function UsersSearched() {
    const params = useParams()
    const [usersFromServer, setUsersFromServer] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4001/search?q=${params.q}&type=users`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setUsersFromServer(data)
                }
            })
    }, [params.q])

    return (
        <div className='all-following'>{
            usersFromServer.map(user => <UsersSearchedItem follow={user} key={user.id} />)
        }</div>
    )
}
