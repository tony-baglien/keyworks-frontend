import "./mobileMenu.scss";

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

export default MobileMenu;
