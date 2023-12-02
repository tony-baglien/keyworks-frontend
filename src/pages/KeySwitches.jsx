import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { updatekeySwitchData, toggleLoading } from "../features/urls/keyswitchUrlSlice";
import Card from "../components/Cards/KeySwitchCard";
import Loading from "../components/loading/Loading";
import { CSSTransition } from "react-transition-group";

const KeySwitches = () => {
    const dispatch = useDispatch();
    let keyswitchUrl = useSelector(state => state.keyswitchUrl.value);
    let loadingState = useSelector(state => state.keyswitchUrl.loading);
    let keyswitchData = useSelector(state  => state.keyswitchUrl.keySwitchData);
    useEffect(() => {
        const getKeyswitchList = async () => {
            const url = keyswitchUrl;
            try {
                const resp = await fetch(url, { mode: "cors" });
                if (resp.ok) {
                    const data = await resp.json();
                    dispatch(updatekeySwitchData(data.keySwitches));
                    dispatch(toggleLoading(false))                  
                }


            } catch (err) {
                console.error(err);
            }
        };
        getKeyswitchList();
    }, [dispatch, keyswitchUrl]);
    return (
    <>
    <CSSTransition in={loadingState} appear={true} timeout={1000} classNames={"loading-container"} unmountOnExit={true}>
        <Loading/> 
    </CSSTransition>
    <CSSTransition in={!loadingState} appear = {true} timeout={1000} classNames={"page"}>
        <div className="page page--key-switches">
            <div className={`card-container ${loadingState ? "hidden":""}`} >
                {keyswitchData.map((keySwitch) => {
                    console.log(keySwitch);
                    return <Card key={keySwitch.id} data={keySwitch} />;
                })
            }
            </div>
        </div>
    </CSSTransition>
    </>
    )
};

export default KeySwitches;
