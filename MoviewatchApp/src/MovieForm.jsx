import { useState } from "react";
import proptypes from "prop-types";
function MovieForm({ addMovie, showForm }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    ott: "",
  });

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewMovie({ ...newMovie, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newMovie?.title.trim() || !newMovie?.ott.trim()) return;

    addMovie(newMovie);
    setNewMovie({ ...newMovie, title: "", ott: "" });
  };

  return (
    <div className={` mb-2.5 ${showForm ? "block" : "hidden"}`}>
      <h2 className=" text-center text-2xl font-bold text-sky-800 ">
        Add a New Movie
      </h2>
      <form
        onSubmit={handleSubmit}
        className="  border-cyan-800 flex flex-col items-center mt-4 gap-4 p-4 rounded-md bg-sky-100 shadow-md shadow-sky-600 "
      >
        <input
          type="text"
          name="title"
          value={newMovie?.title}
          onChange={handleInput}
          placeholder="Movie Name"
          className=" border-2 rounded-md p-2 w-3/4 mx-auto mb-4 border-cyan-900 text-blue-900 "
        />
        <select
          name="ott"
          value={newMovie?.ott}
          onChange={handleInput}
          className=" border-2 rounded-md p-2 w-3/4 mx-auto  border-cyan-900  text-blue-900"
        >
          <option value="">Select OTT Platform</option>
          <option value="netflix">Netflix</option>
          <option value="prime">Amazon Prime</option>
          <option value="disney">Disney+</option>
          <option value="hulu">Hulu</option>
        </select>
        <button
          type="submit"
          className=" font-bold w-3/4 bg-sky-800 text-white p-2 rounded-md hover:bg-sky-700 "
        >
          Add
        </button>
      </form>
    </div>
  );
}

MovieForm.propTypes = {
  addMovie: proptypes.func.isRequired,
};

export default MovieForm;
