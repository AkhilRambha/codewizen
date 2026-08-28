import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PlacedStudents.css';

const PlacedStudents = () => {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Development Engineer",
      company: "AMAZON",
      package: "18 LPA",
      course: "Java Full Stack Development",
      image: "/images/rahul.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Data Analyst",
      company: "DELOITTE",
      package: "8.5 LPA",
      course: "Data Analytics & Power BI",
      image: "/images/priya.png"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Backend Developer",
      company: "TCS",
      package: "7 LPA",
      course: "Python Full Stack Development",
      image: "/images/amit.png"
    },
    {
      id: 4,
      name: "Neha Singh",
      role: "QA Automation Engineer",
      company: "ACCENTURE",
      package: "9 LPA",
      course: "Software Testing",
      image: "/images/sneha.png"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      role: "Machine Learning Engineer",
      company: "COGNIZANT",
      package: "12 LPA",
      course: "Data Science & ML",
      image: "/images/vikram.png"
    },
    {
      id: 6,
      name: "Anjali Gupta",
      role: "Frontend Developer",
      company: "WIPRO",
      package: "6.5 LPA",
      course: "React JS Frontend",
      image: "/images/anjali.png"
    },
    {
      id: 7,
      name: "Rohan Desai",
      role: "Full Stack Engineer",
      company: "CAPGEMINI",
      package: "10 LPA",
      course: "Java Full Stack Development",
      image: "/images/rahul.jpg"
    },
    {
      id: 8,
      name: "Sneha Rao",
      role: "AI Engineer",
      company: "IBM",
      package: "15 LPA",
      course: "Generative AI",
      image: "/images/sneha.png"
    }
  ];

  return (
    <>
      <PageHero 
        title="Our Achievers" 
        description="Meet our proud alumni who have successfully transitioned into top IT companies globally."
        breadcrumbs={[
          { label: "Placements", link: "/placement-assistance" },
          { label: "Placed Students" }
        ]}
      />
      
      <div className="ps-page-wrapper">
        <div className="ps-container">
          
          <div className="ps-header" data-aos="fade-up">
            <h2>Success Stories</h2>
            <p>We measure our success by the success of our students. Explore the profiles of our latest batch of placed candidates.</p>
          </div>

          <div className="ps-grid">
            {students.map((student, index) => (
              <div 
                key={student.id} 
                className="ps-card" 
                data-aos="fade-up" 
                data-aos-delay={(index % 4) * 100}
              >
                <div className="ps-avatar">
                  <img src={student.image} alt={student.name} loading="lazy" />
                </div>
                
                <div className="ps-content">
                  <div className="ps-name">{student.name}</div>
                  <div className="ps-role">{student.role}</div>
                  
                  <div className="ps-tags">
                    <div className="ps-company">{student.company}</div>
                    <div className="ps-package">{student.package}</div>
                  </div>
                  
                  <div className="ps-course">
                    <FaGraduationCap /> {student.course}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA SECTION ── */}
          <div className="ps-cta-section" data-aos="fade-up">
            <div className="ps-cta-container">
              <h2>Ready to Launch Your Career?</h2>
              <p>
                Don't wait. Join thousands of successful alumni who started their journey with Codewizen. Get access to premium training, real-time projects, and 100% placement support.
              </p>
              <div className="ps-cta-btns">
                <Link to="/contact-us" className="ps-btn-primary">Enroll Now</Link>
                <Link to="/contact-us" className="ps-btn-outline">Talk to an Expert</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PlacedStudents;
