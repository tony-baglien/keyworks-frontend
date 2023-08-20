import "./mobileMenu.scss";
import PropTypes from "prop-types";

import menuItems from "./subComponents/menuItems";

const MobileMenu = ({ toggleOpen }) => {
    return (
        toggleOpen && (
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </nav>
        )
    );
};

MobileMenu.propType = {
    toggleOpen: PropTypes.bool,
};

export default MobileMenu;
