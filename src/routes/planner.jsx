import { useSelector, useDispatch} from "react-redux"
import { selectPlannedParks } from "../redux/plannerSlice"
import PlannedPark from "../components/plannedPark"



export default function Planner() {
  
  const dispatch = useDispatch()
  const plannerState = useSelector(selectPlannedParks)
  console.log(plannerState)
  const plannedParksList = Object.values(plannerState)
  var array = [1, 2, 3, 4, 5]

return (
  <section className="space-y-8">
    <h1 className="text-3xl font-semibold text-[#2F4F3A] mb-2">
      Planner
    </h1>

    {plannedParksList.length === 0 ? (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-stone-600">
          No parks added to your planner yet.
        </p>
      </div>
    ) : (
      <div className="grid gap-6 md:grid-cols-2">
        {plannedParksList.map((plannedPark) => (
          <PlannedPark plannedPark={plannedPark}/>
        ))}
      </div>
    )}
  </section>
)}