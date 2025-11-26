import CarBox from "./CarBox";
import PropTypes from "prop-types";

function ProductBox({ cars, searchTerm, isPremium }) {
  const filteredCars = cars
    .filter((car) => {
      return car.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((car) => {
      if (isPremium) return car.isPremium === isPremium;
      return true;
    });

  return (
    <div className="mt-1 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
      {filteredCars.map((car) => {
        return <CarBox car={car} key={car.id} />;
      })}
    </div>
  );
}

ProductBox.propTypes = {
  cars: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
};
export default ProductBox;

// // search functionality
// // let searched = cars.forEach((car) => {
//   if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
//     return;
//   }
//   filteredCars.push(<CarBox car={car} key={car.id} />);
// });
// // premium cars functionality
// filteredCars.forEach((car) => {
//   if (isPremium === false) {
//     return;
//   }
//   filteredCars.push(<CarBox car={car} key={car.id} />);
// });
