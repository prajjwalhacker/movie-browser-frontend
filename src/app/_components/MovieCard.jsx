// NetflixMovieCard.js
export default function MovieCard({ item }) {
    
  
    return (
      <div className="movie-card">
        <img
          src={item.Poster}
          alt={item.Title}
          className="movie-image"
        />
        <div className="movie-detail">
          <div >
            <h2>{item.Title}</h2>
            <p>Year: {item.Year}</p>
          </div>
        </div>
      </div>
    );
  }
  