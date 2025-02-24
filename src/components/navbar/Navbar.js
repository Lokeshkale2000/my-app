import React from "react";
import "./Navbar.css";
import search from "../Assets/svg/search.svg";
import navlogo from "../Assets/svg/nav-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-section-logo">
        <img src={navlogo} alt="Navigation Logo" />
      </div>

      <div className="navbar-section-center">
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Product Range</a>
          </li>
          <li>
            <a href="#brands">Brands</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="vertical-line"></hr>

      <div className="navbar-section-right">
        <img src={search} alt="Search Icon" width="40" height="40" />
      </div>
    </nav>
  );
};

export default Navbar;
