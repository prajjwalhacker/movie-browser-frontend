"use client";
import React, { useEffect } from 'react'
import MovieCard from '../_components/MovieCard';
import { useState } from 'react';

const FavoriteMovies = () => {

  const [movies, setMovies] = useState([]);
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
            {movies.map((item, index) => {
                           return (
                              <MovieCard key={index} item={item}/>
                           )
            })}
            </div>
    </div>
  )
}

export default FavoriteMovies;