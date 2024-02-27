import React, { useState } from "react";
import { FaBars, FaTimes,FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <h1>Adward</h1>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#2d2c2c" }} />
          ) : (
            <FaBars size={30} style={{ color: "#2d2c2c" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#teacher" onClick={closeMenu}>
              Teacher
            </a>
          </li>
          <li className="nav-item">
            <a href="#vehivle" onClick={closeMenu}>
              Vehicle
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#search" onClick={closeMenu}>
            <FaSearch />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
