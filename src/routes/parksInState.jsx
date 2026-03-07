import { Link, Outlet, useLoaderData } from "react-router-dom";
import {STATE_NAMES} from "../data/statesData"

const STYLES = {
  header: "border border-slate-300 bg-slate-100 p-3 text-xl font-semibold",
  main: "border border-slate-300 bg-white p-3",
  parkList: "list-disc pl-8",
  parkDetails: "border border-dashed border-slate-300 bg-slate-100 p-3"
}


export default function ParksInState() {
  const { stateCode, parks } = useLoaderData();
  const stateName = STATE_NAMES[stateCode];
  
  return (
    <section className=" border border-slate-500 bg-slate-50 p-4">
      <h1 className={STYLES.header}>
        Parks in {stateName}
      </h1>
      <main className={STYLES.main}>
        <ul className={STYLES.parkList}>
          {parks?.data?.map((park) => (
            <li key={park.id}>
              <Link to={`parks/${park.parkCode}`} className="underline">
                {park.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <section className={STYLES.parkDetails}>
        <Outlet />
      </section>
    </section>
  );
}
