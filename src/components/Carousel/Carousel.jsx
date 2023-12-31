import { useEffect, useState } from "react";
import "./Carousel.scss";
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = ["../img/fullKitAngle.svg","../img/fullKitProfile.svg","../img/keySwitch.svg"]

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