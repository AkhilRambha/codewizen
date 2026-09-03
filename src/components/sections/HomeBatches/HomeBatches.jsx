import React from 'react';
import { Link } from 'react-router-dom';
import useFirebaseData from '../../../hooks/useFirebaseData';
import { FaCalendarAlt, FaRegClock, FaHourglassHalf } from 'react-icons/fa';
import './HomeBatches.css';

const HomeBatches = () => {
  const [batches] = useFirebaseData('codewizen_batches', []);

  // Show only up to 4 upcoming batches on home page
  const displayBatches = batches.filter(b => b.status === 'Upcoming').slice(0, 4);

  return (
    <section className="home-batches-section" id="upcoming-batches">
      <div className="home-batches-container" data-aos="fade-up">
        <div className="section-header center-header">
          <span className="section-eyebrow">NEW BATCHES</span>
          <h2>Upcoming Batches</h2>
          <p className="section-subtitle">Enroll now to secure your seat in our upcoming batches.</p>
        </div>

        {displayBatches.length === 0 ? (
          <div className="no-batches">New batches will be announced soon!</div>
        ) : (
          <div className="home-batches-grid">
            {displayBatches.map(batch => (
              <div key={batch.id} className="home-batch-card">
                <div className="home-batch-header">
                  <h3>{batch.course}</h3>
                  <span className="home-batch-badge">{batch.status}</span>
                </div>
                <div className="home-batch-body">
                  <div className="home-batch-row">
                    <FaCalendarAlt />
                    <strong>Starts:</strong> {batch.date}
                  </div>
                  <div className="home-batch-row">
                    <FaRegClock />
                    <strong>Timings:</strong> {batch.time}
                  </div>
                  {batch.duration && (
                    <div className="home-batch-row">
                      <FaHourglassHalf />
                      <strong>Duration:</strong> {batch.duration}
                    </div>
                  )}
                </div>
                <div className="home-batch-footer">
                  <Link to="/contact-us" className="home-batch-btn">Book Seat</Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="view-all-batches" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/upcoming-batches" className="view-all-link" style={{ color: '#ea580c', fontWeight: 'bold', textDecoration: 'none' }}>
            View Full Schedule →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBatches;
