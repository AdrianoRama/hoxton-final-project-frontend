import { Add } from '@material-ui/icons';
import './Board.css';
import BoardBox from './BoardBox';

import { useStore } from "../../Store"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Board() {

    const params = useParams()

    const userFound = useStore(store => store.userFound)
    const userFoundCollections = useStore(store => store.userFoundCollections)
    const getUserByUsername = useStore(store => store.getUserByUsername)

    useEffect(() => {
        getUserByUsername(params.username)
    }, [params.username])


    return (
        <div className="board__container">
            <div className="board_box">
                <div className="board_addBoard">
                    <Add className='plus' style={{ fontSize: '120px' }}/>
                </div>
                <div className="board_title">
                    <h2>NEW BOARD</h2>
                </div>
            </div>

            {userFoundCollections?.map((collection) => {
                return <BoardBox collection={collection} key={collection.id} />
            })}
        </div>
    )
}