import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="site-header">
      {/* Top Bar for Contact Info */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="tb-contact">
            <a href="tel:+917993819211"><FaPhoneAlt /> +91 7993819211</a>
            <a href="mailto:info@codewizen.com"><FaEnvelope /> info@codewizen.com</a>
          </div>
          <div className="tb-socials">
            <a href="/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
            <a href="/" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="/" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="navbar-container">

          {/* Logo Section */}
          <Link to="/" className="site-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/logo.png" alt="Codewizen Logo" className="navbar-brand-img" style={{ maxHeight: "40px", width: "auto" }} />
            <div className="logo-text" style={{ fontSize: '24px', fontWeight: 'bold' }}>
              <strong>CODEWIZEN</strong>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>

            <div className="nav-dropdown">
              <Link to="/about-us" className="nav-link" onClick={closeMenu}>
                About Us
                <span className="dropdown-toggle" onClick={(e) => toggleDropdown(e, 'about')}>
                  <svg className={`dropdown-chevron ${activeDropdown === 'about' ? 'rotate' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </Link>
              <div className={`dropdown-menu ${activeDropdown === 'about' ? 'mobile-open' : ''}`}>
                <Link to="/about-us" onClick={closeMenu}>About Institute</Link>
                <Link to="/our-trainers" onClick={closeMenu}>Our Trainers</Link>
                <Link to="/why-choose-us" onClick={closeMenu}>Why Choose Us</Link>
                <Link to="/student-reviews" onClick={closeMenu}>Student Reviews</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-link" style={{ cursor: 'pointer' }} onClick={(e) => toggleDropdown(e, 'courses')}>
                Courses
                <span className="dropdown-toggle">
                  <svg className={`dropdown-chevron ${activeDropdown === 'courses' ? 'rotate' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'courses' ? 'mobile-open' : ''}`}>
                <Link to="/java-full-stack" onClick={closeMenu}>Java Full Stack</Link>
                <Link to="/python-full-stack" onClick={closeMenu}>Python Full Stack</Link>
                <Link to="/data-analytics" onClick={closeMenu}>Data Analytics</Link>
                <Link to="/software-testing" onClick={closeMenu}>Software Testing</Link>
                <Link to="/data-science" onClick={closeMenu}>Data Science & ML</Link>
                <Link to="/generative-ai" onClick={closeMenu}>Generative AI</Link>
              </div>
            </div>

            <Link to="/prices" className="nav-link" onClick={closeMenu}>
              Prices
            </Link>

            <div className="nav-dropdown">
              <Link to="/placement-assistance" className="nav-link" onClick={closeMenu}>
                Placements
                <span className="dropdown-toggle" onClick={(e) => toggleDropdown(e, 'placements')}>
                  <svg className={`dropdown-chevron ${activeDropdown === 'placements' ? 'rotate' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </Link>
              <div className={`dropdown-menu ${activeDropdown === 'placements' ? 'mobile-open' : ''}`}>
                <Link to="/placement-assistance" onClick={closeMenu}>Placement Assistance</Link>
                <Link to="/placed-students" onClick={closeMenu}>Placed Students</Link>
                <Link to="/hiring-partners" onClick={closeMenu}>Hiring Partners</Link>
                <Link to="/contact-us" onClick={closeMenu}>Career Support</Link>
              </div>
            </div>



            <Link to="/success-stories" className="nav-link" onClick={closeMenu}>
              Success Stories
            </Link>

            <Link to="/contact-us" className="nav-link" onClick={closeMenu}>
              Contact Us
            </Link>

          </div>

          <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;