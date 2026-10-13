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
          <h2>Online Technology & Real-Time Project Training</h2>
          <p className="about-subtitle">
            Master in-demand software skills through 100% live online sessions, real-time project implementation, and production-grade exposure.
          </p>
        </div>

        <div className="about-split-layout">
          
          {/* Left Column - Visuals & Stats */}
          <div className="about-visuals" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Live Interactive Training" 
              />
              <div className="about-floating-stat top-right" data-aos="fade-down" data-aos-delay="200">
                <div className="stat-value">100%</div>
                <div className="stat-label">Online Live</div>
              </div>
              <div className="about-floating-stat bottom-left" data-aos="fade-up" data-aos-delay="300">
                <div className="stat-value">100%</div>
                <div className="stat-label">Live Projects</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="about-features" data-aos="fade-left">
            <div className="feature-card">
              <div className="feature-icon"><FaUserTie /></div>
              <div className="feature-content">
                <h3>Expert Practitioners</h3>
                <p>Learn directly from active software architects and senior engineers.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaLaptopCode /></div>
              <div className="feature-content">
                <h3>Live Online Labs</h3>
                <p>Interactive virtual sessions and real-time enterprise cloud environments.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaProjectDiagram /></div>
              <div className="feature-content">
                <h3>100% Real-Time Projects</h3>
                <p>Build an impressive portfolio by architecting real-world applications from scratch.</p>
              </div>
            </div>

            <div className="feature-card highlight-card">
              <div className="feature-icon"><FaCheckCircle /></div>
              <div className="feature-content">
                <h3>100% Real-Time Exposure</h3>
                <p>From Git PRs and sprint planning to CI/CD cloud deployments, experience how real tech teams build software.</p>
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