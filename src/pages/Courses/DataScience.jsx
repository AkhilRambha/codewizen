import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaChalkboardTeacher, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaBrain, 
  FaChartLine, 
  FaPython,
  FaRobot
} from 'react-icons/fa';
import './CourseLayout.css';

const DataScience = () => {
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
    const courseName = "Data Science & Machine Learning";
    const text = `Hello Codewizen!\nI am interested in the *${courseName}* course.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Mode:* ${formData.mode}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Data Science & Machine Learning" 
        description="Master predictive modeling, statistical analysis, and machine learning algorithms using Python. Become an elite Data Scientist."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Data Science" }
        ]}
      />
      
      <div className="course-page-wrapper">
        <div className="course-content-grid">
          
          <div className="course-main-content">
            
            <div className="course-section-card" data-aos="fade-up">
              <h2>Course Overview</h2>
              <p>
                Data Science is the highest-paying skill of the decade. This comprehensive program takes you deep into statistics, probability, and advanced machine learning models.
              </p>
              <p>
                You'll move beyond basic data visualization and learn how to build predictive models, recommendation engines, and natural language processing pipelines using real-world datasets.
              </p>

              <div className="course-features-grid">
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Advanced Algorithms:</strong> Master Regression, Clustering, and SVMs.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Deep Learning:</strong> Get introduced to Neural Networks & TensorFlow.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Placement Support:</strong> Direct referrals to 300+ partner IT companies.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Real Datasets:</strong> Work with Kaggle datasets and live APIs.</div>
                </div>
              </div>
            </div>

            <div className="course-section-card" data-aos="fade-up">
              <h2>What You Will Learn (Syllabus)</h2>
              <ul className="course-syllabus-list">
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaChartLine /></div>
                  <div className="syllabus-text">Applied Statistics & Probability for Data Science</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaPython /></div>
                  <div className="syllabus-text">Python Data Stack (NumPy, Pandas, Matplotlib, Seaborn)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaRobot /></div>
                  <div className="syllabus-text">Supervised Machine Learning (Linear, Logistic, Decision Trees, Random Forest)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaRobot /></div>
                  <div className="syllabus-text">Unsupervised Machine Learning (K-Means, PCA)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaBrain /></div>
                  <div className="syllabus-text">Deep Learning & NLP Basics (TensorFlow, Keras)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaBrain /></div>
                  <div className="syllabus-text">Model Deployment (Flask/FastAPI, Docker)</div>
                </li>
              </ul>
            </div>

          </div>

          <div className="course-sidebar" data-aos="fade-left">
            <h3>Request Course Details</h3>
            <p>Fill out the form below and we will send you the complete syllabus and fee details instantly on WhatsApp.</p>
            
            <form className="course-inquiry-form" onSubmit={handleWhatsAppSubmit}>
              <div className="c-form-field">
                <div className="c-field-icon"><FaUser /></div>
                <input type="text" name="name" placeholder="Your Full Name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="c-form-field">
                <div className="c-field-icon"><FaPhoneAlt /></div>
                <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
              </div>
              <div className="c-form-field">
                <div className="c-field-icon"><FaChalkboardTeacher /></div>
                <select name="mode" required value={formData.mode} onChange={handleChange}>
                  <option value="" disabled>Select Training Mode</option>
                  <option value="Classroom Training">Classroom Training</option>
                  <option value="Online Training">Online Training</option>
                </select>
              </div>
              <button type="submit" className="c-submit-btn">
                Send via WhatsApp <FaWhatsapp size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default DataScience;
