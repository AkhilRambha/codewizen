import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaCalendarAlt, FaStar, FaBriefcase, FaBook, FaSignOutAlt, FaBell, FaBullhorn } from 'react-icons/fa';
import useLocalStorage from '../../hooks/useLocalStorage';
import './AdminLayout.css';

const AdminLayout = () => {
  const [leads] = useLocalStorage('codewizen_leads', []);
  const [toast, setToast] = useState(null);
  const [prevLeadsCount, setPrevLeadsCount] = useState(leads.length);

  // Watch for new leads to trigger toast notification
  useEffect(() => {
    if (leads.length > prevLeadsCount) {
      // New lead arrived!
      const newLead = leads[leads.length - 1];
      setToast(`New lead: ${newLead.name} (${newLead.course})`);
      
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
    setPrevLeadsCount(leads.length);
  }, [leads, prevLeadsCount]);

  return (
    <div className="admin-layout-wrapper">
      
      {/* ── TOAST NOTIFICATION ── */}
      {toast && (
        <div className="admin-toast">
          <FaBell />
          <span>{toast}</span>
        </div>
      )}

      {/* ── SIDEBAR ── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>Codewizen <span>Admin</span></h2>
        </div>
        
        <nav className="admin-nav">
          <ul>
            <li>
              <NavLink to="/admin" end className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaTachometerAlt /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/events" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaBullhorn /> Website Popup
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/leads" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaUsers /> Lead Management
                {leads.filter(l => l.status === 'New').length > 0 && (
                  <span className="nav-badge">{leads.filter(l => l.status === 'New').length}</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/batches" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaCalendarAlt /> Upcoming Batches
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/reviews" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaStar /> Student Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/placements" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaBriefcase /> Placement Stats
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/courses" className={({ isActive }) => isActive ? "admin-nav-link active" : "admin-nav-link"}>
                <FaBook /> Course Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={() => window.location.href='/'}>
            <FaSignOutAlt /> Exit to Website
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <main className="admin-main-content">
        <div className="admin-topbar">
          <div className="admin-topbar-left">
            <h3>Admin Portal</h3>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-avatar">A</div>
            <span className="admin-name">Admin User</span>
          </div>
        </div>

        <div className="admin-page-container">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;
