import { useDispatch } from "react-redux"
import { removeParkFromTracker, toggleVisited } from "../redux/trackerSlice"
import { Link } from "react-router-dom"

export default function TrackedPark({trackedPark,visited}){
    const dispatch = useDispatch()

  return(
    <>
      <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-sm">
        <div className="flex items-start justify-between gap-4">
          {/*Link to park details page */}
          <Link to={`/parks/${trackedPark.parkCode}`}
            className="text-xl font-semibold text-[#2F4F3A] hover:underline">
            {trackedPark.parkName}
          </Link>
          {/* Remove button that removes park from tracker*/}
          <div className="flex gap-2 shrink-0">
            <button
              className={`text-sm ${visited ?  "bg-[#2F4F3A]" : "bg-stone-600"} text-white px-3 py-1.5 rounded hover:bg-stone-600 transition`}
              onClick = {()=> dispatch(toggleVisited({id: trackedPark.id}))} >
              {visited ? "Unmark Visited" : "Mark Visited"}
            </button>
            <button
              className="text-sm bg-stone-500 text-white px-3 py-1.5 rounded hover:bg-stone-600 transition"
            onClick={() => dispatch(removeParkFromTracker({ id: trackedPark.id }))}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="mt-3">
          {trackedPark.images?.[0].url && (
            <img
                src={trackedPark.images[0]?.url}
                alt={trackedPark.images[0].altText || trackedPark.parkName}
                className="h-48 w-full object-cover mt-2 rounded-xl"
              />
          )}
        </div>
      </article>
    </>
  )
}