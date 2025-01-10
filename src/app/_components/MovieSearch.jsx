"use client"
import { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          s: 'indian',  // Search query
          apikey: 'da5fae81', // Replace with your OMDb API key
        },
      });

      if (response.data.Response === 'True') {
        setMovies(response.data.Search); // Set the list of movies
      } else {
        setMovies([]);
        setError(response.data.Error); // Set the error if no movies found
      }
    } catch (err) {
      setError('Error fetching movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="w-full px-6 py-3 text-lg text-white bg-[#222] border border-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFAD49] focus:border-transparent transition duration-300 ease-in-out"
        />
        <button
          onClick={handleSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FFAD49] text-white py-2 px-4 rounded-md"
        >
          Search
        </button>

        {loading && <p className="text-white mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="bg-[#333] p-4 rounded-lg">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                alt={movie.Title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-white text-xl mt-4">{movie.Title}</h3>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
