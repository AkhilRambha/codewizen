import React from 'react';
import { 
  FaCheckCircle, 
  FaTrophy, 
  FaUserShield, 
  FaBriefcase, 
  FaIdCard, 
  FaGraduationCap, 
  FaAward, 
  FaProjectDiagram 
} from 'react-icons/fa';
import './Certification.css';

const Certification = () => {
  return (
    <section className="certification-section">
      <div className="certification-container">
        
        <div className="cert-header" data-aos="fade-up">
          <h2>Certification</h2>
          <p>Certification options that support your learning journey and career growth</p>
        </div>

        <div className="cert-content-grid">
          
          {/* Certificate Mockup */}
          <div className="cert-mockup-wrapper" data-aos="fade-right">
            <div className="cert-mockup">
              <div className="cert-inner">
                <div className="cert-badge">
                  <FaAward />
                </div>
                <h3>Certificate of Completion</h3>
                <h4>Advanced Technology Training Program</h4>
                <p className="cert-text-small">This certifies that</p>
                <h2 className="cert-name">[Your Name]</h2>
                <p className="cert-text-small">has successfully completed the</p>
                <h3 className="cert-program">Industry Ready Professional Training</h3>
                <div className="cert-footer">
                  <div className="cert-logo">Codewizen</div>
                  <div className="cert-id">
                    <span>Certificate ID</span>
                    <br />
                    <strong>CW-2026-XXXX</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Features */}
          <div className="cert-features-wrapper" data-aos="fade-left">
            
            <div className="cert-feature-box cert-includes-box">
              <h4>Certificate Includes</h4>
              <ul className="cert-includes-list">
                <li><FaCheckCircle className="cert-check" /> Industry-recognized course completion certificate</li>
                <li><FaCheckCircle className="cert-check" /> Certification from Codewizen Software Institute</li>
                <li><FaCheckCircle className="cert-check" /> Additional internship certificate (for eligible programs)</li>
                <li><FaCheckCircle className="cert-check" /> Digital certificate with unique verification ID</li>
                <li><FaCheckCircle className="cert-check" /> Shareable on LinkedIn and other professional platforms</li>
                <li><FaCheckCircle className="cert-check" /> Valid proof of skill acquisition for employers</li>
                <li><FaCheckCircle className="cert-check" /> Includes detailed syllabus covered</li>
              </ul>
            </div>

            <div className="cert-features-grid">
              <div className="cert-small-box">
                <FaTrophy className="cert-small-icon" />
                <h5>Industry Recognition</h5>
                <p>Our certificates are recognized by leading companies</p>
              </div>
              <div className="cert-small-box">
                <FaUserShield className="cert-small-icon" />
                <h5>Skill Validation</h5>
                <p>Demonstrates understanding of core foundations</p>
              </div>
              <div className="cert-small-box">
                <FaBriefcase className="cert-small-icon" />
                <h5>Career Advancement</h5>
                <p>Increases your chances of getting hired</p>
              </div>
              <div className="cert-small-box">
                <FaIdCard className="cert-small-icon" />
                <h5>Digital & Physical</h5>
                <p>Get both digital certificate for online sharing and physical</p>
              </div>
            </div>

          </div>
        </div>

        <div className="cert-bottom-grid" data-aos="fade-up">
          <div className="cert-bottom-card">
            <FaGraduationCap className="cert-b-icon" />
            <h5>Course Certificate</h5>
            <p>Upon successful completion of training</p>
          </div>
          <div className="cert-bottom-card">
            <FaBriefcase className="cert-b-icon" />
            <h5>Internship Certificate</h5>
            <p>For internship program from partner IT Company</p>
          </div>
          <div className="cert-bottom-card">
            <FaProjectDiagram className="cert-b-icon" />
            <h5>Project Certificate</h5>
            <p>For major projects completed during training</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certification;
