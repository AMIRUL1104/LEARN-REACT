import BookRow from "./BookRow";

const books = [
  {
    id: 1,
    name: "JavaScript Essentials",
    author: "John Doe",
    featured: true,
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
    featured: true,
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
    featured: true,
  },
];

function Booklist() {
  return (
    <ul className="space-y-4 ">
      {books.map((book) => (
        <li
          key={book.id}
          className="p-4 border border-gray-300 rounded shadow flex justify-between items-center"
        >
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}
export default Booklist;
