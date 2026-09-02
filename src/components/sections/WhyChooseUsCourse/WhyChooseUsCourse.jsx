import React from 'react';
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaHandshake, 
  FaChartLine, 
  FaAward, 
  FaChalkboardTeacher, 
  FaBriefcase, 
  FaBookOpen, 
  FaRocket, 
  FaMoneyCheckAlt, 
  FaClock, 
  FaLaptopCode 
} from 'react-icons/fa';
import './WhyChooseUsCourse.css';

const WhyChooseUsCourse = () => {
  return (
    <section className="wcu-course-section">
      <div className="wcu-course-container">
        
        <div className="wcu-header" data-aos="fade-up">
          <h2>Why Choose Codewizen</h2>
          <p>Your success is our priority. Here's what makes us the best choice for your career growth</p>
        </div>

        <div className="wcu-stats-grid" data-aos="fade-up" data-aos-delay="100">
          <div className="wcu-stat-box">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="wcu-stat-box">
            <h3>15,000+</h3>
            <p>Students Trained</p>
          </div>
          <div className="wcu-stat-box">
            <h3>300+</h3>
            <p>Hiring Partners</p>
          </div>
          <div className="wcu-stat-box">
            <h3>95%</h3>
            <p>Placement Rate</p>
          </div>
        </div>

        <div className="wcu-features-grid">
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="wcu-f-icon"><FaAward /></div>
            <h4>15+ Years of Excellence</h4>
            <p>Established training institute with proven track record of producing industry-ready professionals.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="150">
            <div className="wcu-f-icon"><FaChalkboardTeacher /></div>
            <h4>Expert Faculty</h4>
            <p>Learn from trainers with 10+ years of real-world industry experience in leading tech companies.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="wcu-f-icon"><FaBriefcase /></div>
            <h4>100% Placement Assistance</h4>
            <p>Dedicated placement cell with tie-ups with 300+ companies. We support you until you get hired.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="250">
            <div className="wcu-f-icon"><FaBookOpen /></div>
            <h4>Comprehensive Curriculum</h4>
            <p>Updated syllabus covering latest technologies and industry best practices with hands-on projects.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="wcu-f-icon"><FaRocket /></div>
            <h4>Career Growth Focus</h4>
            <p>Not just training, but complete career transformation with soft skills and interview preparation.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="350">
            <div className="wcu-f-icon"><FaMoneyCheckAlt /></div>
            <h4>Pay After Placement</h4>
            <p>Flexible payment options including pay after placement for eligible candidates.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="400">
            <div className="wcu-f-icon"><FaClock /></div>
            <h4>Flexible Batches</h4>
            <p>Multiple batch timings to suit working professionals, students, and freshers.</p>
          </div>
          <div className="wcu-feature-card" data-aos="fade-up" data-aos-delay="450">
            <div className="wcu-f-icon"><FaLaptopCode /></div>
            <h4>Live Project Experience</h4>
            <p>Work on real client projects during internships with our partner IT companies.</p>
          </div>
        </div>

        <div className="wcu-banner" data-aos="zoom-in">
          <p>
            We provide innovative placement solutions with direct access to hiring companies, paid internship programs, and comprehensive training that transforms freshers into job-ready professionals. Our proven methodology has helped thousands launch successful tech careers.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsCourse;
