import { useEffect, useState } from 'react';
import axios from "../utils/axios";
import Header from './templates/Header';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';

function Home() {
    // eslint-disable-next-line react-hooks/immutability
    document.title = "Home | Movie App";

    const [wallpaper, setWallpaper] = useState(null);
    useEffect(() => {
        const getHeaderWallpaper = async () => {
            try {
                const {data} = await axios.get(`/trending/movie/day`);
                const randomItem = data.results[Math.floor(Math.random() * data.results.length)];
                setWallpaper(randomItem);
            } catch (error) {
                console.error("Error fetching header wallpaper:", error);
            }
        };

        getHeaderWallpaper();
    }, []);

    return (
        <div className='grid grid-cols-12 gap-4 p-4 min-h-screen'>
            {/* Sidenav Start */}
            <Sidenav />
            {/* Sidenav End */}
            {/* Main Content Start */}
            <div className="md:col-span-9 col-span-12">
                <Topnav/>
                <Header data={wallpaper} />
            </div>
            {/* Main Content End */}
        </div>
    )
}

export default Home