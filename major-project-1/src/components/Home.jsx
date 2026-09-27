import { useEffect, useState } from 'react';
import axios from "../utils/axios";
import Header from './templates/Header';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';

function Home() {
    // eslint-disable-next-line react-hooks/immutability
    document.title = "Home | Movie App";

    const [wallpaper, setWallpaper] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [category, setCategory] = useState(["all"]);

    useEffect(() => {
        const getHeaderWallpaper = async () => {
            try {
                const { data } = await axios.get(`/trending/movie/day`);
                const randomItem = data.results[Math.floor(Math.random() * data.results.length)];
                setWallpaper(randomItem);
            } catch (error) {
                console.error("Error fetching header wallpaper:", error);
            }
        };
        getHeaderWallpaper();
    }, []);
    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const { data } = await axios.get(`/trending/${category}/day`);
                setTrendingMovies(data.results);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        };
        getTrendingMovies();
    }, [category]);

    if (!wallpaper || trendingMovies.length === 0) {
        return (
            <div className="min-h-screen bg-[#181814] flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-16 h-16 border-4 border-gray-800 border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-white text-sm font-medium tracking-wide">
                        Loading movies
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-4 min-h-screen">
            <Sidenav />
            <div className="md:col-span-9 col-span-12">
                <Topnav />
                <Header data={wallpaper} />
                <div className="w-full mt-5 px-2">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold "><i className="ri-line-chart-line"></i> Trending</h1>
                            <p className="text-gray-500">Check out the latest trending movies</p>
                        </div>
                        <Dropdown idAndName="trending" title="Trending" options={["all", "tv", "movie"]} func={(value) => setCategory([value])} />
                    </div>
                    <HorizontalCards data={trendingMovies} />
                </div>
            </div>
        </div>
    );
}

export default Home;