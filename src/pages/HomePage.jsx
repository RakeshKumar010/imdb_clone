import React from 'react'
import MovieCarousel from '../components/home/MovieCarousel'
import GenreMovieList from '../components/home/GenreMovieList'
import { useDispatch } from 'react-redux';
import { hideNavFun } from '../redux/hideNavSlice';

// HomePage component that dispatches an action on click and renders MovieCarousel and GenreMovieList
const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={()=>{
      dispatch(hideNavFun(false))
     }} >
      <MovieCarousel/>
      <GenreMovieList/>
    </div>
  )
}

export default HomePage
