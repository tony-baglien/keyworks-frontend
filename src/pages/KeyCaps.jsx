import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { updatekeyCapData, toggleLoading } from "../features/urls/keycapUrlSlice";
import Loading from "../components/loading/Loading";
import { CSSTransition } from "react-transition-group";

import Card from "../components/Cards/KeycapCard";

const KeyCaps = () => {
    const dispatch = useDispatch();
    let keyCapUrl = useSelector(state => state.keycapUrl.value);
    let loadingState = useSelector(state => state.keycapUrl.loading);
    let keyCapData = useSelector(state  => state.keycapUrl.keyCapData);
    useEffect(() => {
        const getKeyCapList = async () => {
            const url = keyCapUrl;
            try {
                const resp = await fetch(url, { mode: "cors" });
                if (resp.ok) {
                    const data = await resp.json();
                    dispatch(updatekeyCapData(data.keycaps));
                    dispatch(toggleLoading(false))                  
                }
            } catch (err) {
                console.error(err);
            }
        };
        getKeyCapList();
    }, [keyCapUrl, dispatch]);
    
    return (
    <>
        <CSSTransition in={loadingState} appear={true} timeout={1000} classNames={"loading-container"} unmountOnExit={true}>
            <Loading/> 
        </CSSTransition>
        <CSSTransition in={!loadingState} appear = {true} timeout={1000} classNames={"page"}>
            <div className="page page--keycaps">
                <div className="card-container">
                    {keyCapData.map((keycap) => {
                        return <Card key={keycap.id} data={keycap} />;
                    })}
                </div>
            </div>
       </CSSTransition>
    </>
    )
};

export default KeyCaps;
