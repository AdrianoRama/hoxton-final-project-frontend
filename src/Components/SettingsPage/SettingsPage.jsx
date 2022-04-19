import React from 'react'
import Header from '../Header/Header'
import "./settings.css"

function SettingsPage() {
    return (
        <div className='settings'>
            <Header setProfVisible={undefined} profVisible={undefined} setAddVisible={undefined} addVisible={undefined} />
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
                <form className='settingsForm'>


                    <label className='form-label'>
                        <span>Name</span>
                        <input
                            id='name'
                            type="text"
                            name='name'

                        />
                    </label>
                    <label className='form-label'>
                        <span>Email</span>
                        <input
                            id='email'
                            type="email"
                            name='email'

                        />
                    </label>
                    <label className='form-label'>
                        <span>Username</span>
                        <input
                            id='username'
                            type="text"
                            name='username'

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
                        <span>Company</span>
                        <input
                            id='company'
                            type="text"
                            name='company'

                        />
                    </label>
                    <label className='form-label'>
                        <span>Role</span>
                        <input
                            id='role'
                            type="text"
                            name='role'

                        />
                    </label>
                    <label className='form-label'>
                        <span >Website</span>
                        <input
                            id='website'
                            type="text"
                            name='website'

                        />
                    </label>
                    <button className='editChanges'>Save Changes</button>


                </form>
            </div>
        </div >
    )
}

export default SettingsPage