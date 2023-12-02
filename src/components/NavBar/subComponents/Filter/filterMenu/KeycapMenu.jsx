
import {useDispatch, useSelector} from 'react-redux'
import { updateChecked} from '../../../../../features/filter/filterSlice'

const KeyCapMenu = ({onFilterSubmit}) => {
    const dispatch = useDispatch();
    const checked = useSelector(state => state.filter.checked);

    const handleOnChange = (e) => {
        dispatch(updateChecked(e))
    }

    const handleFilterSubmit = () => {
        onFilterSubmit(checked,'keycaps')
    }
  return (
    <>
    <ul>
        <li className="materialFilter">
            <span className="filterTitle">Material</span>
            <div className="filterCheckboxContainer">
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)}  type="checkbox" value="material-PBT" className="pbt" name="pbt" />
                    <label htmlFor="pbt">PBT</label>
                </span>
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)}  type="checkbox" value="material-ABS" className="abs" name="abs" />
                    <label htmlFor="abs">ABS</label>      
                </span>
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)} type="checkbox"  value="material-POM" className="pom" name="pom" />
                    <label htmlFor="pom">POM</label>
                </span>
            </div>
        </li>
        <li className="profileFilter">
            <span className="filterTitle">Profile</span>
            <div className="filterCheckboxContainer">
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)}  type="checkbox"  value="profile-OEM" className="oem" name="oem" />
                    <label htmlFor="oem">OEM</label>
                </span>
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)} type="checkbox"  value="profile-DSA" className="dsa" name="dsa" />
                    <label htmlFor="dsa">DSA</label>
                </span>
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)} type="checkbox"  value="profile-SA" className="sa" name="sa" />
                    <label htmlFor="sa">SA</label>
                </span>
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)} type="checkbox"  value="profile-Cherry" className="cherry" name="cherry" />
                    <label htmlFor="cherry">CHERRY</label>
                </span>
            </div>
        </li>
        <li className="textureFilter">
            <span className="filterTitle">Texture</span>
            <div className="filterCheckboxContainer">
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)}  type="checkbox"  value="texture-Smooth" className="smooth" name="smooth" />
                    <label htmlFor="smooth">SMOOTH</label>
                </span>
                <span className="filterCheckbox">
                    <input onChange={e => handleOnChange(e)} type="checkbox"  value="texture-Texture" className="texture" name="texture" />
                    <label htmlFor="texture">TEXTURED</label>
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

export default KeyCapMenu
