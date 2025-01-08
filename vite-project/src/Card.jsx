import aya from "./assets/aya.jpg";
import "./Card.css";
function Card(){
    return(
        <div className="Card">
            <img src={aya} className="roundpics" alt="aya"></img>
            <h3 className="username">Aya Fa</h3>
            <p className="card_desc">Junior DS and FSW</p>
        </div>
    )
}
export default Card