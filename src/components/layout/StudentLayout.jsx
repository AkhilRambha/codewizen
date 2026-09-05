import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { FaGraduationCap, FaStore, FaCertificate, FaHeadset, FaSignOutAlt, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import './StudentLayout.css';

const StudentLayout = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const isDeviceVerified = localStorage.getItem(`codewizen_device_verified_${user.email}`);
        if (isDeviceVerified === 'true') {
          setCurrentUser(user);
        } else {
          // Logged in but not verified on this device
          navigate('/auth');
        }
      } else {
        navigate('/auth');
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  if (loading) {
    return <div className="student-loading">Loading App...</div>;
  }

  if (!currentUser) return null; // Prevent flicker before redirect

  return (
    <div className="student-layout-wrapper">
      
      {/* ── SIDEBAR ── */}
      <aside className={`student-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="student-sidebar-header">
          <h2><span style={{color: '#ea580c'}}>My</span>Learning</h2>
          <button className="mobile-close-btn" onClick={closeMobileMenu}>
            <FaTimes />
          </button>
        </div>
        
        <nav className="student-nav">
          <ul>
            <li>
              <NavLink to="/profile" end className={({ isActive }) => isActive ? "student-nav-link active" : "student-nav-link"} onClick={closeMobileMenu}>
                <FaGraduationCap /> My Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/offers" className="student-nav-link" onClick={closeMobileMenu}>
                <FaStore /> Browse Store
              </NavLink>
            </li>
            <li>
              <span className="student-nav-link disabled" title="Coming Soon">
                <FaCertificate /> My Certificates (Soon)
              </span>
            </li>
            <li>
              <NavLink to="/contact-us" className="student-nav-link" onClick={closeMobileMenu}>
                <FaHeadset /> Student Support
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="student-sidebar-footer">
          <button className="student-logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </aside>

      {/* ── OVERLAY FOR MOBILE ── */}
      {mobileMenuOpen && <div className="student-sidebar-overlay" onClick={closeMobileMenu}></div>}

      {/* ── MAIN CONTENT AREA ── */}
      <main className="student-main-content">
        <div className="student-topbar">
          <div className="student-topbar-left">
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
              <FaBars />
            </button>
            <a href="/" className="back-to-site-link">Back to Website</a>
          </div>
          <div className="student-topbar-right">
            <span className="student-name">{currentUser.displayName || currentUser.email}</span>
            <div className="student-avatar">
              <FaUserCircle size={28} color="#64748b" />
            </div>
          </div>
        </div>

        <div className="student-page-container">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default StudentLayout;
