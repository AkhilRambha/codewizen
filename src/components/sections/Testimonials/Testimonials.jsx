import React from "react";
import "./Testimonials.css";
import useLocalStorage from "../../../hooks/useLocalStorage";

function Testimonials() {
  const [reviews] = useLocalStorage('codewizen_reviews', [
    { id: 1, name: "Arjun Reddy", course: "Java Full Stack", text: "The training here is exceptional.", rating: 5, image: "/images/rahul.jpg" },
    { id: 2, name: "Sneha Patil", course: "Data Science", text: "Got placed in a top MNC thanks to Codewizen.", rating: 5, image: "/images/sneha.png" }
  ]);

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

        {reviews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Check back soon for student reviews!</div>
        ) : (
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-stars">
                    {stars(review.rating)}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  
                  <div className="review-author">
                    <img src={review.image || '/images/rahul.jpg'} alt={review.name} />
                    <div className="author-info">
                      <h4>{review.name}</h4>
                      <span>{review.course}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Testimonials;
