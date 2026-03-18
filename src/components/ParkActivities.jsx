import { useState } from "react"

const styles = {
  CONTAINER: "border-2 border-dashed border-gray-400 p-4 mt-4",
  HEADER: "text-xl font-semibold text-gray-700 cursor-pointer",
  PRE: "mt-2 overflow-hidden"
}

export default function ParkActivities({ activities }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.CONTAINER}>
      <h3
        className={styles.HEADER}
        onClick={() => setOpen(!open)}
      >
        Activities Info Here
      </h3>

      {open && (
        <pre className={styles.PRE}>
          {JSON.stringify(activities, null, 2)}
        </pre>
      )}
    </div>
  )
}