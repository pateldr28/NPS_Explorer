import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-[#F8F6EE]">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive 
              ? "text-[#2F4F3A] border-b-2 border-[#2F4F3A] pb-1"
              : "text-stone-700 hover:text-[#2F4F3A]"} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/states" className={({ isActive }) => isActive 
              ? "text-[#2F4F3A] border-b-2 border-[#2F4F3A] pb-1"
              : "text-stone-700 hover:text-[#2F4F3A]"} >States</NavLink>
          </li>
             <li>
            <NavLink to="/planner" className={({ isActive }) => isActive 
              ? "text-[#2F4F3A] border-b-2 border-[#2F4F3A] pb-1"
              : "text-stone-700 hover:text-[#2F4F3A]"} >Planner</NavLink>
          </li>
             <li>
            <NavLink to="/tracker" className={({ isActive }) => isActive 
              ? "text-[#2F4F3A] border-b-2 border-[#2F4F3A] pb-1"
              : "text-stone-700 hover:text-[#2F4F3A]"} >Tracker</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}