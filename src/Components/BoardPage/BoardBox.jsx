export default function BoardBox({ collection }) {

    if (!collection.saved) return null
    return (
        <div className="board_box" >
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