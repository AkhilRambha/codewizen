import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaChalkboardTeacher, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaProjectDiagram 
} from 'react-icons/fa';
import './CourseLayout.css';

const JavaFullStack = () => {
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
    const courseName = "Java Full Stack Development";
    const text = `Hello Codewizen!\nI am interested in the *${courseName}* course.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Mode:* ${formData.mode}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Java Full Stack Development" 
        description="Master front-end and back-end development with Java, Spring Boot, and React. Become an enterprise-ready software engineer."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Java Full Stack" }
        ]}
      />
      
      <div className="course-page-wrapper">
        <div className="course-content-grid">
          
          {/* ── LEFT COLUMN: DESCRIPTION ── */}
          <div className="course-main-content">
            
            <div className="course-section-card" data-aos="fade-up">
              <h2>Course Overview</h2>
              <p>
                Our comprehensive Java Full Stack Development course is designed to take you from a beginner to a highly skilled enterprise developer. You will learn to build scalable, secure, and robust web applications from scratch.
              </p>
              <p>
                Unlike generic coding bootcamps, this program focuses heavily on real-time MNC architectures, including Microservices, REST APIs, and modern frontend frameworks like React JS.
              </p>

              <div className="course-features-grid">
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>100% Practical Training:</strong> No boring PPTs, just live coding.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Real-time Projects:</strong> Build 3 enterprise-grade applications.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Interview Prep:</strong> Mock interviews with technical architects.</div>
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
                  <div className="syllabus-icon"><FaCode /></div>
                  <div className="syllabus-text">Core & Advanced Java (OOPs, Collections, Multithreading)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaDatabase /></div>
                  <div className="syllabus-text">Database Management (MySQL, Oracle, JDBC, Hibernate)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaServer /></div>
                  <div className="syllabus-text">Spring Framework & Spring Boot (REST APIs, Security)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaProjectDiagram /></div>
                  <div className="syllabus-text">Microservices Architecture & API Gateway</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaCode /></div>
                  <div className="syllabus-text">Frontend Development (HTML, CSS, JavaScript, React JS)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaServer /></div>
                  <div className="syllabus-text">Deployment & DevOps Basics (AWS, Docker, Jenkins)</div>
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

export default JavaFullStack;
