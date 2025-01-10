
import React from 'react'
import moviePosterI from '../../../public/movie-poster.jpg';

const Hero = () => {
  return (
    <div className='main-container'>
      <div className='title'>
         Find Your Next <span className='title-special-text'>Favorite</span> Movie!
      </div>
        <img src={moviePosterI.src} alt='' height={'400px'} width={'400px'}/>
    </div>
  )
}

export default Hero