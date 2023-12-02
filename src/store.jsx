import { configureStore } from "@reduxjs/toolkit";
import keycapUrlReducer from "./features/urls/keycapUrlSlice";
import keySwitchUrlReducer from "./features/urls/keyswitchUrlSlice";
import filterReducer from "./features/filter/filterSlice";
import fullkitReducer from "./features/urls/fullkitUrlSlice"


const Store = configureStore({
    reducer: {
        keycapUrl: keycapUrlReducer,
        filter: filterReducer,
        keyswitchUrl: keySwitchUrlReducer,
        fullkitUrl: fullkitReducer
    }
})

export default Store