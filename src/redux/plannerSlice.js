import { createSlice } from "@reduxjs/toolkit"

export const plannerSlice = createSlice({
    name: "plannedParks",
    initialState: {},
    reducers:{
        addParkToPlanner(state, action){
            //If the park is not already in the planner, than add it 
            if(!state[action.payload.park.id]){
                state[action.payload.park.id] = {
                    id: action.payload.park.id, //might need for key
                    parkName: action.payload.park.fullName, //name of the park 
                    parkCode: action.payload.park.parkCode, //to link park to its dedicated page (easier to get to all the info)
                    images: action.payload.park.images || [],
                    notes: "", //empty notes intially
                    priority: 0, //0 priority initially 
                    startDate:"",
                    endDate:""
                }
            }
        },

        //add/update priority in planner
        updatePriority(state, action) {
            const { id, priority } = action.payload
            if (state[id]) {
            //If clicked again, reset else show priority
                if (state[id].priority === priority) {
                    state[id].priority = 0
                } else {
                    state[id].priority = priority
                }
            }
        },

        //remove park from planner
        removePark(state, action) {
            delete state[action.payload.id]
        },

        //update notes in planner
        updateNotes(state, action) {
            const { id, notes } = action.payload
            if (state[id]) {
                state[id].notes = notes
            }
        },

        //add start date
        start(state, action) {
            const { id, startDate } = action.payload
                if (state[id]) {
                state[id].startDate = startDate
            }
        },

         //add end date
        end(state, action) {
            const { id, endDate } = action.payload
                if (state[id]) {
                state[id].endDate = endDate
            }
        },
    }

})

export const selectPlannedParks = (state) => state.plannedParks
export const {addParkToPlanner, removePark, updatePriority, updateNotes, start, end} = plannerSlice.actions
export default plannerSlice.reducer