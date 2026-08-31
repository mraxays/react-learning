import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
    const searchRef = useRef(null);
    const searchContainerRef = useRef(null);

    const [query, setQuery] = useState("");
    const [showResults, setShowResults] = useState(false);

    const movies = [
        {
            id: 1,
            title: "Inception",
            year: 2010,
            genre: "Sci-Fi",
            image: "https://placehold.co/100x140?text=Inception",
        },
        {
            id: 2,
            title: "Interstellar",
            year: 2014,
            genre: "Sci-Fi",
            image: "https://placehold.co/100x140?text=Interstellar",
        },
        {
            id: 3,
            title: "The Dark Knight",
            year: 2008,
            genre: "Action",
            image: "https://placehold.co/100x140?text=Dark+Knight",
        },
        {
            id: 4,
            title: "The Hangover",
            year: 2009,
            genre: "Comedy",
            image: "https://placehold.co/100x140?text=Hangover",
        },
        {
            id: 5,
            title: "Avengers: Endgame",
            year: 2019,
            genre: "Action",
            image: "https://placehold.co/100x140?text=Endgame",
        },
    ];

    // Filter results
    const results = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
    );

    // Ctrl + K / Cmd + K
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault();
                searchRef.current?.focus();
                setShowResults(true);
            }

            // Escape
            if (event.key === "Escape") {
                setShowResults(false);
                searchRef.current?.blur();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Close results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target)
            ) {
                setShowResults(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={searchContainerRef}
            className="relative bg-[#2d2d2a] p-4 rounded-xl md:border-l-4 md:border-gray-700"
        >
            {/* Search Input */}
            <div className="relative group">

                {/* Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <i
                        className="
                            ri-search-line text-lg
                            text-gray-500
                            group-focus-within:text-blue-400
                            transition-colors
                        "
                    />
                </div>

                <input
                    ref={searchRef}
                    type="text"
                    value={query}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setShowResults(true);
                    }}
                    onFocus={() => {
                        if (query) {
                            setShowResults(true);
                        }
                    }}
                    placeholder="Search movies, actors, genres..."
                    className="
                        w-full
                        h-12
                        pl-11
                        pr-20
                        rounded-xl
                        bg-[#232320]
                        border border-[#3b3b37]
                        text-sm text-gray-200
                        placeholder:text-gray-600
                        outline-none
                        transition-all duration-200
                        hover:border-[#4a4a45]
                        focus:border-blue-500/60
                        focus:ring-4
                        focus:ring-blue-500/10
                    "
                />

                {/* Shortcut */}
                {!query && (
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <kbd
                            className="
                                hidden sm:flex
                                items-center gap-1
                                px-2 py-1
                                rounded-md
                                bg-[#30302c]
                                border border-[#41413c]
                                text-[10px]
                                font-medium
                                text-gray-500
                            "
                        >
                            <span>Ctrl</span>
                            <span>+</span>
                            <span>K</span>
                        </kbd>
                    </div>
                )}

                {/* Clear Button */}
                {query && (
                    <button
                        type="button"
                        onClick={() => {
                            setQuery("");
                            searchRef.current?.focus();
                        }}
                        className="
                            absolute right-3 top-1/2
                            -translate-y-1/2
                            w-7 h-7
                            flex items-center justify-center
                            rounded-lg
                            text-gray-500
                            hover:text-white
                            hover:bg-[#3a3a36]
                            transition
                        "
                    >
                        <i className="ri-close-line text-lg" />
                    </button>
                )}
            </div>

            {/* Search Results */}
            {showResults && query && (
                <div
                    className="
                        absolute
                        left-4 right-4
                        top-[calc(100%-4px)]
                        z-50
                        overflow-hidden
                        rounded-xl
                        bg-[#232320]
                        border border-[#3b3b37]
                        shadow-2xl
                    "
                >
                    {/* Result Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#353531]">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Search Results
                        </span>

                        <span className="text-xs text-gray-600">
                            {results.length}{" "}
                            {results.length === 1 ? "result" : "results"}
                        </span>
                    </div>

                    {/* Results */}
                    {results.length > 0 ? (
                        <div className="max-h-80 overflow-y-auto *:scrollbar-thin scrollbar-thumb-[#3b3b37] scrollbar-track-[#232320]">
                            {results.map((movie) => (
                                <Link
                                    key={movie.id}
                                    to={`/movie/${movie.id}`}
                                    onClick={() => setShowResults(false)}
                                    className="
                                        flex items-center gap-3
                                        p-3
                                        border-b border-[#30302d]
                                        last:border-b-0
                                        hover:bg-[#2d2d2a]
                                        transition
                                        group
                                    "
                                >
                                    {/* Poster */}
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="
                                            w-10 h-14
                                            rounded-md
                                            object-cover
                                            bg-[#30302d]
                                        "
                                    />

                                    {/* Movie Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4
                                            className="
                                                text-sm
                                                font-medium
                                                text-gray-200
                                                group-hover:text-blue-400
                                                truncate
                                                transition
                                            "
                                        >
                                            {movie.title}
                                        </h4>

                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs text-gray-500">
                                                {movie.year}
                                            </span>

                                            <span className="w-1 h-1 rounded-full bg-gray-600" />

                                            <span className="text-xs text-gray-500">
                                                {movie.genre}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <i
                                        className="
                                            ri-arrow-right-s-line
                                            text-gray-600
                                            group-hover:text-blue-400
                                            transition
                                        "
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        /* No Results */
                        <div className="px-5 py-8 text-center">
                            <div
                                className="
                                    mx-auto mb-3
                                    w-12 h-12
                                    flex items-center justify-center
                                    rounded-full
                                    bg-[#2d2d2a]
                                "
                            >
                                <i className="ri-search-line text-xl text-gray-600" />
                            </div>

                            <p className="text-sm font-medium text-gray-400">
                                No movies found
                            </p>

                            <p className="text-xs text-gray-600 mt-1">
                                Try searching for another movie
                            </p>
                        </div>
                    )}

                    {/* Footer */}
                    {results.length > 0 && (
                        <Link
                            to={`/search?q=${encodeURIComponent(query)}`}
                            onClick={() => setShowResults(false)}
                            className="
                                flex items-center justify-center gap-2
                                px-4 py-3
                                border-t border-[#353531]
                                text-xs font-medium
                                text-blue-400
                                hover:bg-[#2d2d2a]
                                transition
                            "
                        >
                            View all results
                            <i className="ri-arrow-right-line" />
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
