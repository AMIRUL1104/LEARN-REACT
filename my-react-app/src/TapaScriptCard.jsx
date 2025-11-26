import Header from "./Header";
import MenuBar from "./MenuBar";
import ProductBox from "./ProductBox";
import { useState } from "react";

function TapaScriptCard() {
  const [searchTerms, setSearchTerms] = useState("");
  const [isPremium, setIsPremium] = useState(false);

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

  return (
    <div className="rounded p-4 w-full border mx-0  ">
      <Header />
      <MenuBar
        searchTerm={searchTerms}
        onSetSearchTerm={setSearchTerms}
        isPremium={isPremium}
        onSetIsPremium={setIsPremium}
      />
      <ProductBox cars={Cars} searchTerm={searchTerms} isPremium={isPremium} />
    </div>
  );
}

export default TapaScriptCard;
