// get park details, getParkAlerts, getParkActivities

import parkService from "../api/parkService.js";

export default async function parkDetailsLoader({ params }) {
  console.log("== loader is running");

  const parkCode = params.parkCode;

  const [details, alerts, places] = await Promise.all([
    parkService.getParkDetails(parkCode),
    parkService.getParkAlerts(parkCode),
    parkService.getParkPlaces(parkCode),
  ]);

  console.log("=== Park Details:", details);

  return { details, alerts, places };
}
