import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaChalkboardTeacher, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaPython, 
  FaDatabase, 
  FaGlobe, 
  FaBrain 
} from 'react-icons/fa';
import './CourseLayout.css';

const PythonFullStack = () => {
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
    const courseName = "Python Full Stack Development";
    const text = `Hello Codewizen!\nI am interested in the *${courseName}* course.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Mode:* ${formData.mode}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Python Full Stack Development" 
        description="Learn Python, Django, REST APIs, and Frontend frameworks. Build highly scalable applications and step into the world of Data Science."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Python Full Stack" }
        ]}
      />
      
      <div className="course-page-wrapper">
        <div className="course-content-grid">
          
          {/* ── LEFT COLUMN: DESCRIPTION ── */}
          <div className="course-main-content">
            
            <div className="course-section-card" data-aos="fade-up">
              <h2>Course Overview</h2>
              <p>
                Python is the undisputed king of modern programming languages. From web development to Artificial Intelligence, Python is everywhere. Our Python Full Stack program teaches you how to leverage this powerful language to build enterprise applications.
              </p>
              <p>
                You will master everything from core Python logic to backend architecture with Django/Flask, integrating seamlessly with modern frontend systems like React JS.
              </p>

              <div className="course-features-grid">
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Zero to Hero:</strong> Perfect for beginners with no coding background.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Real-time Projects:</strong> Build E-commerce platforms and APIs.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Placement Support:</strong> Direct referrals to 300+ partner IT companies.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>100% Placement:</strong> Dedicated support until you secure a job.</div>
                </div>
              </div>
            </div>

            <div className="course-section-card" data-aos="fade-up">
              <h2>What You Will Learn (Syllabus)</h2>
              <ul className="course-syllabus-list">
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaPython /></div>
                  <div className="syllabus-text">Core Python (Data Structures, OOPs, Exception Handling)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaDatabase /></div>
                  <div className="syllabus-text">Database Management (MySQL, PostgreSQL, ORM)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaGlobe /></div>
                  <div className="syllabus-text">Django & Flask Frameworks (MVT Architecture, REST APIs)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaBrain /></div>
                  <div className="syllabus-text">Data Science Basics (NumPy, Pandas, Matplotlib)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaGlobe /></div>
                  <div className="syllabus-text">Frontend Integration (HTML, CSS, JavaScript, React)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaGlobe /></div>
                  <div className="syllabus-text">Cloud Deployment (AWS EC2, Docker, GitHub)</div>
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

export default PythonFullStack;
