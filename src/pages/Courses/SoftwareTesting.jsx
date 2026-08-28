import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaChalkboardTeacher, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaCode, 
  FaBug, 
  FaRobot, 
  FaTasks 
} from 'react-icons/fa';
import './CourseLayout.css';

const SoftwareTesting = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const waNumber = "918464025086";
    const courseName = "Software Testing (QA Automation)";
    const text = `Hello Codewizen!\nI am interested in the *${courseName}* course.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Mode:* ${formData.mode}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Software Testing (QA Automation)" 
        description="Master Manual Testing, Selenium, Java, and API Automation. Become a certified Quality Assurance Engineer and ensure flawless software delivery."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Software Testing" }
        ]}
      />
      
      <div className="course-page-wrapper">
        <div className="course-content-grid">
          
          {/* ── LEFT COLUMN: DESCRIPTION ── */}
          <div className="course-main-content">
            
            <div className="course-section-card" data-aos="fade-up">
              <h2>Course Overview</h2>
              <p>
                Quality Assurance is a critical phase in any software development lifecycle. Our Software Testing program teaches you how to break software intentionally to find bugs before they reach the customer.
              </p>
              <p>
                You will start with core manual testing methodologies and rapidly progress to writing robust automated test scripts using Selenium Webdriver, TestNG, and Java.
              </p>

              <div className="course-features-grid">
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Manual & Automation:</strong> Comprehensive coverage of both testing phases.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Real-time Frameworks:</strong> Build Data-Driven and Hybrid frameworks.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>API Testing:</strong> Master Postman and RestAssured for backend testing.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Placement Support:</strong> Direct referrals to 300+ partner IT companies.</div>
                </div>
              </div>
            </div>

            <div className="course-section-card" data-aos="fade-up">
              <h2>What You Will Learn (Syllabus)</h2>
              <ul className="course-syllabus-list">
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaTasks /></div>
                  <div className="syllabus-text">Manual Testing (SDLC, STLC, Test Cases, Defect Life Cycle)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaBug /></div>
                  <div className="syllabus-text">Agile Methodology & Bug Tracking (Jira, Bugzilla)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaCode /></div>
                  <div className="syllabus-text">Core Java for Automation (OOPs, Collections)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaRobot /></div>
                  <div className="syllabus-text">Selenium WebDriver (Locators, Waits, Action Classes)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaRobot /></div>
                  <div className="syllabus-text">TestNG, Cucumber (BDD) & Page Object Model (POM)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaCode /></div>
                  <div className="syllabus-text">API Testing (Postman, RestAssured)</div>
                </li>
              </ul>
            </div>

          </div>

          {/* ── RIGHT COLUMN: INQUIRY FORM ── */}
          <div className="course-sidebar" data-aos="fade-left">
            <h3>Request Course Details</h3>
            <p>Fill out the form below and we will send you the complete syllabus and fee details instantly on WhatsApp.</p>
            
            <form className="course-inquiry-form" onSubmit={handleWhatsAppSubmit}>
              <div className="c-form-field">
                <div className="c-field-icon"><FaUser /></div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="c-form-field">
                <div className="c-field-icon"><FaPhoneAlt /></div>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="c-form-field">
                <div className="c-field-icon"><FaChalkboardTeacher /></div>
                <select 
                  name="mode" 
                  required 
                  value={formData.mode}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Training Mode</option>
                  <option value="Classroom Training">Classroom Training</option>
                  <option value="Online Training">Online Training</option>
                </select>
              </div>

              <button type="submit" className="c-submit-btn">
                Send via WhatsApp <FaWhatsapp size={20} />
              </button>

              <div className="c-form-footer">
                100% Secure. We do not spam.
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default SoftwareTesting;
