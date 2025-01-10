"use client";
import React from 'react'
import MyDropdown from './Select'

const Filters = () => {

  const options = [
        { value: 'action', label: 'Action' },
        { value: 'comedy', label: 'Comedy' },
        { value: 'drama', label: 'Drama' },
        { value: 'romance', label: 'Romance' },
  ];

  const handleChange = ()=>{}

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
        <MyDropdown options={options} handleChange={handleChange} placeholder='Select genre'/>
        </div>
        <div className='rating-range'>
        Rating Range
        <MyDropdown options={options} handleChange={handleChange} placeholder='Min rating'/>
        <MyDropdown options={options} handleChange={handleChange} placeholder='Max rating'/>
        </div>
        <button className='clear-button'>
           Clear
        </button>
    </div>
  )
}

export default Filters