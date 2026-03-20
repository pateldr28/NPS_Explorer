import { Link, useLoaderData } from "react-router-dom";
import OlympicNationalPark from "../images/OlympicNationalPark.jpg";
import FeaturedVideo from "../components/featuredVideo";

function pickRandomPark(parkVideos){

  // console.log("This is park vids:", parkVideos)
  const data = parkVideos.data

  // console.log("==parks data:", data)

  const parksWithparkCode = data?.filter(park => park?.relatedParks?.[0]?.parkCode)

  // while(true){
    
    const randomPark = parksWithparkCode[Math.floor(Math.random() * (parksWithparkCode.length))]

    return randomPark

    // if(randomPark?.relatedParks != []){
    //   if(randomPark.relatedParks[0].parkCode !== undefined){
    //     console.log("Random park:", randomPark)

    //     return randomPark
    //   }
      
    // }
  // }


}


export default function Home() {

  //get parks info with data within data field

  const {parkVideos} = useLoaderData()


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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-hidden">
            <FeaturedVideo randomPark={pickRandomPark(parkVideos)}/>
            <FeaturedVideo randomPark={pickRandomPark(parkVideos)}/>
            <FeaturedVideo randomPark={pickRandomPark(parkVideos)}/>
          </div>

        </section>
      </div>
    </>
   
  )
}