// Tasks: button click এ state পরিবর্তন
import { useState } from "react";
import H2 from "./TaskNo";

function StateChange() {
  const [count, setCount] = useState(0);
  const handleIncrese = () => {
    setCount(count + 1);
  };
  const handleDecrese = () => {
    setCount(count - 1);
  };
  return (
    <>
      <H2>task 3</H2>
      <div className=" border-2 rounded-2xl mx-auto my-4 p-3.5">
        <button
          onClick={handleIncrese}
          className=" border-2 rounded-2xl mx-auto my-4 p-3.5"
        >
          increse
        </button>

        <p>count : {count}</p>

        <button
          onClick={handleDecrese}
          className=" border-2 rounded-2xl mx-auto my-4 p-3.5"
        >
          Decrese
        </button>
      </div>
    </>
  );
}

export default StateChange;
