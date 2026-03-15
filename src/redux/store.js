import {configureStore} from "@reduxjs/toolkit"
import plannerReducer from "./plannerSlice"

const store = configureStore({
    reducer:{
        //tracker:trakcerReducer
        plannedParks: plannerReducer
    }
})

store.subscribe(()=>console.log(store.getState()))
export default store