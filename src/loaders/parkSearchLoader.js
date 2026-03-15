const apiKey = import.meta.env.VITE_NPS_API_KEY

export default async function parkSearchLoader({params}){
    console.log("== loader is running")

    const parkQuery = params.parkQuery

    const response = await fetch(`https://developer.nps.gov/api/v1/parks?q=${parkQuery}&api_key=${apiKey}`)
    const parks = await response.json()

    console.log(parks)
    return {parkQuery, parks}
}