import BookRow from "./BookRow";
import proptypes from "prop-types";

function Booklist({ searchTerm, books, onFeatureToggle }) {
  const rows = [];

  books.forEach((book) => {
    if (book.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    rows.push(
      <BookRow book={book} key={book.id} onFeatureToggle={onFeatureToggle} />
    );
  });
  return <div className="space-y-4">{rows}</div>;
}
Booklist.propTypes = {
  searchTerm: proptypes.string.isRequired,
  books: proptypes.array.isRequired,
  onFeatureToggle: proptypes.func.isRequired,
};
export default Booklist;
