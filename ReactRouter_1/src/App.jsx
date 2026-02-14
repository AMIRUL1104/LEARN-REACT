import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NavLink from "./navlink";

import One from "./aboutFolder/one";
import Two from "./aboutFolder/two";
import Three from "./aboutFolder/three";

function App() {
  return (
    <Router>
      <NavLink />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </Router>
  );
}

export default App;
