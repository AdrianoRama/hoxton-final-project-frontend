import React from 'react'

export default function UsersSearchedItem({ follow }) {
    return (
        <div className='followingItem__container'>
            <div className='profile_followedUser' key={follow.id}>
                <img src={follow.avatar} alt="" />
                <span className='profile_followingUser'>{follow.name}</span>
                <button>{'Following'}</button>
            </div>
            <div className='followingItem__user-photos'>
                {
                    follow.images?.map(photo => {
                        return <img src={photo.link} alt="" key={photo.id} />
                    })
                }
            </div>
        </div>
    )
}
