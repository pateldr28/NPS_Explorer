import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        //tracker:trakcerReducer
    }
})

store.subscribe(()=>console.log(store.getState()))
export default store