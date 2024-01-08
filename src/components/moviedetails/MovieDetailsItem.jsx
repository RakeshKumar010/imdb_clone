import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";

// MovieDetailsItem component to display details of a movie
const MovieDetailsItem = ({ value, index, movieId }) => {
  // Destructuring movie details
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

  // State to manage favorite status
  const [addFav, setAddFav] = useState(true);

  // useEffect to check if the movie is in local storage
  useEffect(() => {
    let result = localStorage.getItem(Title);
    if (result) {
      setAddFav(false);
    } else {
      setAddFav(true);
    }

  });

  // JSX to render the movie details
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Poster})` }}
        className="bg-black text-white min-h-screen bg-cover "
        key={index}
      >
        <div className=" backdrop-blur-3xl min-h-screen ">
          <div className="flex md:flex-row flex-col  md:p-20 p-3">
            {/* Left column with movie poster and genre */}
            <div className="flex flex-col   items-center gap-3 md:w-64 lg:w-80  w-full ">
              <img className="w-full rounded-md" src={Poster} alt={Title} />
              <div className="flex md:justify-between justify-around  w-full">
                <p className="p-1 px-3 text-sm border-2  rounded-full">
                  {Genre.split(", ")[0] || "Other"}
                </p>
                <p className="p-1 px-3 text-sm border-2  rounded-full">
                  {Genre.split(", ")[1] || "Other"}
                </p>
                <p className="p-1 px-3 text-sm border-2  rounded-full">
                  {Genre.split(", ")[2] || "Other"}
                </p>
              </div>
              <p className="text-start md:hidden block my-3 border-2 p-3 rounded-md">
                {Plot}
              </p>
            </div>

            {/* Right column with movie details */}
            <div className="md:ml-10 md:w-[50vw] m-0 flex flex-col gap-2">
              <h1 className="md:text-4xl text-2xl font-bold ">
                {Title} ({Year})
              </h1>
              <p className=" md:block hidden  my-3">{Plot}</p>
              <div className="flex flex-wrap md:justify-between gap-6">
                {/* IMDb Rating */}
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

                {/* Box Office Collection */}
                <div>
                  <p className="text-[12px] font-bold">BOX OFFICE COLLECTION</p>
                  <div className="flex items-center gap-2 ">
                    <GiTakeMyMoney className="text-yellow-200 text-3xl" />
                    <p className="md:text-lg font-bold">
                      {BoxOffice || "NO DATA"}
                    </p>
                  </div>
                </div>

                {/* Released Date */}
                <div>
                  <p className="text-[12px] font-bold">RELEASED</p>
                  <div className="flex items-center gap-2 ">
                    <BsCalendar2Date className="text-yellow-200 text-3xl" />
                    <p className="md:text-lg font-bold">{Released}</p>
                  </div>
                </div>

                {/* Add as Favorite */}
                <div className="select-none cursor-pointer">
                  <p className="text-[12px] font-bold">ADD AS FAVORITE</p>
                  {addFav ? (
                    <div
                      onClick={async () => {
                        setAddFav(false);
                        localStorage.setItem(Title, movieId);
                        const baseUrl = import.meta.env.VITE_APP_URL;
                        let result = await fetch(`${baseUrl}/favmovie`, {
                          method: "post",
                          body: JSON.stringify({
                            title: Title,
                            description: Plot,
                            poster: Poster,
                            rating: imdbRating,
                            vote: imdbVotes,
                            release: Released,
                          }),
                          headers: {
                            "content-type": "application/json",
                          },
                        });
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
                        const baseUrl = import.meta.env.VITE_APP_URL;
                        let result = await fetch(`${baseUrl}/favmovie`, {
                          method: "delete", // Change method to 'delete'
                          body: JSON.stringify({
                            title: Title,
                          }),
                          headers: {
                            "content-type": "application/json",
                          },
                        });
                        result = await result.json();
                
                      }}
                      className={"flex items-center gap-2 text-green-500"}
                    >
                      <MdBookmarkAdd className=" text-3xl " />
                      <p className="md:text-lg font-bold">FavList</p>
                    </div>
                  )}
                </div>
              </div>
              {/* Additional movie details */}
              {Director == "N/A" ? null : (
                <p className="">
                  <strong>Director:</strong> {Director}
                </p>
              )}
              {Actors == "N/A" ? null : (
                <p className="">
                  <strong>Actors:</strong> {Actors}
                </p>
              )}
              {Language == "N/A" ? null : (
                <p className="">
                  <strong>Language:</strong> {Language}
                </p>
              )}
              {Country == "N/A" ? null : (
                <p className="">
                  <strong>Country:</strong> {Country}
                </p>
              )}
              {Awards == "N/A" ? null : (
                <p className="">
                  <strong>Awards:</strong> {Awards}
                </p>
              )}
              <p className="">
                <strong>Ratings:</strong>
              </p>
              {/* Displaying Ratings */}
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
