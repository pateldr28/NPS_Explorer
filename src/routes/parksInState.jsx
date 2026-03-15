import { Link, Outlet, useLoaderData } from "react-router-dom";
import {STATE_NAMES} from "../data/statesData"

export default function ParksInState() {
  const { stateCode, parks } = useLoaderData();
  const stateName = STATE_NAMES[stateCode];
  
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-[#2F4F3A] mb-2">
          Parks in {stateName}
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {parks?.data?.map((park) => (

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-lg transition">
              <Link key={park.id} to={`/parks/${park.parkCode}`}>
                <img src={park.images?.[0]?.url} alt={park.images?.[0]?.altText || park.fullName}
                className="h-48 w-full object-cover"/>
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
                className=" w-50 m-2 rounded-full bg-stone-500 text-white shadow-sm hover:bg-stone-600 transition cursor-pointer"
                >
                  Add to Planner
              </button>
            </div>

          ))}
      </div>
    </section>
  );
}
