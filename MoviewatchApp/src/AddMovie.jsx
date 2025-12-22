function AddMovie({ setShowForm, showForm }) {
  return (
    <button
      onClick={(e) => setShowForm(showForm ? false : true)}
      className=" capitalize font-bold  border-2 px-2 rounded-2xl border-sky-800 text-sky-800 hover:bg-sky-800 hover:text-white text-sm "
    >
      {showForm ? "close form " : "Add Movie +"}
    </button>
  );
}

export default AddMovie;
