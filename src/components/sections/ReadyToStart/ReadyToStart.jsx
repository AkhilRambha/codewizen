import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ReadyToStart.css';

const ReadyToStart = () => {
  return (
    <section className="ready-to-start-section">
      <div className="ready-container" data-aos="zoom-in">
        <div className="ready-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join Codewizen and transform your career with industry-leading training, hands-on projects, and 100% placement support.</p>
          <div className="ready-actions">
            <button className="ready-btn-primary" onClick={() => window.location.href='/contact-us'}>
              Enroll Now <FaArrowRight />
            </button>
            <button className="ready-btn-secondary" onClick={() => window.location.href='tel:+919676400893'}>
              Talk To Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
