import React, { useState } from 'react';
import './ContactUs.css';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaBook,
  FaChalkboardTeacher
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mode: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Target Number
    const waNumber = "918464025086"; // User's actual whatsapp number from footer

    // Construct Message
    const text = `Hello Codewizen! 
I would like to inquire about a course.

*Name:* ${formData.name}
*Phone/Email:* ${formData.phone}
*Mode of Training:* ${formData.mode}
*Course Interested In:* ${formData.course}`;

    // Encode and redirect
    const uri = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(uri, '_blank');
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-bg-dots"></div>
        <div className="contact-hero-container">
          <div className="contact-hero-left" data-aos="fade-right">
            <span className="contact-hero-label">Contact Us</span>
            <h1>Get in touch with <br /><span className="contact-orange">Codewizen</span></h1>
            <p>
              Have questions about our courses, batches, or corporate training?
              Reach out to us and our career experts will guide you to the right path.
            </p>
          </div>

          <div className="contact-hero-right" data-aos="fade-left">
            <div className="contact-hero-icons">
              <div className="ch-icon ch-icon-mail"><FaEnvelope /></div>
              <div className="ch-icon ch-icon-phone"><FaPhoneAlt /></div>
              <div className="ch-icon ch-icon-location"><FaMapMarkerAlt /></div>
            </div>
          </div>
        </div>

        <div className="contact-hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="contact-main">
        <div className="contact-main-container">

          {/* COLUMN 1: CONTACT INFO */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <h2>Contact Information</h2>

            <div className="contact-info-list">
              <div className="ci-item">
                <div className="ci-icon ci-blue"><FaPhoneAlt /></div>
                <div>
                  <div className="ci-label">Call Us</div>
                  <div className="ci-value">+91 7993819211</div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon ci-green"><FaWhatsapp /></div>
                <div>
                  <div className="ci-label">WhatsApp</div>
                  <div className="ci-value">+91 79938 19211</div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon ci-orange"><FaEnvelope /></div>
                <div>
                  <div className="ci-label">Email Address</div>
                  <div className="ci-value">codewizen.academy@gmail.com</div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon ci-purple"><FaMapMarkerAlt /></div>
                <div>
                  <div className="ci-label">Location</div>
                  <div className="ci-value">
                    3rd floor, Besides JC Brothers,<br />
                    beside KPHB metro station,<br />
                    Kukatpally Housing Board Colony,<br />
                    Bhagya Nagar Colony, Hyderabad
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: WHATSAPP FORM */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
            <h2>Quick Inquiry</h2>
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>

              <div className="form-field">
                <div className="form-field-icon"><FaUser /></div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <div className="form-field-icon"><FaPhoneAlt /></div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number or Email"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <div className="form-field-icon"><FaChalkboardTeacher /></div>
                <select
                  name="mode"
                  required
                  value={formData.mode}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Mode of Training</option>
                  <option value="Classroom Training">Classroom Training</option>
                  <option value="Online Training">Online Training</option>
                  <option value="Corporate Training">Corporate Training</option>
                </select>
              </div>

              <div className="form-field">
                <div className="form-field-icon"><FaBook /></div>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Course</option>
                  <option value="Java Full Stack">Java Full Stack</option>
                  <option value="Python Full Stack">Python Full Stack</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="React JS">React JS</option>
                  <option value="Other">Other (Specify on WhatsApp)</option>
                </select>
              </div>

              <button type="submit" className="form-submit-btn">
                Send via WhatsApp <FaWhatsapp style={{ marginLeft: '8px', fontSize: '18px', verticalAlign: 'middle' }} />
              </button>
            </form>
          </div>

          {/* COLUMN 3: MAP */}
          <div className="contact-card contact-map-card" data-aos="fade-up" data-aos-delay="300">
            <h2>Find Us Here</h2>

            <div className="contact-map-embed">
              <iframe
                src="https://maps.google.com/maps?q=KPHB%20metro%20station,%20Kukatpally,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Codewizen Location Map"
              ></iframe>
            </div>

            <div className="contact-map-address">
              <div className="map-pin"><FaMapMarkerAlt color="#e87500" /></div>
              <div>
                <strong>Codewizen Headquarters</strong>
                <p>3rd floor, Besides JC Brothers,<br />beside KPHB metro station,<br />Kukatpally Housing Board Colony,<br />Bhagya Nagar Colony, Hyderabad</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA BAR ── */}
      <section className="contact-cta-bar">
        <div className="contact-cta-inner" data-aos="zoom-in">
          <div className="contact-cta-icon">
            <FaWhatsapp color="#ffffff" />
          </div>
          <div className="contact-cta-text">
            <strong>Need immediate assistance?</strong>
            <span>Our support team is available 24/7 on WhatsApp.</span>
          </div>
          <div className="contact-cta-btns">
            <a href="https://wa.me/918464025086" target="_blank" rel="noreferrer" className="cta-bar-btn cta-bar-primary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactUs;
