import React from "react";
import { FaCity, FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa"; // Import location icon as well
import "../Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div id="footer">
    <footer className="footer">
      <div className="container">
        {/* Logo and Site Name */}
        <div className="logo-section">
          <FaCity size={40} className="logo-icon" />
          <span className="site-name">Urban Realty</span>
          <div className="logo-paragraph">
          <p>Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.</p>
        </div>
          
        </div>

        {/* Additional Paragraph below the Logo */}
        

        {/* Contact Information */}
        <div className="footer-contact-section">
          <h3>Get In Touch</h3>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <FaPhoneAlt className="footer-icon" />
              <p>+01 234 567 890</p>
            </div>
            <div className="footer-contact-item">
              <FaPhoneAlt className="footer-icon" />
              <p>+09 876 543 210</p>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <p>mailinfo00@realar.com</p>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <p>support24@realar.com</p>
            </div>
          </div>
          <div className="address">
            <FaLocationArrow className="footer-icon" />
           
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="links-section">
          <h3>Useful Link</h3>
          <ul className="link-list">
            <li><a href="/pricing">Pricing Page</a></li>
            <li><a href="/privacy">Privacy & Policy</a></li>
            <li><a href="/what-we-do">What we do</a></li>
            <li><a href="/upcoming">Upcoming</a></li>
            <li><a href="/apply">Apply</a></li>
          </ul>
        </div>

        {/* Explore Links */}
        <div className="explore-section">
          <h3>Explore</h3>
          <ul className="link-list">
            <li><a href="/properties">All Properties</a></li>
            <li><a href="/authors">All Authors</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/pricing">Our Pricing</a></li>
            <li><a href="/products">Our Products</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;


