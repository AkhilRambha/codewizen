import React from "react";
import "./Placements.css";

const recentPlacements = [
  {
    name: "Rahul Sharma",
    course: "Java Full Stack",
    company: "TCS",
    role: "System Engineer",
    image: "/images/rahul.jpg"
  },
  {
    name: "Priya Patel",
    course: "Data Analytics",
    company: "Deloitte",
    role: "Data Analyst",
    image: "/images/priyaa.png"
  },
  {
    name: "Amit Kumar",
    course: "Generative AI",
    company: "Infosys",
    role: "AI Engineer",
    image: "/images/amit.png"
  },
  {
    name: "Sneha Reddy",
    course: "Python Full Stack",
    company: "Wipro",
    role: "Software Developer",
    image: "/images/sneha.png"
  },
  {
    name: "Vikram Singh",
    course: "Multi DevOps",
    company: "Amazon",
    role: "Cloud Engineer",
    image: "/images/vikram.png"
  },
  {
    name: "Anjali Desai",
    course: "Software Testing",
    company: "Cognizant",
    role: "QA Automation Engineer",
    image: "/images/anjali.png"
  }
];

function Placements() {
  return (
    <section className="placements-section" id="placements">
      <div className="placements-container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">SUCCESS STORIES</span>
          <h2>Recent Placements</h2>
          <p className="section-subtitle" style={{ textAlign: "center", color: "#475569", marginTop: "10px" }}>
            See where our alumni are working and growing their careers.
          </p>
        </div>

        <div className="placements-grid">
          {recentPlacements.map((student, index) => (
            <div
              className="placement-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="placement-header">
                <img src={student.image} alt={student.name} className="placement-avatar" />
                <div className="placement-info">
                  <h3>{student.name}</h3>
                  <span className="placement-course">{student.course}</span>
                </div>
              </div>
              <div className="placement-details">
                <p>Placed at <strong>{student.company}</strong></p>
                <p className="placement-role">{student.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placements;