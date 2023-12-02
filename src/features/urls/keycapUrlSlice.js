import { createSlice } from '@reduxjs/toolkit'

export const keycapUrlSlice = createSlice({
  name: 'keycapUrl',
  initialState: {
    value: "https://keyworksapi.onrender.com/api/v1/keycaps",
    loading: true,
    keyCapData: []
  },
  reducers: {
    changeKeycapUrl: (state, action) => {
        state.value = action.payload
    },
   toggleLoading: (state,action) => {
    state.loading = action.payload
  },
  updatekeyCapData: (state, action) => {
    state.keyCapData = Object.values(action.payload)
  }
}
})

// Action creators are generated for each case reducer function
export const { changeKeycapUrl, toggleLoading, updatekeyCapData } = keycapUrlSlice.actions

export default keycapUrlSlice.reducer