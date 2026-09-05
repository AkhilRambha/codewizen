import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import useFirebaseData from '../../../hooks/useFirebaseData';
import { auth } from '../../../firebase';
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    return auth.onAuthStateChanged(user => setCurrentUser(user));
  }, []);
  
  const [contactInfo] = useFirebaseData('codewizen_contact_info', {
    email: 'info@codewizen.com',
    phone: '+91 7993819211',
    whatsapp: '+91 7993819211',
    address: '123 Tech Park, Madhapur, Hyderabad - 500081'
  });

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
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}><FaPhoneAlt /> {contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}`}><FaEnvelope /> {contactInfo.email}</a>
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
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </NavLink>

            {currentUser ? (
              // LOGGED IN NAVBAR (Student App Feel)
              <>
                <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  My Learning
                </NavLink>

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

                <NavLink to="/offers" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Offers & Bundles
                </NavLink>

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

                <NavLink to="/contact-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Student Support
                </NavLink>

                <Link to="/profile" className="nav-auth-btn profile-btn" onClick={closeMenu}>
                  <FaUserCircle size={18} style={{marginRight: '8px'}} />
                  My Profile
                </Link>
              </>
            ) : (
              // LOGGED OUT NAVBAR (Marketing Feel)
              <>
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

                <NavLink to="/prices" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Prices
                </NavLink>

                <NavLink to="/offers" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Offers & Bundles
                </NavLink>

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

                <NavLink to="/success-stories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Success Stories
                </NavLink>

                <NavLink to="/contact-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Contact Us
                </NavLink>

                <Link to="/auth" className="nav-auth-btn login-btn" onClick={closeMenu}>
                  Login
                </Link>
              </>
            )}

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