import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import useFirebaseData from '../../../hooks/useFirebaseData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { defaultReviews } from '../../../data/defaultData';

function Testimonials() {
  const [reviews] = useFirebaseData('codewizen_reviews', defaultReviews);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, reviews.length - cardsToShow);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [reviews.length, cardsToShow]);

  const stars = (count) => {
    return "⭐".repeat(count);
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, reviews.length - cardsToShow);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back to start
    }
  };

  const handlePrev = () => {
    const maxIndex = Math.max(0, reviews.length - cardsToShow);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // loop to end
    }
  };

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">
        
        <div className="section-header center-header" data-aos="fade-up">
          <span className="section-eyebrow">STUDENT REVIEWS</span>
          <h2 style={{ color: '#112255' }}>Don't just take our word for it</h2>
          <p className="section-subtitle">Hear what our successful alumni have to say about their journey.</p>
        </div>

        {reviews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Check back soon for student reviews!</div>
        ) : (
          <div className="carousel-wrapper">
            <button className="carousel-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous review">
              <FaChevronLeft />
            </button>
            
            <div className="carousel-track-container">
              <div 
                className="carousel-track" 
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {reviews.map((review, index) => (
                  <div 
                    className="review-card-wrapper" 
                    key={review.id || index}
                    style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                  >
                    <div className="review-card">
                      <div className="review-stars">
                        {stars(review.rating || 5)}
                      </div>
                      <p className="review-text">"{review.text}"</p>
                      
                      <div className="review-author">
                        <img src={review.avatar || review.image || '/images/rahul.jpg'} alt={review.name} />
                        <div className="author-info">
                          <h4>{review.name}</h4>
                          <span>{review.course}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-nav-btn next-btn" onClick={handleNext} aria-label="Next review">
              <FaChevronRight />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Testimonials;
