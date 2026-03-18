import { useDispatch } from "react-redux"
import { removePark, updatePriority, updateNotes, start, end } from "../redux/plannerSlice"
import { Link } from "react-router-dom"

//https://tailwindcss.com/docs/responsive-design
//https://tailwindcss.com/docs/colors
//https://tailwindcss.com/docs/detecting-classes-in-source-files
//https://tailwindcss.com/docs/hover-focus-and-other-states
//https://medium.com/%40frontendqueens/star-rating-component-beginners-guide-for-react-js-5625bbf35243
//https://stackoverflow.com/questions/44585148/how-to-i-set-min-and-max-value-for-input-with-type-datetime-local

export default function PlannedPark({plannedPark}){

  //array of 1-5 values for rank
  const priorityRank = [1, 2, 3, 4, 5]
  const dispatch = useDispatch()

  return(
    <>
      <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-sm">
        <div className="flex items-start justify-between gap-4">
          {/*Link to park details page */}
          <Link to={`/parks/${plannedPark.parkCode}`}
            className="text-xl font-semibold text-[#2F4F3A] hover:underline">
            {plannedPark.parkName}
          </Link>
          {/* Remove button that removes park from planner*/}
          <button onClick={() => dispatch(removePark({ id: plannedPark.id }))}
          className="text-sm bg-stone-500 text-white px-3 py-1.5 rounded hover:bg-stone-600 transition">
            Remove
          </button>
        </div>
        <div className="mt-3">
          {plannedPark.images?.[0].url && (
            <img
                src={plannedPark.images[0]?.url}
                alt={plannedPark.images[0].altText || plannedPark.parkName}
                className="h-48 w-full object-cover mt-2 rounded-xl"
              />
          )}
        </div>
        
        {/*Start/End date */}
        <div className="mt-4">
          <p className="mb-2 text-medium font-medium text-stone-700">
            Dates
          </p>
          <div className="flex gap-4">
            <input type="date" value={plannedPark.startDate} onChange={(e) => dispatch(start({
              id: plannedPark.id, 
              startDate: e.target.value,
                })
              )
            } max={plannedPark.endDate || undefined} 
            className="rounded-lg border border-stone-200 bg-stone-100 p-2 text-sm text-stone-700"
            />
            <input type="date" value={plannedPark.endDate} onChange={(e) => dispatch(end({
              id: plannedPark.id, 
              endDate: e.target.value,
                })
              )
            } min={plannedPark.startDate || undefined}  
            className="rounded-lg border border-stone-200 bg-stone-100 p-2 text-medium text-stone-700"
            />
          </div>
        </div>

        {/*Notes input for park */}
        <div className="mt-4">
          <p className="mb-1 text-medium font-medium text-stone-700">
            Notes
          </p>
          <textarea value={plannedPark.notes} onChange={(e) => dispatch(
              updateNotes({
                id: plannedPark.id,
                notes: e.target.value,
              })
            )}
            placeholder="Add notes" className="rounded-lg bg-stone-100 p-3 text-medium text-stone-800 w-full">
          </textarea>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-medium font-medium text-stone-700">
            Priority
          </p>

          {/* Display 1-5 selections for priority */}
          <div className="flex gap-2">
            {priorityRank.map((rank) => (
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
      </article>
    </>
  )
}