import { useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import Card from "../components/Cards/FullkitCard";
import { updateFullbuildData, toggleLoading } from "../features/urls/fullkitUrlSlice";
import Loading from "../components/loading/Loading";
import { CSSTransition } from "react-transition-group";
const FullKits = () => {
    const dispatch = useDispatch();
    let fullkitUrl = useSelector(state => state.fullkitUrl.value);
    let loadingState = useSelector(state => state.fullkitUrl.loading);
    let fullkitData = useSelector(state  => state.fullkitUrl.fullkitData);
    useEffect(() => {
        const getFullKitList = async () => {
            const url = fullkitUrl
            try {
                const resp = await fetch(url, { mode: "cors" });
                if (resp.ok) {
                    const data = await resp.json();
                    dispatch(updateFullbuildData(data.fullkits));
                    dispatch(toggleLoading(false))                  
                }
            } catch (err) {
                console.error(err);
            }
        };
        getFullKitList();
    }, [fullkitUrl, dispatch]);

    return (
        <>
            <CSSTransition in={loadingState} appear={true} timeout={1000} classNames={"loading-container"} unmountOnExit={true}>
                <Loading/> 
            </CSSTransition>
            <CSSTransition in={!loadingState} appear = {true} timeout={1000} classNames={"page"}>
            <div className="page page--full-kits">
                <div className={`card-container ${loadingState ? "hidden":""}`}>
                    {fullkitData.map((kit) => {
                        return <Card key={kit.id} data={kit} />;
                    })}
                </div>
            </div>
            </CSSTransition>
        </>
    );
};

export default FullKits;
