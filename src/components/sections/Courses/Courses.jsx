import React, { useState } from "react";
import "./Courses.css";

const courseCategories = [
  {
    name: "Artificial Intelligence & Machine Learning",
    description: "Deep Learning, NLP, and Computer Vision.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Data Science & Big Data Analytics",
    description: "Python, R, Hadoop, Spark, and Tableau.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Full-Stack Web Development (MERN/MEAN)",
    description: "React, Node.js, Express, MongoDB, and Angular.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cloud Computing (AWS / Azure)",
    description: "Cloud architecture, deployment, and security.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "DevOps & Automation",
    description: "Docker, Kubernetes, Jenkins, and CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cybersecurity & Ethical Hacking",
    description: "Network security, penetration testing, and cryptography.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Python Programming",
    description: "Core Python, Django, Flask, and automation scripts.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Java Programming",
    description: "Core Java, Spring Boot, Hibernate, and Microservices.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Software Testing & Automation",
    description: "Selenium, Appium, JUnit, and TestNG.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "UI/UX Design",
    description: "Figma, Adobe XD, user research, and wireframing.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  }
];

function Courses() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <section className="courses-section" id="courses">
      <div className="courses-container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">OUR COURSES</span>
          <h2>Explore our technology programs</h2>
        </div>

        <div className="courses-grid">
          {courseCategories.slice(0, visibleCount).map((course, index) => (
            <div className="course-card" key={index} data-aos="fade-up" data-aos-delay={(index % 4) * 100}>
              <div className="course-image">
                <img src={course.image} alt={course.name} />
              </div>
              <div className="course-content">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <a href={`#course-${index}`} className="course-btn">Explore Course</a>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < courseCategories.length && (
          <div className="load-more-container" data-aos="fade-up">
            <button className="btn-primary" onClick={handleLoadMore}>
              Load More Programs
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Courses;