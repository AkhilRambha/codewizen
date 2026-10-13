import React from "react";
import "./PlacementSupport.css";
import { Link } from "react-router-dom";

function PlacementSupport() {
  return (
    <section className="placement-section" id="real-time-exposure">
      <div className="placement-container">
        
        <div className="placement-dashboard" data-aos="fade-up" data-aos-duration="1000">
          
          {/* Decorative Glowing Elements */}
          <div className="glow-orb top-left"></div>
          <div className="glow-orb bottom-right"></div>
          
          <div className="placement-header">
            <span className="section-eyebrow">INDUSTRY IMMERSION</span>
            <h2>100% Real-Time Industry Exposure</h2>
            <p>Experience authentic enterprise software engineering from day one. You don't just learn syntax; you adopt the workflows, toolchains, and standards used by modern tech teams.</p>
          </div>

          <div className="placement-stats">
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
              <h3>100%</h3>
              <span>Real-Time Exposure</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="400">
              <h3>10+</h3>
              <span>Enterprise Tools</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="600">
              <h3>Live</h3>
              <span>Cloud Deployments</span>
            </div>
          </div>

          <div className="placement-features-grid">
            <div className="p-feature" data-aos="fade-up" data-aos-delay="300">
              <div className="p-icon">⚡</div>
              <div className="p-content">
                <h4>Agile & Sprint Sprints</h4>
                <p>Execute on Jira tickets, sprint planning, and daily standup syncs.</p>
              </div>
            </div>
            
            <div className="p-feature" data-aos="fade-up" data-aos-delay="400">
              <div className="p-icon">🌿</div>
              <div className="p-content">
                <h4>Production Git Workflows</h4>
                <p>Feature branches, Pull Requests, merge conflicts, and senior peer reviews.</p>
              </div>
            </div>
            
            <div className="p-feature" data-aos="fade-up" data-aos-delay="500">
              <div className="p-icon">🚀</div>
              <div className="p-content">
                <h4>Cloud & CI/CD Pipelines</h4>
                <p>Docker containerization, automated pipelines, and live AWS deployments.</p>
              </div>
            </div>
            
            <div className="p-feature" data-aos="fade-up" data-aos-delay="600">
              <div className="p-icon">🔍</div>
              <div className="p-content">
                <h4>Live Debugging & Profiling</h4>
                <p>Analyze server logs, diagnose production issues, and optimize queries.</p>
              </div>
            </div>
          </div>

          <div className="placement-cta">
            <Link to="/project-training" className="btn-primary">Explore Project Curriculum</Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PlacementSupport;