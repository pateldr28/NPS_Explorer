import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-[#2F4F3A]">
            Start Exploring
          </h2>
          <p className="text-stone-700 max-w-2xl">
            Browse parks by state, learn more about each park, plan your trips, and 
            track the places that you have visited.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">

          <Link to="/states" className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#2F4F3A] mb-2"> Explore States</h3>
            <p className="text-stone-600">
              View national parks by state and discover new places to visit.
            </p>
          </Link>

          <Link to="/planner" className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#2F4F3A] mb-2"> Plan Trips</h3>
            <p className="text-stone-600">
              Organize your visits and build your own adventure.
            </p>
          </Link>

          <Link to="/tracker" className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#2F4F3A] mb-2"> Track Visits</h3>
            <p className="text-stone-600">
              Keep track of all of your adventures.
            </p>
          </Link>
        </section>
      </div>
    </>
   
  )
}