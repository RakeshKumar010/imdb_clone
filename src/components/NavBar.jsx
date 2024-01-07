import { FaImdb } from "react-icons/fa";
import { MdOutlineNotes } from "react-icons/md";
import Logo from "../assets/image/IMDB_Logo.png";
import imdbPro from "../assets/image/imdbpro.png";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import SearchItem from "./home/SearchItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNavFun } from "../redux/hideNavSlice";

const NavBar = () => {
  const [serchData, setSerchData] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const slicevalue = useSelector((state) => state.hideNav.value);
  const dispatch = useDispatch();

  return (
    <div className="lg:flex justify-center bg-[#121212] lg:px-[6vw]">
      <div className=" flex justify-between p-3 items-center w-full">
        <Link to={"/"}>
          <img src={Logo} alt="..." className="w-16 h-8 lg:block hidden" />
        </Link>
        <div className="flex items-center lg:gap-1 gap-3">
          <MdOutlineNotes className="text-white text-2xl" />
          <p className="font-bold text-white text-sm lg:block hidden">Menu</p>
          <Link to={"/"}>
            <img src={Logo} alt="..." className="w-16 h-8 lg:hidden block" />
          </Link>
          {/* +`${miniSearchBox?"hidden":"block"}` */}
        </div>
        <div className="flex gap-3 items-center ">
          {/* <img src={Logo} alt="..." className="w-16 h-8 lg:hidden block" /> */}
          <div
            className={
              slicevalue
                ? "md:relative absolute left-0 w-full md:w-auto md:block "
                : "md:relative absolute left-0 w-full md:w-auto md:block hidden"
            }
          >
            <div className="flex items-center bg-white md:w-96 w-full rounded-md px-2   py-[0.1vw] lg:w-[720px]  ">
              <select
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                  console.log(e.target.value);
                }}
                name="search"
                className="w-20 border-r-[1px] border-gray-400 border-0 text-black  h-full font-semibold"
              >
                <option className="" value="">
                  All
                </option>
                <option className="" value="movie">
                  Movies
                </option>
                <option className="" value="series">
                  Series
                </option>
              </select>
              <input
                type="text"
                placeholder="Search IMDb"
                className=" w-full mr-2  pl-2 placeholder:text-gray-600 placeholder:text-sm border-0 "
                onChange={(e) => {
                  dispatch(hideNavFun(true));

                  setSerchData(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <IoMdSearch className="text-2xl text-gray-600 bg-white md:block hidden" />
            </div>
            {slicevalue ? (
              <SearchItem serchData={serchData} searchFilter={searchFilter} />
            ) : null}
          </div>
          <img src={imdbPro} alt="..." className="w-20 h-4 lg:block hidden" />
        </div>
        <div className="border-[1px] border-gray-700 h-8 md:block hidden"></div>

        <div className="flex items-center lg:gap-3 gap-4">
          <Link to={"/favlist"} className="lg:flex gap-1 items-center hidden ">
            <MdBookmarkAdd className="text-white text-2xl" />
            <p className="text-white font-bold text-sm">Favlist</p>
          </Link>
          <IoMdSearch
            className="text-2xl text-white md:hidden block"
            onClick={() => {
              // setMiniSearchBox(true);
              dispatch(hideNavFun(true));
            }}
          />
          <Link to={"/favlist"} className="lg:flex gap-1 items-center ">
            <MdBookmarkAdd className="text-white text-2xl lg:hidden block" />
          </Link>
          <Link className="text-white font-bold text-sm text-nowrap">
            Sign In
          </Link>
          <select className="bg-transparent text-white font-bold text-sm w-20 border-0 lg:block hidden ">
            <option className="bg-gray-700" value="">
              EN
            </option>
            <option className="bg-gray-700" value="EN">
              English
            </option>
            <option className="bg-gray-700" value="EN">
              Hindi
            </option>
          </select>
          <Link className="text-black font-bold text-sm bg-[#f5c518] p-2 rounded-md lg:hidden md:block">
            Use App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
