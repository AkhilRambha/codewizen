import React from 'react';
import { 
  FaLaptopCode, 
  FaUserTie, 
  FaBriefcase, 
  FaCertificate, 
  FaFileAlt, 
  FaCrosshairs, 
  FaComments, 
  FaGraduationCap,
  FaCheckCircle
} from 'react-icons/fa';
import './CourseFeatures.css';

const CourseFeatures = () => {
  return (
    <section className="course-features-section">
      <div className="course-features-container">
        
        <div className="cf-header" data-aos="fade-up">
          <h2>Course Features & Highlights</h2>
          <p>Everything you need to become a successful professional</p>
        </div>

        <div className="cf-grid">
          <div className="cf-card" data-aos="fade-up" data-aos-delay="100">
            <div className="cf-icon"><FaLaptopCode /></div>
            <h3>Live Projects</h3>
            <p>Work on real-world projects from day one with industry use cases</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="150">
            <div className="cf-icon"><FaUserTie /></div>
            <h3>Expert Trainers</h3>
            <p>Learn from industry professionals with 10+ years of experience</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="200">
            <div className="cf-icon"><FaBriefcase /></div>
            <h3>100% Placement Support</h3>
            <p>Dedicated placement cell with assistance until you get hired</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="250">
            <div className="cf-icon"><FaCertificate /></div>
            <h3>Industry Certification</h3>
            <p>Get certified and boost your resume with recognized credentials</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="300">
            <div className="cf-icon"><FaFileAlt /></div>
            <h3>Resume Building</h3>
            <p>Professional resume preparation and LinkedIn profile optimization</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="350">
            <div className="cf-icon"><FaCrosshairs /></div>
            <h3>Mock Interviews</h3>
            <p>Weekly mock interviews to prepare you for real job scenarios</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="400">
            <div className="cf-icon"><FaComments /></div>
            <h3>Soft Skills Training</h3>
            <p>Communication, aptitude, and personality development sessions</p>
          </div>
          <div className="cf-card" data-aos="fade-up" data-aos-delay="450">
            <div className="cf-icon"><FaGraduationCap /></div>
            <h3>LMS Access</h3>
            <p>Access to learning materials and recorded sessions</p>
          </div>
        </div>

        <div className="cf-additional-benefits" data-aos="zoom-in">
          <h3>Additional Benefits</h3>
          <div className="cf-benefits-grid">
            <div className="cf-benefit-item"><FaCheckCircle className="cf-check" /> Pay After Placement Options Available</div>
            <div className="cf-benefit-item"><FaCheckCircle className="cf-check" /> Doubt Clearing Sessions</div>
            <div className="cf-benefit-item"><FaCheckCircle className="cf-check" /> Mega Job Drives</div>
            <div className="cf-benefit-item"><FaCheckCircle className="cf-check" /> 24/7 Learner Support</div>
            <div className="cf-benefit-item"><FaCheckCircle className="cf-check" /> Flexible Payment Plans</div>
            <div className="cf-benefit-item"><FaCheckCircle className="cf-check" /> 6-12 Months LMS Access</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseFeatures;
