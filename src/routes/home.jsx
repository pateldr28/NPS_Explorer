import { Link } from "react-router-dom";
import OlympicNationalPark from "../images/OlympicNationalPark.jpg";

export default function Home() {
  return (
    <>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-[#2F4F3A]">
            Start Exploring
          </h2>
          <p className="text-stone-700 max-w-2xl mt-4">
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
        <hr className="boarder-stone-300 my-12" />
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-[#2F4F3A] mb-6">
            Featured Park Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow lg transition">
              <iframe src="https://plus.unsplash.com/premium_photo-1700182582584-7411ec09675e?q=80&w=1170&auto=format&fit=crop"
              className="h-65 w-full object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Yosemite</h3>
                <p className="text-sm text-stone-600">
                  Granite cliffs, waterfalls, and beautiful views.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow lg transition">
              <img src={OlympicNationalPark} alt="Olympic" className="h-65 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Olympic National Park</h3>
                <p className="text-sm text-stone-600">
                  Mountains, rainforest, and rugged terrain.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow lg transition">
              <img src="https://images.unsplash.com/photo-1623300973992-54b05851941d?q=80&w=688&auto=format&fit=crop"
              alt="Grand Canyon" className="h-65 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Grand Canyon</h3>
                <p className="text-sm text-stone-600">
                  Vast canyons carved over millions of years by the Colorado River.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
   
  )
}