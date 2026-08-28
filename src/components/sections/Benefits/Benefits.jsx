import React from "react";
import "./Benefits.css";

const zigZagBenefits = [
  {
    title: "Dedicated & Personalized Training",
    description: "We don't believe in a one-size-fits-all approach. Our trainers focus on individual growth, identifying your strengths and weaknesses to provide a tailored learning path that ensures you master the concepts at your own pace.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    badge: "Personalized"
  },
  {
    title: "Industry-Oriented Curriculum",
    description: "Our curriculum isn't just theoretical. It is constantly updated in collaboration with industry experts to ensure you are learning exactly what top tech companies are demanding right now.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    badge: "Relevant"
  },
  {
    title: "100% Placement Support",
    description: "From resume building and LinkedIn profile optimization to AI-driven mock interviews and direct referrals to our hiring partners, we stand by you until you secure your dream job.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    badge: "Career Focused"
  }
];

function Benefits() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">CODEWIZEN ADVANTAGE</span>
          <h2>Why students choose us</h2>
          <p className="section-subtitle">Discover the unique advantages that set our training apart from the rest.</p>
        </div>

        <div className="benefits-zigzag-wrapper">
          {zigZagBenefits.map((benefit, index) => {
            const isEven = index % 2 === 0;
            return (
              <div className={`zigzag-row ${isEven ? 'row-normal' : 'row-reverse'}`} key={index}>
                
                <div className="zigzag-image" data-aos={isEven ? "fade-right" : "fade-left"} data-aos-duration="1000">
                  <img src={benefit.image} alt={benefit.title} />
                  <div className="zigzag-badge">{benefit.badge}</div>
                </div>
                
                <div className="zigzag-content" data-aos={isEven ? "fade-left" : "fade-right"} data-aos-duration="1000">
                  <div className="zigzag-number">0{index + 1}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  
                  <ul className="zigzag-list">
                    <li><span className="check-icon">✔</span> Hands-on assignments</li>
                    <li><span className="check-icon">✔</span> Expert mentorship</li>
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Benefits;
