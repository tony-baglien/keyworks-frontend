import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    showMenu: false,
    checked: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu
    },
    updateChecked: (state,action ) => {
      let valueArray = action.payload.target.value.split('-');
      let valueObject = {};
      //update object
      valueObject[valueArray[0]] = valueArray[1]

      if (action.payload.target.checked) {
        state.checked.push(valueObject);
    } else {
        state.checked.splice(state.checked.indexOf(valueObject),1)
    }
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggleMenu, updateChecked } = filterSlice.actions
export default filterSlice.reducer