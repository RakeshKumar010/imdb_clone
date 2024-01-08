import { BsCalendar2Date } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import {  MdBookmarkRemove } from "react-icons/md";
import StarRating from "../StarRating";
const FavListItem = ({ value, index,setRemoveData,removeData }) => {
  const { title, description, poster, rating, vote, release,_id,userRating,comment } = value;
  return (
    <div className="flex text-white flex-wrap  p-3" key={index}>
      <img src={poster} alt={title} className=" w-full md:w-auto rounded-md" />
      <div className="md:ml-10 md:w-[50vw] m-0 flex flex-col gap-2 ">
        <h1 className="md:text-4xl text-2xl  font-bold ">{title}</h1>
        <p className=" md:block hidden  my-3">{description}</p>
        <div className="flex flex-wrap md:justify-between gap-6">
          <div className="flex flex-wrap md:justify-between gap-6">
            <div>
              <p className="text-[12px] font-bold">IMDb RATING</p>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-200 text-3xl" />
                <div>
                  <p>
                    <span className="font-bold "> {rating}</span>
                    /10
                  </p>
                  <p className="text-[11px]">
                    {Math.floor(Number(vote.replace(/,/g, "")) / 1000)}k
                    {/* {vote} */}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold">RELEASED</p>
              <div className="flex items-center gap-2 ">
                <BsCalendar2Date className="text-yellow-200 text-3xl" />

                <p className="md:text-lg font-bold">{release}</p>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold">REMOVE TO FAVLIST</p>
              <div
                onClick={async () => {
                  localStorage.removeItem(title);
                  setRemoveData(!removeData)
                  const baseUrl = import.meta.env.VITE_APP_URL;
                  let result = await fetch(`${baseUrl}/favmovie`, {
                    method: "delete",
                    body: JSON.stringify({
                      title: title,
                    }),
                    headers: {
                      "content-type": "application/json",
                    },
                  });
                  result = await result.json();
                }}
                className={
                  "flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer"
                }
              >
                <MdBookmarkRemove className=" text-3xl " />

                <p className="md:text-lg font-bold">FavList</p>
              </div>
            </div>


          </div>
        </div>
              <StarRating  value={value} />
      </div>
    </div>
  );
};

export default FavListItem;
