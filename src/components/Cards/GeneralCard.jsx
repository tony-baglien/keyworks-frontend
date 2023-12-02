import ReactCardFlip from "react-card-flip";
import "./card.scss";
import { useState } from "react";

const Card = () => {
    const [flip, setFlip] = useState(false);

    const toggleFlip = () => setFlip(!flip);

    return (
        <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
            <div className=" card card_front" onClick={toggleFlip}>
                <div className="card_front_img-container"></div>
                <h3 className="card_front_name"></h3>
            </div>
            <div className="card card_back" onClick={toggleFlip}>
                <p>This is the back</p>
            </div>
        </ReactCardFlip>
    );
};

export default Card;
