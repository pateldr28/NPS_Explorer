const apiKey = import.meta.env.VITE_NPS_API_KEY
const BASE_URL = "https://developer.nps.gov/api/v1"

async function getParksByState(stateCode) {
  console.log("[NPS API] getParksByState →", stateCode)

  const response = await fetch(
    `${BASE_URL}/parks?stateCode=${stateCode}&api_key=${apiKey}`
  )

  console.log("[NPS API] Response status:", response.status)

  if (!response.ok) {
    throw new Error("Failed to fetch parks")
  }

  const parks = await response.json()

  console.log("[NPS API] Parks returned:", parks.data)
  return parks.data
}

async function getParkDetails(parkCode) {
  console.log("[NPS API] getParkDetails →", parkCode)

  const response = await fetch(
    `${BASE_URL}/parks?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park details")
  }

  const parkDetails = await response.json()
  console.log("[NPS API] Park details:", parkDetails.data[0])

  return parkDetails.data[0]
}

async function getParkAlerts(parkCode) {
  console.log("[NPS API] getParkAlerts →", parkCode)

  const response = await fetch(
    `${BASE_URL}/alerts?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park alerts")
  }

  const parkAlerts = await response.json()
  console.log("[NPS API] Park alerts:", parkAlerts.data)

  return parkAlerts.data
}

async function getParkCampgrounds(parkCode) {
  console.log("[NPS API] getParkCampgrounds →", parkCode)

  const response = await fetch(
    `${BASE_URL}/campgrounds?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park campgrounds")
  }

  const parkCampgrounds = await response.json()
  console.log("[NPS API] Park campgrounds:", parkCampgrounds.data)

  return parkCampgrounds.data
}

async function getParkAmenities(parkCode) {
  console.log("[NPS API] getParkAmenities →", parkCode)

  const response = await fetch(
    `${BASE_URL}/amenities/parksplaces?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park amenities")
  }

  const parkAmenities = await response.json()
  console.log("[NPS API] Park amenities:", parkAmenities.data)

  return parkAmenities.data.flat()
}

async function getParkWebCam(parkCode) {
  console.log("[NPS API] getParkWebCam →", parkCode)

  const response = await fetch(
    `${BASE_URL}/webcams?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park webcams")
  }

  const parkWebCams = await response.json()
  console.log("[NPS API] Park webcams:", parkWebCams.data)

  return parkWebCams.data
}

async function getParkEvents(parkCode) {
  console.log("[NPS API] getParkEvents →", parkCode)

  const response = await fetch(
    `${BASE_URL}/events?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park events")
  }

  const parkEvents = await response.json()
  console.log("[NPS API] Park events:", parkEvents.data)

  return parkEvents.data
}

async function getParkPlaces(parkCode) {
  console.log("[NPS API] getParkPlaces →", parkCode)

  const response = await fetch(
    `${BASE_URL}/places?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park places")
  }

  const parkPlaces = await response.json()
  console.log("[NPS API] Park places:", parkPlaces.data)

  return parkPlaces.data
}

async function getParkTours(parkCode) {
  console.log("[NPS API] getParkTours →", parkCode)

  const response = await fetch(
    `${BASE_URL}/thingstodo?parkCode=${parkCode}&api_key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch park tours")
  }

  const parkTours = await response.json()
  console.log("[NPS API] Park tours:", parkTours.data)

  return parkTours.data
}

const parkService = {
  getParkDetails,
  getParksByState,
  getParkAlerts,
  getParkCampgrounds,
  getParkAmenities,
  getParkWebCam,
  getParkEvents,
  getParkPlaces,
  getParkTours
}

export default parkService