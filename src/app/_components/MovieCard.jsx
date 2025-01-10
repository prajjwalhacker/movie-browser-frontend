// NetflixMovieCard.js
export default function MovieCard() {
    const movie = {
      Title: "Alles wegen Hulk",
      Year: "2004",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTEwMjdhOGEtMGUyOC00Yzg4LTliYTgtMzBlYjgwYzdiNWUyXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_SX300.jpg",
    };
  
    return (
      <div className="movie-card">
        {/* Movie Poster */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-image"
        />
        {/* Overlay */}
        <div className="movie-detail">
          {/* Movie Details */}
          <div >
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
          </div>
        </div>
      </div>
    );
  }
  