import ReactStars from "react-stars";
import PropTypes from "prop-types";

function MovieItem({ movie, rateMovie, toggleWatched, deleteMovie }) {
  const ratingChanged = (newRating) => {
    // console.log(newRating);
    rateMovie(movie.id, newRating);
  };
  return (
    <li className=" flex justify-between bg-sky-100 p-3.5 rounded-md shadow-md shadow-sky-400 ">
      <span className=" font-semibold text-lg text-sky-900 capitalize ">
        {movie.title} on {movie.ott} {movie.rating && `⭐ ${movie.rating}/5`}
      </span>
      <div className=" flex gap-2 ">
        <ReactStars
          count={5}
          value={movie.rating}
          onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
        <button
          className=" capitalize border-2 px-2 rounded-2xl border-sky-800 text-sky-800 hover:bg-sky-800 hover:text-white text-sm "
          onClick={() => toggleWatched(movie.id)}
        >
          {movie.watched ? "Watched" : "Unwatched"}
        </button>
        <button
          onClick={() => deleteMovie(movie.id)}
          className=" bg-red-600 rounded-md px-2 text-white hover:bg-red-900 "
        >
          Delete
        </button>
      </div>
    </li>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ott: PropTypes.string.isRequired,
    rating: PropTypes.number,
    watched: PropTypes.bool.isRequired,
  }).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
export default MovieItem;
