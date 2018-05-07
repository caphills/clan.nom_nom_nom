import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar_0 = props => (
  <nav className="NavBar navbar navbar-expand-lg navbar-light bg-light">
    {/* Shawn or can someone add the Logo here when ready? */}
    <div style={{ width: 150 }}>logo comes here</div>
    <Link className="navbar-brand" to="/">
      Ancestry.nom
    </Link>
    <ul className="navbar-nav mr-auto">
      <li
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/about"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/" className="nav-link">
          About
        </Link>
      </li>
      {/* <li
        className={
          window.location.pathname === "/newRecipe"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/newRecipe" className="nav-link">
          Add a Recipe
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/recipes"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/recipes" className="nav-link">
          Recipes
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/search"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/search" className="nav-link">
          Search
        </Link>
      </li> */}
    </ul>

    <ul className="navbar-nav ml-auto">
      {/* <li
        className={
          window.location.pathname === "/ancestor"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/ancestor" className="nav-link">
          Ancestor
        </Link>
      </li> */}
      <li
        className={
          window.location.pathname === "/login" ? "nav-item active" : "nav-item"
        }
      >
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/register"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/signup" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar_0;
