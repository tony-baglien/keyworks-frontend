import { useEffect, useState } from "react";
import "./carousel.scss";
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = ["src/assets/img/fullKitAngle.svg","src/assets/img/fullKitProfile.svg","src/assets/img/keySwitch.svg"]

    const infiniteScroll = () => {
        if (activeIndex === data.length - 1) {
            return setActiveIndex(0);
        } 
        return setActiveIndex(activeIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {infiniteScroll()},3000)
        return () => clearInterval(interval)
    })

    return (
        <div className="carousel_container">
            {data.map((item, index) => {
                return (
                    <div key={index} className="carousel_item" style={{transform: `translate(-${activeIndex * 100}%)`}}>
                        <img src={item} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel