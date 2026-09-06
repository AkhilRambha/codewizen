import React from "react";
import "./Placements.css";
import useFirebaseData from '../../../hooks/useFirebaseData';

function Placements() {
  const [placements] = useFirebaseData('codewizen_placements', [
    { id: 1, name: "Mahesh Babu", course: "Java Full Stack Development", company: "TCS", ctc: "8 LPA", image: "https://ui-avatars.com/api/?name=Mahesh+Babu&background=random" },
    { id: 2, name: "Samantha Ruth", course: "Data Science & ML", company: "Deloitte", ctc: "12 LPA", image: "https://ui-avatars.com/api/?name=Samantha+Ruth&background=random" },
    { id: 3, name: "Ram Charan", course: "Python Full Stack", company: "Infosys", ctc: "7.5 LPA", image: "https://ui-avatars.com/api/?name=Ram+Charan&background=random" },
    { id: 4, name: "Sai Pallavi", course: "React JS & Frontend", company: "Accenture", ctc: "9 LPA", image: "https://ui-avatars.com/api/?name=Sai+Pallavi&background=random" },
    { id: 5, name: "Naveen Polishetty", course: "Generative AI", company: "Amazon", ctc: "18 LPA", image: "https://ui-avatars.com/api/?name=Naveen+Polishetty&background=random" },
    { id: 6, name: "Anushka Shetty", course: "DevOps & Cloud", company: "Wipro", ctc: "10 LPA", image: "https://ui-avatars.com/api/?name=Anushka+Shetty&background=random" }
  ]);

  return (
    <section className="placements-section" id="placements">
      <div className="placements-container">
        <div className="section-header center-header" data-aos="fade-up">
          <span className="section-eyebrow">SUCCESS STORIES</span>
          <h2>Where Our Alumni Are Working</h2>
          <p className="section-subtitle">
            Join hundreds of successful graduates placed in top global tech companies.
          </p>
        </div>

        <div className="placements-marquee-container">
          <div className="placements-marquee">
            {/* Double the list to create a seamless infinite loop */}
            {[...placements, ...placements].map((student, index) => (
              <div
                className="premium-placement-card"
                key={index}
              >
                <div className="premium-card-bg"></div>
                <div className="premium-card-content">
                  <div className="premium-header">
                    <div className="avatar-ring">
                      <img src={student.image} alt={student.name} className="premium-avatar" />
                    </div>
                    <div className="premium-info">
                      <h3>{student.name}</h3>
                      <span className="premium-course">{student.course}</span>
                    </div>
                  </div>
                  <div className="premium-footer">
                    <div className="company-badge">
                      <span className="badge-icon">🏢</span>
                      <span className="badge-text">{student.company}</span>
                    </div>
                    <div className="ctc-badge">
                      <span className="badge-icon">💰</span>
                      <span className="badge-text">{student.ctc}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placements;