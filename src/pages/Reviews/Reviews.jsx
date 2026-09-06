import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { FaStar, FaQuoteLeft, FaGoogle, FaLinkedin } from 'react-icons/fa';
import useFirebaseData from '../../hooks/useFirebaseData';
import './Reviews.css';

import { defaultReviews } from '../../data/defaultData';

const Reviews = () => {
  const [reviews] = useFirebaseData('codewizen_reviews', defaultReviews);

  return (
    <>
      <PageHero 
        title="Student Reviews" 
        description="Don't just take our word for it. Read what our alumni have to say about their learning experience and career transformation at Codewizen."
        breadcrumbs={[
          { label: "About Us", link: "/about-us" },
          { label: "Student Reviews" }
        ]}
      />
      
      <div className="reviews-page-wrapper">
        <div className="reviews-container">

          {/* STATS HIGHLIGHT */}
          <section className="reviews-stats" data-aos="fade-up">
            <div className="rs-box">
              <h2>4.9/5</h2>
              <div className="rs-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>Average Rating</p>
            </div>
            <div className="rs-box">
              <h2>1,200+</h2>
              <div className="rs-stars" style={{ color: 'transparent' }}>_</div>
              <p>Verified Reviews</p>
            </div>
            <div className="rs-box">
              <h2>15,000+</h2>
              <div className="rs-stars" style={{ color: 'transparent' }}>_</div>
              <p>Careers Transformed</p>
            </div>
          </section>

          {/* REVIEWS GRID */}
          <section className="reviews-grid-section">
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <div className="review-card" key={review.id} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <div className="review-card-header">
                    <img 
                      src={review.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random`} 
                      alt={review.name} 
                      className="review-avatar" 
                      loading="lazy" 
                    />
                    <div className="review-meta">
                      <h4>{review.name}</h4>
                      <span>{review.course}</span>
                    </div>
                    <div className="review-platform">
                      {review.platform === 'Google' ? <FaGoogle color="#ea4335" /> : <FaLinkedin color="#0077b5" />}
                    </div>
                  </div>
                  
                  <div className="review-stars">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  
                  <div className="review-body">
                    <FaQuoteLeft className="review-quote-icon" />
                    <p>"{review.text}"</p>
                  </div>
                  
                  <div className="review-footer">
                    <span>{review.date || 'Recent Student'}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="write-review-cta" data-aos="fade-up">
            <div className="wrc-inner">
              <h2>Are you a Codewizen Alumnus?</h2>
              <p>Share your success story and inspire thousands of students who are just starting their journey.</p>
              <button className="wrc-btn">Write a Review on Google</button>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Reviews;
