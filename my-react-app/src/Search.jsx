function Search({ searchTerm, onSetSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(event) => onSetSearchTerm(event.target.value)}
      placeholder="Search cars..."
      className="rounded border-2  mb-3"
    />
  );
}

export default Search;
