import { createSlice } from "@reduxjs/toolkit"

export const filterValues = {
    showAll:"filterValues/showAll",
    showVisited:"filterValues/showVisited",
    showPending:"filterValues/showPending"
}

const trackerFiltersSlice = createSlice({
    name:"trackerFilter",
    initialState: {filter: filterValues.showAll},
    reducers:{
        setTrackerFilter(state, action){
            state.filter = action.payload
        }
    },
    selectors:{
        selectFilterValue(sliceState){
            return sliceState.filter
        }
    }
})

export const {setTrackerFilter} = trackerFiltersSlice.actions
export const selectFilterValue = (state) => state.trackerFilter.filter
export default trackerFiltersSlice.reducer