import React from 'react'
import "./profilepage.css"

function ProfilePage() {
    return (
        <div className='profileWrapper'>
            <div className="header">Header</div>
            <div className='profile_info'>
                <img className='profile_picture' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="" />
                <h1 className='profile_name'>Denis</h1>
                <button className='Edit your profile'>Edit profile</button>
            </div>
            <div className='profile_main'>
                <div className="profile_options">
                    <ul className='profile_ul'>
                        <li className='profile_li'>Image</li>
                        <li className='profile_li'>Board</li>
                        <li className='profile_li'>Following</li>
                        <li className='profile_li'>Followers</li>
                    </ul>
                </div>
                <div className='profile_savedImages'>
                    <img src="https://dr.savee-cdn.com/things/5/9/c3ac6cd4c7d721314c06ce.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default ProfilePage