import { Link, useLoaderData } from "react-router-dom";
import { STATE_NAMES } from "../data/statesData"
import { addParkToPlanner, selectPlannedParks } from "../redux/plannerSlice";
import { useDispatch, useSelector } from "react-redux";

  //https://tailwindcss.com/
  //https://tailwindcss.com/docs/colors

export default function ParksInState() {
  const { stateCode, parks } = useLoaderData();
  const stateName = STATE_NAMES[stateCode];
  const plannedParks = useSelector(selectPlannedParks)
  const dispatch = useDispatch()

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-[#2F4F3A] mb-2">
          Parks in {stateName}
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {parks?.data?.map((park) => {
          const isSelected = plannedParks[park.id] !== undefined

          return (
            <div
              key={park.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-lg transition">

              <Link to={`/parks/${park.parkCode}`}>
                <img
                  src={park.images?.[0]?.url}
                  alt={park.images?.[0]?.altText || park.fullName}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-stone-500 text-sm mb-2">{park.designation}</p>
                  <h2 className="text-lg font-semibold text-[#2F4F3A] mb-2">
                    {park.fullName}
                  </h2>
                  <p className="text-sm text-stone-600 line-clamp-3">
                    {park.description}
                  </p>
                </div>
              </Link>
              <button
                className={`w-40 m-2 rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer ${isSelected ?  "bg-[#2F4F3A]" : "bg-stone-600"}`}
                onClick={() => {
                  console.log(park)
                  dispatch(addParkToPlanner({ park }))
                }}
                disabled={isSelected}>
                {isSelected ? "Added to planner" : "Add to planner"}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
