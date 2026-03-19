import { createSlice } from "@reduxjs/toolkit"

export const trackerSlice = createSlice({
    name:"trackedParks",
    initialState:{},
    reducers:{
        //check if the park is already being tracker
        addParkToTracker(state, action){
            if(!state[action.payload.park.id]){
                state[action.payload.park.id] = {
                id: action.payload.park.id, //might need for key
                    parkName: action.payload.park.fullName, //name of the park 
                    parkCode: action.payload.park.parkCode, //to link park to its dedicated page (easier to get to all the info)
                    images: action.payload.park.images || [],
                    visited:false
                }
            }
        },

        //mark the park as visited (or unmark park as visited)
        toggleVisited(state,action){
            console.log("toggled visited")
            const park = state[action.payload.id]
            if(park){
                park.visited = !park.visited
                console.log("marked as visited == ", park.visited)
            }


        },

        //remove the park from the tracker
        removeParkFromTracker(state, action){
            delete state[action.payload.id]
        },
    }
})

export const trackedParks = (state) => state.trackedParks
export const {addParkToTracker, removeParkFromTracker, toggleVisited} = trackerSlice.actions
export default trackerSlice.reducer