import { useEffect, useState } from 'react';
import axios from "../utils/axios";
import Header from './templates/Header';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';
import Loading from './Loading';

function Home() {
    // eslint-disable-next-line react-hooks/immutability
    document.title = "Home | Movie App";

    const [wallpaper, setWallpaper] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        const getTrending = async () => {
            setLoading(true);
            setError("");
            setWallpaper(null);
            setTrendingMovies([]);

            try {
                const { data } = await axios.get(`/trending/${category}/day`);

                if (cancelled) return;

                const results = data.results || [];

                setTrendingMovies(results);

                if (results.length > 0) {
                    const randomItem = results[Math.floor(Math.random() * results.length)];

                    setWallpaper(randomItem);
                }
            } catch (err) {
                if (!cancelled) {
                    console.error("Error fetching trending content:", err);
                    setError("Failed to load trending content. Please try again.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        getTrending();

        return () => {
            cancelled = true;
        };
    }, [category]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-red-500">{error}</p>
                <button
                    onClick={() => setCategory((current) => current)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Try again
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-4 min-h-screen">
            <Sidenav />

            <div className="md:col-span-9 col-span-12">
                <Topnav />

                {wallpaper && <Header data={wallpaper} />}

                <div className="w-full mt-5 px-2">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">
                                <i className="ri-line-chart-line"></i> Trending
                            </h1>
                            <p className="text-gray-500">
                                Check out the latest trending movies
                            </p>
                        </div>

                        <Dropdown
                            idAndName="trending"
                            title="Trending"
                            options={["all", "tv", "movie"]}
                            func={setCategory}
                        />
                    </div>

                    {trendingMovies.length > 0 ? (
                        <HorizontalCards data={trendingMovies} />
                    ) : (
                        <p className="text-gray-500 mt-5">
                            No trending content available.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
