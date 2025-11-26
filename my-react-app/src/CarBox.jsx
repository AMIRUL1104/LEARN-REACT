import PropTypes from "prop-types";
function CarBox({ car }) {
  return (
    <div
      key={car.id}
      className="p-4 pl-5 rounded-2xl border border-gray-300 mb-4 shadow-2xl"
    >
      <h2 className="text-xl font-bold ">{car.title}</h2>
      <p>Brand: {car.brand}</p>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>{car.isPremium ? "Premium" : "Standard"}</p>
    </div>
  );
}

CarBox.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};
export default CarBox;

// CarBox.propTypes = {
//   cars: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//       title: PropTypes.string.isRequired,
//       brand: PropTypes.string.isRequired,
//       year: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//         .isRequired,
//       price: PropTypes.number.isRequired,
//       isPremium: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };
// CarBox.propTypes = {
//   cars: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       brand: PropTypes.string.isRequired,
//       year: PropTypes.number.isRequired,
//       price: PropTypes.number.isRequired,
//       isPremium: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };
