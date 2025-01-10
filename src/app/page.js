"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Filters from "./_components/Filters";
import Loader from "./_components/InfiniteScrollLoader";
import MovieCard from "./_components/MovieCard";
import MovieSearch from "./_components/MovieSearch";
import Search from "./_components/Search";
import { useTransition } from "react";

export default function Home() {
  
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isPending, startTransition] = useTransition();

  const onSearch = async (e) => {
   e.preventDefault();
   startTransition(() => {
      setQuery(e.target.value);
   })
 };

 
 const fetchMovies = async () => {
   setLoading(true);
   try {
     const response = await axios.get('https://www.omdbapi.com/', {
       params: {
         s: query || 'indian',      
         apikey: 'da5fae81', 
         page, 
       },
     });


     if (response.data.Response === 'True') {
       setMovies((prev) => [...response.data.Search]);
     }
   } catch (error) {
     console.error('Error fetching movies:', error);
   } finally {
     setLoading(false);
   }
 };



 useEffect(() => {
   fetchMovies();
 }, [query]);

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
        <div className="movie-section">
            <div className="movie-section-title">
               Explore Movies
               <div className="movie-section-search">
                  <Search query={query} onSearch={onSearch}/>
               </div>
            </div>
            <Filters/>
            {loading ? <Loader/> : 
            <div className="movie-section-main">  
              {movies.map((item, index) => {
               return (
                  <MovieCard key={index} item={item}/>
               )
              })}
            </div>}
            <Loader/>
        </div>
  );
}
