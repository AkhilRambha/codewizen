import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import { FaGraduationCap, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import './PlacedStudents.css';
import useLocalStorage from '../../hooks/useLocalStorage';

const PlacedStudents = () => {
  const [students] = useLocalStorage('codewizen_placements', [
    {
      id: 1,
      name: "Rahul Verma",
      course: "Java Full Stack Development",
      company: "TCS",
      ctc: "8 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      course: "Data Science & AI",
      company: "Deloitte",
      ctc: "12 LPA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Karthik Kumar",
      course: "Python Full Stack",
      company: "Infosys",
      ctc: "7.5 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ]);

  return (
    <>
      <PageHero 
        title="Wall of Fame: Our Achievers" 
        description="We measure our success by the success of our students. Explore the profiles of our recent alumni who have transitioned into top IT companies globally."
        breadcrumbs={[
          { label: "Placements", link: "/placement-assistance" },
          { label: "Placed Students" }
        ]}
      />
      
      <div className="ps-page-wrapper">
        
        {/* STATS HIGHLIGHT */}
        <section className="ps-highlight-section">
          <div className="ps-highlight-container" data-aos="fade-up">
            <div className="ps-h-box">
              <h3>2026 Batch Highlight</h3>
              <p>Our recent batch achieved a record-breaking placement season with multiple students securing double-digit LPA packages across Product and Service-based MNCs.</p>
            </div>
            <div className="ps-h-stats">
              <div className="ps-h-stat">
                <h4>24 LPA</h4>
                <span>Highest Package</span>
              </div>
              <div className="ps-h-stat">
                <h4>6.5 LPA</h4>
                <span>Average Package</span>
              </div>
            </div>
          </div>
        </section>

        {/* WALL OF FAME GRID */}
        <section className="ps-grid-section">
          <div className="ps-container">
            <div className="ps-section-header" data-aos="fade-up">
              <h2>Recent Placements</h2>
              <p>Meet the brilliant minds who transformed their careers with Codewizen.</p>
            </div>

            <div className="ps-grid">
              {students.map((student, index) => (
                <div 
                  key={student.id} 
                  className="ps-card" 
                  data-aos="fade-up" 
                  data-aos-delay={(index % 4) * 100}
                >
                  <div className="ps-avatar-container">
                    <div className="ps-avatar">
                      <img 
                        src={student.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`} 
                        alt={student.name} 
                        loading="lazy" 
                      />
                    </div>
                    <div className="ps-company-badge">{student.company}</div>
                  </div>
                  
                  <div className="ps-content">
                    <h3 className="ps-name">{student.name}</h3>
                    <p className="ps-role">{student.company} Placement</p>
                    
                    <div className="ps-details-list">
                      <div className="ps-detail-item">
                        <FaMoneyBillWave className="ps-d-icon orange" />
                        <span>{student.ctc}</span>
                      </div>
                      <div className="ps-detail-item">
                        <FaMapMarkerAlt className="ps-d-icon blue" />
                        <span>India</span>
                      </div>
                    </div>
                    
                    <div className="ps-course">
                      <FaGraduationCap /> {student.course}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALUMNI SPEAKS */}
        <div style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
          <div className="ps-section-header" style={{ marginBottom: '20px' }}>
            <h2>Alumni Speaks</h2>
          </div>
          <Testimonials />
        </div>

        {/* CTA */}
        <ReadyToStart />
        
      </div>
    </>
  );
};

export default PlacedStudents;
