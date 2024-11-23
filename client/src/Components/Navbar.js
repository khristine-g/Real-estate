import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Navbar.css';
import { FaCity } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`real-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
    
<div className="navbar-brand">
  <FaCity className="logo-icon"  /> Urban Realty</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/agents">Agents</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
 