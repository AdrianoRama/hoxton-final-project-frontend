import React from 'react'

export default function HeaderPeople({ user }) {
    return (
        <div className="header-people">
            <img src={user.avatar} alt="" />
        </div>
    )
}
