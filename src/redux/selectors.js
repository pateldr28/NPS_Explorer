import { trackedParks } from "./trackerSlice";
import { filterValues, selectFilterValue } from "./trackerFiltersSlice";

export function filterTrackedParks(state){
    const trackedParksValues = Object.values(trackedParks(state))
    const activeFilter = selectFilterValue(state)

    switch(activeFilter){
        case filterValues.showVisited:
            return trackedParksValues.filter(trackedPark => trackedPark.visited)
        case filterValues.showPending:
            return trackedParksValues.filter(trackedPark => ! trackedPark.visited)
        default:
            return trackedParksValues
    }
}