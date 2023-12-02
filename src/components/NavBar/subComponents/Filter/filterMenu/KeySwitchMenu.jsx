import { useDispatch, useSelector } from "react-redux";
import { updateChecked} from '../../../../../features/filter/filterSlice'

const KeySwitchMenu = ({onFilterSubmit}) => {
    const dispatch = useDispatch();
    const checked = useSelector(state => state.filter.checked);

    const handleOnChange = (e) => {
        dispatch(updateChecked(e))
    }

    const handleFilterSubmit = () => {
        onFilterSubmit(checked,'keyswitches')
    }

  return (
    <>
    <ul>
        <li className="tactilityFilter">
        <span className="filterTitle">Tactility</span>
            <div className="filterCheckboxContainer">
                <span className="filterCheckbox">
                    <label htmlFor="tactLinear">LINEAR</label>
                    <input type="checkbox" className="tactLinear" value="tactility-Linear" name="tactLinear" onChange={e => handleOnChange(e)}/>
                </span>
                <span className="filterCheckbox">
                    <label htmlFor="tactTactile">TACTILE</label>
                    <input type="checkbox" className="tactTactile" value="tactility-Tactile"name="tactTactile" onChange={e => handleOnChange(e)}/>
                </span>
                <span className="filterCheckbox">
                    <label htmlFor="tactClicky">CLICKY</label>
                    <input type="checkbox" className="tactClikcy" value="tactility-Clicky"name="tactClicky" onChange={e => handleOnChange(e)}/>
                </span>
            </div>
        </li>
        <li className="soundFilter">
            <span className="filterTitle">Sound</span>
            <div className="filterCheckboxContainer">
                <span className="filterCheckbox">
                    <label htmlFor="soundQuite">QUITE</label>
                    <input type="checkbox" className="quite" name="quite" value="sound-Quite" onChange={e => handleOnChange(e)}/>
                </span>
                <span className="filterCheckbox">
                    <label htmlFor="soundModerate">MODERATE</label>
                    <input type="checkbox" className="moderate" name="moderate" value="sound-Moderate" onChange={e => handleOnChange(e)}/>
                </span>
                <span className="filterCheckbox">
                    <label htmlFor="soundLoud">LOUD</label>
                    <input type="checkbox" className="loud" name="loud" value="sound-Loud" onChange={e => handleOnChange(e)}/>
                </span>
            </div>
        </li>
    </ul>
    <div className="reset-apply-container">
        <span className="filter-menu_btn filter-menu_btn--apply" role="button" onClick={handleFilterSubmit}>Apply</span>
    </div>
    </>
  )
}

export default KeySwitchMenu
