import Bookdetails from "./BookDetails";
import Featurebook from "./FeatureBook";
import PropTypes from "prop-types";

function BookRow({ book }) {
  return (
    <>
      <Bookdetails name={book.name} author={book.author} />
      <Featurebook />
    </>
  );
}

BookRow.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookRow;
