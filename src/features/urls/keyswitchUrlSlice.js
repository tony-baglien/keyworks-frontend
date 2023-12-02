import { createSlice } from '@reduxjs/toolkit'

export const keyswitchUrlSlice = createSlice({
  name: 'keyswitchUrl',
  initialState: {
    value: "https://keyworksapi.onrender.com/api/v1/keyswitches",
    loading: true,
    keySwitchData: []
  },
  reducers: {
    changeKeyswitchUrl: (state, action) => {
        state.value = action.payload
    },
    toggleLoading: (state,action) => {
      state.loading = action.payload
    },
    updatekeySwitchData: (state, action) => {
      state.keySwitchData = Object.values(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeKeyswitchUrl, updatekeySwitchData, toggleLoading} = keyswitchUrlSlice.actions

export default keyswitchUrlSlice.reducer