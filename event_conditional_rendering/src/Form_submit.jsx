// input onChange → live state update
// form submit → ডিফল্ট behavior prevent করা + custom logic

import H2 from "./TaskNo";
import { useState } from "react";
function Form_submit() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = document.getElementById("in").value;
    if (newName !== "") {
      setName(newName);
    }
  };

  return (
    <>
      <H2>task 4</H2>
      <div className=" border-2 rounded-2xl mx-auto my-4 p-3.5">
        <h2 className=" border-b-2">
          Form submit ডিফল্ট behavior prevent করা + custom logic
        </h2>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="in"
            placeholder="search book..."
            className=" border-2 p-3 rounded-2xl mt-3 w-full"
          />
          <button type="submit" className=" border-2 rounded-2xl p-5 py-2 mt-2">
            submit
          </button>

          <p>Assalamu Alaikum {name.toUpperCase()} Brother </p>
        </form>
      </div>
    </>
  );
}

export default Form_submit;
