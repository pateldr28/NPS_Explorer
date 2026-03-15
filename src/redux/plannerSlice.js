import { createSlice } from "@reduxjs/toolkit"

export const plannerSlice = createSlice({
    name: "plannedParks",
    initialState: {},
    reducers:{
        addParkToPlanner(state, action){
            if(!state[action.payload.parkInfo.id]){
                state[action.payload.parkInfo] = {
                    id: action.payload.parkInfo.id, //might need for key
                    notes: "", //empty notes intially
                    priority: 0, //0 priority initially 
                    startDate:"",
                    endDate:""
                }

            }
        }
    }

})