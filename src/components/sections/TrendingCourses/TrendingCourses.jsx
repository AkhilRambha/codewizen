import React, { useRef } from "react";
import "./TrendingCourses.css";
import { Link } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

function TrendingCourses() {
  const [courses] = useLocalStorage('codewizen_courses', [
    {
      id: 1,
      name: "Generative AI",
      category: "Artificial Intelligence",
      description: "Master LLMs, prompt engineering, and building AI applications with modern frameworks.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
      link: "/courses"
    },
    {
      id: 2,
      name: "Data Science",
      category: "Data & Analytics",
      description: "Learn Python, statistics, and machine learning to become a professional Data Scientist.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/data-analytics"
    },
    {
      id: 3,
      name: "Java Full Stack",
      category: "Web Development",
      description: "Build scalable enterprise web applications using core Java, Spring Boot, and React.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "/java-full-stack"
    }
  ]);

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="trending-slider-section" id="trending">
      <div className="trending-slider-container">
        
        <div className="slider-header-wrapper" data-aos="fade-up">
          <div className="section-header">
            <span className="section-eyebrow">TRENDING COURSES</span>
            <h2>Learn the skills that matter</h2>
          </div>
          
          <div className="slider-controls">
            <button className="slider-arrow" onClick={slideLeft} aria-label="Previous Course">←</button>
            <button className="slider-arrow" onClick={slideRight} aria-label="Next Course">→</button>
          </div>
        </div>

        <div className="courses-slider" ref={sliderRef} data-aos="fade-up" data-aos-delay="200">
          {courses.map((course, index) => (
            <div className="slider-course-card" key={course.id || index}>
              <div className="slider-course-img">
                <img src={course.image} alt={course.name} />
                <div className="slider-course-category">{course.category}</div>
              </div>
              <div className="slider-course-content">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <Link to={course.link} className="slider-course-link">View Course <span>→</span></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="trending-cta" data-aos="fade-up">
          <Link to="/courses" className="btn-outline">View All Courses</Link>
        </div>

      </div>
    </section>
  );
}

export default TrendingCourses;
