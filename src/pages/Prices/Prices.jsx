import React, { useState } from 'react';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../components/common/PageHero/PageHero.css';
import './Prices.css';

const Prices = () => {
  // We'll set the initial states
  const [course, setCourse] = useState("java");
  const [mode, setMode] = useState("online");

  // Pricing & logic dictionary
  const courseData = {
    "java": {
      name: "Java Full Stack",
      basePrice: 24999,
      link: "/java-full-stack",
      features: [
        "Core & Advanced Java",
        "Spring Boot & Microservices",
        "React JS Frontend",
        "100% Placement Support"
      ]
    },
    "python": {
      name: "Python Full Stack",
      basePrice: 21999,
      link: "/python-full-stack",
      features: [
        "Core Python & Advanced Logic",
        "Django & Flask Frameworks",
        "React JS Frontend",
        "100% Placement Support"
      ]
    },
    "data-science": {
      name: "Data Science & ML",
      basePrice: 29999,
      link: "/data-science",
      features: [
        "Python Data Stack (Pandas, NumPy)",
        "Machine Learning Algorithms",
        "Deep Learning Basics",
        "100% Placement Support"
      ]
    },
    "data-analytics": {
      name: "Data Analytics",
      basePrice: 19999,
      link: "/data-analytics",
      features: [
        "Advanced Excel & SQL",
        "Power BI Dashboards",
        "Tableau Essentials",
        "100% Placement Support"
      ]
    },
    "testing": {
      name: "Software Testing",
      basePrice: 17999,
      link: "/software-testing",
      features: [
        "Manual Testing Methodologies",
        "Selenium Automation with Java",
        "API Testing (Postman)",
        "100% Placement Support"
      ]
    },
    "gen-ai": {
      name: "Generative AI",
      basePrice: 24999,
      link: "/generative-ai",
      features: [
        "Advanced Prompt Engineering",
        "LangChain & LlamaIndex",
        "RAG Architecture",
        "100% Placement Support"
      ]
    }
  };

  // Pricing modifiers based on training mode
  const modeModifier = {
    "online": 0,          // Base price
    "classroom": 10000    // Classroom adds 10k to the base price
  };

  // Derive the active configuration
  const activeCourse = courseData[course];
  
  // Calculate final price
  const total = activeCourse.basePrice + modeModifier[mode];
  const finalPrice = total.toLocaleString('en-IN'); // Formats to Indian Rupee system (e.g. 34,999)

  return (
    <div className="prices-page">
      
      <section className="prices-hero">
        <div className="prices-hero-container" data-aos="fade-up">
          <nav className="breadcrumbs" style={{ marginBottom: '20px' }}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="separator">/</li>
              <li><span>Prices</span></li>
            </ul>
          </nav>
          <h1>Estimate Your Investment</h1>
          <p>Use our pricing calculator to find the exact cost of your preferred course and training mode. No hidden fees, no surprises.</p>
        </div>
      </section>

      <section className="pricing-calc-container">
        <div className="pricing-calc-card" data-aos="fade-up" data-aos-delay="100">
          
          {/* ── LEFT CONTROLS ── */}
          <div className="calc-controls">
            <h2>Select Your Program</h2>
            <p>Choose a course and your preferred mode of training to calculate the fee.</p>

            <div className="form-group">
              <label>Which course do you want to join?</label>
              <div className="custom-select-wrapper">
                <select 
                  value={course} 
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="java">Java Full Stack Development</option>
                  <option value="python">Python Full Stack Development</option>
                  <option value="data-science">Data Science & Machine Learning</option>
                  <option value="data-analytics">Data Analytics & Power BI</option>
                  <option value="testing">Software Testing (QA Automation)</option>
                  <option value="gen-ai">Generative AI & Prompt Engineering</option>
                </select>
                <FaChevronDown className="select-icon" />
              </div>
            </div>

            <div className="form-group">
              <label>How do you want to learn?</label>
              <div className="custom-select-wrapper">
                <select 
                  value={mode} 
                  onChange={(e) => setMode(e.target.value)}
                >
                  <option value="online">Live Online Training</option>
                  <option value="classroom">In-Person Classroom Training</option>
                </select>
                <FaChevronDown className="select-icon" />
              </div>
            </div>
            
          </div>

          {/* ── RIGHT RESULT ── */}
          <div className="calc-result">
            <div className="result-eyebrow">{mode === 'online' ? 'Online Mode' : 'Classroom Mode'}</div>
            
            <div className="price-amount">
              <span className="price-currency">₹</span>{finalPrice}
            </div>
            <div className="price-subtitle">Total estimated fee (One-time)</div>

            <ul className="result-features">
              {activeCourse.features.map((feature, idx) => (
                <li key={idx} className="p-feature">
                  <FaCheckCircle className="p-icon" /> {feature}
                </li>
              ))}
              <li className="p-feature">
                <FaCheckCircle className="p-icon" /> {mode === 'online' ? '24/7 Access to Session Recordings' : 'In-person doubt clearance & Labs'}
              </li>
            </ul>

            <Link to={activeCourse.link} className="result-btn">
              View Syllabus
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Prices;
