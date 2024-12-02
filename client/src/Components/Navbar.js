import React, { useEffect, useState } from 'react';
import "../Navbar.css";
import { FaCity } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from 'react-router-dom'; // Import useLocation

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Check if the current route is the property detail page
  const isPropertyDetailPage = location.pathname.includes('/property/');

  return (
    <nav className={`real-navbar ${scrolled ? "navbar-scrolled" : ""} ${isPropertyDetailPage ? "navbar-property-detail" : ""}`}>
      <div className="navbar-brand">
        <FaCity className="logo-icon" />
        <h2 className="company-name">Urban Realty</h2>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" >
          <li>Home</li>
        </a>
        <a href="#services" >
          <li>Services</li>
        </a>
        <a href="#footer" >
          <li>Contact</li>
        </a>
        <a href="#agents" >
          <li>Agents</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
