import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { FaGraduationCap, FaMapMarkerAlt, FaMoneyBillWave, FaStar, FaQuoteLeft, FaGoogle, FaLinkedin } from 'react-icons/fa';
import useFirebaseData from '../../hooks/useFirebaseData';

// Reusing existing styles for the components
import '../Placements/PlacedStudents.css';
import '../Reviews/Reviews.css';

import { defaultReviews, defaultPlacements } from '../../data/defaultData';

const SuccessStories = () => {
  // Sync with Admin Panel
  const [students] = useFirebaseData('codewizen_placements', defaultPlacements);
  const [reviews] = useFirebaseData('codewizen_reviews', defaultReviews);

  return (
    <>
      <PageHero 
        title="Success Stories" 
        description="Discover the journeys of our alumni who have transformed their careers and read verified reviews from our student community."
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Success Stories" }
        ]}
      />
      
      <div className="ps-page-wrapper" style={{ paddingBottom: '0' }}>
        {/* WALL OF FAME / ALUMNI SECTION */}
        <section className="ps-grid-section" style={{ paddingTop: '60px' }}>
          <div className="ps-container">
            <div className="section-header center-header" data-aos="fade-up" style={{ marginBottom: '50px', textAlign: 'center' }}>
              <span className="section-eyebrow" style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', marginBottom: '15px' }}>ALUMNI</span>
              <h2 className="success-stories-alumni-h2" style={{ fontSize: '36px', color: '#112255', marginBottom: '15px' }}>Our Recent Achievers</h2>
              <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Meet the brilliant minds who transitioned into top IT companies globally with Codewizen.</p>
            </div>

            {students.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>No alumni records found.</div>
            ) : (
              <div className="ps-grid">
                {students.map((student, index) => (
                  <div 
                    key={student.id} 
                    className="ps-card" 
                    data-aos="fade-up" 
                    data-aos-delay={(index % 4) * 100}
                  >
                    <div className="ps-avatar-container">
                      <div className="ps-avatar">
                        <img 
                          src={student.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`} 
                          alt={student.name} 
                          loading="lazy" 
                        />
                      </div>
                      <div className="ps-company-badge">{student.company}</div>
                    </div>
                    
                    <div className="ps-content">
                      <h3 className="ps-name">{student.name}</h3>
                      <p className="ps-role">{student.company} Placement</p>
                      
                      <div className="ps-details-list">
                        <div className="ps-detail-item">
                          <FaMoneyBillWave className="ps-d-icon orange" />
                          <span>{student.ctc}</span>
                        </div>
                        <div className="ps-detail-item">
                          <FaMapMarkerAlt className="ps-d-icon blue" />
                          <span>India</span>
                        </div>
                      </div>
                      
                      <div className="ps-course">
                        <FaGraduationCap /> {student.course}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="reviews-page-wrapper" style={{ paddingTop: '20px', backgroundColor: '#f8fafc' }}>
        <div className="reviews-container">
          {/* REVIEWS SECTION */}
          <section className="reviews-grid-section" style={{ paddingTop: '60px' }}>
            <div className="section-header center-header" data-aos="fade-up" style={{ marginBottom: '50px', textAlign: 'center' }}>
              <span className="section-eyebrow" style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', marginBottom: '15px' }}>STUDENT VOICES</span>
              <h2 className="success-stories-h2" style={{ fontSize: '36px', color: '#112255', marginBottom: '15px' }}>What Our Students Say</h2>
              <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Don't just take our word for it. Read verified reviews from our student community.</p>
            </div>

            {reviews.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>No student reviews found.</div>
            ) : (
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
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
