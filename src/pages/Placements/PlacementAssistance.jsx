import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import Companies from '../../components/sections/Companies/Companies';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';
import { FaLaptopCode, FaFileAlt, FaBriefcase, FaComments, FaHandshake, FaAward } from 'react-icons/fa';
import './PlacementAssistance.css';

const PlacementAssistance = () => {
  return (
    <>
      <PageHero 
        title="100% Placement Assistance" 
        description="Your success is our priority. We don't just train you; we guide you until you secure your dream job in the IT sector with our network of 300+ hiring partners."
        breadcrumbs={[
          { label: "Placements", link: "/placement-assistance" },
          { label: "Placement Assistance" }
        ]}
      />
      
      <div className="pa-page-wrapper">
        
        {/* STATS SECTION */}
        <section className="pa-stats-section">
          <div className="pa-stats-container">
            <div className="pa-stats-grid">
              <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="0">
                <div className="pa-stat-num">300+</div>
                <div className="pa-stat-text">Hiring Partners</div>
              </div>
              <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="100">
                <div className="pa-stat-num">15k+</div>
                <div className="pa-stat-text">Students Placed</div>
              </div>
              <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="200">
                <div className="pa-stat-num">95%</div>
                <div className="pa-stat-text">Success Rate</div>
              </div>
              <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="300">
                <div className="pa-stat-num">24 LPA</div>
                <div className="pa-stat-text">Highest Package</div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANIES MARQUEE */}
        <div style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
          <div className="pa-section-header" style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '32px', color: '#112255', fontWeight: '800', textAlign: 'center' }}>Where Our Alumni Work</h2>
          </div>
          <Companies />
        </div>

        {/* HOW IT WORKS / PLACEMENT JOURNEY */}
        <section className="pa-journey-section">
          <div className="pa-container">
            <div className="pa-section-header" data-aos="fade-up">
              <h2>Your Placement Journey</h2>
              <p>We have a structured, 6-step framework designed to transform you from a student into an industry-ready professional.</p>
            </div>

            <div className="pa-journey-grid">
              <div className="pa-journey-card" data-aos="fade-up" data-aos-delay="100">
                <div className="pa-j-icon"><FaLaptopCode /></div>
                <h3>1. Skill Mastery</h3>
                <p>Complete your rigorous technical training and build multiple real-world capstone projects.</p>
              </div>
              <div className="pa-journey-card" data-aos="fade-up" data-aos-delay="200">
                <div className="pa-j-icon"><FaFileAlt /></div>
                <h3>2. Resume Building</h3>
                <p>Our experts help you craft a professional, ATS-friendly resume that highlights your core competencies.</p>
              </div>
              <div className="pa-journey-card" data-aos="fade-up" data-aos-delay="300">
                <div className="pa-j-icon"><FaBriefcase /></div>
                <h3>3. Portfolio Creation</h3>
                <p>Build a strong GitHub profile and portfolio showcasing the real-time projects you developed.</p>
              </div>
              <div className="pa-journey-card" data-aos="fade-up" data-aos-delay="400">
                <div className="pa-j-icon"><FaComments /></div>
                <h3>4. Mock Interviews</h3>
                <p>Participate in unlimited technical and HR mock interviews conducted by industry veterans.</p>
              </div>
              <div className="pa-journey-card" data-aos="fade-up" data-aos-delay="500">
                <div className="pa-j-icon"><FaHandshake /></div>
                <h3>5. Direct Referrals</h3>
                <p>Your profile is directly forwarded to HRs of our 300+ partnered MNCs and startups.</p>
              </div>
              <div className="pa-journey-card" data-aos="fade-up" data-aos-delay="600">
                <div className="pa-j-icon"><FaAward /></div>
                <h3>6. The Offer Letter</h3>
                <p>We guide you through salary negotiation and final onboarding procedures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <div style={{ padding: '40px 0' }}>
          <Testimonials />
        </div>

        {/* CTA */}
        <ReadyToStart />
        
      </div>
    </>
  );
};

export default PlacementAssistance;
