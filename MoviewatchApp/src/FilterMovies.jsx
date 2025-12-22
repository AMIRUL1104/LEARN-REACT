import PropTypes from "prop-types";
function FilterMovies({ filteredMovie }) {
  return (
    <div className=" flex items-center justify-evenly gap-2.5  ">
      <button
        onClick={() => filteredMovie("all")}
        className=" border-2 rounded-3xl px-2 text-sm"
      >
        All
      </button>
      <button
        onClick={() => filteredMovie("watched")}
        className=" border-2 rounded-3xl px-2  text-sm"
      >
        Watched
      </button>
      <button
        onClick={() => filteredMovie("unwatched")}
        className=" border-2 rounded-3xl px-2  text-sm"
      >
        Unwatched
      </button>
    </div>
  );
}
FilterMovies.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
export default FilterMovies;
