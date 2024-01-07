import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";
const MovieDetailsItem = ({ value, index, movieId }) => {
  const {
    Poster,
    Title,
    Year,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Ratings,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Released,
  } = value;
  const [addFav, setAddFav] = useState(true);
  useEffect(() => {
    let result = localStorage.getItem(Title);
    if (result) {
      setAddFav(false);
    } else {
      setAddFav(true);
    }
    console.log(result);
  });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Poster})` }}
        className="bg-black text-white min-h-screen bg-cover "
        key={index}
      >
        <div className=" backdrop-blur-3xl min-h-screen ">
          <div className="flex md:flex-row flex-col  px-3">
            <div className="flex flex-col   items-center gap-3 md:w-64 lg:w-80  w-full ">
              <img className="w-full " src={Poster} alt={Title} />
              <div className="flex md:justify-between justify-around  w-full">
                <p className="p-1 px-3 text-sm border-2  rounded-full">
                  {Genre.split(", ")[0]}
                </p>
                <p className="p-1 px-3 text-sm border-2  rounded-full">
                  {Genre.split(", ")[1]}
                </p>
                <p className="p-1 px-3 text-sm border-2  rounded-full">
                  {Genre.split(", ")[2] || "Other"}
                </p>
              </div>

              <p className="text-center md:hidden block ">{Plot}</p>
            </div>
            <div className="md:ml-10 md:w-[50vw] m-0 flex flex-col gap-2">
              <h1 className="md:text-4xl text-2xl font-bold ">
                {Title} ({Year})
              </h1>
              <p className=" md:block hidden  my-3">{Plot}</p>
              <div className="flex flex-wrap md:justify-between gap-6">
                <div>
                  <p className="text-[12px] font-bold">IMDb RATING</p>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-200 text-3xl" />
                    <div>
                      <p>
                        <span className="font-bold "> {imdbRating}</span>
                        /10
                      </p>
                      <p className="text-[11px]">
                        {Math.floor(Number(imdbVotes.replace(/,/g, "")) / 1000)}
                        k
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[12px] font-bold">BOX OFFICE COLLECTION</p>
                  <div className="flex items-center gap-2 ">
                    <GiTakeMyMoney className="text-yellow-200 text-3xl" />

                    <p className="md:text-lg font-bold">{BoxOffice}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] font-bold">RELEASED</p>
                  <div className="flex items-center gap-2 ">
                    <BsCalendar2Date className="text-yellow-200 text-3xl" />

                    <p className="md:text-lg font-bold">{Released}</p>
                  </div>
                </div>
                <div className="select-none cursor-pointer">
                  <p className="text-[12px] font-bold">ADD AS FAVORITE</p>
                  {addFav ? (
                    <div
                      onClick={async () => {
                        setAddFav(false);
                        localStorage.setItem(Title, movieId);
                        let result = await fetch(
                          "http://localhost:8000/favmovie",
                          {
                            method: "post",
                            body: JSON.stringify({
                              title: Title,
                              description:Plot,
                              poster: Poster,
                              rating: imdbRating,
                              vote: imdbVotes,
                              release: Released,
                            }),
                            headers: {
                              "content-type": "application/json",
                            },
                          }
                        );
                        result = await result.json();
                      }}
                      className={"flex items-center gap-2 text-blue-500"}
                    >
                      <MdOutlineBookmarkAdd className=" text-3xl" />

                      <p className="md:text-lg font-bold">FavList</p>
                    </div>
                  ) : (
                    <div
                      onClick={async () => {
                        setAddFav(true);
                        localStorage.removeItem(Title);
                        let result = await fetch(
                          "http://localhost:8000/favmovie",
                          {
                            method: "delete", // Change method to 'delete'
                            body: JSON.stringify({
                              title: Title,
                            }),
                            headers: {
                              "content-type": "application/json",
                            },
                          }
                        );
                        result = await result.json();
                        console.log(result);
                      }}
                      className={"flex items-center gap-2 text-green-500"}
                    >
                      <MdBookmarkAdd className=" text-3xl " />

                      <p className="md:text-lg font-bold">FavList</p>
                    </div>
                  )}
                </div>
              </div>
              <p className="">
                <strong>Director:</strong> {Director}
              </p>
              <p className="">
                <strong>Actors:</strong> {Actors}
              </p>

              <p className="">
                <strong>Language:</strong> {Language}
              </p>
              <p className="">
                <strong>Country:</strong> {Country}
              </p>
              <p className="">
                <strong>Awards:</strong> {Awards}
              </p>
              <p className="">
                <strong>Ratings:</strong>
              </p>
              {Ratings.map(({ Source, Value }, i) => (
                <div key={i} className="ml-2">
                  <span>{Source}: </span>
                  <span>{Value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsItem;
