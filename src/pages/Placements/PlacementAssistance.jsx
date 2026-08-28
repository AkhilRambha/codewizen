import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import './PlacementAssistance.css';

const PlacementAssistance = () => {
  return (
    <>
      <PageHero 
        title="100% Placement Assistance" 
        description="Your success is our priority. We don't just train you; we guide you until you secure your dream job in the IT sector."
        breadcrumbs={[
          { label: "Placements", link: "/placement-assistance" },
          { label: "Placement Assistance" }
        ]}
      />
      
      <div className="pa-page-wrapper">
        <div className="pa-container">
          
          {/* STATS */}
          <div className="pa-stats-grid">
            <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="0">
              <div className="pa-stat-num">300+</div>
              <div className="pa-stat-text">Hiring Partners</div>
            </div>
            <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="pa-stat-num">10k+</div>
              <div className="pa-stat-text">Students Placed</div>
            </div>
            <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="pa-stat-num">92%</div>
              <div className="pa-stat-text">Success Rate</div>
            </div>
            <div className="pa-stat-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pa-stat-num">16 LPA</div>
              <div className="pa-stat-text">Highest Package</div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="pa-section-header" data-aos="fade-up">
            <h2>Our Placement Process</h2>
            <p>We have a structured, 6-step framework designed to transform you from a student into an industry-ready professional.</p>
          </div>

          <div className="pa-process-grid">
            
            <div className="pa-process-card" data-aos="fade-up" data-aos-delay="100">
              <div className="pa-step-num">1</div>
              <h3>Skill Evaluation</h3>
              <p>We assess your technical and soft skills to identify gaps and build a customized improvement roadmap.</p>
            </div>

            <div className="pa-process-card" data-aos="fade-up" data-aos-delay="200">
              <div className="pa-step-num">2</div>
              <h3>Resume Building</h3>
              <p>Our experts help you craft a professional, ATS-friendly resume that highlights your projects and core competencies.</p>
            </div>

            <div className="pa-process-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pa-step-num">3</div>
              <h3>Portfolio Creation</h3>
              <p>We guide you in building a strong GitHub profile and portfolio showcasing the real-time projects you developed.</p>
            </div>

            <div className="pa-process-card" data-aos="fade-up" data-aos-delay="400">
              <div className="pa-step-num">4</div>
              <h3>Mock Interviews</h3>
              <p>Participate in unlimited technical and HR mock interviews conducted by industry veterans to eliminate fear.</p>
            </div>

            <div className="pa-process-card" data-aos="fade-up" data-aos-delay="500">
              <div className="pa-step-num">5</div>
              <h3>Direct Referrals</h3>
              <p>Your profile is directly forwarded to HRs of our 300+ partnered MNCs and fast-growing startups.</p>
            </div>

            <div className="pa-process-card" data-aos="fade-up" data-aos-delay="600">
              <div className="pa-step-num">6</div>
              <h3>Offer Letter</h3>
              <p>We help you with salary negotiation and final onboarding procedures once you crack the interview.</p>
            </div>

          </div>

          {/* PARTNERS */}
          <div className="pa-partners-section" data-aos="fade-up">
            <h3>Where Our Alumni Work</h3>
            <div className="pa-logos-grid">
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://tcs.com&size=128" alt="TCS" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128" alt="Infosys" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://wipro.com&size=128" alt="Wipro" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://accenture.com&size=128" alt="Accenture" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://capgemini.com&size=128" alt="Capgemini" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ibm.com&size=128" alt="IBM" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://cognizant.com&size=128" alt="Cognizant" className="pa-logo-img" /></div>
              <div className="pa-logo-box"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://techmahindra.com&size=128" alt="Tech Mahindra" className="pa-logo-img" /></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PlacementAssistance;
