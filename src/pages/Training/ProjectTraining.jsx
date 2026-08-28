import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';

const ProjectTraining = () => {
  return (
    <>
      <PageHero 
        title="Project Training" 
        description="Discover comprehensive details and insights about our project training program."
        breadcrumbs={[
          { label: "Training", link: "/training" },
          { label: "Project Training" }
        ]}
      />
      
      <section className="generic-page-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div data-aos="fade-up">
          <h2 style={{ color: '#112255', marginBottom: '20px', fontSize: '32px' }}>Overview of Project Training</h2>
          <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
            Welcome to our Project Training page. We are committed to providing top-tier education and practical training. 
            Our programs are designed by industry experts to help you bridge the gap between academic learning and real-world application. 
            Here, you will find all the resources and guidance you need to advance your career.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #e87500' }}>
              <h3 style={{ color: '#112255', marginBottom: '15px' }}>Key Benefits</h3>
              <ul style={{ color: '#475569', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Industry-aligned curriculum</li>
                <li>Hands-on practical sessions</li>
                <li>Expert mentorship</li>
                <li>Dedicated career support</li>
              </ul>
            </div>
            
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #112255' }}>
              <h3 style={{ color: '#112255', marginBottom: '15px' }}>Next Steps</h3>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '20px' }}>
                Ready to take the next step in your career journey? Enroll in our program today or book a free demo session to learn more.
              </p>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link to="/enroll-now" className="btn-primary">Enroll Now</Link>
                <Link to="/contact-us" className="btn-outline">Contact Us</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectTraining;
