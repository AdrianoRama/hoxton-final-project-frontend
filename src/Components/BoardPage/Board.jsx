import { Add, AddAlertOutlined } from '@material-ui/icons';
import './Board.css';

export default function Board() {
    const image = null;
    return (
        <div className="board__container">
            <div className="board_box">
                <div className="board_addBoard">
                    {/* <svg fill="currentColor" height="71" viewBox="0 0 69 71" width="69"><path d="M29.4846 71H39.5154V40.3966H69V30.6035H39.5154V0H29.4846V30.6035H0V40.3966H29.4846V71Z" fill="currentColor"></path></svg> */}
                    <Add className='plus' style={{ fontSize: '120px' }}/>
                </div>
                <div className="board_title">
                    <h2>NEW BOARD</h2>
                </div>
            </div>

            <div className="board_box" >
                <div className="board">
                    <img src="https://dr.savee-cdn.com/things/6/1/71a575906dc64b79bc109f.jpg" alt=""/>
                </div>
                <div className="board_title">
                    <h2>Count</h2>
                    <p>0 images</p>
                </div>
            </div>

            <div className="board_box" >
                <div className="board">
                    {(image) ? <img src={image} alt=""/> : null }
                </div>
                <div className="board_title">
                    <h2>Count</h2>
                    <p>0 images</p>
                </div>
            </div>

            <div className="board_box" >
                <div className="board">
                    <img src="https://dr.savee-cdn.com/things/6/1/71a575906dc64b79bc109f.jpg" alt=""/>
                </div>
                <div className="board_title">
                    <h2>Count</h2>
                    <p>0 images</p>
                </div>
            </div>

            <div className="board_box" >
                <div className="board">
                    {(image) ? <img src={image} alt=""/> : null }
                </div>
                <div className="board_title">
                    <h2>Count</h2>
                    <p>0 images</p>
                </div>
            </div>


            <div className="board_box" >
                <div className="board">
                    <img src="https://dr.savee-cdn.com/things/6/1/71a575906dc64b79bc109f.jpg" alt=""/>
                </div>
                <div className="board_title">
                    <h2>Count</h2>
                    <p>0 images</p>
                </div>
            </div>

            <div className="board_box" >
                <div className="board">
                    {(image) ? <img src={image} alt=""/> : null }
                </div>
                <div className="board_title">
                    <h2>Count</h2>
                    <p>0 images</p>
                </div>
            </div>

        </div>
    )
}