import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStore } from "../../Store"
import Header from '../Header/Header'


export default function Home({ setProfVisible, profVisible, setAddVisible, addVisible }) {
    const user = useStore(store => store.user)

    return (
        <div>
            <Header setProfVisible={setProfVisible} profVisible={profVisible} setAddVisible={setAddVisible} addVisible={addVisible} />
            <Outlet />
        </div>
    )
}
