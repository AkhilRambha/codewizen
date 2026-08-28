import React from "react";
import "./AboutSection.css";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaLaptopCode, FaProjectDiagram, FaUserTie } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      
      {/* Decorative Background Elements */}
      <div className="about-glow top-left"></div>
      <div className="about-glow bottom-right"></div>
      <div className="about-grid-overlay"></div>

      <div className="about-container">
        
        <div className="section-header center-header" data-aos="fade-up">
          <span className="section-eyebrow">WHY CODEWIZEN</span>
          <h2>The Premier Cloud Technology Training Institute</h2>
          <p className="about-subtitle">
            Transforming careers with industry-oriented, practical training designed by tech veterans.
          </p>
        </div>

        <div className="about-split-layout">
          
          {/* Left Column - Visuals & Stats */}
          <div className="about-visuals" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating" 
              />
              <div className="about-floating-stat top-right" data-aos="fade-down" data-aos-delay="200">
                <div className="stat-value">10+</div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="about-floating-stat bottom-left" data-aos="fade-up" data-aos-delay="300">
                <div className="stat-value">12k+</div>
                <div className="stat-label">Alumni</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="about-features" data-aos="fade-left">
            <div className="feature-card">
              <div className="feature-icon"><FaUserTie /></div>
              <div className="feature-content">
                <h3>Expert Trainers</h3>
                <p>Learn directly from IT professionals with extensive industry expertise.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaLaptopCode /></div>
              <div className="feature-content">
                <h3>Practical Labs</h3>
                <p>100% hands-on training with real-time enterprise environments.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaProjectDiagram /></div>
              <div className="feature-content">
                <h3>Real-time Projects</h3>
                <p>Build a strong portfolio by working on live projects used in the industry.</p>
              </div>
            </div>

            <div className="feature-card highlight-card">
              <div className="feature-icon"><FaCheckCircle /></div>
              <div className="feature-content">
                <h3>92% Placement Rate</h3>
                <p>From resume building to interview prep, we guide you until you get hired.</p>
              </div>
            </div>

            <Link to="/about-us" className="btn-primary mt-4">Discover More About Us</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;