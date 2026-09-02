import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';
import { FaBuilding, FaChartLine, FaUsers } from 'react-icons/fa';
import './HiringPartners.css';

const HiringPartners = () => {
  return (
    <>
      <PageHero 
        title="Our Hiring Partners" 
        description="We are proud to collaborate with 300+ leading multinational companies and fast-growing startups who actively recruit our talented alumni."
        breadcrumbs={[
          { label: "Placements", link: "/placement-assistance" },
          { label: "Hiring Partners" }
        ]}
      />
      
      <div className="hp-page-wrapper">
        
        {/* STATS */}
        <section className="hp-stats-section">
          <div className="hp-container">
            <div className="hp-stats-grid">
              <div className="hp-stat-card" data-aos="fade-up">
                <FaBuilding className="hp-s-icon" />
                <h3>300+</h3>
                <p>Corporate Partners</p>
              </div>
              <div className="hp-stat-card" data-aos="fade-up" data-aos-delay="100">
                <FaUsers className="hp-s-icon" />
                <h3>15k+</h3>
                <p>Alumni Employed</p>
              </div>
              <div className="hp-stat-card" data-aos="fade-up" data-aos-delay="200">
                <FaChartLine className="hp-s-icon" />
                <h3>95%</h3>
                <p>Placement Record</p>
              </div>
            </div>
          </div>
        </section>

        {/* SIDE-BY-SIDE LOGOS SECTION */}
        <section className="hp-logos-section">
          <div className="hp-container hp-side-by-side">
            <div className="hp-text-content" data-aos="fade-right">
              <h2>Top Recruiters & Corporate Network</h2>
              <p>Our students are successfully placed in the world's leading product and service-based companies.</p>
              <div className="hp-content-box">
                <h4>Dedicated Placement Drives</h4>
                <p>We regularly host exclusive placement drives and pool campus interviews specifically for Codewizen alumni.</p>
              </div>
              <div className="hp-content-box">
                <h4>Direct HR Referrals</h4>
                <p>Our placement cell maintains strong relationships with over 300 HRs, giving you a direct entry path into top MNCs without the traditional queue.</p>
              </div>
              <button className="hp-btn-primary" onClick={() => window.location.href='/contact-us'}>Start Your Placement Journey</button>
            </div>

            <div className="hp-logos-side-grid" data-aos="fade-left">
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amazon.com&size=128" alt="Amazon" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://tcs.com&size=128" alt="TCS" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128" alt="Infosys" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://wipro.com&size=128" alt="Wipro" /></div>
              
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://accenture.com&size=128" alt="Accenture" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://capgemini.com&size=128" alt="Capgemini" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ibm.com&size=128" alt="IBM" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://cognizant.com&size=128" alt="Cognizant" /></div>
              
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://techmahindra.com&size=128" alt="Tech Mahindra" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://deloitte.com&size=128" alt="Deloitte" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://oracle.com&size=128" alt="Oracle" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://microsoft.com&size=128" alt="Microsoft" /></div>
              
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://cisco.com&size=128" alt="Cisco" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://intel.com&size=128" alt="Intel" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hp.com&size=128" alt="HP" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://sap.com&size=128" alt="SAP" /></div>
              
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://salesforce.com&size=128" alt="Salesforce" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://adobe.com&size=128" alt="Adobe" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://vmware.com&size=128" alt="VMware" /></div>
              <div className="hp-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hcltech.com&size=128" alt="HCL" /></div>
            </div>
          </div>
        </section>

        {/* WHY HIRE FROM US */}
        <section className="hp-why-section">
          <div className="hp-container">
            <div className="hp-why-grid">
              <div className="hp-why-content" data-aos="fade-right">
                <h2>Why Companies Hire From Codewizen?</h2>
                <ul className="hp-why-list">
                  <li><strong>Industry-Ready Skills:</strong> Our curriculum is designed by industry experts to match current market demands.</li>
                  <li><strong>Hands-On Experience:</strong> Students build real-world capstone projects and participate in internships.</li>
                  <li><strong>Rigorous Evaluation:</strong> Only candidates who pass our strict internal technical assessments are forwarded to HRs.</li>
                  <li><strong>Soft Skills Trained:</strong> We emphasize communication, teamwork, and problem-solving alongside technical skills.</li>
                </ul>
              </div>
              <div className="hp-why-image" data-aos="fade-left">
                <img src="/images/office2.jpg" alt="Corporate Training" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ReadyToStart />
        
      </div>
    </>
  );
};

export default HiringPartners;
