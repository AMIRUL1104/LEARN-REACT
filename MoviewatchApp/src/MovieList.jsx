import MovieItem from "./MovieItem";
import proptypes from "prop-types";
function MovieList({ movies, rateMovie, toggleWatched, deleteMovie }) {
  return (
    <div>
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
  setHandleFilter: proptypes.func.isRequired,
};
export default MovieList;
