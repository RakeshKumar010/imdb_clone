import React, { useEffect, useState } from "react";
import { BiSolidSkipNextCircle, BiSolidSkipPreviousCircle } from "react-icons/bi";

import FavListItem from "../components/favlist/FavListItem";
import { useDispatch, useSelector } from "react-redux";
import { hideNavFun } from "../redux/hideNavSlice";

const FavList = () => {
  const ratingData = useSelector((state)=>state.rating.value)

  const dispatch =useDispatch()
  const indexArr = [];
  const [pageNum, setPageNum] = useState(0);
  const [dataNum, setDataNum] = useState(0);
  const [data, setData] = useState([]);
  const [removeData, setRemoveData]=useState(false)
  
  const getFun = async () => {
    let result = await fetch("http://localhost:8000/favlist");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getFun();
    console.log(removeData);
  }, [removeData,ratingData]);
  return (
    <div className="flex flex-col items-center relative min-h-[90vh] pb-16" onClick={()=>{
      dispatch(hideNavFun(false))
    }}>
      <div className="flex  flex-col-reverse gap-10 items-center justify-center">
        {data.slice(dataNum, dataNum + 10).map((value, index) => {
          indexArr.push(index);
          return <FavListItem value={value} index={index} setRemoveData={setRemoveData} removeData={removeData}/>;
        })}
      </div>

      {/* pagination  */}
      
      <div
        aria-label="Page navigation example"
        className="select-none absolute bottom-0"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          <li
            onClick={() => {
              if(pageNum>0){

                setPageNum(pageNum - 1);
                setDataNum(dataNum - 10);
              }
            }}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            <BiSolidSkipPreviousCircle/> 
          </li>
          <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            {pageNum}
          </li>

          {indexArr.length>=10 ? (
            <li
              onClick={() => {
                setPageNum(pageNum + 1);
                setDataNum(dataNum + 10);
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
               <BiSolidSkipNextCircle />
            </li>
          ) : (
            <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-400 border border-gray-300 rounded-e-lg   ">
              <BiSolidSkipNextCircle />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavList;
