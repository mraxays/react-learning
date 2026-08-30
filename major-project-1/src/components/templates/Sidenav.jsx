import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
    const genres = [
        { name: "Home", icon: "ri-home-line", path: "/" },
        { name: "Action", icon: "ri-sword-line", path: "/genre/action" },
        { name: "Comedy", icon: "ri-emotion-laugh-line", path: "/genre/comedy" },
        { name: "Drama", icon: "ri-movie-2-line", path: "/genre/drama" },
        { name: "Horror", icon: "ri-ghost-line", path: "/genre/horror" },
        { name: "Thriller", icon: "ri-alarm-warning-line", path: "/genre/thriller" },
        { name: "Romance", icon: "ri-heart-3-line", path: "/genre/romance" },
    ];

    return (
        <aside className="md:col-span-3 col-span-12">
            <div className="bg-[#1f1f1c] border border-[#353531] rounded-2xl p-4 md:p-5 h-full shadow-xl">

                {/* Brand */}
                <div className="relative overflow-hidden rounded-xl h-20 mb-6 bg-linear-to-br from-[#3a3a36] to-[#292925]">
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />

                    <div className="absolute inset-0 flex items-center px-5">
                        <div>
                            <Link
                                to="/"
                                className="text-white text-lg font-bold tracking-wide hover:text-blue-400 transition"
                            >
                                MOVIE APP
                            </Link>

                            <p className="text-gray-400 text-xs mt-0.5">
                                Discover your next movie
                            </p>
                        </div>
                    </div>
                    <button type="button" className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition">
                        <i className="ri-text-wrap text-lg" />
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
                        {genres.map((genre, index) => (
                            <li key={genre.name}>
                                <Link
                                    to={genre.path}
                                    className={`
                                        group flex items-center gap-3 px-3.5 py-3 rounded-xl
                                        transition-all duration-200
                                        ${
                                            index === 0
                                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/10"
                                                : "text-gray-400 hover:bg-[#2b2b28] hover:text-white"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            w-9 h-9 rounded-lg flex items-center justify-center
                                            ${
                                                index === 0
                                                    ? "bg-blue-500/15 text-blue-400"
                                                    : "bg-[#292926] text-gray-500 group-hover:text-gray-300"
                                            }
                                        `}
                                    >
                                        <i className={`${genre.icon} text-lg`} />
                                    </span>

                                    <span className="flex-1 text-sm font-medium">
                                        {genre.name}
                                    </span>

                                    <i className="ri-arrow-right-s-line text-gray-600 group-hover:text-gray-400 transition" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-[#33332f]" />

                {/* Bottom Navigation */}
                <div className="space-y-1.5">

                    {/* Favorites */}
                    <Link
                        to="/favorites"
                        className="group flex items-center gap-3 px-3.5 py-3 rounded-xl text-gray-400 hover:bg-[#2b2b28] hover:text-white transition"
                    >
                        <span className="w-9 h-9 rounded-lg bg-[#292926] flex items-center justify-center">
                            <i className="ri-heart-line text-lg text-gray-500 group-hover:text-red-400 transition" />
                        </span>

                        <span className="text-sm font-medium">
                            My Favorites
                        </span>
                    </Link>

                    {/* History */}
                    <Link
                        to="/history"
                        className="group flex items-center gap-3 px-3.5 py-3 rounded-xl text-gray-400 hover:bg-[#2b2b28] hover:text-white transition"
                    >
                        <span className="w-9 h-9 rounded-lg bg-[#292926] flex items-center justify-center">
                            <i className="ri-history-line text-lg text-gray-500 group-hover:text-blue-400 transition" />
                        </span>

                        <span className="text-sm font-medium">
                            Watch History
                        </span>
                    </Link>

                </div>
            </div>
        </aside>
    );
}

export default Sidenav;
