import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import KeyCaps from "./pages/keyCaps";
import KeySwitches from "./pages/keySwitches";
import FullKits from "./pages/FullKits";
//SASS RESET
import "./sassStyles/main.scss";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/keycaps" element={<KeyCaps />} />
                <Route path="/key-switches" element={<KeySwitches />} />
                <Route path="/full-kits" element={<FullKits />} />
            </Routes>
        </>
    );
}
