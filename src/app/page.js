"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Filters from "./_components/Filters";
import Loader from "./_components/InfiniteScrollLoader";
import MovieCard from "./_components/MovieCard";
import Search from "./_components/Search";
import { useTransition } from "react";
import Hero from "./_components/Hero";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({  });
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const onSearch = async (e) => {
   e.preventDefault();
   setHasMore(true);
   startTransition(() => {
      setQuery(e.target.value);
   })
 };

 
 const fetchMovies = async (filters) => {
   if (loading || !hasMore) return
   setLoading(true);
   try {
     const response = await axios.get('https://www.omdbapi.com/', {
       params: {
         s: query || 'indian',      
         apikey: 'da5fae81', 
         page, 
         ...(filters || {})
       },
     });


     if (response.data.Response === 'True') {
       if (filters?.page === 1) {
       setMovies((prev) => [...response.data.Search]);
       }
       else {
         setMovies((prev) => [...prev,...response.data.Search]);
       }
     }
     else {
        setHasMore(false);
     }
   } catch (error) {
     console.error('Error fetching movies:', error);
   } finally {
     setLoading(false);
   }
 };


 const fetchMoviesByGenre = () => {
     try {
        
     }
     catch (err) {
        
     }
 }

 useEffect(() => {
   fetchMovies({ page: 1 });
 }, [query]);

 useEffect(() => {
   fetchMovies();
 }, [page]);


 useEffect(() => {
     console.log(filters);
 }, [JSON.stringify(filters)]);

 const handleScroll = () => {
   if (
     window.innerHeight + document.documentElement.scrollTop >=
     document.documentElement.offsetHeight - 100
   ) {
     setPage((prevPage) => prevPage + 1);
   }
 };


 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

  return (
    <main>
       <Hero/>
        <section  className="movie-section">
            <div className="movie-section-title">
            Explore Movies
               <div className="movie-section-search">
                  <Search query={query} onSearch={onSearch}/>
               </div>
            </div>
            <Filters filters={filters} setFilters={setFilters}/>
            <button
             className="favorite-movie-button"
             onClick={() => router.push('/favorite')}
             aria-label="See your favorite movies"
            >
               See Your Favorite Movies
            </button>
            {!movies?.length ? <Loader aria-live="polite"/> : 
            <div className="movie-section-main">  
              {movies.map((item, index) => {
               return (
                  <MovieCard key={index} item={item}/>
               )
              })}
            </div>}
            {hasMore ? <Loader aria-live="polite"/> : <div className="no-movies">
  No More Movies Found
</div>}
        </section >
        </main>
  );
}
