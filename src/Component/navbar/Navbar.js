import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();
  const gohome = () => {
    navigate("/");
  };
  const goAbout = () => {
    navigate("/about");
  };
  const goVehicle = () => {
    navigate("/Vehicle");
  };
  const goContact = () => {
    navigate("/Contact");
  };
  const goTeacher = () => {
    navigate("/Teacher");
  };
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
              <a href="/" onClick={gohome}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={goAbout}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#teacher" onClick={goTeacher}>
                Teacher
              </a>
            </li>
            <li className="nav-item">
              <a href="#vehivle" onClick={goVehicle}>
                Vehicle
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={goContact}>
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
