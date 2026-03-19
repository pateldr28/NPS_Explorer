import { useDispatch, useSelector } from "react-redux"
import Button from "./button"
import { filterValues,selectFilterValue, setTrackerFilter } from "../redux/trackerFiltersSlice"

export default function TrackerFilterButtons(){
    const filterValue = useSelector(selectFilterValue)
    const dispatch = useDispatch()

    return(
        <div className="my-3 flex gap-1">
            <Button
                className={`w-40 m-2 mt-auto rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer ${filterValues.showAll ?  "bg-[#2F4F3A]" : "bg-stone-600"}`}
                disabled={filterValue === filterValues.showAll}
                onClick={() => dispatch(setTrackerFilter(filterValues.showAll))}
            >
                Show all
            </Button>
            <Button
                className={`w-40 m-2 mt-auto rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer ${filterValues.showVisited ?  "bg-[#2F4F3A]" : "bg-stone-600"}`}
                disabled={filterValue === filterValues.showVisited}
                onClick={() => dispatch(setTrackerFilter(filterValues.showVisited))}
            >
                Show visited
            </Button>
            <Button
                className={`w-40 m-2 mt-auto rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer ${filterValues.showPending ?  "bg-[#2F4F3A]" : "bg-stone-600"}`}
                disabled={filterValue === filterValues.showPending}
                onClick={() => dispatch(setTrackerFilter(filterValues.showPending))}
            >
                Show active
            </Button>
        </div>
    )
}