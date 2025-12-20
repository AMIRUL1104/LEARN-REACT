import MovieItem from "./MovieItem";
import proptypes from "prop-types";

function MovieList({ movies, rateMovie, toggleWatched, deleteMovie }) {
  return (
    <div>
      <h2 className=" text-center text-2xl font-bold text-sky-800 m-8 ">
        Movie List
      </h2>
      {movies.length === 0 ? (
        <p className=" text-red-700 text-center">No movie found !</p>
      ) : (
        <ul className=" flex flex-col gap-4 ">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              rateMovie={rateMovie}
              toggleWatched={toggleWatched}
              deleteMovie={deleteMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

MovieList.propTypes = {
  movies: proptypes.array.isRequired,
  rateMovie: proptypes.func.isRequired,
  toggleWatched: proptypes.func.isRequired,
  deleteMovie: proptypes.func.isRequired,
};
export default MovieList;
