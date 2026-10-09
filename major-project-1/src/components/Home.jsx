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
            <Loading />
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