import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./profilepage.css"
import { useStore } from "../../Store"


function ProfilePage() {
    const params = useParams()

    const [userFound, setUserFound] = useState(null)


    const [userFoundImages, setUserFoundImages] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4001/users/${params.username}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else setUserFound(data)
            })

    }, [params.username])

    useEffect(() => {
        if (userFound) {
            fetch(`http://localhost:4001/images/${userFound.id}`)
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setUserFoundImages(data)
                    }
                })
        }


    }, [params.username, userFound])

    const user = useStore(store => store.user)

    // if (user) {
    //     navigate('/login')
    // }
    if (!user && !userFound) return <div>You must be logged in to view this page</div>

    return (
        <div className='profileWrapper'>
            {/* <div className="header"></div> */}
            <div className='profile_info'>
                <img className='profile_picture' src={userFound?.avatar} alt="" />
                <h1 className='profile_name'>{userFound?.name}</h1>
                {(user?.username === userFound?.username) ? <button className='editButton'>Edit Profile</button> : <button className='editButton'>Follow</button>}
            </div>
            <div className='profile_main'>
                <div className="profile_options">
                    <ul className='profile_ul'>
                        <li className='profile_li'>{userFoundImages.length} Image</li>
                        <li className='profile_li'>Board</li>
                        <li className='profile_li'>{userFound?._count.following} Following</li>
                        <li className='profile_li'>{userFound?._count.followedBy} Followers</li>
                    </ul>
                </div>
                <div className='profile_imagesContainer'>
                    <div className='profile_savedImages'>
                        <div className='profile_followedUser'>
                            <img src={userFound?.avatar} alt="" />
                            <span className='profile_followingUser'>{userFound?.name}</span>
                            <button>Following</button>
                        </div>
                        <div>
                            <ul>
                                {
                                    userFoundImages.map(image => {
                                        return <li key={image.id}>
                                            <img src={image.link} alt="" />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage