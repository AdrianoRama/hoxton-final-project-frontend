import { AddBoxOutlined, NotificationsNoneOutlined, Search } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
import { useStore } from "../../Store"
import { Badge } from '@material-ui/core'


export default function Header({ setProfVisible, profVisible, setAddVisible, addVisible }) {
    const navigate = useNavigate()
    let user = useStore(store => store.user)
    const changeHeaderColor = useStore(store => store.changeHeaderColor)
    const setShowUploadForm = useStore(store => store.setShowUploadForm)

    function logout() {
        navigate('/welcome')
        user = null
        localStorage.clear()
    }

    return (
        <div className={changeHeaderColor ? 'app__header' : 'app__header-black'}>
            <div onClick={() => { navigate('/home') }} className="app__logo-header">
                <svg fill="currentColor" height="30" viewBox="0 0 36 30" width="46" className="sc-1f1ll8d-4 gFhdfh"><path d="M3.88552,10.923 C4.04654,11.2388 4.28095,11.5121 4.5694,11.7201 C4.87163,11.9319 5.21122,12.0854 5.57051,12.1728 C5.9591,12.2718 6.35879,12.3214 6.75998,12.3204 C7.05862,12.3189 7.35676,12.2959 7.65205,12.2515 C7.96119,12.2081 8.26194,12.1185 8.54411,11.9858 C8.8141,11.8606 9.0515,11.6754 9.23794,11.4446 C9.42288,11.2152 9.51538,10.9232 9.51547,10.5688 C9.51547,10.1884 9.39322,9.88004 9.14871,9.64374 C8.90421,9.40745 8.5838,9.21065 8.18747,9.05333 C7.74894,8.88293 7.29836,8.74479 6.83941,8.64004 C6.33705,8.52194 5.82825,8.39072 5.313,8.2464 C4.7883,8.11663 4.27194,7.95563 3.76672,7.76428 C3.28357,7.58474 2.82944,7.33607 2.41872,7.02614 C2.02004,6.7219 1.6921,6.33592 1.45726,5.89449 C1.21256,5.44183 1.0903,4.89404 1.0905,4.25112 C1.0905,3.52967 1.24578,2.90316 1.55636,2.37159 C1.86103,1.84639 2.27693,1.39315 2.77533,1.04317 C3.29197,0.682217 3.86931,0.415613 4.48022,0.255879 C5.10038,0.0873253 5.74033,0.00129821 6.38331,5.59669e-05 C7.10099,-0.00246428 7.81642,0.0801413 8.51437,0.246108 C9.19491,0.410317 9.79953,0.676013 10.3283,1.0432 C10.8537,1.40723 11.285,1.8894 11.5871,2.45039 C11.8974,3.02113 12.0527,3.71324 12.0529,4.52673 L9.0397,4.52673 C9.01309,4.10696 8.92388,3.75926 8.77208,3.48362 C8.63018,3.21905 8.42189,2.99534 8.16737,2.83413 C7.90281,2.67153 7.61064,2.55813 7.30515,2.4995 C6.95581,2.43154 6.60048,2.39857 6.24451,2.40108 C5.99135,2.40139 5.73891,2.42777 5.49124,2.47982 C5.24814,2.52922 5.0163,2.62269 4.80732,2.75552 C4.60622,2.88293 4.43405,3.05052 4.30177,3.24761 C4.16953,3.44443 4.10346,3.69373 4.10354,3.9955 C4.10354,4.27105 4.15642,4.4941 4.26216,4.66465 C4.3679,4.8352 4.57605,4.99265 4.8866,5.13699 C5.19695,5.28152 5.62647,5.42585 6.17516,5.56997 C6.7234,5.7145 7.44037,5.89819 8.32605,6.12105 C8.59027,6.17365 8.95702,6.26878 9.4263,6.40643 C9.92222,6.55688 10.3931,6.77904 10.8238,7.06574 C11.2863,7.36771 11.6861,7.77114 12.0232,8.27602 C12.3603,8.78091 12.5288,9.42706 12.5287,10.2145 C12.5341,10.8314 12.4057,11.4423 12.152,12.0056 C11.8968,12.5619 11.5131,13.0508 11.032,13.4324 C10.5364,13.8328 9.9218,14.1444 9.18837,14.3673 C8.45494,14.5901 7.60583,14.7017 6.64103,14.7019 C5.87524,14.7035 5.1124,14.6076 4.37121,14.4165 C3.63774,14.2264 2.99016,13.9279 2.42847,13.5209 C1.86606,13.1137 1.40773,12.5812 1.09033,11.9661 C0.759889,11.3363 0.601299,10.5884 0.614562,9.72248 L3.62781,9.72248 C3.62781,10.1948 3.71371,10.595 3.88552,10.923 Z M20.8148,8.95492 L19.0307,3.7985 L18.991,3.7985 L17.1474,8.95492 L20.8147,8.95492 L20.8148,8.95492 Z M20.6364,0.334613 L25.9294,14.3869 L22.6981,14.3869 L21.6276,11.2576 L16.3346,11.2576 L15.2245,14.3869 L12.0925,14.3869 L17.4448,0.334613 L20.6365,0.334613 L20.6364,0.334613 Z M4.57932,29.9999 L0,15.9477 L3.19169,15.9477 L6.34365,25.8276 L6.38331,25.8276 L9.57499,15.9477 L12.7864,15.9477 L8.08816,30 L4.57932,30 L4.57932,29.9999 Z M24.1849,15.9476 L24.1849,18.5458 L16.7114,18.5458 L16.7114,21.557 L23.5703,21.557 L23.5703,23.9581 L16.7114,23.9581 L16.7114,27.4021 L24.3435,27.4021 L24.3435,30 L13.599,30 L13.599,15.9476 L24.185,15.9477 L24.1849,15.9476 Z M35.8412,15.9476 L35.8412,18.5458 L28.3677,18.5458 L28.3677,21.557 L35.2266,21.557 L35.2266,23.9581 L28.3677,23.9581 L28.3677,27.4021 L36,27.4021 L36,30 L25.2553,30 L25.2553,15.9476 L35.8413,15.9477 L35.8412,15.9476 Z" fill="currentColor" fill-rule="evenodd"></path></svg>
            </div>
            <div className="app__header-nav">
                <div onClick={() => { navigate('/home/search') }} className="app__header-search">
                    <Search className='nav-search' />
                </div>
                <div className="app__header-notif">
                    <Badge className='notif-nr' badgeContent={0} color="primary"></Badge>
                    <NotificationsNoneOutlined className='nav-notif' />
                </div>
                <div className="app__header-add">
                    <AddBoxOutlined onMouseOver={() => { setAddVisible(true), setProfVisible(false) }} className='nav-add' />
                    <div className={addVisible ? 'add-drop' : 'add-drop-off'}>
                        <p onClick={() => {
                            setShowUploadForm(true)
                        }}>Upload</p>
                        <p>New board</p>
                    </div>
                </div>
                <div className="app__header-prof">
                    <img onMouseOver={() => { setProfVisible(true), setAddVisible(false) }} src={user?.avatar} alt="" onClick={() => { navigate(`/home/${user?.username}`) }} />
                    <div className={profVisible ? 'prof-drop' : 'prof-drop-off'}>
                        <div onClick={() => { navigate(`/home/${user?.username}`) }} className="viewProf">
                            <h3>{user?.name}</h3>
                            <p>View profile</p>
                        </div>
                        <p onClick={() => navigate('/home/settings')} className='drop-settings'>Settings</p>
                        <p onClick={logout} className='drop-logOut'>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
