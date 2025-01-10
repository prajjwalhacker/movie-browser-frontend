import React from 'react'


const Search = ({ query ='', onSearch=()=>{} }) => {
  return (

    <input
      type="text"
      id="movie-search"
      value={query}
      onChange={(e) => {
        onSearch(e.target.value);
      }}
      className='search-container'
      placeholder="Search for movies..."
    />
  )
}

export default Search