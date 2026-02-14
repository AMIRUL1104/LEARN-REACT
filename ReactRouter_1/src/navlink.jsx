import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          background: isActive ? "blue" : "transparent",
          padding: "5px 10px",
          borderRadius: "5px",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
export default Navbar;
