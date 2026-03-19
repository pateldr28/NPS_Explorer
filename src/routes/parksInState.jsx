import { Link, useLoaderData } from "react-router-dom";
import { STATE_NAMES } from "../data/statesData"
import { addParkToPlanner, selectPlannedParks } from "../redux/plannerSlice";
import { addParkToTracker, trackedParks } from "../redux/trackerSlice";
import { useDispatch, useSelector } from "react-redux";

//https://tailwindcss.com/
//https://tailwindcss.com/docs/colors

export default function ParksInState() {
  const { stateCode, parks } = useLoaderData();
  const stateName = STATE_NAMES[stateCode];
  const plannedParks = useSelector(selectPlannedParks)
  const trackedParksList = useSelector(trackedParks)
  const dispatch = useDispatch()

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-[#2F4F3A] mb-2">
          Parks in {stateName}
        </h1>
      </div>

      {/* Display 2 cols if smaller, 3 if full page */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {parks?.data?.map((park) => {
          const isSelected = plannedParks[park.id] !== undefined
          const isTracked = trackedParksList[park.id] !== undefined

          return (
            <div
              key={park.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col h-full">

              {/* Contains name, image, designation, description, clicking on link directs to park page */}
              <Link to={`/parks/${park.parkCode}`} className="flex flex-col flex-1">
                <img
                  src={park.images?.[0]?.url}
                  alt={park.images?.[0]?.altText || park.fullName}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 flex-1">
                  <p className="text-stone-500 text-sm mb-2">{park.designation}</p>
                  <h2 className="text-lg font-semibold text-[#2F4F3A] mb-2 hover:underline">
                    {park.fullName}
                  </h2>
                  <p className="text-sm text-stone-600 line-clamp-3">
                    {park.description}
                  </p>
                </div>
              </Link>
              {/* Planner button, default id "Add to planner", if clicked, display "Added to planner" */}
              <div className="flex gap-2 shrink-0">
                <button
                  className={`w-40 m-2 mt-auto rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer ${isSelected ?  "bg-[#2F4F3A]" : "bg-stone-600"}`}
                  onClick={() => {
                    console.log(park)
                    dispatch(addParkToPlanner({ park }))
                  }}
                  disabled={isSelected}>
                  {isSelected ? "Added to planner" : "Add to planner"}
                </button>

                <button
                  className={`w-40 m-2 mt-auto rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer ${isTracked ?  "bg-[#2F4F3A]" : "bg-stone-600"}`}
                  onClick={() => {
                    console.log(park)
                    //dispatch(addParkToPlanner({ park }))
                    dispatch(addParkToTracker({park}))
                  }}
                  disabled={isTracked}>
                  {isTracked ? "Added to tracker" : "Add to tracker"}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
