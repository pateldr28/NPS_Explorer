import { useLoaderData } from "react-router-dom"

export default function ParkDetails() {
  const parkRes = useLoaderData()
  const parkDetails = parkRes.data[0]

  return (
    <section className="space-y-8">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-lg transition">
        <img src={parkDetails.images?.[0]?.url} alt={parkDetails.images?.[0]?.altText || parkDetails.fullName}
            className="h-72 w-full object-cover"
        />
        <div className="p-8 space-y-8">
          <div>
            <p className="text-sm text-stone-500 mb-2">
              {parkDetails.designation} | {parkDetails.states}
            </p>
            <h1 className="text-3xl font-semibold text-[#2F4F3A]">
              {parkDetails.fullName}
            </h1>
          </div>
          <p className="text-stone-700 leading-7">
            {parkDetails.description}
          </p>
          <p>
            <span className="font-medium ">Address: </span>{" "}
            {parkDetails.addresses?.[0]?.line1 || "Not available"}
          </p>

          <div className="bg-stone-50 rounded border-stone-200 p-5 ">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Things to Do
            </h2>
            <p className="flex flex-wrap text-stone-700">
              {parkDetails.activities?.map((activity) =>
              <span key={activity.id} className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm mx-2 mb-8"> 
              {activity.name}
              </span>)}
            </p>
          </div>
          <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Weather
            </h2>
            <p className="text-stone-700">
              {parkDetails.weatherInfo}
            </p>
          </div>
          <div className="bg-stone-50 rounded border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Directions
            </h2>
            <p className="text-stone-700">
              {parkDetails.directionsInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}