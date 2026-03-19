import { useSelector } from "react-redux"
import { selectPlannedParks } from "../redux/plannerSlice"
import TrackedPark from "../components/trackedPark"
import { filterTrackedParks } from "../redux/selectors"
import TrackerFilterButtons from "../components/trackerFilterButtons"
import { trackedParks } from "../redux/trackerSlice"

export default function Tracker() {

  const trackedParkList = useSelector(filterTrackedParks)
  const allTrackedParks = Object.values(useSelector(trackedParks))

  return (
  <>


    <section className="space-y-8">
      <h1 className="text-3xl font-semibold text-[#2F4F3A] mb-4">
        Your Tracked Parks
      </h1>

      {allTrackedParks.length === 0 ? (
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-stone-600">
            No parks added to your tracker yet.
          </p>
        </div>
      ) : (
        <>
          <TrackerFilterButtons/>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {trackedParkList.map((trackedPark) => (
              <TrackedPark key={trackedPark.id} trackedPark={trackedPark} {...trackedPark}/>
            ))}
          </div>
        </>
      )}
    </section>
    </>
  )
}