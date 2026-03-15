import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function SearchParks(){
    const {parkQuery, parks} = useLoaderData()
    const query = parkQuery.toLowerCase()

    //rank the parks by their similarity to the search term
    const rankedParks = [...(parks?.data ?? [])].sort((a,b)=>{
        const similarityScore = (park) =>{
            const name = park.fullName.toLowerCase()
            if(name === query) return 100 // park's name match exactly
            if(name.startsWith(query)) return 80 // higher similarity
            if(name.includes(query)) return 60 // lower similarity

            return 0
        }

        //recursively check similarity
        return similarityScore(b)-similarityScore(a)
    })
    
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-[#2F4F3A] mb-2">
          Results for {parkQuery}
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rankedParks.map((park) => (
            <Link key={park.id} to={`/parks/${park.parkCode}`} 
            className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-lg transition">
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
          ))}
      </div>
    </section>
  );
}

