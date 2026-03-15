import { useSelector } from "react-redux"
import { selectPlannedParks } from "../redux/plannerSlice"

export default function Planner() {



  const plannerState = useSelector(selectPlannedParks)
  console.log(plannerState)
  const plannedParksList = Object.values(plannerState)

  return (
    <>
      <h1>Planner</h1>
      <main>
        {plannedParksList.map(plannedPark => 
          (
            <div key={plannedPark.id}>{plannedPark.parkName}</div>
        )
        )}

      </main>
    </>
   
  )
}