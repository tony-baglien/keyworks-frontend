import ReactCardFlip from "react-card-flip";
import "./card.scss";
import { useState } from "react";

const KeyCapCard = ({ data }) => {
    const [flip, setFlip] = useState(false);

    const toggleFlip = () => setFlip(!flip);

    return (
        <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
            <div className=" card card_front" onClick={toggleFlip}>
                <div className="card_front_img-container">
                    <img
                        className="card_front_img"
                        src="https://via.placeholder.com/300x300"
                    />  
                </div>
                <h3 className="card_front_name">{data.name}</h3>
            </div>
            <div className="card card_back" onClick={toggleFlip}>
                <ul className="card_back--inner fullkit">
                    <li>
                        <span>Material: </span>
                        {data.material}
                    </li>
                    <li>
                        <span>Profile: </span>
                        {data.profile}
                    </li>
                    <li>
                        <span>Legend:</span>
                        {data.legend}
                    </li>
                    <li>
                        <span>Price: </span>
                        ${data.price}
                    </li>
                </ul>
                <a className="button" role="button" href="#">
                    More Info
                </a>
            </div>
        </ReactCardFlip>
    );
};

export default KeyCapCard;
