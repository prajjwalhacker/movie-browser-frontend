import MovieCard from "./_components/MovieCard";

export default function Home() {
  return (
        <div className="movie-section">
            <div className="movie-section-title">
               Explore Movies
            </div>
            <div className="movie-section-main">
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            </div>
        </div>
  );
}
