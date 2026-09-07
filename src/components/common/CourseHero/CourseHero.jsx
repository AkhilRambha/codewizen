import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CourseHero.css';

const CourseHero = ({ title, subtitleList, description, breadcrumbs }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waNumber = "919676400893";
    const text = `Hello Codewizen!\nI want to start my journey.\n\n*Course:* ${title}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <section className="course-hero-section">
      <div className="course-hero-container">
        
        {/* Left Side: Content */}
        <div className="course-hero-content" data-aos="fade-right">
          <nav className="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              {breadcrumbs && breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li className="separator">»</li>
                  <li>
                    {crumb.link ? (
                      <Link to={crumb.link}>{crumb.label}</Link>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </nav>

          <h1 className="course-hero-title">{title}</h1>
          
          {subtitleList && subtitleList.length > 0 && (
            <div className="course-hero-subtitles">
              {subtitleList.map((item, index) => (
                <span key={index}>
                  {item}
                  {index < subtitleList.length - 1 && <span className="subtitle-separator">-</span>}
                </span>
              ))}
            </div>
          )}

          <p className="course-hero-desc">{description}</p>
          
          <button className="course-hero-expert-btn" onClick={() => window.location.href='tel:+919676400893'}>
            Talk To Expert <FaArrowRight />
          </button>
        </div>

        {/* Right Side: Lead Generation Form */}
        <div className="course-hero-form-wrapper" data-aos="fade-left">
          <div className="course-hero-form-card">
            <h3 className="ch-form-title">Start Your Journey Today</h3>
            <p className="ch-form-subtitle">Fill in your details and we'll get back to you</p>
            
            <form className="ch-form" onSubmit={handleSubmit}>
              <div className="ch-form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your full name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="ch-form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email address" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="ch-form-group">
                <label>Telephone</label>
                <div className="ch-phone-input">
                  <span className="ch-phone-prefix">🇮🇳</span>
                  <input type="tel" name="phone" placeholder="Enter your mobile number" required value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="ch-form-group">
                <label>Message (Optional)</label>
                <textarea name="message" rows="2" placeholder="Any specific questions or requirements?" value={formData.message} onChange={handleChange}></textarea>
              </div>
              
              <button type="submit" className="ch-submit-btn">Get Started Now</button>
            </form>
            
            <p className="ch-form-footer">We respect your privacy. Your information is 100% secure.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CourseHero;
