import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const courseCategories = [
  {
    name: "Java Full Stack Development",
    description: "Core & Advanced Java, Spring Boot, Microservices, React JS, Docker, and AWS Cloud.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    link: "/java-full-stack",
    badge: "Enterprise Core"
  },
  {
    name: "Python Full Stack Development",
    description: "Core Python, Django, FastAPI, React JS, PostgreSQL, Redis, and Cloud Deployment.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    link: "/python-full-stack",
    badge: "High Demand"
  },
  {
    name: "Generative AI & LLMs",
    description: "Prompt Engineering, LangChain, Vector Databases (Pinecone), RAG Pipelines, and OpenAI APIs.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
    link: "/generative-ai",
    badge: "Next-Gen AI"
  },
  {
    name: "Data Science & Machine Learning",
    description: "Data Analytics, Pandas, Scikit-Learn, Deep Learning, MLflow, and Production Model Deployment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/data-science",
    badge: "Analytics & ML"
  },
  {
    name: "Custom Course (Tailored Track)",
    description: "Design your personalized tech stack. Choose your custom modules, project architecture, and 1-on-1 mentor guidance tailored to your career goal.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    link: "/contact-us",
    badge: "Personalized Track"
  }
];

function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="courses-container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">OUR CURRICULUM</span>
          <h2>Explore 100% Real-Time Project Programs</h2>
          <p style={{ color: '#64748b', fontSize: '16px', marginTop: '10px' }}>
            Choose from our flagship industry cohorts or craft your custom tailored learning track.
          </p>
        </div>

        <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {courseCategories.map((course, index) => (
            <div className="course-card" key={index} data-aos="fade-up" data-aos-delay={(index % 5) * 80}>
              <div className="course-image">
                <img src={course.image} alt={course.name} />
              </div>
              <div className="course-content">
                <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: '800', color: '#ea580c', background: '#fff3ed', padding: '3px 10px', borderRadius: '15px', marginBottom: '8px', alignSelf: 'flex-start' }}>
                  {course.badge}
                </div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <Link to={course.link} className="course-btn">
                  {course.name.includes("Custom") ? "Customize Curriculum →" : "Explore Course →"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;