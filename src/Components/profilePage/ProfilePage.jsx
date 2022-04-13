import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./profilepage.css"

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



    return (
        <div className='profileWrapper'>
            <div className="header">Header</div>
            <div className='profile_info'>
                <img className='profile_picture' src={userFound?.avatar} alt="" />
                <h1 className='profile_name'>{userFound?.name}</h1>
                <button className='editButton'>Edit Profile</button>
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
                <div className='profile_savedImages'>
                    <ul>
                        {
                            userFoundImages.map(image => {
                                return <li>
                                    <img src={image.link} alt="" />
                                </li>
                            })
                        }
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default ProfilePage