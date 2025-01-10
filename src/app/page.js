import Loader from "./_components/Loader";
import MovieCard from "./_components/MovieCard";
import MovieSearch from "./_components/MovieSearch";
import Search from "./_components/Search";

export default function Home() {
  return (
        <div className="movie-section">
            <div className="movie-section-title">
               Explore Movies
               <div className="movie-section-search">
                  <Search/>
               </div>
            </div>
            <Loader/>
            <div className="movie-section-main">  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            </div>
            <MovieSearch/>
        </div>
  );
}
