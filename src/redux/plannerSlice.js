import { createSlice } from "@reduxjs/toolkit"

export const plannerSlice = createSlice({
    name: "plannedParks",
    initialState: {},
    reducers:{
        addParkToPlanner(state, action){
            //If the park is not already in the planner, than add it 
            if(!state[action.payload.parkInfo.id]){
                state[action.payload.parkInfo] = {
                    id: action.payload.parkInfo.id, //might need for key
                    parkCode: action.payload.parkInfo.parkCode, //to link park to its dedicated page (easier to get to all the info)
                    notes: "", //empty notes intially
                    priority: 0, //0 priority initially 
                    startDate:"",
                    endDate:""
                }
            }
        },

        updateParkInfoInPlanner(state, action){
            //gets the park the user wants to update and changes the field based on that info
        }
    }

})

export const selectPlannedParks = plannerSlice.selectSlice

export const {addParkToPlanner} = plannerSlice.actions

export default plannerSlice.reducer