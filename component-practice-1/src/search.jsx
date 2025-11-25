import proptypes from "prop-types";
function Search({ searchTerm, onSearchBook }) {
  return (
    <form className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => {
          onSearchBook(event.target.value);
        }}
        placeholder="Search for books..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </form>
  );
}
Search.propTypes = {
  searchTerm: proptypes.string.isRequired,
  onSearchBook: proptypes.func.isRequired,
};
export default Search;
