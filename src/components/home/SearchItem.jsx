import React, { useEffect, useState } from "react";
import SearchItemCard from "./SearchItemCard";

const SearchItem = ({ serchData,searchFilter }) => {
  const [data, setData] = useState();
  const getFun = async () => {
    const apikey = "2a978034";
    let result = await fetch(
      `https://www.omdbapi.com/?s=${serchData}&apikey=${apikey}&type=${searchFilter}`
    );
    result = await result.json();
    setData(result.Search);
    console.log(result.Search);
  };
  useEffect(() => {
    getFun();
  }, [serchData,searchFilter]);
  return (
    <div className="flex flex-col items-center bg-[#121212] w-full md:w-96 rounded-md  lg:w-[720px] absolute z-10 min-h-96 gap-3 p-2" >
      <SearchItemCard data={data}/>
    </div>
  );
};

export default SearchItem;
