import Bookdetails from "./BookDetails";
import Featurebook from "./FeatureBook";
import PropTypes from "prop-types";

function BookRow({ book, onFeatureToggle }) {
  return (
    <div className="p-4 flex items-center justify-between border border-gray-200 rounded shadow">
      <Bookdetails name={book.name} author={book.author} />
      <Featurebook book={book} onFeatureToggle={onFeatureToggle} />
    </div>
  );
}

BookRow.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookRow;
