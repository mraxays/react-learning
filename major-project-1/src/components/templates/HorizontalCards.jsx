import { Link } from 'react-router-dom'

function HorizontalCards({ data }) {
  return (

    <div className="flex flex-row gap-5 overflow-x-auto mt-5 scrollbar-thin scrollbar-thumb-gray-300 pb-3 mb-4">
      {data.map((movie) => (
        <div key={movie.id} className="w-50 aspect-5/7 bg-gray-200 rounded-lg shrink-0">
          <Link to={`/${movie.media_type}/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover rounded-lg" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HorizontalCards