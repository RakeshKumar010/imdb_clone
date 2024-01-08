import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsItem from "../components/moviedetails/MovieDetailsItem";
import { useDispatch } from "react-redux";
import { hideNavFun } from "../redux/hideNavSlice";

// Define the MovieDetails component
const MovieDetails = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const [data, setData] = useState();

  // Define an async function to fetch movie data from the API
  const getData = async () => {
    const apikey = import.meta.env.VITE_APP_OMDB_API_KEY;
    const url = import.meta.env.VITE_APP_OMDB_API_URL;
    let result = await fetch(
      `${url}?apikey=${apikey}&i=${params.id}`
    );
    result = await result.json();
    setData([result]);
  };
  
  // Fetch movie data when the component renders for the first time
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
