import { Button } from '@mui/material'
import React from 'react'

export default function UserListItem() {
    return (
        <div className='userList-container'>
            <div className="image__div">
                <img src="https://avatars.dicebear.com/api/avataaars/Arita.svg" alt="" />
            </div>

            <div className='user__info'>
                <h3>Arita</h3>
                <p>@aritaa</p>
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
