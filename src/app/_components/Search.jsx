import React from 'react'


const Search = ({ query ='', onSearch=()=>{} }) => {
  return (

    <input
      type="text"
      id="movie-search"
      onChange={(e) => {
        onSearch(e);
      }}
      className='search-container'
      placeholder="Search for movies..."
    />
  )
}

export default Search