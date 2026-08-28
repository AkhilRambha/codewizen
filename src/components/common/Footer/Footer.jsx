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


const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "All Courses", path: "/courses" },
  { name: "Upcoming Batches", path: "/upcoming-batches" },
  { name: "Placements", path: "/placement-assistance" },
  { name: "Registration", path: "/course-registration" },
  { name: "Contact Us", path: "/contact-us" },
];


const popularCourses = [
  { name: "Java Full Stack", path: "/java-full-stack" },
  { name: "Python Full Stack", path: "/python-full-stack" },
  { name: "Data Analytics", path: "/data-analytics" },
  { name: "Software Testing", path: "/software-testing" },
  { name: "Data Science", path: "/data-science" },
  { name: "Generative AI", path: "/generative-ai" },
];


function Footer() {
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

        {/* Huge Stamp Watermark */}
        <div className="footer-stamp">CODEWIZEN</div>

        <div className="footer-container">


          {/* =========================================
              FOOTER TOP
          ========================================= */}

          <div className="footer-top">


            {/* ABOUT */}

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
              {/* Fixed Circular Stamp Replacing Logo */}
              <div className="footer-circular-stamp">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      ★ CODEWIZEN ★ ISO CERTIFIED
                    </textPath>
                  </text>
                </svg>
                <div className="stamp-center-icon">100%</div>
              </div>


              <p>
                Helping students become software professionals
                through industry-oriented training, live projects
                and placement assistance.
              </p>


              <ul className="footer-highlights">
                <span>✓ 300+ Hiring Companies</span>
                <span>✓ 18K+ Students Trained</span>
                <span>✓ 92% Placement Assistance</span>
                <span>✓ 10+ Years Experience</span>
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
                  +91 7993819211
                </span>

              </div>


              <div className="contact-item">

                <FaEnvelope />

                <span>
                  info@codewizen.com
                </span>

              </div>


              <div className="contact-item">

                <FaMapMarkerAlt />

                <span>
                  3rd floor, Besides JC Brothers,
                  <br />
                  beside KPHB metro station,
                  <br />
                  Kukatpally Housing Board Colony,
                  <br />
                  Bhagya Nagar Colony, Hyderabad
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

            </div>

          </div>


        </div>
        <a

          href="https://wa.me/918464025086"
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