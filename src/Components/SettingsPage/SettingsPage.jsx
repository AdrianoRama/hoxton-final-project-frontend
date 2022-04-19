import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import "./settings.css"
import { useStore } from '../../Store'
import { useNavigate } from "react-router-dom"


function SettingsPage() {

    const [update, setUpdate] = useState(false)

    const navigate = useNavigate()
    const editProfile = useStore(store => store.editProfile)
    const validate = useStore(store => store.validate)
    const user = useStore(store => store.user)

    if (!user) return <h1>Loading...</h1>


    return (
        <div className='settings'>
            <div className='settingsFormWrapper'>
                <h1 className='settingsTitle'>Settings</h1>
                <button className='editAvatarButton'>
                    <div className='editAvatar'>
                        <img src="https://st.savee-cdn.com/img/default-avatar-4.jpg" alt="" />
                    </div>
                    <div>
                        <span className='editSpan'>Edit</span>
                    </div>
                    <input type="file" />
                </button>
                <form className='settingsForm' 
                    onSubmit={(e) => {
                        e.preventDefault()
                        const name = e.target.name.value
                        const email = e.target.email.value
                        const username = e.target.username.value
                        const password = e.target.password.value
                        const profilePicture = e.target.profilePicture.value
                        editProfile(name, email, username, password, profilePicture)
                        setUpdate(true)            
                    }}
                >
                    { update ? <span className='ProfileUpdated.' style={{color: "blue"}}>Profile updated.</span> : null } 
                    <label className='form-label'>
                        <span>Name</span>
                        <input
                            id='name'
                            type="text"
                            name='name'
                            defaultValue={user.name}
                        />
                    </label>
                    <label className='form-label'>
                        <span>Email</span>
                        <input
                            id='email'
                            type="email"
                            name='email'
                            defaultValue={user.email}
                        />
                    </label>
                    <label className='form-label'>
                        <span>Username</span>
                        <input
                            id='username'
                            type="text"
                            name='username'
                            defaultValue={user.username}
                        />
                    </label>
                    <label className='form-label'>
                        <span>Password</span>
                        <input
                            id='password'
                            type="password"
                            name='password'
                        />
                    </label>
                    <label className='form-label'>
                        <span>Profile Picture</span>
                        <input
                            id='profilePicture'
                            type="text"
                            name='profilePicture'
                            defaultValue={user.avatar}
                        />
                    </label>
                    <button className='editChanges'>Save Changes</button>

                </form>
            </div>
        </div >
    )
}

export default SettingsPage