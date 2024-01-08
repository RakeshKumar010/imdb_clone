import React from 'react'
import { Carousel } from 'flowbite-react'

// Array of carousel image URLs
const data =[
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/706b9474134343.5c239806af449.jpg",
  "https://cdnb.artstation.com/p/assets/images/images/026/475/643/large/spencer-owen-i-am-lisa-landscape.jpg?1588873984",
  "https://getwallpapers.com/wallpaper/full/9/e/3/1267880-download-free-movie-poster-wallpaper-2560x1920-for-1080p.jpg",
  "https://live.staticflickr.com/320/19647015766_290035df2a_h.jpg",
  "https://wallpapercave.com/wp/wp1945919.jpg"
]

// MovieCarousel component that displays a carousel of images using flowbite-react
const MovieCarousel = () => {
  return (
   <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]" >
    <Carousel>
      {data && data.map((value) => {
        return (
          <img src={value} alt="..." className='w-full bg-contain' />
        );
      })}
    </Carousel>
  </div>
  )
}

export default MovieCarousel
