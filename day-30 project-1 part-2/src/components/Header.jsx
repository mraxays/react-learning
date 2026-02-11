import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-sm tracking-[0.4em] uppercase font-medium text-neutral-900">
          <Link to="/">Fake Store</Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-neutral-600">
          <NavLink className={({ isActive }) => `hover:text-neutral-900 transition uppercase tracking-widest ${isActive ? "border-b border-black" : ""}`} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => `hover:text-neutral-900 transition uppercase tracking-widest ${isActive ? "border-b border-black" : ""}`} to="/about">
            About
          </NavLink>
        </nav>

        {/* Actions */}
      </div>
    </header>
  );
}

export default Header;
