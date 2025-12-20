import { useState } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import proptypes from "prop-types";

function MovieWatch() {
  const [movie, setMovie] = useState([]);
  // const [movielist, setMovielist] = useState([]);

  // console.log(movie);

  const addMovie = ({ title, ott }) => {
    let addNewMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };
    setMovie([...movie, addNewMovie]);
  };
  //  rating function
  const rateMovie = (id, rating) => {
    setMovie(movie.map((mov) => (mov.id === id ? { ...mov, rating } : mov)));
  };
  // toggle function
  const toggleWatched = (id) => {
    setMovie(
      movie.map((mov) =>
        mov.id === id ? { ...mov, watched: !mov.watched } : mov
      )
    );
  };

  // delete function

  // const deleteMovie = (id) => {
  //   const filteredMovie = movie.filter((mov) => mov.id !== id);
  //   setMovie(filteredMovie);
  // };
  const deleteMovie = (id) => {
    setMovie(movie.filter((mov) => mov.id !== id));
  };

  return (
    <div className=" max-w-2xl bg-sky-200 p-3.5 mx-auto rounded-md mt-10 shadow-2xl shadow-sky-800 ">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <MovieList
        movies={movie}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

MovieWatch.propTypes = {
  addMovie: proptypes.func,
  rateMovie: proptypes.func,
  toggleWatched: proptypes.func,
  deleteMovie: proptypes.func,
  movies: proptypes.array,
};

export default MovieWatch;
