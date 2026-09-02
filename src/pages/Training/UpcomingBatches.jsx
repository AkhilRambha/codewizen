import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { FaCalendarAlt, FaRegClock, FaHourglassHalf } from 'react-icons/fa';
import '../../components/sections/HomeBatches/HomeBatches.css';

const UpcomingBatches = () => {
  const [batches] = useLocalStorage('codewizen_batches', [
    { id: 1, course: "Java Full Stack", date: "Oct 10, 2026", time: "10:00 AM - 12:00 PM", status: "Upcoming" },
    { id: 2, course: "Data Science & ML", date: "Oct 15, 2026", time: "06:00 PM - 08:00 PM", status: "Upcoming" }
  ]);

  return (
    <>
      {/* Custom Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #112255 0%, #1e3a8a 100%)',
        padding: '100px 20px 80px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background elements */}
        <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(234, 88, 12, 0.2)', filter: 'blur(50px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', filter: 'blur(60px)' }}></div>

        <div style={{ maxWidth: '800px', margin: '20px auto', position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', padding: '10px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '14px', fontWeight: 'bold', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)', color: '#bae6fd' }}>
            🚀 UPCOMING COHORTS
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
            Secure Your Seat in Our <span style={{ color: '#ea580c' }}>Next Batch</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '30px' }}>
            Join our expert-led, interactive live sessions. Accelerate your tech career with hands-on projects, real-world scenarios, and dedicated mentorship.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#bae6fd', fontSize: '15px' }}><FaRegClock /> Limited Seats</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#bae6fd', fontSize: '15px' }}><FaCalendarAlt /> Live Interactive</div>
          </div>
        </div>
      </div>

      <section className="generic-page-section home-batches-section" style={{ padding: '80px 20px', minHeight: '40vh', background: '#f8fafc' }}>
        <div className="home-batches-container" data-aos="fade-up">
          <div className="section-header center-header" style={{ marginBottom: '50px' }}>
            <span className="section-eyebrow">LIVE SCHEDULE</span>
            <h2>All Upcoming Batches</h2>
            <p className="section-subtitle">Our programs are designed by industry experts. Find the perfect batch that fits your schedule.</p>
          </div>

          {batches.length === 0 ? (
            <div className="no-batches">No upcoming batches scheduled at the moment. Please check back later!</div>
          ) : (
            <div className="home-batches-grid">
              {batches.map(batch => (
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
                    <Link to="/contact-us" className="home-batch-btn">Enquire Now</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Features Section */}
      <section style={{ padding: '60px 20px', background: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', color: '#112255', marginBottom: '40px' }}>Why Join Our Live Batches?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>👨‍🏫</div>
              <h3 style={{ color: '#112255', fontSize: '20px', marginBottom: '10px' }}>Expert Instructors</h3>
              <p style={{ color: '#475569', lineHeight: '1.6' }}>Learn directly from industry veterans with years of real-world experience.</p>
            </div>
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>💻</div>
              <h3 style={{ color: '#112255', fontSize: '20px', marginBottom: '10px' }}>Live Coding</h3>
              <p style={{ color: '#475569', lineHeight: '1.6' }}>Code along during classes and get your doubts resolved instantly on the spot.</p>
            </div>
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>💼</div>
              <h3 style={{ color: '#112255', fontSize: '20px', marginBottom: '10px' }}>Placement Support</h3>
              <p style={{ color: '#475569', lineHeight: '1.6' }}>Access to our exclusive hiring partners and dedicated interview preparation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingBatches;
