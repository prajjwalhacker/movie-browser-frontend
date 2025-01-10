"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Filters from "./_components/Filters";
import Loader from "./_components/InfiniteScrollLoader";
import MovieCard from "./_components/MovieCard";
import MovieSearch from "./_components/MovieSearch";
import Search from "./_components/Search";

export default function Home() {
  
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const onSearch = async (value) => {
   setQuery(value);
   if (!value) return;
   movieFetch(value);
 };

 const movieFetch=async (value)=> {
   
   setLoading(true);

   
   try {
     const response = await axios.get('https://www.omdbapi.com/', {
       params: {
         s: value || 'indian',  // Search query
         apikey: 'da5fae81', // Replace with your OMDb API key
       },
     });

     if (response.data.Response === 'True') {
       setMovies(response.data.Search); // Set the list of movies
     } else {
       setMovies([]);
     }
   } catch (err) {
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   movieFetch();
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
