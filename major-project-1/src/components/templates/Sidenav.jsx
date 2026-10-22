import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    const genres = [
        { name: "Home", icon: "ri-home-line", path: "/" },
        { name: "Action", icon: "ri-sword-line", path: "/action" },
        { name: "Comedy", icon: "ri-emotion-laugh-line", path: "/comedy" },
        { name: "Romance", icon: "ri-heart-3-line", path: "/romance" },
        { name: "Horror", icon: "ri-ghost-line", path: "/horror" },
        { name: "Thriller", icon: "ri-alarm-warning-line", path: "/thriller" },
    ];

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button type="button" onClick={() => setIsOpen(true)} className="md:hidden fixed top-4 left-4 z-50 w-11 h-11 rounded-xl bg-[#1f1f1c] border border-[#353531] text-gray-300 flex items-center justify-center shadow-lg hover:text-white hover:bg-[#2b2b28] transition" aria-label="Open menu">
                <i className="ri-menu-line text-xl" />
            </button>

            <div
                onClick={closeSidebar}
                className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }
                `}
            />

            {/* Sidebar */}
            <aside
                className={`md:col-span-3 col-span-12  md:relative md:block fixed top-0 left-0 h-screen md:h-auto w-70 md:w-auto z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
            >
                <div className="bg-[#1f1f1c] border border-[#353531] rounded-r-2xl md:rounded-2xl p-4 md:p-5 h-full min-h-screen md:min-h-0 shadow-xl overflow-y-auto">
                    {/* Brand */}
                    <div className="relative overflow-hidden rounded-xl h-20 mb-6 bg-linear-to-br from-[#3a3a36] to-[#292925]">
                        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-5">
                            <div>
                                <Link to="/" onClick={closeSidebar} className="text-white text-lg font-bold tracking-wide hover:text-blue-400 transition">
                                    MOVIE APP
                                </Link>

                                <p className="text-gray-400 text-xs mt-0.5">
                                    Discover your next movie
                                </p>
                            </div>
                        </div>

                        {/* Mobile Close Button */}
                        <button
                            type="button"
                            onClick={closeSidebar}
                            className="md:hidden absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
                            aria-label="Close menu"
                        >
                            <i className="ri-close-line text-lg" />
                        </button>

                    </div>

                    {/* Navigation heading */}
                    <div className="flex items-center justify-between px-2 mb-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                            Browse
                        </h3>

                        <span className="text-[10px] text-gray-600">
                            GENRES
                        </span>
                    </div>

                    {/* Genres */}
                    <nav>
                        <ul className="space-y-1.5">
                            {genres.map((genre) => (
                                <li key={genre.name}>
                                    <NavLink to={genre.path} onClick={closeSidebar} className={({ isActive }) => `group flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 ${isActive ? "bg-blue-500/10 text-blue-400 border border-blue-500/10" : "text-gray-400 hover:bg-[#2b2b28] hover:text-white"}`}>
                                        {({ isActive }) => (
                                            <>
                                                <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? "bg-blue-500/15 text-blue-400" : "bg-[#292926] text-gray-500 group-hover:text-gray-300"}`}>
                                                    <i className={`${genre.icon} text-lg`} />
                                                </span>

                                                <span className="flex-1 text-sm font-medium">
                                                    {genre.name}
                                                </span>

                                                <i className="ri-arrow-right-s-line text-gray-600 group-hover:text-gray-400 transition" />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Sidenav;
