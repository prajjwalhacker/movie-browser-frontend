"use client"
import React from 'react'
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loader'>
         <Circles color="#ff4757" height={80} width={80} />
    </div>
  )
}

export default Loader