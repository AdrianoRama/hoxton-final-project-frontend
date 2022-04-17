import React from 'react'
import UserListItem from './UserListItem'
import './UserList.css'
import { useStore } from '../../Store'

export default function UserList() {
    const showUserList = useStore(store => store.showUserList)
    return (
        <div className={showUserList ? 'app__userList' : 'app__userList__off'}>
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
        </div>
    )
}
