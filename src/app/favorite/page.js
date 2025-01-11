"use client";
import React, { useEffect } from 'react'
import MovieCard from '../_components/MovieCard';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FavoriteMovies = () => {

  const [movies, setMovies] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const items = localStorage.getItem('favoriteMovie');
    if (!items) {
        setMovies([]);
    }
    else {
        setMovies(JSON.parse(items));
    }
  }, []);

  return (
    <div className='favorite-container'>
         <div className='favorite-title'>
            Favorite movies
         </div>
         <div className="movie-section-main"> 
            {!!movies?.length ? movies.map((item, index) => {
                           return (
                              <MovieCard key={index} item={item}/>
                           )
            }) : <h2 className='no-favorite-movie-container'>No favorite movie added</h2>}
            </div>
            <button
             className="favorite-movie-button"
             onClick={() => router.push('/')}
            >
               Back to Home
            </button>
    </div>
  )
}

export default FavoriteMovies;