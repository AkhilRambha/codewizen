import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <>
      <PageHero 
        title="Why Choose Codewizen" 
        description="Discover why thousands of students trust us to launch their IT careers. We don't just teach technology; we build professionals."
        breadcrumbs={[
          { label: "About", link: "/about-us" },
          { label: "Why Choose Us" }
        ]}
      />
      
      {/* Introduction Section */}
      <section className="wcu-intro">
        <div className="wcu-container" data-aos="fade-up">
          <div className="wcu-intro-content">
            <span className="wcu-eyebrow">OUR COMMITMENT</span>
            <h2>Bridging the gap between academia and the IT industry</h2>
            <p>
              At Codewizen, we recognized a massive gap between what colleges teach and what tech companies actually demand. Our training programs are meticulously crafted by industry veterans to ensure you learn exactly what is required to get hired and succeed from day one.
            </p>
          </div>
          
          <div className="wcu-stats-grid">
            <div className="wcu-stat-box" data-aos="zoom-in" data-aos-delay="100">
              <h3>18K+</h3>
              <p>Alumni Worldwide</p>
            </div>
            <div className="wcu-stat-box" data-aos="zoom-in" data-aos-delay="200">
              <h3>300+</h3>
              <p>Hiring Partners</p>
            </div>
            <div className="wcu-stat-box" data-aos="zoom-in" data-aos-delay="300">
              <h3>100%</h3>
              <p>Placement Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="wcu-differentiators">
        <div className="wcu-container">
          <div className="wcu-diff-header" data-aos="fade-up">
            <h2>The Codewizen Difference</h2>
            <p>What makes our training programs stand out from the rest?</p>
          </div>
          
          <div className="wcu-diff-grid">
            {/* Diff 1 */}
            <div className="wcu-diff-card" data-aos="fade-up" data-aos-delay="100">
              <div className="diff-icon">👨‍🏫</div>
              <h3>Real-Time Expert Trainers</h3>
              <p>Learn from professionals who currently work in top MNCs. They bring real-world scenarios, best practices, and enterprise-level coding standards into the classroom.</p>
            </div>
            
            {/* Diff 2 */}
            <div className="wcu-diff-card" data-aos="fade-up" data-aos-delay="200">
              <div className="diff-icon">💻</div>
              <h3>100% Practical Approach</h3>
              <p>No boring PPTs. Every concept is taught through live coding. You will build mini-projects during modules and a major capstone project at the end of the course.</p>
            </div>
            
            {/* Diff 3 */}
            <div className="wcu-diff-card" data-aos="fade-up" data-aos-delay="300">
              <div className="diff-icon">🏢</div>
              <h3>Mock Interviews & ATS Resumes</h3>
              <p>We don't just teach code. Our dedicated placement cell helps you build an ATS-friendly resume and conducts rigorous mock interviews until you are confident.</p>
            </div>
            
            {/* Diff 4 */}
            <div className="wcu-diff-card" data-aos="fade-up" data-aos-delay="400">
              <div className="diff-icon">🔁</div>
              <h3>Backup Classes & LMS Access</h3>
              <p>Missed a class? No problem. Get access to our Learning Management System featuring recorded sessions, assignments, and study materials available 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wcu-cta">
        <div className="wcu-container">
          <div className="wcu-cta-box" data-aos="zoom-in">
            <h2>Ready to transform your career?</h2>
            <p>Join the premier cloud and software technology training institute today.</p>
            <div className="wcu-cta-buttons">
              <Link to="/courses" className="btn-primary">Explore Courses</Link>
              <Link to="/contact-us" className="btn-secondary wcu-btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
