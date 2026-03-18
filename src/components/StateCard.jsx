import { Link } from "react-router-dom"

const styles = {
  CARD: "border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white",
  TITLE: "text-lg font-semibold text-blue-700",
}

export default function StateCard({ state }) {
  return (
    <Link to={`/states/${state.code}`}>
      <div className={styles.CARD}>
        <h2 className={styles.TITLE}>{state.name}</h2>
      </div>
    </Link>
  )
}