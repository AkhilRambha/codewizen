import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaChalkboardTeacher, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaRobot, 
  FaCode, 
  FaBrain, 
  FaCloud,
  FaDatabase
} from 'react-icons/fa';
import './CourseLayout.css';

const GenerativeAI = () => {
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
    const courseName = "Generative AI & Prompt Engineering";
    const text = `Hello Codewizen!\nI am interested in the *${courseName}* course.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Mode:* ${formData.mode}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Generative AI & Prompt Engineering" 
        description="Learn to build AI-powered applications using LLMs, LangChain, and advanced Prompt Engineering techniques."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Generative AI" }
        ]}
      />
      
      <div className="course-page-wrapper">
        <div className="course-content-grid">
          
          <div className="course-main-content">
            
            <div className="course-section-card" data-aos="fade-up">
              <h2>Course Overview</h2>
              <p>
                Generative AI is revolutionizing how we interact with technology. This cutting-edge course prepares you to build intelligent applications powered by Large Language Models (LLMs) like GPT-4, Claude, and open-source alternatives.
              </p>
              <p>
                You'll learn how to write effective prompts, fine-tune models, and use frameworks like LangChain to connect AI models to your company's private databases (RAG architecture).
              </p>

              <div className="course-features-grid">
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Placement Support:</strong> Direct referrals to 300+ partner IT companies.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>RAG Architecture:</strong> Build custom chatbots on private data.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>LangChain & LlamaIndex:</strong> Master the top AI frameworks.</div>
                </div>
                <div className="c-feature">
                  <FaCheckCircle className="c-feature-icon" />
                  <div className="c-feature-text"><strong>Future-Proof Skill:</strong> Stay ahead of the automation curve.</div>
                </div>
              </div>
            </div>

            <div className="course-section-card" data-aos="fade-up">
              <h2>What You Will Learn (Syllabus)</h2>
              <ul className="course-syllabus-list">
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaBrain /></div>
                  <div className="syllabus-text">Introduction to Generative AI & Foundation Models</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaCode /></div>
                  <div className="syllabus-text">Advanced Prompt Engineering (Zero-shot, Few-shot, Chain of Thought)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaRobot /></div>
                  <div className="syllabus-text">Working with OpenAI API, Claude API, and HuggingFace</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaCode /></div>
                  <div className="syllabus-text">LangChain Framework (Chains, Agents, Tools, Memory)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaDatabase /></div>
                  <div className="syllabus-text">Retrieval Augmented Generation (RAG) & Vector Databases (Pinecone/Chroma)</div>
                </li>
                <li className="syllabus-item">
                  <div className="syllabus-icon"><FaCloud /></div>
                  <div className="syllabus-text">Deploying AI Applications (Streamlit, Gradio, FastAPI)</div>
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

export default GenerativeAI;
