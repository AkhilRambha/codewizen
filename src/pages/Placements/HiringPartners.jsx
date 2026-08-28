import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HiringPartners.css';

const HiringPartners = () => {
  const partners = [
    { name: "AMAZON", domain: "amazon.com" },
    { name: "MICROSOFT", domain: "microsoft.com" },
    { name: "GOOGLE", domain: "google.com" },
    { name: "DELOITTE", domain: "deloitte.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "INFOSYS", domain: "infosys.com" },
    { name: "WIPRO", domain: "wipro.com" },
    { name: "ACCENTURE", domain: "accenture.com" },
    { name: "CAPGEMINI", domain: "capgemini.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "COGNIZANT", domain: "cognizant.com" },
    { name: "TECH MAHINDRA", domain: "techmahindra.com" },
    { name: "HCL TECH", domain: "hcltech.com" },
    { name: "MINDTREE", domain: "ltimindtree.com" },
    { name: "L&T INFOTECH", domain: "lntinfotech.com" },
    { name: "ZOHO", domain: "zoho.com" },
    { name: "CISCO", domain: "cisco.com" },
    { name: "ORACLE", domain: "oracle.com" },
    { name: "FLIPKART", domain: "flipkart.com" },
    { name: "ZOMATO", domain: "zomato.com" }
  ];

  return (
    <>
      <PageHero 
        title="Our Hiring Partners" 
        description="We have partnered with 300+ top IT companies, MNCs, and fast-growing startups to provide our students with the best career opportunities."
        breadcrumbs={[
          { label: "Placements", link: "/placement-assistance" },
          { label: "Hiring Partners" }
        ]}
      />
      
      <div className="hp-page-wrapper">
        <div className="hp-container">
          
          <div className="hp-header" data-aos="fade-up">
            <h2>Trusted by the Best</h2>
            <p>Our curriculum is designed in alignment with industry needs. That's why top companies prefer hiring Codewizen alumni directly from our campus.</p>
          </div>

          <div className="hp-logos-grid">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="hp-logo-card"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 50}
              >
                <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${partner.domain}&size=128`} alt={partner.name} className="hp-logo-img" />
                <span className="hp-logo-text">{partner.name}</span>
              </div>
            ))}
          </div>

          <div className="hp-benefits-section" data-aos="fade-up">
            <div className="hp-benefits-content">
              <h3>Looking to Hire Top Tech Talent?</h3>
              <p>
                Join our network of hiring partners and get priority access to pre-screened, highly skilled, and project-ready candidates. We do the heavy lifting of training and evaluation, so you can hire the exact skill sets you need.
              </p>
              <ul className="hp-features-list">
                <li className="hp-feature-item">
                  <FaCheckCircle className="hp-feature-icon" /> Zero Recruitment Cost
                </li>
                <li className="hp-feature-item">
                  <FaCheckCircle className="hp-feature-icon" /> Pre-screened & Trained Candidates
                </li>
                <li className="hp-feature-item">
                  <FaCheckCircle className="hp-feature-icon" /> Day-1 Productive Developers
                </li>
                <li className="hp-feature-item">
                  <FaCheckCircle className="hp-feature-icon" /> Tailored Skill Matchmaking
                </li>
              </ul>
            </div>
            
            <div className="hp-benefits-cta">
              <h4>Become a Partner</h4>
              <p>Leave your details and our corporate relations team will get in touch with you shortly.</p>
              <Link to="/contact-us" className="hp-cta-btn">Connect With Us</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HiringPartners;
