import proptypes from "prop-types";
import Featurebook from "./FeatureBook";

function Bookdetails({ name, author }) {
  return (
    <div>
      <h2 className="text-xl font-semibold ">{name}</h2>
      <p className="text-gray-600">{author}</p>
    </div>
  );
}

Bookdetails.propTypes = {
  name: proptypes.string.isRequired,
  author: proptypes.string.isRequired,
};
export default Bookdetails;
