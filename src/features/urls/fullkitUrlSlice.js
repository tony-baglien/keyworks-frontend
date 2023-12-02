import { createSlice } from '@reduxjs/toolkit'

export const fullkitUrlSlice = createSlice({
  name: 'keyswitchUrl',
  initialState: {
    value: "https://keyworksapi.onrender.com/api/v1/fullbuilds",
    loading: true,
    fullkitData: []
  },
  reducers: {
    changeFullkitUrl: (state, action) => {
        state.value = action.payload
    },
    toggleLoading: (state,action) => {
      state.loading = action.payload
    },
    updateFullbuildData: (state, action) => {
      state.fullkitData = Object.values(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeFullkitUrl, updateFullbuildData, toggleLoading} = fullkitUrlSlice.actions

export default fullkitUrlSlice.reducer