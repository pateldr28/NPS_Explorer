import { useState } from "react"
import OlympicNationalPark from "../images/OlympicNationalPark2.jpg"
import { useNavigate } from "react-router"

//Icons from https://heroicons.com/

export default function Header() {
  
  const [park, setPark] = useState("")
  const navigate = useNavigate()
  
  return (
    <header
      className="border-b border-stone-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${OlympicNationalPark})` }}>
      <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent">
        <div className="max-w-[1800px] mx-auto px-10 py-16">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold text-white mb-3">
                National Park Explorer
              </h1>
              <p className="text-white">
                Discover U.S. National Parks, explore by state, plan trips, 
                and track the parks you've visited.
              </p>
            </div>
            <div className="relative w-full max-w-md">
              <form onSubmit={e=>{
                e.preventDefault()
                navigate(`searchParks/${park}`)
                console.log(park)
              }}>
              <input
                type="text"
                placeholder="Search parks"
                onChange={e=> setPark(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-white/60 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#2F4F3A]"
              />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center 
                    rounded-full bg-stone-500 text-white shadow-sm hover:bg-stone-600 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}