import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { updatePassword } from 'firebase/auth';
import useFirebaseData from '../../hooks/useFirebaseData';
import { FaPlayCircle, FaKey, FaShieldAlt } from 'react-icons/fa';
import './StudentProfile.css';

const StudentProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Form states
  const [newPassword, setNewPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState({ type: '', text: '' });
  
  // Data
  const [ordersData] = useFirebaseData('codewizen_store_orders', []);
  const orders = Array.isArray(ordersData) ? ordersData : (ordersData ? Object.values(ordersData) : []);

  const [offersData] = useFirebaseData('codewizen_store_offers', []);
  const offers = Array.isArray(offersData) ? offersData : (offersData ? Object.values(offersData) : []);

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setPasswordMsg({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }

    try {
      await updatePassword(currentUser, newPassword);
      setPasswordMsg({ type: 'success', text: 'Password updated successfully!' });
      setNewPassword('');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/requires-recent-login') {
        setPasswordMsg({ type: 'error', text: 'Please log out and log back in to change your password.' });
      } else {
        setPasswordMsg({ type: 'error', text: err.message });
      }
    }
  };

  if (!currentUser) return null;

  // Find user's paid courses
  const myOrders = orders.filter(o => o && o.uid === currentUser.uid && o.status === 'Paid');
  const myCourseIds = [...new Set(myOrders.map(o => o.offerId))];
  const myCourses = offers.filter(offer => myCourseIds.includes(offer.id));

  return (
    <div className="student-profile-content">
      <div className="content-header">
        <h2>My Enrolled Courses</h2>
      </div>

      {myCourses.length === 0 ? (
        <div className="no-courses">
          <img src="/images/empty-box.png" alt="No courses" style={{width: '120px', opacity: 0.5}} />
          <h3>You haven't purchased any courses yet.</h3>
          <p>Explore our highly-rated bundles to kickstart your career!</p>
          <Link to="/offers" className="browse-more-btn" style={{marginTop: '15px', display: 'inline-block'}}>Explore Store</Link>
        </div>
      ) : (
        <div className="my-courses-grid">
          {myCourses.map(course => (
            <div className="my-course-card" key={course.id}>
              <div className="course-image">
                <img src={course.imageUrl || 'https://via.placeholder.com/300x160'} alt={course.title} />
              </div>
              <div className="course-info">
                <h4>{course.title}</h4>
                <p>{course.description?.substring(0, 80)}...</p>
                <Link to={`/dashboard/${course.id}`} className="access-dashboard-btn">
                  <FaPlayCircle /> Access Dashboard
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Settings Section */}
      <div className="settings-section" style={{marginTop: '50px'}}>
        <div className="content-header">
          <h2><FaShieldAlt style={{color: '#ea580c', marginRight: '10px'}} /> Security Settings</h2>
        </div>
        
        <div className="settings-card" style={{maxWidth: '400px', background: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
          <h3 style={{marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px'}}><FaKey /> Change Password</h3>
          <form onSubmit={handlePasswordChange}>
            {passwordMsg.text && (
              <div className={`pwd-msg ${passwordMsg.type}`}>
                {passwordMsg.text}
              </div>
            )}
            <input 
              type="password" 
              placeholder="New Password (min 6 chars)" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '15px'}}
            />
            <button type="submit" className="pwd-btn" style={{width: '100%', padding: '12px', background: '#112255', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
