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


const Filters = ({ filters={}, setFilters = ()=>{}}) => {

  const options = getYears(1990, 2024);

  const genres = [
    {
      "value": "action",
      "label": "Action"
    },
    {
      "value": "adventure",
      "label": "Adventure"
    },
    {
      "value": "animation",
      "label": "Animation"
    },
    {
      "value": "comedy",
      "label": "Comedy"
    },
    {
      "value": "crime",
      "label": "Crime"
    },
    {
      "value": "documentary",
      "label": "Documentary"
    },
    {
      "value": "drama",
      "label": "Drama"
    },
    {
      "value": "family",
      "label": "Family"
    },
    {
      "value": "fantasy",
      "label": "Fantasy"
    },
    {
      "value": "history",
      "label": "History"
    },
    {
      "value": "horror",
      "label": "Horror"
    },
    {
      "value": "music",
      "label": "Music"
    },
    {
      "value": "mystery",
      "label": "Mystery"
    },
    {
      "value": "news",
      "label": "News"
    },
    {
      "value": "reality",
      "label": "Reality"
    },
    {
      "value": "romance",
      "label": "Romance"
    },
    {
      "value": "scifi",
      "label": "Science Fiction"
    },
    {
      "value": "talk",
      "label": "Talk Show"
    },
    {
      "value": "thriller",
      "label": "Thriller"
    },
    {
      "value": "war",
      "label": "War"
    },
    {
      "value": "western",
      "label": "Western"
    }
  ]
  

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



  const handleStartYearChange = (e)=>{
    setFilters((prev) => ({ ...prev, startYearRange: e.value }));
  }

  const handleEndYearChange = (e)=>{
    setFilters((prev) => ({ ...prev, endYearRange: e.value }));
  }

  const handleChangeGenre = (e)=>{
    setFilters((prev) => ({ ...prev, genre: e.value }));
  }

  const handleStartRatingChange = (e) => {
    setFilters((prev) => ({ ...prev, startRating: e.value }));
  }

  const handleEndRatingChange = (e) => {
    setFilters((prev) => ({ ...prev, endRating: e.value }));
  }

  const clearFilter=()=> {
     console.log("hellooo");
     setFilters({});
  }

  return ( 
    <div className='filters-container'>
        Advance filters
        <div className='year-range'>
        Year Range
        <MyDropdown options={options} handleChange={handleStartYearChange} placeholder='Start Year' value={filters.startYearRange} />
        <MyDropdown options={options} handleChange={handleEndYearChange} placeholder='End Year' value={filters.endYearRange} />
        </div>
        <div className='genre'>
        Genre
        <MyDropdown options={genres} handleChange={handleChangeGenre} placeholder='Select genre' value={filters.genre} />
        </div>
        <div className='rating-range'>
        Rating Range
        <MyDropdown options={ratingOptions} handleChange={handleStartRatingChange} placeholder='Min rating' value={filters.startRating} />
        <MyDropdown options={ratingOptions} handleChange={handleEndRatingChange} placeholder='Max rating' value={filters.endRating} />
        </div>
        <button className='clear-button' onClick={() => {
           clearFilter();
        }}>
           Clear
        </button>
    </div>
  )
}

export default Filters