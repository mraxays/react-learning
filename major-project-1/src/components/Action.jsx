import { useEffect, useState } from 'react';
import axios from "../utils/axios";
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import Loading from './Loading';
import { Link } from 'react-router-dom';

function Action() {
    // eslint-disable-next-line react-hooks/immutability
    document.title = "Action | Movie App";

    const [actionMovies, setActionMovies] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [retry, setRetry] = useState(0);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;
        const getActionMovies = async () => {
            setLoading(true);
            setError("");

            try {
                const fetchMedia = async (type) => {
                    const genreId = type === "tv" ? 10759 : 28;

                    const { data } = await axios.get(
                        `/discover/${type}?with_genres=${genreId}&with_watch_monetization_types=flatrate&watch_region=IN&sort_by=popularity.desc`
                    );

                    return data.results.map((item) => ({
                        ...item,
                        media_type: type,
                    }));
                };

                let results = [];

                if (category === "all") {
                    const [movies, tvShows] = await Promise.all([
                        fetchMedia("movie"),
                        fetchMedia("tv"),
                    ]);

                    results = [...movies, ...tvShows].sort(
                        (a, b) => b.popularity - a.popularity
                    );
                } else {
                    results = await fetchMedia(category);
                }

                if (!cancelled) {
                    setActionMovies(results);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error("Error fetching action content:", error);
                    setError("Failed to load action content. Please try again.");
                    setActionMovies([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        getActionMovies();
        return () => {
            cancelled = true;
        };
    }, [category, retry]);


    return (
        <div className="grid grid-cols-12 gap-4 p-4 min-h-screen">
            <Sidenav />
            <div className="md:col-span-9 col-span-12">
                <Topnav />
                <div className="w-full mt-5 px-2">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold "><i className="ri-movie-2-line"></i> Action</h1>
                            <p className="text-gray-500">Explore popular action movies and TV shows</p>
                        </div>
                        <Dropdown
                            idAndName="action"
                            title="Action"
                            options={["all", "tv", "movie"]}
                            func={(value) => setCategory(value)}
                        />
                    </div>
                </div>
                {loading ? (
                    <Loading />
                ) : error ? (
                    <div className="flex flex-col items-center justify-center mt-5">
                        <p className="text-red-500 mt-5">{error}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                            onClick={() => setRetry((prev) => prev + 1)}
                        >
                            Retry
                        </button>
                    </div>
                ) : actionMovies.length === 0 ? (
                    <p className="text-gray-500 mt-5">No action content available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                        {actionMovies.map((item) => (
                            <Link key={`${item.media_type}-${item.id}`} to={`/${item.media_type}/${item.id}`} className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                {item.poster_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title || item.name || "Poster"}
                                        className="w-full h-auto object-cover"
                                    />
                                ) : (
                                    <div className="h-64 flex items-center justify-center text-gray-400">
                                        No poster available
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Action