import Header from "./header";
import Search from "./search";
import Booklist from "./booklist";

import { useState } from "react";

function Boimela() {
  const books = [
    {
      id: 1,
      name: "JavaScript Essentials",
      author: "John Doe",
      featured: false,
    },
    {
      id: 2,
      name: "CSS Mastery",
      author: "Rachel White",
      featured: false,
    },
    {
      id: 3,
      name: "HTML5 in Action",
      author: "Alex Turner",
      featured: false,
    },
    {
      id: 4,
      name: "Web Architecture Basics",
      author: "Sara Milton",
      featured: false,
    },
    {
      id: 5,
      name: "Frontend Roadmap",
      author: "Leo Park",
      featured: false,
    },
  ];

  const [Books, setBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFeatured = (id) => {
    setBooks(
      Books.map((book) =>
        book.id === id ? { ...book, featured: !book.featured } : book
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <Booklist
        searchTerm={searchTerm}
        books={Books}
        onFeatureToggle={toggleFeatured}
      />
    </div>
  );
}
export default Boimela;
