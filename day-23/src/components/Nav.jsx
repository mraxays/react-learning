import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="flex gap-4 mb-4 bg-amber-200 p-4">
          {/* <NavLink
          className={(e) => {
            return e.isActive ? "px-2 text-gray-200 bg-amber-400" : "px-2";
          }}
          to="/"
        >
          Home
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            `px-2 transition-colors hover:bg-amber-500 ${
              isActive ? "text-gray-200 bg-amber-400" : "text-gray-600"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-2 transition-colors hover:bg-amber-500 ${
              isActive ? "text-gray-200 bg-amber-400" : "text-gray-600"
            }`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-2 transition-colors hover:bg-amber-500 ${
              isActive ? "text-gray-200 bg-amber-400" : "text-gray-600"
            }`
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
