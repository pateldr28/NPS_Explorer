import { useLoaderData } from "react-router-dom"

export default function ParkDetails() {
  const parkRes = useLoaderData()
  const parkDetails = parkRes.data[0]

  return (
    <>
      <h1>{parkDetails.fullName}</h1>

      <main>
        <pre>
          {JSON.stringify(parkDetails, null, 2)}
        </pre>
      </main>
    </>
  )
}