import parkService from "../api/parkService";


export default async function parksInStateLoader({ params }) {
    console.log("== loader is running")
    
    const stateCode = params.stateCode;

    const parks = await parkService.getParksByState(stateCode);

    return { stateCode, parks }
}
