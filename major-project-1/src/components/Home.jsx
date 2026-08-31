// import React from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';

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
                <Topnav/>
            </div>
            {/* Main Content End */}
        </div>
    )
}

export default Home