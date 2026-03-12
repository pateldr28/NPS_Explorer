import { Link } from "react-router-dom";
import {STATES} from '../data/statesData'
import Card from "../components/card"

export default function States() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[#2F4F3A]">National Parks by State</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STATES.map((state) => (
            <Link key={state.code} to={`/states/${state.code}`}>
              <Card title={state.name}>
                <p className="text-sm text-stone-600">
                  View national parks in {state.name}
                </p>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
