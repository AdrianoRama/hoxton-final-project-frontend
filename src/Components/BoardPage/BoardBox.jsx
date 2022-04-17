import { useNavigate, useParams } from "react-router-dom"
import { useStore } from "../../Store"


export default function BoardBox({ collection }) {
    const navigate = useNavigate()
    const params = useParams()
    const setClickedCollection = useStore(store => store.setClickedCollection)


    if (!collection.saved) return null
    return (
        <div onClick={() => {
            navigate(`/home/${params.username}/board/${collection.name}`),
                setClickedCollection(collection)
        }} className="board_box" >
            <div className="board">
                {(collection.saved.length > 0) ? <img src={collection.saved[(collection.saved.length - 1)].image.link} alt="" /> : null}
            </div>
            <div className="board_title">
                <h2>{collection.name}</h2>
                <p>{(collection.saved.length > 0) ? (collection.saved.length) : 0} images</p>
            </div>
        </div>
    )
}