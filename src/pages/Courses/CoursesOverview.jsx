import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CoursesOverview.css';

const CoursesOverview = () => {
  const allCourses = [
    {
      id: 1,
      name: "Java Full Stack Development",
      category: "Web Development",
      description: "Build scalable enterprise web applications using core Java, Spring Boot, Microservices, and React JS.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "/java-full-stack"
    },
    {
      id: 2,
      name: "Python Full Stack Development",
      category: "Web Development",
      description: "Create robust web apps end-to-end with Python, Django/Flask, and modern frontend technologies.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
      link: "/python-full-stack"
    },
    {
      id: 3,
      name: "Data Analytics & Power BI",
      category: "Data & Analytics",
      description: "Master SQL, Advanced Excel, Power BI, and Python to extract insights and become a professional Data Analyst.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/data-analytics"
    },
    {
      id: 4,
      name: "Software Testing (QA Automation)",
      category: "Quality Assurance",
      description: "Master manual testing and write robust automation scripts using Selenium, Java, and TestNG.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      link: "/software-testing"
    },
    {
      id: 5,
      name: "Data Science & Machine Learning",
      category: "Data & Analytics",
      description: "Master predictive modeling, statistical analysis, and machine learning algorithms using Python.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/data-science"
    },
    {
      id: 6,
      name: "Generative AI & Prompt Engineering",
      category: "Artificial Intelligence",
      description: "Learn to build AI-powered applications using LLMs, LangChain, and advanced Prompt Engineering.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
      link: "/generative-ai"
    }
  ];

  return (
    <>
      <PageHero 
        title="Our Courses" 
        description="Explore our industry-aligned training programs designed to transform beginners into highly paid IT professionals."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "All Courses" }
        ]}
      />
      
      <div className="co-page-wrapper">
        <div className="co-container">
          
          <div className="co-header" data-aos="fade-up">
            <h2>Accelerate Your Tech Career</h2>
            <p>
              Choose from our most popular, high-demand courses. All our programs include real-time projects, interview preparation, and 100% placement assistance.
            </p>
          </div>

          <div className="co-grid">
            {allCourses.map((course, index) => (
              <div className="co-card" key={course.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="co-img-wrap">
                  <img src={course.image} alt={course.name} loading="lazy" />
                  <div className="co-category">{course.category}</div>
                </div>
                
                <div className="co-content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  
                  <Link to={course.link} className="co-btn">
                    View Course Details <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA SECTION ── */}
          <div className="co-cta-section" data-aos="fade-up">
            <div className="co-cta-container">
              <h2>Ready to Launch Your Career?</h2>
              <p>
                Don't wait. Join thousands of successful alumni who started their journey with Codewizen. Get access to premium training, real-time projects, and 100% placement support.
              </p>
              <div className="co-cta-btns">
                <Link to="/contact-us" className="co-btn-primary">Enroll Now</Link>
                <Link to="/contact-us" className="co-btn-outline">Talk to an Expert</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CoursesOverview;
