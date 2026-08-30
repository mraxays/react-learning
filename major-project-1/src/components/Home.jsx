// import React from 'react'
import Sidenav from './templates/Sidenav';

function Home() {
    // eslint-disable-next-line react-hooks/immutability
    document.title = "Home | Movie App";
    return (
        <div className='grid grid-cols-12 gap-4 p-4 min-h-screen'>
            {/* Sidenav Start */}
            <Sidenav />
            {/* Sidenav End */}
            {/* Main Content Start */}
            <div className="md:col-span-9 col-span-12">
                <div className="bg-[#2d2d2a] p-4 rounded-lg h-full md:border-l-4 md:border-gray-700">
                    <h2 className="text-xl font-bold mb-4">Featured Movies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-[#3a3a37] p-4 rounded-lg">
                            <img src="https://placehold.co/600x400" alt="Movie" className="w-full h-auto rounded-lg" />
                            <h3 className="text-lg font-semibold mb-2">Movie Title 1</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content End */}
        </div>
    )
}

export default Home