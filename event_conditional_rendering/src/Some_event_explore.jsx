import { useState } from "react";
import H2 from "./TaskNo";

function Some_event_explore() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlured, setIsBlured] = useState(false);
  return (
    <>
      <H2>task 5</H2>
      <div className=" border-2 rounded-2xl mx-auto my-4 p-3.5">
        <h2 className=" border-b-2">
          Explore event :
          <p
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{
              margin: "10px auto",
              width: "100px",
              height: "100px",
              backgroundColor: isHovered ? "lightblue" : "green",
              transition: "background-color 0.3s ease",
            }}
          >
            Hover
          </p>
        </h2>
        <input
          className=" border-2 rounded-2xl"
          type="text"
          placeholder="focus here to seen magic"
          onBlur={() => setIsBlured(true)}
          onFocus={() => setIsBlured(false)}
          style={{
            margin: "10px auto",
            width: "100%",
            backgroundColor: isBlured ? "lightblue" : "yellow",
            transition: "background-color 0.3s ease",
          }}
        />
      </div>
    </>
  );
}

export default Some_event_explore;
