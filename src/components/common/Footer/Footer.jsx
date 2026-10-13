import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useFirebaseData from '../../../hooks/useFirebaseData';


const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "All Courses", path: "/#courses" },
  { name: "Upcoming Batches", path: "/upcoming-batches" },
  { name: "Real-Time Projects", path: "/project-training" },
  { name: "Registration", path: "/course-registration" },
  { name: "Workshops", path: "/workshop/spring-security" },
  { name: "Contact Us", path: "/contact-us" },
];


const popularCourses = [
  { name: "Java Full Stack", path: "/java-full-stack" },
  { name: "Python Full Stack", path: "/python-full-stack" },
  { name: "Generative AI & LLMs", path: "/generative-ai" },
  { name: "Data Science & ML", path: "/data-science" },
  { name: "Custom Course (Tailored Track)", path: "/contact-us" },
];


function Footer() {
  const [contactInfo] = useFirebaseData('codewizen_contact_info', {
    email: 'info@codewizen.com',
    phone: '+91 9676400893',
    whatsapp: '+91 9676400893',
    address: '123 Tech Park, Madhapur, Hyderabad - 500081'
  });

  return (
    <>
      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="footer">


        {/* Background Decorations */}

        <div className="footer-bg footer-bg-one"></div>

        <div className="footer-bg footer-bg-two"></div>

        <div className="footer-bg footer-bg-three"></div>

        <div className="footer-container">


          {/* =========================================
              FOOTER TOP
          ========================================= */}

          <div className="footer-top">


            {/* ABOUT / BRAND */}

            <motion.div
              className="footer-column footer-about"

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
              }}

              viewport={{
                once: true,
              }}
            >
              {/* Brand Logo */}
              <Link to="/" className="footer-brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '18px', textDecoration: 'none' }}>
                <img 
                  src="/images/logo.png" 
                  alt="Codewizen Logo" 
                  style={{ maxHeight: '42px', width: 'auto', filter: 'brightness(1.1) drop-shadow(0 4px 12px rgba(234, 88, 12, 0.3))' }} 
                />
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.5px' }}>
                  CODE<span style={{ color: '#ea580c' }}>WIZEN</span>
                </div>
              </Link>


              <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '18px' }}>
                Stop memorizing syntax — start engineering real systems. We bridge the gap between textbook coding and production environments through 100% interactive live training and real-time enterprise stacks.
              </p>

              {/* Inspiring Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0%, rgba(30, 58, 138, 0.25) 100%)',
                border: '1px solid rgba(234, 88, 12, 0.35)',
                borderRadius: '10px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '16px' }}>🚀</span>
                <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#fed7aa', letterSpacing: '0.3px', lineHeight: '1.4' }}>
                  "Your code is your resume. Build things that make an impact."
                </span>
              </div>

              <ul className="footer-highlights">
                <span>⚡ 100% Real-Time Projects & Architectures</span>
                <span>⚡ 100% Real-Time Industry Exposure</span>
                <span>⚡ Live Interactive Mentor Sprints</span>
                <span>⚡ Production Cloud Lab Deployments</span>
              </ul>

            </motion.div>



            {/* QUICK LINKS */}

            <motion.div
              className="footer-column"

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
              }}

              viewport={{
                once: true,
              }}
            >

              <h3>
                Quick Links
              </h3>


              <ul>

                {quickLinks.map((item, index) => (

                  <li key={index}>

                    <FaArrowRight />

                    <Link to={item.path}>
                      {item.name}
                    </Link>

                  </li>

                ))}

              </ul>

            </motion.div>



            {/* POPULAR COURSES */}

            <motion.div
              className="footer-column"

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
              }}

              viewport={{
                once: true,
              }}
            >

              <h3>
                Popular Courses
              </h3>


              <ul>

                {popularCourses.map((item, index) => (

                  <li key={index}>

                    <FaArrowRight />

                    <Link to={item.path}>
                      {item.name}
                    </Link>

                  </li>

                ))}

              </ul>

            </motion.div>



            {/* CONTACT */}

            <motion.div
              className="footer-column"

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              viewport={{
                once: true,
              }}
            >

              <h3>
                Contact Us
              </h3>


              <div className="contact-item">

                <FaPhoneAlt />

                <span>
                  {contactInfo.phone}
                </span>

              </div>


              <div className="contact-item">

                <FaEnvelope />

                <span>
                  {contactInfo.email}
                </span>

              </div>


              <div className="contact-item">

                <FaMapMarkerAlt />

                <span>
                  {contactInfo.address}
                </span>

              </div>



              {/* SOCIAL ICONS */}

              <div className="social-icons">

                <a href="/" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="/" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="/" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>

                <a href="/" aria-label="YouTube">
                  <FaYoutube />
                </a>

              </div>

            </motion.div>

          </div>



          {/* =========================================
              FOOTER BOTTOM
          ========================================= */}

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Codewizen.
              All Rights Reserved.
            </p>


            <div className="footer-policy">

              <Link to="/contact-us">
                Privacy Policy
              </Link>

              <Link to="/contact-us">
                Terms
              </Link>

              <Link to="/contact-us">
                Sitemap
              </Link>
              
              <Link to="/admin-login" style={{ color: '#ea580c', fontWeight: 'bold' }}>
                Admin Login
              </Link>

            </div>

          </div>


        </div>
        <a
          href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank" rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat with us on WhatsApp">
          <FaWhatsapp />
        </a>

      </footer>
    </>
  );
}


export default Footer;