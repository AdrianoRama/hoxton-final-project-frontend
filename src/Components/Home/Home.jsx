import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStore } from "../../Store"
import Header from '../Header/Header'


export default function Home() {
    const user = useStore(store => store.user)
    console.log(user)
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
