import { useState } from "react";

function SmartToggleDashboard() {
  const [bgToggle, setBgToggle] = useState(false);
  const [darkLight, setDarkLight] = useState(true);
  const [height, setHeight] = useState(false);
  //   const parentRef = useRef(null);
  const handleBgToggle = () => {
    setBgToggle((previous) => !previous);

    setDarkLight((previous) => !previous);
  };

  const handleHeight = () => {
    setHeight((previous) => !previous);
  };

  return (
    <div
      id="parent"
      className={` border-2 p-4 rounded-2xl tex
      ${bgToggle ? "  bg-gray-700 text-amber-50" : " text-black bg-amber-50"}`}
    >
      <div className=" flex justify-around items-center">
        <h1 className=" text-3xl">SmartToggleDashboard</h1>
        <button
          onClick={handleBgToggle}
          className=" border-2 capitalize bg-cyan-600 fov rounded-2xl hover:text-amber-50 hover:bg-gray-600 p-2 px-3.5"
        >
          {darkLight ? "Dark" : "Light"}
        </button>
      </div>

      <div className=" text-left border-2 m-3.5 p-2.5">
        <p
          className={` overflow-hidden transition-all inline-block  ${
            height ? "h-auto" : "h-14"
          }`}
        >
          <span className=" capitalize font-bold text-2xl">my country </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          assumenda odit eaque dolorum rem placeat maxime iusto fugit cum
          voluptatem consequatur omnis veritatis, cupiditate, totam facere
          deserunt ut similique nesciunt molestiae officia quod sequi illo! Nisi
          ullam consequatur molestias similique qui debitis sapiente ab,
          possimus voluptate modi numquam, eveniet accusantium!
        </p>
        <button
          onClick={handleHeight}
          className=" font-bold hover:border-2 transition-all rounded-b-md hover:px-3.5"
        >
          see more..
        </button>
      </div>
    </div>
  );
}

export default SmartToggleDashboard;
