import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetailsItem from "../components/moviedetails/MovieDetailsItem";
import { useDispatch } from "react-redux";
import { hideNavFun } from "../redux/hideNavSlice";
const MovieDetails = () => {
  const params = useParams();
  const [data, setData] = useState();

  const getData = async () => {
    const apikey = "2a978034";
    let result = await fetch(
      `https://www.omdbapi.com/?apikey=${apikey}&i=${params.id}`
    );
    result = await result.json();
    setData([result]);
    console.log([result]);
  };
  const dispatch = useDispatch()
  useEffect(() => {
    getData();
  }, [params.id]);
  return (
    <div onClick={()=>{
      dispatch(hideNavFun(false))
    }}>
      {data &&
        data.map((value,index) => {
            return <MovieDetailsItem index={index} value={value} movieId={params.id} />
          }
        )}
    </div>
  );
};

export default MovieDetails;

{
  /* <MovieDetailsItem data={data} movieId={params.id}/> */
}
