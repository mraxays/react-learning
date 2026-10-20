import { useEffect, useState } from 'react';
import axios from "../utils/axios";
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';

function Action() {
    // eslint-disable-next-line react-hooks/immutability
    document.title = "Action | Movie App";

    const [actionMovies, setActionMovies] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [retry, setRetry] = useState(0);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        let cancelled = false;
        const getActionMovies = async () => {
            if (page === 1) {
                setLoading(true);
                setError("");
            } else {
                setLoadingMore(true);
            }

            try {
                const fetchMedia = async (type) => {
                    const genreId = type === "tv" ? 10759 : 28;

                    const { data } = await axios.get(`/discover/${type}?with_genres=${genreId}&with_watch_monetization_types=flatrate&watch_region=IN&sort_by=popularity.desc&page=${page}`);

                    return {
                        results: data.results.map((item) => ({
                            ...item,
                            media_type: type,
                        })),
                        totalPages: data.total_pages,
                    };
                };

                let results = [];
                let totalPages = 0;

                if (category === "all") {
                    const [movies, tvShows] = await Promise.all([
                        fetchMedia("movie"),
                        fetchMedia("tv"),
                    ]);

                    results = [...movies.results, ...tvShows.results].sort(
                        (a, b) => b.popularity - a.popularity
                    );

                    totalPages = Math.max(
                        movies.totalPages,
                        tvShows.totalPages
                    ); // Math Max to get the highest total pages from both movie and tv
                } else {
                    const response = await fetchMedia(category);
                    results = response.results;
                    totalPages = response.totalPages;
                }

                if (!cancelled) {
                    setActionMovies((prev) =>
                        page === 1 ? results : [...prev, ...results]
                    );

                    setHasMore(page < totalPages);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error("Error fetching action content:", error);
                    setError("Failed to load action content. Please try again.");

                    if (page === 1) {
                        setActionMovies([]);
                    }
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                    setLoadingMore(false);
                }
            }
        };

        getActionMovies();
        return () => {
            cancelled = true;
        };
    }, [category, page, retry]);

    const handleCategoryChange = (value) => {
        setActionMovies([]);
        setPage(1);
        setHasMore(true);
        setError("");
        setCategory(value);
    };

    const loadMore = () => {
        if (!loadingMore && hasMore && !loading && !error) {
            setPage((prev) => prev + 1);
        }
    };

    const handleRetry = () => {
        setError("");
        setActionMovies([]);
        setHasMore(true);
        setPage(1);
        setRetry((prev) => prev + 1);
    };

    return (
        <div className="grid grid-cols-12 gap-4 p-4 min-h-screen">
            <Sidenav />

            <div className="md:col-span-9 col-span-12">
                <Topnav />

                <div className="w-full mt-5 px-2">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">
                                <i className="ri-movie-2-line"></i> Action
                            </h1>
                            <p className="text-gray-500">
                                Explore popular action movies and TV shows
                            </p>
                        </div>

                        <Dropdown
                            idAndName="action"
                            title="Action"
                            options={["all", "tv", "movie"]}
                            func={handleCategoryChange}
                        />
                    </div>
                </div>

                {loading ? (
                    <Loading />
                ) : error && actionMovies.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-5">
                        <p className="text-red-500 mt-5">{error}</p>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                            onClick={handleRetry}
                        >
                            Retry
                        </button>
                    </div>
                ) : actionMovies.length === 0 ? (
                    <p className="text-gray-500 mt-5">
                        No action content available.
                    </p>
                ) : (
                    <>
                        {error && (
                            <div className="mt-4 text-center">
                                <p className="text-red-500">{error}</p>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                                    onClick={handleRetry}
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        <InfiniteScroll
                            dataLength={actionMovies.length}
                            next={loadMore}
                            hasMore={hasMore}
                            loader={<Loading />}
                            endMessage={
                                <p className="text-center text-gray-400 py-5">
                                    You have reached the end.
                                </p>
                            }
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5"
                        >
                            <Cards data={actionMovies} />
                        </InfiniteScroll>
                    </>
                )}
            </div>
        </div>
    );
}

export default Action;
