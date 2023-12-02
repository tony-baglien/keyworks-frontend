import "./navBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import menuItems from "./subComponents/menuItems";
import Filter from "./subComponents/Filter/Filter";
import { useEffect, useRef, useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const navRef = useRef();
    const headerRef = useRef();
    const location = useLocation();
    const [hiddenFilter,setHiddenFilter] = useState(false);

    const toggleNavBar = () => {
        navRef.current.classList.toggle("responsive");
    };

    useEffect(() => {
        //hide full-kits cause I did not add the filter for it. 
        if (location.pathname === "/full-kits") {
            setHiddenFilter(true)
        }
         else if (location.pathname !== "/") {
            headerRef.current.classList.add("alternative");
            setHiddenFilter(false);
        
        } else {
            headerRef.current.classList.remove("alternative");
            setHiddenFilter(true)
        }
    }, [location]);

    return (
        <header ref={headerRef}>
            <h1 className="logo">KeyWorks</h1>
            <nav ref={navRef}>
                {menuItems.map((item) => (
                    <Link key={item.id} to={item.path} onClick={toggleNavBar}>
                        {" "}
                        {item.name}
                    </Link>
                ))}
                <FontAwesomeIcon
                    onClick={toggleNavBar}
                    className="mobile_menu_button"
                    icon={faX}
                />
            </nav>
            <FontAwesomeIcon
                isHidden={hiddenFilter}
                onClick={toggleNavBar}
                className="mobile_menu_button"
                icon={faBars}
            />
            <Filter isHidden={hiddenFilter}/>
        </header>
    );
};

export default NavBar;
