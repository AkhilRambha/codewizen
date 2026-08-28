import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Ravi Teja",
    role: "Java Full Stack Developer",
    text: "The training was exceptionally practical. The mock interviews helped me land my dream job at TCS. Highly recommended!",
    rating: 5,
    image: "/images/rahul.jpg"
  },
  {
    name: "Pooja Sharma",
    role: "Data Analyst",
    text: "Best institute in Hyderabad for Data Science! The real-time projects gave me the confidence to crack my interview at Deloitte.",
    rating: 5,
    image: "/images/priya.png"
  },
  {
    name: "Kiran Kumar",
    role: "Cloud Engineer",
    text: "The AWS and DevOps course is perfectly structured. The trainers are highly experienced and always ready to clear doubts.",
    rating: 5,
    image: "/images/amit.png"
  },
  {
    name: "Neha Reddy",
    role: "QA Automation Engineer",
    text: "I got placed before my course even ended! The placement team is incredibly supportive and proactive.",
    rating: 5,
    image: "/images/anjali.png"
  },
  {
    name: "Suresh Babu",
    role: "Python Developer",
    text: "Excellent lab facilities and 24/7 access to study materials on the LMS. A massive boost to my career.",
    rating: 4,
    image: "/images/vikram.png"
  }
];

function Testimonials() {
  const stars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">
        
        <div className="section-header center-header" data-aos="fade-up">
          <span className="section-eyebrow">STUDENT REVIEWS</span>
          <h2>Don't just take our word for it</h2>
          <p className="section-subtitle">Hear what our successful alumni have to say about their journey.</p>
        </div>

        <div className="marquee-wrapper">
          {/* Double the array for seamless infinite scroll */}
          <div className="marquee-track">
            {[...reviews, ...reviews].map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-stars">
                  {stars(review.rating)}
                </div>
                <p className="review-text">"{review.text}"</p>
                
                <div className="review-author">
                  <img src={review.image} alt={review.name} />
                  <div className="author-info">
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
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

export default Testimonials;
