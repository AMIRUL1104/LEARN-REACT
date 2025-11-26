import Search from "./Search";
import Premium from "./Premium";
function MenuBar({ searchTerm, onSetSearchTerm, isPremium, onSetIsPremium }) {
  return (
    <div className="mt-3 grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  border-b-2 border-gray-300 w-full mx-auto">
      <Search searchTerm={searchTerm} onSetSearchTerm={onSetSearchTerm} />
      <Premium isPremium={isPremium} onSetIsPremium={onSetIsPremium} />
    </div>
  );
}

export default MenuBar;
