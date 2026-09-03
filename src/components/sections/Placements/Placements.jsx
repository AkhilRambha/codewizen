import React from "react";
import "./Placements.css";
import useFirebaseData from '../../../hooks/useFirebaseData';

function Placements() {
  const [placements] = useFirebaseData('codewizen_placements', [
    {
      id: 1,
      name: "Rahul Verma",
      course: "Java Full Stack Development",
      company: "TCS",
      ctc: "8 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      course: "Data Science & AI",
      company: "Deloitte",
      ctc: "12 LPA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Karthik Kumar",
      course: "Python Full Stack",
      company: "Infosys",
      ctc: "7.5 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ]);
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
          {placements.map((student, index) => (
            <div
              className="placement-card"
              key={student.id}
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
                <p className="placement-role">{student.ctc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placements;