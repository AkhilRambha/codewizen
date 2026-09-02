import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './CourseCurriculum.css';

const CourseCurriculum = ({ curriculumData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="course-curriculum-section">
      <div className="course-curriculum-container">
        
        <div className="cc-header" data-aos="fade-up">
          <h2>Complete Course Curriculum</h2>
          <p>Comprehensive modules covering every aspect of the technology</p>
        </div>

        <div className="cc-accordion-wrapper" data-aos="fade-up">
          {curriculumData.map((module, index) => (
            <div className="cc-accordion-item" key={index}>
              <div 
                className={`cc-accordion-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="cc-accordion-title">
                  <span className="cc-accordion-icon">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                  {module.title}
                </div>
              </div>
              <div className={`cc-accordion-body ${activeIndex === index ? 'open' : ''}`}>
                <ul className="cc-topics-list">
                  {module.topics.map((topic, tIndex) => (
                    <li key={tIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cc-modules-banner" data-aos="zoom-in">
          <h3>{curriculumData.length} Structured Modules</h3>
          <p>Foundations to Advanced Concepts & Capstone</p>
        </div>

      </div>
    </section>
  );
};

export default CourseCurriculum;
