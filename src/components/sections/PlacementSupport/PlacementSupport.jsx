import React from "react";
import "./PlacementSupport.css";
import { Link } from "react-router-dom";

function PlacementSupport() {
  return (
    <section className="placement-section" id="placements">
      <div className="placement-container">
        
        <div className="placement-dashboard" data-aos="fade-up" data-aos-duration="1000">
          
          {/* Decorative Glowing Elements */}
          <div className="glow-orb top-left"></div>
          <div className="glow-orb bottom-right"></div>
          
          <div className="placement-header">
            <span className="section-eyebrow">CAREER ACCELERATOR</span>
            <h2>100% Placement Support</h2>
            <p>Our dedicated placement cell works tirelessly to connect you with top tech companies and prepare you for every stage of the interview process.</p>
          </div>

          <div className="placement-stats">
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
              <h3>92%</h3>
              <span>Placement Rate</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="400">
              <h3>300+</h3>
              <span>Hiring Partners</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="600">
              <h3>16 LPA</h3>
              <span>Highest Package</span>
            </div>
          </div>

          <div className="placement-features-grid">
            <div className="p-feature" data-aos="fade-up" data-aos-delay="300">
              <div className="p-icon">📄</div>
              <div className="p-content">
                <h4>Resume Building</h4>
                <p>ATS-friendly resume templates and expert reviews.</p>
              </div>
            </div>
            
            <div className="p-feature" data-aos="fade-up" data-aos-delay="400">
              <div className="p-icon">🎯</div>
              <div className="p-content">
                <h4>Mock Interviews</h4>
                <p>Technical and HR interview simulations with feedback.</p>
              </div>
            </div>
            
            <div className="p-feature" data-aos="fade-up" data-aos-delay="500">
              <div className="p-icon">🤝</div>
              <div className="p-content">
                <h4>Direct Referrals</h4>
                <p>Exclusive interview opportunities with our partners.</p>
              </div>
            </div>
            
            <div className="p-feature" data-aos="fade-up" data-aos-delay="600">
              <div className="p-icon">📈</div>
              <div className="p-content">
                <h4>Career Mentorship</h4>
                <p>1-on-1 guidance to plan your career trajectory.</p>
              </div>
            </div>
          </div>

          <div className="placement-cta">
            <Link to="/placement-assistance" className="btn-primary">View Placement Record</Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PlacementSupport;