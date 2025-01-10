"use client";
import React from 'react'
import MyDropdown from './Select'

function getYears(start, end) {
  const years = [];
  for (let year = start; year <= end; year++) {
    years.push(year);
  }
  return years.map((item) => ({ label: String(item), value: String(item) }));
}


const Filters = () => {

  const options = getYears(1990, 2024);

  const genres = [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "horror", label: "Horror" },
    { value: "romance", label: "Romance" },
    { value: "thriller", label: "Thriller" },
    { value: "sci-fi", label: "Science Fiction" },
    { value: "fantasy", label: "Fantasy" },
    { value: "mystery", label: "Mystery" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "documentary", label: "Documentary" },
    { value: "family", label: "Family" },
    { value: "musical", label: "Musical" },
  ];

  const ratingOptions = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
  ]



  const handleChange = ()=>{}

  const handleChangeGenre = ()=>{}

  const handleRatingChange = () => {}

  return ( 
    <div className='filters-container'>
        Advance filters
        <div className='year-range'>
        Year Range
        <MyDropdown options={options} handleChange={handleChange} placeholder='Start Year'/>
        <MyDropdown options={options} handleChange={handleChange} placeholder='End Year'/>
        </div>
        <div className='genre'>
        Genre
        <MyDropdown options={genres} handleChange={handleChangeGenre} placeholder='Select genre'/>
        </div>
        <div className='rating-range'>
        Rating Range
        <MyDropdown options={ratingOptions} handleChange={handleRatingChange} placeholder='Min rating'/>
        <MyDropdown options={ratingOptions} handleChange={handleRatingChange} placeholder='Max rating'/>
        </div>
        <button className='clear-button'>
           Clear
        </button>
    </div>
  )
}

export default Filters