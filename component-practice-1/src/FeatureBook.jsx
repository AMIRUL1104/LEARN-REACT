import { Star } from "lucide-react";
import PropTypes from "prop-types";
function Featurebook({ book, onFeatureToggle }) {
  return (
    <button onClick={() => onFeatureToggle(book.id)}>
      <Star color={book.featured ? "green" : "black"} />
    </button>
  );
}
Featurebook.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureToggle: PropTypes.func.isRequired,
};
export default Featurebook;
