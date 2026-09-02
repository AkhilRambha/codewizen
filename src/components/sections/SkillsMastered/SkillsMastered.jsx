import React from 'react';
import './SkillsMastered.css';

const SkillsMastered = ({ skillsData }) => {
  return (
    <section className="skills-mastered-section">
      <div className="skills-mastered-container">
        
        <div className="sm-header" data-aos="fade-up">
          <h2>Skills You'll Master</h2>
          <p>Comprehensive skill set covering every aspect of the technology</p>
        </div>

        <div className="sm-grid">
          {skillsData.map((category, index) => (
            <div className={`sm-category-card sm-color-${index % 4}`} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="sm-category-title-wrapper">
                <div className="sm-category-indicator"></div>
                <h3 className="sm-category-title">{category.title}</h3>
              </div>
              <div className="sm-skills-list">
                {category.skills.map((skill, sIndex) => (
                  <span className="sm-skill-tag" key={sIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sm-technologies-banner" data-aos="zoom-in">
          <h3>40+ Technologies & Frameworks</h3>
          <p>Build real-world projects, explore advanced concepts, and perform hands-on simulations through structured practical projects and capstone implementation.</p>
        </div>

      </div>
    </section>
  );
};

export default SkillsMastered;
