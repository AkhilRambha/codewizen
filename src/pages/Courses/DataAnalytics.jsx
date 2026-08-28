import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaChalkboardTeacher, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaChartBar, 
  FaDatabase, 
  FaTable, 
  FaPython 
} from 'react-icons/fa';
import './CourseLayout.css';

const DataAnalytics = () => {
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
    const courseName = "Data Analytics";
    const text = `Hello Codewizen!\nI am interested in the *${courseName}* course.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Mode:* ${formData.mode}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Data Analytics & Power BI" 
        description="Transform raw data into actionable insights. Master SQL, Advanced Excel, Power BI, and Python to become a highly sought-after Data Analyst."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Data Analytics" }
        ]}
      />
      
      <div className="course-page-wrapper">
        <div className="course-content-grid">
          
          {/* ── LEFT COLUMN: DESCRIPTION ── */}
          <div className="course-main-content">
            
            <div className="course-section-card" data-aos="fade-up">
              <h2>Course Overview</h2>
              <p>
                Data is the new oil, and companies desperately need analysts who can interpret it. Our Data Analytics program takes you through the complete data lifecycle—from extraction and cleaning to visualization and reporting.
              </p>
              <p>
                You will build interactive dashboards, execute complex SQL queries, and automate reporting workflows using enterprise tools used by top Fortune 500 companies.
              </p>

              <div className="course-features-grid">
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Placement Support:</strong> Direct referrals to 300+ partner IT companies.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Real-time Dashboards:</strong> Build live business intelligence reports.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Advanced SQL:</strong> Master complex database querying.</div>
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
                  <div className="syllabus-icon"><FaTable /></div>
                  <div className="syllabus-text">Advanced Excel (VLOOKUP, Pivot Tables, Macros)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaDatabase /></div>
                  <div className="syllabus-text">SQL for Data Analytics (Joins, Subqueries, Window Functions)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaChartBar /></div>
                  <div className="syllabus-text">Power BI Mastery (DAX, Data Modeling, Dashboard Design)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaChartBar /></div>
                  <div className="syllabus-text">Tableau Essentials (Data Blending, Storytelling)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaPython /></div>
                  <div className="syllabus-text">Python for Data Analysis (Pandas, NumPy)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaChartBar /></div>
                  <div className="syllabus-text">Capstone Project: End-to-End Business Reporting</div>
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

export default DataAnalytics;
