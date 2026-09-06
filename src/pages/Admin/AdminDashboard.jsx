import React from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import './Admin.css';

import { defaultReviews } from '../../data/defaultData';

const AdminDashboard = () => {
  const [leads] = useFirebaseData('codewizen_leads', []);
  const [courses] = useFirebaseData('codewizen_courses', []);
  const [reviews] = useFirebaseData('codewizen_reviews', defaultReviews);

  return (
    <div className="admin-page">
      <h2>Dashboard Overview</h2>
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Total Leads</h3>
          <div className="stat-value">{(leads || []).length}</div>
          <p className="stat-desc">Live from website chatbots</p>
        </div>
        <div className="admin-stat-card">
          <h3>Active Courses</h3>
          <div className="stat-value">{(courses || []).length > 0 ? courses.length : 3}</div>
          <p className="stat-desc">Displayed on Trending Courses</p>
        </div>
        <div className="admin-stat-card">
          <h3>Student Reviews</h3>
          <div className="stat-value">{(reviews || []).length > 0 ? reviews.length : 2}</div>
          <p className="stat-desc">Visible on Testimonials</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
