
import React from 'react'
import moviePosterI from '../../../public/movie-poster.jpg';

const Hero = () => {
  return (
    <section  className='hero-container'>
      <div className='title'>
         Find Your Next <span className='title-special-text'>Favorite</span> Movie!
      </div>
        <img src={moviePosterI.src} alt='Movie poster Image' height={'400px'} width={'400px'}/>
    </section >
  )
}

export default Hero