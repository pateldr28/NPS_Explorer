import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function ParkDetails() {
  const parkRes = useLoaderData()
  const parkDetails = parkRes.data[0]
  const [campgrounds, setCampgrounds] = useState([])
  const [events, setEvents] = useState([])
  const [places, setPlaces] = useState([])
  const [tours, setTours] = useState([])
  const [amenities, setAmenities] = useState([])
  const [alerts, setAlerts] = useState([])
  //https://www.nps.gov/subjects/developer/api-documentation.htm#/amenities
  //https://www.nps.gov/subjects/developer/api-documentation.htm#/campgrounds
  //https://www.nps.gov/subjects/developer/api-documentation.htm#/tours
  //https://www.nps.gov/subjects/developer/api-documentation.htm#/events/
  //https://www.nps.gov/subjects/developer/api-documentation.htm#/alerts

  //06 - Communicating with an HTTP API

  const apiKey = import.meta.env.VITE_NPS_API_KEY 


  //The component mounts, triggering useEffect.
  //The Effect loads data from api and updates state.
  //The state update triggers a re-render.
  //The component re-renders, displaying the fetched data.

  useEffect(() => {
    //send HTTP requests for campground, events, alerts, tours, places, and amentities
    async function fetchRest() {
      //get park code 
      const parkCode = parkDetails.parkCode

      //request campground data from NPS API
      const camp = await fetch(
        `https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=${apiKey}`
      )
      const campInfo = await camp.json()
      //save data in state
      setCampgrounds(campInfo.data || [] )

      //Event
      const event = await fetch(
        `https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=${apiKey}`
      )
       const eventInfo = await event.json()
      setEvents(eventInfo.data || [] )

      //Places
      const place = await fetch(
        `https://developer.nps.gov/api/v1/places?parkCode=${parkCode}&api_key=${apiKey}`
      )
      const placesInfo = await place.json()
      setPlaces(placesInfo.data || [] )

      //Tours
      const tour = await fetch(
        `https://developer.nps.gov/api/v1/tours?parkCode=${parkCode}&api_key=${apiKey}`
      )
      const toursInfo = await tour.json()
      setTours(toursInfo.data || [] )

      //Amenities
      const amenity = await fetch(
        `https://developer.nps.gov/api/v1/amenities?parkCode=${parkCode}&api_key=${apiKey}`
      )
      const amenityInfo = await amenity.json()
      setAmenities(amenityInfo.data || [] )

      //Alerts
      const alert = await fetch(
        `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=${apiKey}`
      )
      const alertInfo = await alert.json()
      setAlerts(alertInfo.data || [] )

    }
    fetchRest()
  }, [parkDetails.parkCode])

  return (
    <section className="space-y-8">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-lg transition">
        <img src={parkDetails.images?.[0]?.url} alt={parkDetails.images?.[0]?.altText || parkDetails.fullName}
            className="h-72 w-full object-cover"
        />
        <div className="p-8 space-y-8">
          <div>
            {/* National Park | STATE abbrev */}
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
          {parkDetails.addresses?.length > 0 && (
          <p>
            <span className="font-medium ">Address: </span>{" "}
            {parkDetails.addresses?.[0]?.line1}
          </p>
          )}

          {/* Activities */}
          {parkDetails.activities.length > 0 && (
          <div className="bg-stone-50 rounded border border-stone-200 p-5 ">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Things to Do
            </h2>
            <p className="flex flex-wrap text-stone-700 mt-2 gap-2">
              {parkDetails.activities?.map((activity) =>
              <span key={activity.id} className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"> 
              {activity.name} 
              </span>)}
            </p>
          </div>
          )}

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Alerts
            </h2>
            <p className="text-stone-700">
              {alerts.map((alert) => (
                  <p key={alert.id} className="text-stone-700">
                    {alert.title || alert.name}
                  </p>
                ))}
            </p>
          </div>
          )}

          {/* Weather */}
          <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Weather
            </h2>
            <p className="text-stone-700">
              {parkDetails.weatherInfo}
            </p>
          </div>
            
          {/* Campgrounds */}
          {campgrounds.length > 0 && (
            <div className="bg-stone-50 rounded border border-stone-200 p-5">
              <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
                Campgrounds
              </h2>
              <div className="text-stone-700 space-y-2">
                {campgrounds.map((campground) => (
                  <div key={campground.id}>
                    <p className="text-stone-800 font-semibold">
                      {campground.name}
                    
                    </p>
                    <p className="text-stone-700">
                      {campground.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {events.length > 0 && (
            <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Events
            </h2>
            <div className="text-stone-700">
              {events.map((event) => (
                  <p key={event.id} className="text-stone-700">
                    {event.title}
                  </p>
                ))}
            </div>
          </div>
          )}

          {/* Tours */}
          {tours.length > 0 && (
            <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Tours
            </h2>
            <div className="text-stone-700">
              {tours.map((tour) => (
                  <p key={tour.id} className="text-stone-700">
                    {tour.title || tour.name}
                  </p>
                ))}
            </div>
          </div>
          )}

          {/* Places */}
          {places.length > 0 && (
            <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Places
            </h2>
            <div className="text-stone-700">
              {places.map((place) => (
                  <p key={place.id} className="text-stone-700">
                    {place.title || place.name}
                  </p>
                ))}
            </div>
          </div>
          )}

          {/* Amentities */}
          {amenities.length > 0 && (
            <div className="bg-stone-50 rounded border border-stone-200 p-5">
            <h2 className="text-lg font-semibold text-[#2F4F3A] mb-3">
              Amenities
            </h2>
            <div className="text-stone-700">
              {amenities.map((amentity) => (
                  <p key={amentity.id} className="text-stone-700">
                    {amentity.title || amentity.name}
                  </p>
                ))}
            </div>
          </div>
          )}

          {/* Directions */}
          <div className="bg-stone-50 rounded border border-stone-200 p-5">
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