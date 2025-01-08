import aya from "./assets/aya.jpg";
import "./Card.css";
function Card(){
    return(
        <div className="CardContainer">
            <img src={aya} className="roundpics" alt="aya" width="200px" height="200px"></img>
            <h3 className="username">Aya Daaboul</h3>
            <p className="card_desc">Junior DS and FSW</p>
        </div>
    )
}
export default Card