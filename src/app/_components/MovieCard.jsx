// NetflixMovieCard.js
export default function MovieCard() {
    const movie = {
      Title: "Alles wegen Hulk",
      Year: "2004",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTEwMjdhOGEtMGUyOC00Yzg4LTliYTgtMzBlYjgwYzdiNWUyXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_SX300.jpg",
    };
  
    return (
      <div className="group relative w-full sm:w-64 sm:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Movie Poster */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Movie Details */}
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p className="text-sm text-gray-300">Year: {movie.Year}</p>
          </div>
        </div>
      </div>
    );
  }
  