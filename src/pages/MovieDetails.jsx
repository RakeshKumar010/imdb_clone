// Import necessary modules from react, react-router-dom, and redux
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsItem from "../components/moviedetails/MovieDetailsItem";
import { useDispatch } from "react-redux";
import { hideNavFun } from "../redux/hideNavSlice";

// Define the MovieDetails component
const MovieDetails = () => {
  // Get the movie ID from the URL parameters
  const params = useParams();

  // Initialize state for storing the movie data
  const [data, setData] = useState();

  // Define an async function to fetch movie data from the API
  const getData = async () => {
    // Get the API key and URL from environment variables
    const apikey = import.meta.env.VITE_APP_OMDB_API_KEY;
    const url = import.meta.env.VITE_APP_OMDB_API_URL;

    // Fetch the movie data
    let result = await fetch(
      `${url}?apikey=${apikey}&i=${params.id}`
    );
    result = await result.json();

    // Update the state with the fetched movie data
    setData([result]);
  };
  
  // Get the dispatch function from redux
  const dispatch = useDispatch()

  // Fetch movie data when the component renders for the first time
  useEffect(() => {
    getData();
  }, [params.id]);

  // Render the component
  return (
    <div onClick={()=>{
      // Dispatch the hideNavFun action when the div is clicked
      dispatch(hideNavFun(false))
    }}>
      {/* Map over the movie data and render a MovieDetailsItem for each movie */}
      {data &&
        data.map((value,index) => {
            return <MovieDetailsItem index={index} value={value} movieId={params.id} />
          }
        )}
    </div>
  );
};

// Export the MovieDetails component
export default MovieDetails;
