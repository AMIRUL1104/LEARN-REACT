import Search from "./Search";
import Premium from "./Premium";
function MenuBar() {
  return (
    <div className="flex justify-left items-left p-4 overflow-auto border-b-2 border-gray-300 w-full mx-auto">
      <Search />
      <Premium />
    </div>
  );
}

export default MenuBar;
