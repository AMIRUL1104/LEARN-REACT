import Header from "./Header";
import MenuBar from "./MenuBar";
import ProductBox from "./ProductBox";
function TapaScriptCard() {
  return (
    <div className="rounded p-4 w-full border mx-0  ">
      <Header />
      <MenuBar />
      <ProductBox />
    </div>
  );
}

export default TapaScriptCard;
