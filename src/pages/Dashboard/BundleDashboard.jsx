import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import useFirebaseData from '../../hooks/useFirebaseData';
import { FaPlayCircle, FaCheckCircle, FaLock, FaBookOpen, FaDownload } from 'react-icons/fa';
import './BundleDashboard.css';

const BundleDashboard = () => {
  const { bundleId } = useParams();
  const navigate = useNavigate();

  const [offersData, , isOffersReady] = useFirebaseData('codewizen_store_offers', []);
  const offers = React.useMemo(() => Array.isArray(offersData) ? offersData : (offersData ? Object.values(offersData) : []), [offersData]);

  const [ordersData, , isOrdersReady] = useFirebaseData('codewizen_store_orders', []);
  const orders = React.useMemo(() => Array.isArray(ordersData) ? ordersData : (ordersData ? Object.values(ordersData) : []), [ordersData]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    if (!isOffersReady || !isOrdersReady) return;

    const offerExists = offers.find(o => o && o.id === bundleId);
    if (!offerExists) {
      navigate('/offers');
      return;
    }

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        // Not logged in
        navigate('/auth', { state: { from: { pathname: `/dashboard/${bundleId}` } } });
        return;
      }

      // Check OTP verification
      const isDeviceVerified = localStorage.getItem(`codewizen_device_verified_${user.email}`);
      if (isDeviceVerified !== 'true') {
        navigate('/auth', { state: { from: { pathname: `/dashboard/${bundleId}` } } });
        return;
      }

      // Verify user owns the course
      const ownsCourse = orders.some(o => o && o.offerId === bundleId && o.uid === user.uid && o.status === 'Paid');
      
      if (ownsCourse) {
        setIsAuthenticated(true);
      } else {
        navigate('/offers');
      }
      
      setVerifying(false);
    });

    return () => unsubscribe();
  }, [isOffersReady, isOrdersReady, bundleId, navigate, offers, orders]);

  if (!isOffersReady || !isOrdersReady || verifying || !isAuthenticated) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Verifying secure access...</p>
      </div>
    );
  }

  const currentBundle = offers.find(o => o && o.id === bundleId);

  // Dummy Curriculum Data
  const modules = [
    { id: 1, title: 'Module 1: Introduction & Setup', duration: '45 mins', completed: true },
    { id: 2, title: 'Module 2: Core Concepts Deep Dive', duration: '1h 20m', completed: false },
    { id: 3, title: 'Module 3: Advanced Architectures', duration: '2h 15m', completed: false },
    { id: 4, title: 'Module 4: Real-World Project', duration: '3h 0m', completed: false },
    { id: 5, title: 'Module 5: Deployment & CI/CD', duration: '1h 10m', completed: false },
  ];

  return (
    <div className="bundle-dashboard">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h3>Course Content</h3>
          <p>{modules.filter(m => m.completed).length} / {modules.length} Completed</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '20%' }}></div>
          </div>
        </div>
        <div className="module-list">
          {modules.map(mod => (
            <div 
              key={mod.id} 
              className={`module-item ${activeVideo === mod.id ? 'active' : ''}`}
              onClick={() => setActiveVideo(mod.id)}
            >
              <div className="module-icon">
                {mod.completed ? <FaCheckCircle color="#10b981" /> : (activeVideo === mod.id ? <FaPlayCircle color="#ea580c" /> : <FaLock color="#94a3b8" />)}
              </div>
              <div className="module-info">
                <h4>{mod.title}</h4>
                <span>{mod.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h2>{currentBundle?.title}</h2>
          <span className="premium-badge">Premium Access</span>
        </div>

        <div className="video-container">
          <div className="video-placeholder">
            <FaPlayCircle className="play-icon" />
            <p>Video Player (Lesson {activeVideo})</p>
            <small>This is a premium video placeholder. Real videos will stream here.</small>
          </div>
        </div>

        <div className="dashboard-tabs">
          <button className="tab active"><FaBookOpen /> Lesson Overview</button>
          <button className="tab"><FaDownload /> Resources</button>
        </div>

        <div className="tab-content">
          <h3>Welcome to {modules.find(m => m.id === activeVideo)?.title}</h3>
          <p>In this module, we will dive deep into the core fundamentals. Make sure to download the attached resources and follow along with the coding exercises.</p>
          
          <div className="resources-box">
            <h4>Downloads</h4>
            <ul>
              <li><a href="#download">Source_Code_Module_{activeVideo}.zip</a></li>
              <li><a href="#download">CheatSheet.pdf</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleDashboard;
