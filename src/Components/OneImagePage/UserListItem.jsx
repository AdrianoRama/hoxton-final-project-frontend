import { Button } from '@mui/material'
import React from 'react'

export default function UserListItem({ user }) {
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
                <Button variant="contained" className='userList__follow' style={{
                    color: "black",
                    fontSize: "9px",
                    backgroundColor: 'white',
                    borderRadius: "5rem",
                    width: "4.8rem",
                    fontWeight: "400"
                }}>Follow</Button>
            </div>
        </div>
    )
}
