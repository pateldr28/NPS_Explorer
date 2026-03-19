const apiKey = import.meta.env.VITE_NPS_API_KEY



export default async function multimediaVideosLoader(){
    console.log("== loader is running")

    //Get all the parks 
    const response = await fetch(`https://developer.nps.gov/api/v1/multimedia/videos?api_key=${apiKey}&limit=100`)
    const parkVideos = await response.json();
    
    console.log(parkVideos)
    return {parkVideos}
}

