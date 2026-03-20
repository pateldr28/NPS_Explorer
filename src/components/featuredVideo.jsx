import { Link } from "react-router"


export default function FeaturedVideo(props){

    const {randomPark} = props

    return (
        <>
            <div className="w-full mx-auto h-full max-w-screen">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow lg transition h-full">
                <iframe src={randomPark.versions[0].url}
                className="h-65 w-full object-cover aspect-video" allowFullScreen/>
                <div className="p-4 w-full">
                    <Link to={`/parks/${randomPark.relatedParks[0].parkCode}`} className="font-semibold text-lg">{randomPark.relatedParks[0].fullName}</Link>
                    {/* <h3 className="font-semibold text-lg">{randomPark.relatedParks[0].fullName}</h3> */}
                    <p className="text-sm text-stone-600">
                        {randomPark.description}
                    </p>
                </div>
                </div>
            </div>
        </>
    )
}