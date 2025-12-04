function Productoutput({ filteredCars }) {
  // console.log(filteredCars);

  const Box = filteredCars.map((car) => {
    return (
      <div key={car.id} className=" bg-amber-400 m-auto w-full p-5 rounded-2xl">
        <h2>{car.title} </h2>
        <p>{car.brand} </p>
      </div>
    );
  });

  return (
    <div className="mt-1 mb-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
      {Box}
    </div>
  );
}

export default Productoutput;
