import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="flex gap-4 mb-4 bg-amber-200 p-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
