const apiKey = import.meta.env.VITE_NPS_API_KEY

export default async function parksInStateLoader({ params }) {
    console.log("== loader is running")

    const stateCode = params.stateCode;

    const response = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}`)
    const parks = await response.json();

    return { stateCode, parks }
}
