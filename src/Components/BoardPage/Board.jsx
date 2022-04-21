import { Add } from '@material-ui/icons';
import './Board.css';
import BoardBox from './BoardBox';

import { useStore } from "../../Store"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateBoard from '../CreateBoard/CreateBoard';


export default function Board() {

    const params = useParams()
    const [board, setBoard] = useState(false)

    const userFound = useStore(store => store.userFound)
    const user = useStore(store => store.user)
    const userFoundCollections = useStore(store => store.userFoundCollections)
    const getUserByUsername = useStore(store => store.getUserByUsername)

    useEffect(() => {
        getUserByUsername(params.username)
    }, [params.username])



    return (<>

        {board ? <CreateBoard setBoard={setBoard} /> : null}

        <div className="board__container">
            {user?.id === userFound?.id ? <div className="board_box" onClick={() => { setBoard(true) }}>
                <div className="board_addBoard">
                    <Add className='plus' style={{ fontSize: '120px' }} />
                </div>
                <div className="board_title">
                    <h2>NEW BOARD</h2>
                </div>
            </div> : null}

            {userFoundCollections?.map((collection) => {
                return <BoardBox collection={collection} key={collection.id} />
            })}
        </div>
    </>
    )
}