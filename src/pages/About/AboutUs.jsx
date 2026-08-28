import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaEye, FaBullseye, FaCode, FaLaptopCode, FaHandshake, FaUserTie } from 'react-icons/fa';
import '../../components/common/PageHero/PageHero.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      
      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-dot-grid"></div>
        <div className="about-hero-container" data-aos="fade-up">
          <nav className="breadcrumbs" style={{ marginBottom: '20px' }}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="separator">/</li>
              <li><Link to="/about-us">About Us</Link></li>
              <li className="separator">/</li>
              <li><span>About Institute</span></li>
            </ul>
          </nav>
          <span className="about-hero-label">About Codewizen</span>
          <h1>Empowering the next generation of <span className="about-orange">Tech Leaders</span></h1>
          <p>
            We don't just teach code; we build careers. Codewizen is a premier software training institute dedicated to bridging the massive gap between academic education and real-world industry demands.
          </p>
          <div className="about-hero-btns">
            <Link to="/courses" className="about-btn-primary">Explore Our Courses</Link>
            <Link to="/contact-us" className="about-btn-secondary about-btn-light">Talk to an Expert</Link>
          </div>
        </div>
        <div className="about-hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="about-stats-bar">
        <div className="about-stats-container">
          <div className="about-stat" data-aos="fade-up" data-aos-delay="100">
            <h2>15+</h2>
            <p>Years of Excellence</p>
          </div>
          <div className="about-stat" data-aos="fade-up" data-aos-delay="200">
            <h2>18K+</h2>
            <p>Successful Alumni</p>
          </div>
          <div className="about-stat" data-aos="fade-up" data-aos-delay="300">
            <h2>300+</h2>
            <p>Hiring Partners</p>
          </div>
          <div className="about-stat" data-aos="fade-up" data-aos-delay="400">
            <h2>100%</h2>
            <p>Placement Support</p>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="about-intro">
        <div className="about-intro-container">
          <div className="about-intro-image" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students collaborating" />
            <div className="about-intro-badge">
              <span>🏆</span>
              <div>
                <strong>Top Rated Institute</strong>
                <span>by 300+ MNCs</span>
              </div>
            </div>
          </div>
          
          <div className="about-intro-content" data-aos="fade-left">
            <span className="section-eyebrow">Who We Are</span>
            <h2>Transforming raw talent into enterprise-ready professionals.</h2>
            <p>
              Founded by industry veterans, Codewizen was born out of a stark realization: the technology landscape evolves rapidly, but traditional education struggles to keep up. Fresh graduates enter the workforce unprepared for enterprise-scale engineering. 
            </p>
            <p>
              We solve this by offering fully immersive, highly practical training programs led exclusively by working professionals. 
            </p>
            
            <div className="about-intro-points">
              <div className="about-point">
                <FaCheckCircle className="about-check" /> <span>Curriculum constantly updated to match MNC demands.</span>
              </div>
              <div className="about-point">
                <FaCheckCircle className="about-check" /> <span>Focus on real-time projects over theoretical exams.</span>
              </div>
              <div className="about-point">
                <FaCheckCircle className="about-check" /> <span>Dedicated interview preparation and mock sessions.</span>
              </div>
            </div>
            
            <Link to="/our-trainers" className="about-btn-primary" style={{marginTop: '10px'}}>Meet Our Trainers</Link>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about-mv">
        <div className="about-mv-container">
          <div className="about-mv-card" data-aos="fade-up">
            <div className="mv-icon"><FaBullseye color="#e87500" /></div>
            <h3>Our Mission</h3>
            <p>
              To democratize access to high-quality software engineering education and empower students from diverse backgrounds to secure their dream jobs in top product and service-based tech companies through rigorous, hands-on training.
            </p>
          </div>
          <div className="about-mv-card" data-aos="fade-up" data-aos-delay="150">
            <div className="mv-icon"><FaEye color="#16a34a" /></div>
            <h3>Our Vision</h3>
            <p>
              To be globally recognized as the premier talent incubator for the IT industry, shaping the next generation of innovators, architects, and tech leaders who will build the software of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRAINING APPROACH ── */}
      <section className="about-approach">
        <div className="about-approach-container">
          <div className="about-approach-header" data-aos="fade-up">
            <span className="section-eyebrow">Our Methodology</span>
            <h2>A Proven Step-by-Step Approach</h2>
            <p>How we take you from a beginner to a highly paid professional.</p>
          </div>
          
          <div className="about-approach-steps">
            <div className="approach-step" data-aos="fade-up" data-aos-delay="100">
              <span className="step-number">01</span>
              <div className="step-icon"><FaCode color="#0ea5a4" /></div>
              <h3>Core Foundations</h3>
              <p>Master the fundamental concepts, syntax, and logic with rigorous daily coding exercises.</p>
              <div className="step-arrow">➔</div>
            </div>
            
            <div className="approach-step" data-aos="fade-up" data-aos-delay="200">
              <span className="step-number">02</span>
              <div className="step-icon"><FaLaptopCode color="#8b5cf6" /></div>
              <h3>Real-Time Projects</h3>
              <p>Apply your skills by building enterprise-level applications imitating live MNC environments.</p>
              <div className="step-arrow">➔</div>
            </div>
            
            <div className="approach-step" data-aos="fade-up" data-aos-delay="300">
              <span className="step-number">03</span>
              <div className="step-icon"><FaUserTie color="#e87500" /></div>
              <h3>Interview Prep</h3>
              <p>Resume building, portfolio optimization, and multiple mock interviews by technical architects.</p>
              <div className="step-arrow">➔</div>
            </div>
            
            <div className="approach-step" data-aos="fade-up" data-aos-delay="400">
              <span className="step-number">04</span>
              <div className="step-icon"><FaHandshake color="#16a34a" /></div>
              <h3>Placement</h3>
              <p>Exclusive hiring drives and direct referrals to our 300+ partner IT companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER JOURNEY ── */}
      <section className="about-career">
        <div className="about-career-container">
          <div className="about-career-content" data-aos="fade-right">
            <span className="section-eyebrow">Student Success</span>
            <h2>Your Journey with Codewizen</h2>
            <p>
              We don't abandon you after the syllabus is finished. We stay with you until you get your offer letter. Here is what your journey looks like:
            </p>
            
            <div className="career-flow">
              <div className="career-flow-row">
                <div className="career-flow-step">
                  <div className="cf-num">1</div>
                  <div className="cf-text">Enroll & Learn from Experts</div>
                </div>
                <div className="cf-arrow">↓</div>
              </div>
              
              <div className="career-flow-row">
                <div className="career-flow-step">
                  <div className="cf-num">2</div>
                  <div className="cf-text">Complete 3 Real-time Projects</div>
                </div>
                <div className="cf-arrow">↓</div>
              </div>
              
              <div className="career-flow-row">
                <div className="career-flow-step">
                  <div className="cf-num">3</div>
                  <div className="cf-text">Pass the Internal Mock Interviews</div>
                </div>
                <div className="cf-arrow">↓</div>
              </div>
              
              <div className="career-flow-row">
                <div className="career-flow-step">
                  <div className="cf-num">4</div>
                  <div className="cf-text">Attend Drive & Get Placed!</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-career-image" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student receiving offer letter" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta-container" data-aos="zoom-in">
          <h2>Ready to Launch Your IT Career?</h2>
          <p>
            Stop wasting time with outdated tutorials. Join the fastest-growing community of successful software engineers today.
          </p>
          <div className="about-cta-btns">
            <Link to="/contact-us" className="about-btn-primary">Enroll Now</Link>
            <Link to="/contact-us" className="about-btn-secondary about-btn-light">Get Free Counseling</Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
