import { trackedParks } from "./trackerSlice";
import { filterValues, selectFilterValue } from "./trackerFiltersSlice";
import { createSelector } from "@reduxjs/toolkit";

export const filterTrackedParks = createSelector(
  [trackedParks, selectFilterValue],
  (trackedParksState, activeFilter) => {
    const trackedParksValues = Object.values(trackedParksState)

    switch (activeFilter) {
      case filterValues.showVisited:
        return trackedParksValues.filter(trackedPark => trackedPark.visited)

      case filterValues.showPending:
        return trackedParksValues.filter(trackedPark => !trackedPark.visited)

      default:
        return trackedParksValues
    }
  }
)