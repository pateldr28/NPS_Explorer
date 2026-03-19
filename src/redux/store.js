import {configureStore} from "@reduxjs/toolkit"
import plannerReducer from "./plannerSlice"
import trackerFiltersReducer from "./trackerFiltersSlice"
import trackerReducer from "./trackerSlice"

const store = configureStore({
    reducer:{
        trackedParks:trackerReducer,
        trackerFilter:trackerFiltersReducer,
        plannedParks: plannerReducer
    }
})

store.subscribe(()=>console.log(store.getState()))
export default store