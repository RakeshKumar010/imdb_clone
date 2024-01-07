import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

const MovieCard = ({poster_path,title,index_}) => {
  return (
    <>
        <img src={IMAGE_BASE_URL+poster_path} alt="..." className='w-[110px] md:w-[200px]  object-cover object-left-top rounded-md hover:border-4 border-gray-400 transition-all duration-300 ease-in-out hover:scale-110'  />
        
        
    </>
  )
}

export default MovieCard