import { useSelector, useDispatch} from "react-redux"
import { removePark, selectPlannedParks, updatePriority, updateNotes } from "../redux/plannerSlice"
import { Link } from "react-router-dom"

//https://tailwindcss.com/docs/responsive-design
//https://tailwindcss.com/docs/colors
//https://tailwindcss.com/docs/detecting-classes-in-source-files
//https://tailwindcss.com/docs/hover-focus-and-other-states
//https://medium.com/%40frontendqueens/star-rating-component-beginners-guide-for-react-js-5625bbf35243

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
          <div key={plannedPark.id}
            className="rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <Link to={`/parks/${plannedPark.parkCode}`}
                className="text-lg font-semibold text-[#2F4F3A] hover:underline">
                {plannedPark.parkName}
              </Link>
              <button onClick={() => dispatch(removePark({ id: plannedPark.id }))}
              className="text-sm bg-stone-500 text-white px-3 py-1 rounded hover:bg-stone-600 transition">
                Remove
              </button>
            </div>

            <div className="mt-4">
              <p className="mb-1 text-sm font-medium text-stone-700">Notes</p>
              <textarea value={plannedPark.notes} onChange={(e) => dispatch(
                  updateNotes({
                    id: plannedPark.id,
                    notes: e.target.value,
                  })
                )}
                placeholder="Add notes" className="rounded-lg bg-stone-100 p-3 text-sm text-stone-600 w-full">

              </textarea>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-stone-700">
                Priority
              </p>

              <div className="flex gap-2">
                {array.map((rank) => (
                  <button key={rank} type="button"  onClick={() =>
                      dispatch(updatePriority({
                        id: plannedPark.id,
                        priority: rank,
                      }))
                    }
                    className={`h-4 w-4 rounded-full transition ${plannedPark.priority >= rank
                      ? "bg-green-800": "bg-stone-400"}`}
                    title={`Set priority to ${rank}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
)}