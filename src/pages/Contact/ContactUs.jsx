import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaChalkboardTeacher, FaPaperPlane } from 'react-icons/fa';
import useFirebaseData from '../../hooks/useFirebaseData';
import './ContactUs.css';

const ContactUs = () => {
  const [courses] = useFirebaseData('codewizen_courses', []);
  const [contactInfo] = useFirebaseData('codewizen_contact_info', {
    email: 'info@codewizen.com',
    phone: '+91 7993819211',
    whatsapp: '+91 7993819211',
    address: '123 Tech Park, Madhapur, Hyderabad - 500081'
  });

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
    const waNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    
    const message = `Hello Codewizen, I have an enquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Mode of Training: ${formData.mode}
Interested Course: ${formData.course}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Let's Connect" 
        description="Whether you have a question about our courses, placements, or pricing, our team is ready to answer all your questions."
        breadcrumbs={[
          { label: "Contact Us" }
        ]}
      />
      
      <div className="contact-page-wrapper">
        
        {/* ── QUICK CONTACT CARDS ── */}
        <section className="contact-cards-section">
          <div className="contact-container">
            <div className="cc-grid">
              
              <div className="cc-card" data-aos="fade-up" data-aos-delay="0">
                <div className="cc-icon-wrapper"><FaPhoneAlt className="cc-icon" /></div>
                <h3>Call Us</h3>
                <p>Speak to our career counselors directly for instant guidance.</p>
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="cc-link">{contactInfo.phone}</a>
              </div>

              <div className="cc-card" data-aos="fade-up" data-aos-delay="100">
                <div className="cc-icon-wrapper"><FaEnvelope className="cc-icon" /></div>
                <h3>Email Us</h3>
                <p>Send us your queries and we'll get back to you within 24 hours.</p>
                <a href={`mailto:${contactInfo.email}`} className="cc-link">{contactInfo.email}</a>
              </div>

              <div className="cc-card" data-aos="fade-up" data-aos-delay="200">
                <div className="cc-icon-wrapper"><FaMapMarkerAlt className="cc-icon" /></div>
                <h3>Visit Us</h3>
                <p>Drop by our institute for a face-to-face counseling session.</p>
                <span className="cc-text">{contactInfo.address}</span>
              </div>

            </div>
          </div>
        </section>

        {/* ── SPLIT FORM SECTION ── */}
        <section className="contact-form-section">
          <div className="contact-container">
            <div className="cf-split">
              
              {/* Form Side */}
              <div className="cf-left" data-aos="fade-right">
                <div className="cf-header">
                  <h2>Got a Question?</h2>
                  <p>Fill out the form below and our admission team will contact you shortly.</p>
                </div>
                
                <form className="cf-form" onSubmit={handleWhatsAppSubmit}>
                  <div className="cf-form-row">
                    <div className="cf-field">
                      <div className="cf-field-icon"><FaUser /></div>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Full Name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cf-field">
                      <div className="cf-field-icon"><FaPhoneAlt /></div>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Mobile Number" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="cf-form-row">
                    <div className="cf-field">
                      <div className="cf-field-icon"><FaChalkboardTeacher /></div>
                      <select name="mode" required value={formData.mode} onChange={handleChange}>
                        <option value="" disabled>Select Training Mode</option>
                        <option value="Classroom Training">Classroom Training</option>
                        <option value="Online Training">Online Training (Live)</option>
                      </select>
                    </div>
                    <div className="cf-field">
                      <select name="course" required value={formData.course} onChange={handleChange} className="cf-select-no-icon">
                        <option value="" disabled>Select Course</option>
                        <option value="Java Full Stack">Java Full Stack</option>
                        <option value="Python Full Stack">Python Full Stack</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Software Testing">Software Testing</option>
                        <option value="Data Science & ML">Data Science & ML</option>
                        <option value="Generative AI">Generative AI</option>
                        <option value="React JS & Frontend">React JS & Frontend</option>
                        <option value="DevOps & Cloud">DevOps & Cloud</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="cf-submit-btn">
                    Send via WhatsApp <FaPaperPlane style={{marginLeft: '8px'}}/>
                  </button>
                  <p className="cf-note">* You will be redirected to WhatsApp to send this message securely.</p>
                </form>
              </div>

              {/* Image Side */}
              <div className="cf-right" data-aos="fade-left">
                <img src="/images/office2.jpg" alt="Student Counseling" className="cf-image" />
                <div className="cf-overlay-card">
                  <h4>Join 15,000+ Alumni</h4>
                  <p>Start your IT journey today with 100% placement support.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FULL WIDTH MAP ── */}
        <section className="contact-map-section" data-aos="fade-up">
          <div className="contact-map-header">
            <h2>Find Us on Google Maps</h2>
            <p>We are centrally located and easily accessible via public transport.</p>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Codewizen Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121808.52846983794!2d78.31015632306235!3d17.498305716886477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911a68102bd3%3A0x67c2957b98ec1438!2sKukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </div>
    </>
  );
};

export default ContactUs;
