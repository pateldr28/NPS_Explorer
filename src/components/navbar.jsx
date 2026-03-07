import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <ul className="flex gap-6">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/states">States</NavLink>
        </li>
      </ul>
    </nav>
  );
}