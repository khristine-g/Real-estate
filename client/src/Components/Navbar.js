import React, { useEffect, useState } from "react";
import "../Navbar.css";
import { FaCity } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`real-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-brand">
        <FaCity className="logo-icon" />
        <h2 className="company-name">Urban Realty</h2>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>
          <li>Home</li>
        </a>
        <a href="#services" onClick={toggleMenu}>
          <li>Services</li>
        </a>
        <a href="#footer" onClick={toggleMenu}>
          <li>Contact</li>
        </a>
        <a href="#agents" onClick={toggleMenu}>
          <li>Agents</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
