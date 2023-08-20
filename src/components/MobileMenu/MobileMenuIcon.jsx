import "./mobileMenuIcon.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const MobileMenuIcon = ({ onMenuClick }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleMenuClick = () => {
        setNavOpen(!navOpen);
        onMenuClick();
    };
    return (
        <FontAwesomeIcon
            className="mobile_menu"
            icon={navOpen ? faX : faBars}
            onClick={handleMenuClick}
        />
    );
};

MobileMenuIcon.propTypes = {
    onMenuClick: PropTypes.func,
};

export default MobileMenuIcon;
