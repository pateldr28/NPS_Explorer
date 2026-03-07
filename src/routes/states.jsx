import { Link } from "react-router-dom";
import {STATES} from '../data/statesData'

export default function States() {
  return (
    <div className="p-6">
      <h1 className="text-xl underline">National Parks by State</h1>

      <ul>
        {STATES.map((state) => (
          <li key={state.code}>
            <Link to={`/states/${state.code}`}>
              {state.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
