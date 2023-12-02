import "./filter.scss"
import { useLocation } from "react-router-dom"
import { faFilter} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector, useDispatch } from 'react-redux'
import { changeKeycapUrl } from "../../../../features/urls/keycapUrlSlice"
import { changeKeyswitchUrl } from "../../../../features/urls/keyswitchUrlSlice"
import { toggleMenu } from "../../../../features/filter/filterSlice"
import KeySwitchMenu from "./filterMenu/KeySwitchMenu"
import KeyCapMenu from "./filterMenu/KeycapMenu"

const Filter = ({isHidden}) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const selectMenu = () => {
        if (location.pathname.includes("keycaps")) {
            return <KeyCapMenu onFilterSubmit={handleFilterSubmit}/>
        } else {
            return <KeySwitchMenu onFilterSubmit={handleFilterSubmit}/>
        }
    }

    const handleFilterSubmit = (checkedArray,type) => {
        //cycle through array
        let filterObj = {};
        checkedArray.forEach(item => {
            //cycle through object
            for (const [key, value] of Object.entries(item)) {
                //if key exists, push value to array, else create key and add value
                key in filterObj ? filterObj[key].push(value) : filterObj[key] = [value]
            }
        })
        // create url
        const urlWithParams = new URL(`https://keyworksapi.onrender.com/api/v1/${type}`);
        //add url params
        for (const [key,value] of Object.entries(filterObj)) {
            urlWithParams.searchParams.append(`${key}`,`${value.join(",")}`)
        }
        dispatch(toggleMenu())
        if (type === "keycaps") {
        dispatch(changeKeycapUrl(urlWithParams.href))
        } else if (type === "keyswitches") {
            dispatch(changeKeyswitchUrl(urlWithParams.href))
        }
    }
  return (
<div  className={`filter ${isHidden ? 'hidden' : ''}`}>
    <FontAwesomeIcon
        className="filter"
        icon={faFilter}
        onClick={() => dispatch(toggleMenu())}
        />
<div className={`filter-menu ${useSelector(state => state.filter.showMenu) ? 'hidden' : ''}`} >
    {selectMenu()}
    <div className="filter-menu-button-container">
        <span className="filter-menu_closeBtn" role="button" onClick={() => dispatch(toggleMenu())}>Close</span>
    </div>
</div>
</div>
  )
}

export default Filter