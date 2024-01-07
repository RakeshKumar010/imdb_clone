import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const MovieList = ({ id, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const slideLeft = (e) => {
    e.scrollLeft -= 800;
  };
  const slideRight = (e) => {
    e.scrollLeft += 800;
  };
  const getAPi = async () => {
    const api = "cee4f8df87245208291dbe3b2826fddf";
    let result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=` +
        id
    );
    result = await result.json();
    setMovieList(result.results);
  };
  useEffect(() => {
    getAPi();
  }, []);
  return (
    <div>
      <FaAngleLeft
        className={`text-white absolute ${
          index_ % 3 == 0 ? "mt-[70px]" : "mt-[155px]"
        }  mx-8 hidden md:block cursor-pointer z-10`}
        onClick={() => {
          slideLeft(elementRef.current);
        }}
      />
      <FaAngleRight
        className={`text-white absolute ${
          index_ % 3 == 0 ? "mt-[70px]" : "mt-[155px]"
        } right-0 mx-8 hidden md:block cursor-pointer z-10`}
        onClick={() => {
          slideRight(elementRef.current);
        }}
      />
      <div
        className="flex  gap-4 overflow-x-hidden scrollbar-none scroll-smooth pt-4 pb-5 px-3"
        ref={elementRef}
      >
        {movieList.map(({ poster_path, backdrop_path, title }) => {
          return (
            <>
              {index_ % 3 == 0 ? (
                <MovieCard poster_path={backdrop_path} />
              ) : (
                <MovieCard poster_path={poster_path} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
