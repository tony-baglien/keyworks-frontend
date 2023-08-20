import "./navBar.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuIcon from "../MobileMenu/MobileMenuIcon";

import { useState } from "react";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleMenuClick = () => {
        setNavOpen(!navOpen);
    };
    return (
        <header>
            <div className="nav_area">
                <h2 className="logo">KeyWorks</h2>
                <MobileMenuIcon onMenuClick={handleMenuClick} />
            </div>
            <MobileMenu toggleOpen={navOpen} />
        </header>
    );
};

export default NavBar;
