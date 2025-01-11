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
  const [scroll,setScroll] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState({});
  const [cursor, setCursor] = useState(null);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();



  const onSearch = async (e) => {
   e.preventDefault();
   startTransition(() => {
      setQuery(e.target.value);
   })
 };


 const fetchMoviesForSearch = async () => {
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
    params: {
      series_granularity: 'show',
      show_type: 'movie',
      output_language: 'en',
      country: 'IN',
      title: query || 'indian' 
    },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
      'x-rapidapi-host': process.env.NEXT_PUBLIC_X_RAPID_API_HOST
    }
  };
  
  try {
    const response = await axios.request(options);
    setMovies([...(response.data || [])])
  } catch (error) {
    console.error(error);
  }
 }

 const fetchMoviesWithFilters = async (filters) => {


  if (!Object.keys(filters).length) {
     return;
  }

  let params = {
    country: 'IN',
    // year_max: '2004',
    series_granularity: 'show',
    // genres: 'action',
    order_direction: 'asc',
    order_by: 'original_title',
    // year_min: '2001',
    genres_relation: 'and',
    output_language: 'en',
    // rating_max: '10',
    show_type: 'movie',
    // rating_min: '9'
  };

  if (filters.cursor) {
    params.cursor = filters.cursor
  }
  if (filters.startYearRange) {
     params.year_min = filters.startYearRange;
  }
  if (filters.endYearRange) {
    params.year_max = filters.endYearRange;
  }
  if (filters.genre) {
     params.genres = filters.genre; 
  }
  if (filters.startRating) {
    params.rating_min = filters.startRating;
  }
  if (filters.endRating) {
    params.rating_max = filters.endRating;
  }

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/shows/search/filters',
    params: params,
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
      'x-rapidapi-host': process.env.NEXT_PUBLIC_X_RAPID_API_HOST
    }
  };
  
  try {
    const response = await axios.request(options);
    if (response?.data?.hasMore) {
      setHasMore(response?.data?.hasMore);
      setCursor(response?.data?.nextCursor);
    }
    else {
      setHasMore(false);
    }
    if (!scroll) {
      setMovies((prev) => [...(response?.data?.shows || [])]);
    }
    else {
      setMovies((prev) => [...prev, ...(response?.data?.shows || [])]);
    }
    setScroll(false);
  } catch (error) {
    console.error(error);
  }
 }
 



 useEffect(() => {
   if (!query) return;
   fetchMoviesForSearch();
 }, [query]);

 useEffect(() => {
  fetchMoviesForSearch();
 }, []);


 useEffect(() => {
  if (!Object.keys(filters)?.length) {
    fetchMoviesForSearch();
    return;
  }
  setQuery('');
  fetchMoviesWithFilters(filters);
 }, [JSON.stringify(filters)]);

 const handleScroll = () => {
   if (
     window.innerHeight + document.documentElement.scrollTop >=
     document.documentElement.offsetHeight - 100
   ) {
     setScroll(true);
   }
 };


 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 useEffect(() => {
     if (!scroll) return;
     if (hasMore) {
      fetchMoviesWithFilters({ ...filters, cursor: cursor })
     }
 }, [scroll]);


  return (
    <main>
       <Hero/>
        <section  className="movie-section">
            <div className="movie-section-title">
            Explore Movies
               <div className="movie-section-search">
                  <Search query={query} onSearch={onSearch}/>
                   <div className="search-support-text">{isPending ? 'fetching movies..' : null}</div>
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
