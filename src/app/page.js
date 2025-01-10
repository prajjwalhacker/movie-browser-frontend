import Filters from "./_components/Filters";
import Loader from "./_components/InfiniteScrollLoader";
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
            <Filters/>
            <Loader/>
            <div className="movie-section-main">  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            </div>
            <Loader/>
        </div>
  );
}
