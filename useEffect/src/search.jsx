import { useState } from "react";
import Productoutput from "./Productoutput";
function Search() {
  const [searchTerms, setSearchTerms] = useState("");
  const Cars = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];
  const filteredCars = Cars.filter((car) => {
    return car.title.toLowerCase().includes(searchTerms.toLowerCase());
  });

  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerms}
          onChange={(event) => setSearchTerms(event.target.value)}
          className=" border-2 p-2 rounded-3xl"
          placeholder="search..."
        />
      </div>
      <Productoutput filteredCars={filteredCars} />
    </>
  );
}

export default Search;
