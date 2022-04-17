import React, { useEffect } from 'react'
import UserListItem from './UserListItem'
import './UserList.css'
import { useStore } from '../../Store'

export default function UserList({ imageId }) {
    const showUserList = useStore(store => store.showUserList)
    const getUsersWhoSavedImage = useStore(store => store.getUsersWhoSavedImage)
    const usersWhoSavedImage = useStore(store => store.usersWhoSavedImage)
    useEffect(() => {
        getUsersWhoSavedImage(imageId)
    }, [])
    return (
        <div className={showUserList ? 'app__userList' : 'app__userList__off'}>
            {usersWhoSavedImage.map(u => <UserListItem key={u.id} user={u} />)}


        </div>
    )
}
