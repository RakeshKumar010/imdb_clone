import React from 'react'
import { Link } from 'react-router-dom';
import { hideNavFun } from "../../redux/hideNavSlice";
import { useDispatch } from "react-redux";
const SearchItemCard = ({data}) => {
  const dispatch = useDispatch();
  return (
    <>
    {data &&
        data.map(({ Title, Poster, Year, Type,imdbID },index) => {
          return (
            <>
              {Title.includes("Undefined") ||
              Title.includes("UnDefined") || Poster.includes('N/A') ? null : (
                <Link to={'./'+imdbID} className="flex w-full gap-3 cursor-pointer hover:bg-gray-800 transition-all duration-200"  key={index} onClick={()=>{
                  dispatch(hideNavFun(false))
                }}>
                  <img src={Poster} alt="..."  className="w-16 border-2"/>
                  <div className="text-white">
                    <p>{Title}</p>
                    <p>{Year}</p>
                    <p>{Type}</p>
                  </div>
                </Link>
              )}
            </>
          );
        })}
    </>
  )
}

export default SearchItemCard