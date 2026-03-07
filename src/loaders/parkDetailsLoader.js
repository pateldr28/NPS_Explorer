const apiKey = import.meta.env.VITE_NPS_API_KEY

export default function parkDetailsLoader({ params }) {
    console.log("== loader is running")

    const park = params.parkCode;

    // fetch returns an http response wrapped in a promise, so we directly return
    // react router will deal with the promise for us
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${apiKey}`)
}