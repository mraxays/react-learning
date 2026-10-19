import { Link } from 'react-router-dom';
function Cards({ data }) {
    return (
        <>
            {data.map((item) => (
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
        </>
    )
}

export default Cards