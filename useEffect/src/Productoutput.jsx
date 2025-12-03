function Productoutput({ filteredCars }) {
  console.log(filteredCars);

  const Box = filteredCars.map((car) => {
    return (
      <div key={car.id} className=" bg-amber-400 w-2xs m-2">
        <h2>{car.title} </h2>
        <p>{car.brand} </p>
      </div>
    );
  });

  return <div className=" mt-4 mx-auto ml-10">{Box}</div>;
}

export default Productoutput;
