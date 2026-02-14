import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import One from "./aboutFolder/one";
import Two from "./aboutFolder/two";
import Three from "./aboutFolder/three";
// About.jsx
function About() {
  return (
    <>
      <h1>About Page</h1>
      {/* 
      <Router>
        <Routes>
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
        </Routes>
      </Router> */}

      <div>
        <NavLink
          to="/one"
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
            background: isActive ? "blue" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
        >
          {" "}
          one
        </NavLink>
        <NavLink
          to="/two"
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
            background: isActive ? "blue" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
        >
          {" "}
          Two
        </NavLink>
        <NavLink
          to="/three"
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
            background: isActive ? "blue" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
        >
          {" "}
          Three
        </NavLink>
      </div>
    </>
  );
}
export default About;
