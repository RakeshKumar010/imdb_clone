import GenresList from "../../Constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.map(({ name, id }, index) => {
        return (
          index < 5 && (
            <div key={index} className="py-8 px-8 md:px-16">
              <h1 className="text-white text-[20px] font-bold">{name}</h1>
              <MovieList id={id} index_={index}/>
            </div>
          )
        );
      })}
    </div>
  );
};

export default GenreMovieList;
