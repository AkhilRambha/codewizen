import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFirebaseData from '../../hooks/useFirebaseData';
import { FaCheckCircle, FaUserPlus, FaCalendarAlt, FaDesktop } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import './Workshop.css';

const defaultWorkshopData = {
  id: "spring-security",
  seoTitle: "Level up your backend skills with Spring Security in 2 Days",
  mainTitle: "Build secure, production ready backend APIs with Spring Security and JWT",
  subTitle: "(Hands on Learning)",
  description: "This workshop is designed for developers who want clarity in Spring Security, confidence in JWT based authentication, and a production ready security mindset.",
  heroButtonText: "Begin your Spring Security journey",
  heroImage: "/springboot_hero.jpg", 
  
  schedule: {
    dates: "1st & 2nd August",
    time: "7 PM to 10 PM",
    mode: "Online Session",
    fee: "₹299 Only"
  },
  
  certificate: {
    points: [
      "Showcase your Certificate on social media", 
      "Download or print out as PDF to share with others", 
      "Share as image online to demonstrate your skill"
    ],
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=300&fit=crop"
  },
  
  curriculum: [
    { day: "Day 1", title: "Spring Boot project setup, architecture, and core Spring Security concepts with live discussion and Q&A." },
    { day: "Day 2", title: "JWT fundamentals, token flow, role-based authorization, and hands-on API security implementation." }
  ],
  
  whatYouWillGet: {
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=200&fit=crop",
    points: [
      "Certificate of Completion", 
      "Interview-Focused Question Bank", 
      "Project Structure & Best Practices Guide",
      "Live Doubt-Support Window",
      "1:1 Clarity Call"
    ]
  },
  
  audience: {
    points: [
      "Java & Spring Boot developers", 
      "Backend developers aiming to strengthen security skills", 
      "Professionals preparing for interviews",
      "Learners who want practical, real-world exposure"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
  },
  
  whyAttend: [
    { title: "Learn Spring Security Right Way", desc: "Move beyond copy-paste configurations. Understand how Spring Security actually works, from request flow to authentication and authorization." },
    { title: "Hands-On JWT & API Security", desc: "Implement JWT-based authentication and secure real REST APIs using practical, production-style examples." },
    { title: "Build Job-Ready Backend Skills", desc: "Learn what companies expect from backend developers when it comes to API security and best practices." },
    { title: "Clear Career & Interview Direction", desc: "Get interview-focused insights, common security questions, and a structured roadmap to apply what you learn after the workshop." }
  ],

  feedbackImages: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
  ],

  faqs: [
    { question: "Is this workshop live or recorded?", answer: "This is a 100% live, instructor-led workshop with interactive Q&A sessions." },
    { question: "Will I get the source code?", answer: "Yes, you will get complete access to the GitHub repository containing the starter and completed code." },
    { question: "Are recordings provided?", answer: "Yes, recordings will be shared after the session for your reference." },
    { question: "Is it beginner friendly?", answer: "Basic knowledge of Java and Spring Boot is recommended to get the most out of this workshop." }
  ],
  
  price: 299,
  originalPrice: 2999,
  countdownDaysToAdd: 5
};

const Workshop = () => {
  const { workshopId } = useParams();
  const [registrationsData] = useFirebaseData('codewizen_workshop_registrations', []);
  const registrations = Array.isArray(registrationsData) ? registrationsData : (registrationsData ? Object.values(registrationsData) : []);
  const [workshopsData, , isReady] = useFirebaseData('codewizen_workshops_data', [defaultWorkshopData]);
  const workshops = Array.isArray(workshopsData) ? workshopsData : (workshopsData ? Object.values(workshopsData) : []);
  const [contactInfo] = useFirebaseData('codewizen_contact_info', {});
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const foundWorkshop = workshops.find(w => w && w.id === workshopId) || workshops.find(Boolean) || defaultWorkshopData;
  const currentWorkshop = foundWorkshop ? { ...defaultWorkshopData, ...foundWorkshop } : null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    if (!currentWorkshop) return;
    
    // Set target date (e.g. 5 days from now for urgency)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + (currentWorkshop.countdownDaysToAdd || 5));
    targetDate.setHours(19, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentWorkshop]);

  const handleRegister = (e) => {
    e.preventDefault();
    const newReg = {
      ...formData,
      id: Date.now(),
      workshopId: currentWorkshop.id,
      status: 'Pending Payment',
      date: new Date().toISOString()
    };
    
    setRegistrations([...registrations, newReg]);
    
    // Switch to payment step
    setPaymentStep(true);
  };

  if (!isReady || !currentWorkshop) {
    return <div style={{ height: '100vh', background: '#0a0f1c', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Loading Workshop...</div>;
  }

  return (
    <div className="ws-container">
      {/* Hero Section */}
      <section className="ws-hero">
        <div className="ws-hero-content">
          <p className="ws-seo-title">{currentWorkshop.seoTitle}</p>
          <h1 className="ws-main-title">{currentWorkshop.mainTitle} <br/><span className="ws-highlight">{currentWorkshop.subTitle}</span></h1>
          
          <p className="ws-desc">{currentWorkshop.description}</p>
          
          <button className="ws-btn-primary" onClick={() => setIsModalOpen(true)}>
            <FaUserPlus style={{marginRight: '10px'}}/> {currentWorkshop.heroButtonText}
          </button>
        </div>
        <div className="ws-hero-image-wrapper">
          <div className="ws-hero-image-container">
            <img src={currentWorkshop.heroImage.includes('placeholder') || currentWorkshop.heroImage.includes('unsplash') ? '/springboot_hero.jpg' : currentWorkshop.heroImage} alt="Workshop" className="ws-hero-image" />
            <div className="ws-hero-host-info">
              <p>Host by <strong>Codewizen</strong></p>
              <p className="ws-host-desc">Live Instructor-led sessions focused on practical learning, with real-world use cases, hands-on demonstrations, and live Q&A and guidance</p>
              <button className="ws-btn-red ws-btn-blink" onClick={() => setIsModalOpen(true)}>
                Enroll Now! at just ₹{currentWorkshop.price} <strike>₹{currentWorkshop.originalPrice}</strike>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="ws-schedule-section">
        <h2 className="ws-section-title" data-aos="fade-up">Workshop Schedule</h2>
        <div className="ws-schedule-grid">
          <div className="ws-schedule-box" data-aos="fade-up" data-aos-delay="0">
            <span>DATES</span>
            <strong>{currentWorkshop.schedule.dates}</strong>
          </div>
          <div className="ws-schedule-box" data-aos="fade-up" data-aos-delay="100">
            <span>TIME</span>
            <strong>{currentWorkshop.schedule.time}</strong>
          </div>
          <div className="ws-schedule-box" data-aos="fade-up" data-aos-delay="200">
            <span>MODE</span>
            <strong>{currentWorkshop.schedule.mode}</strong>
          </div>
          <div className="ws-schedule-box" data-aos="fade-up" data-aos-delay="300">
            <span>FEE</span>
            <strong>{currentWorkshop.schedule.fee}</strong>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="ws-certificate-section">
        <div className="ws-cert-inner">
          <div className="ws-cert-content" data-aos="fade-right">
            <p className="ws-cert-pre">Codewizen Presents</p>
            <h2>Certificate of Completion</h2>
            <ul>
              {currentWorkshop.certificate.points.map((point, i) => (
                <li key={i}><FaCheckCircle className="ws-check-green"/> {point}</li>
              ))}
            </ul>
            <button className="ws-btn-outline" onClick={() => setIsModalOpen(true)}>
              Book Your Seat Now At Just ₹{currentWorkshop.price} <strike style={{opacity: 0.5}}>₹{currentWorkshop.originalPrice}</strike>
            </button>
          </div>
          <div className="ws-cert-image" data-aos="fade-left">
            <img src={currentWorkshop.certificate.image} alt="Certificate" />
          </div>
        </div>
      </section>

      {/* Learning Flow Section */}
      <section className="ws-learning-flow">
        <div className="ws-flow-left" data-aos="fade-right">
          <h2>2-Day Learning Flow</h2>
          <p className="ws-flow-desc">A structured, step-by-step approach to understanding, implementing, and securing backend APIs.</p>
          
          <div className="ws-timeline">
            {currentWorkshop.curriculum.map((item, i) => (
              <div className="ws-timeline-item" key={i} data-aos="fade-right" data-aos-delay={i * 100}>
                <div className="ws-timeline-icon"><FaCalendarAlt /></div>
                <div className="ws-timeline-content">
                  <h3>{item.day}</h3>
                  <p>{item.title}</p>
                  <span className="ws-learn-more">Learn More &gt;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="ws-flow-right" data-aos="fade-left">
          <div className="ws-get-card">
            <img src={currentWorkshop.whatYouWillGet.image} alt="Logo" className="ws-get-logo"/>
            <h3>What you will get?</h3>
            <ul>
              {currentWorkshop.whatYouWillGet.points.map((point, i) => (
                <li key={i}><FaCheckCircle className="ws-check-green"/> {point}</li>
              ))}
            </ul>
            <button className="ws-btn-red" onClick={() => setIsModalOpen(true)}>
              Register Today<br/><small>At just ₹{currentWorkshop.price} <strike>₹{currentWorkshop.originalPrice}</strike></small>
            </button>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="ws-who-section">
        <div className="ws-who-content" data-aos="fade-right">
          <h2>Who This Workshop Is For</h2>
          <p className="ws-flow-desc">This workshop is perfect if you are:</p>
          <div className="ws-who-list">
            {currentWorkshop.audience.points.map((point, i) => (
              <div className="ws-who-item" key={i} data-aos="fade-right" data-aos-delay={i * 100}>{point}</div>
            ))}
          </div>
        </div>
        <div className="ws-who-image" data-aos="fade-left">
          <img src={currentWorkshop.audience.image} alt="Target Audience" />
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="ws-why-section">
        <h2 data-aos="fade-up">Why attend this workshop?</h2>
        <div className="ws-why-grid">
          {currentWorkshop.whyAttend.map((item, i) => (
            <div className="ws-why-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <FaDesktop className="ws-why-icon"/>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}} data-aos="fade-up">
          <button className="ws-btn-outline-large" onClick={() => setIsModalOpen(true)}>
            Register Today for ₹{currentWorkshop.price} <strike style={{opacity: 0.5}}>₹{currentWorkshop.originalPrice}</strike>
          </button>
        </div>
      </section>

      {/* Learner Feedback Section */}
      <section className="ws-feedback-section">
        <h2 data-aos="fade-up">Learner Feedback Across Platforms</h2>
        <div className="ws-feedback-grid">
          {currentWorkshop.reviews && currentWorkshop.reviews.length > 0 ? (
            currentWorkshop.reviews.map((review, i) => (
              <div className="ws-review-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="ws-review-header">
                  <div className="ws-review-avatar">{review.name.charAt(0)}</div>
                  <div className="ws-review-meta">
                    <h4>{review.name}</h4>
                    <span className="ws-review-platform">{review.platform || "WhatsApp"}</span>
                  </div>
                </div>
                <p className="ws-review-text">"{review.text}"</p>
                <div className="ws-review-rating">⭐⭐⭐⭐⭐</div>
              </div>
            ))
          ) : (
            <>
              <div className="ws-review-card" data-aos="fade-up" data-aos-delay="0">
                <div className="ws-review-header">
                  <div className="ws-review-avatar">A</div>
                  <div className="ws-review-meta">
                    <h4>Anagha Shinde</h4>
                    <span className="ws-review-platform">WhatsApp</span>
                  </div>
                </div>
                <p className="ws-review-text">"Hello, Day 1 was really great. I learned how to build a REST API from scratch, which helped me understand the basics of Spring Boot better. The session was very interactive and easy to follow. Definitely recommend it!"</p>
                <div className="ws-review-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="ws-review-card" data-aos="fade-up" data-aos-delay="100">
                <div className="ws-review-header">
                  <div className="ws-review-avatar" style={{background: '#38bdf8'}}>P</div>
                  <div className="ws-review-meta">
                    <h4>Pramod Kumar</h4>
                    <span className="ws-review-platform">LinkedIn</span>
                  </div>
                </div>
                <p className="ws-review-text">"His Teaching of the way is different from market... he has given depth knowledge within the short span of time... really enjoyed learning with him and at the same time showing practical knowledge."</p>
                <div className="ws-review-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="ws-review-card" data-aos="fade-up" data-aos-delay="200">
                <div className="ws-review-header">
                  <div className="ws-review-avatar" style={{background: '#10b981'}}>K</div>
                  <div className="ws-review-meta">
                    <h4>Kavita Kumari</h4>
                    <span className="ws-review-platform">WhatsApp</span>
                  </div>
                </div>
                <p className="ws-review-text">"Thank you so much Sir. Was able to revive basic concepts of Spring boot, while integrating it with AI, hands-on experience and theoretical knowledge simultaneously is a great thing."</p>
                <div className="ws-review-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Limited Spots Section */}
      <section className="ws-limited-spots">
        <div className="ws-limited-inner" data-aos="zoom-in">
          <h2>Limited spots! Grab yours now!</h2>
          
          <div className="ws-countdown ws-limited-countdown">
            <span className="ws-ending-text">Ending In</span>
            <div className="ws-timer">
              <div className="ws-time-box">
                <span className="ws-time-num">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="ws-time-lbl">days</span>
              </div>
              <div className="ws-time-box">
                <span className="ws-time-num">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="ws-time-lbl">hours</span>
              </div>
              <div className="ws-time-box">
                <span className="ws-time-num">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="ws-time-lbl">minutes</span>
              </div>
              <div className="ws-time-box">
                <span className="ws-time-num">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="ws-time-lbl">seconds</span>
              </div>
            </div>
            <button className="ws-btn-outline ws-hidden-btn" disabled>Enroll Now At ₹{currentWorkshop.price} <strike>₹{currentWorkshop.originalPrice}</strike></button>
          </div>

          <p className="ws-limited-desc">This is a focused, hands-on workshop with <strong>limited seats</strong> to ensure quality learning.<br/>Enroll now and take your backend security skills to the next level.</p>
        </div>
      </section>

      {/* FAQ Section */}
      {currentWorkshop.faqs && currentWorkshop.faqs.length > 0 && (
        <section className="ws-faq-section">
          <h2 data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="ws-faq-container">
            {currentWorkshop.faqs.map((faq, i) => (
              <div className={`ws-faq-item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => toggleFaq(i)} data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="ws-faq-question">
                  <h3>{faq.question}</h3>
                  <span className="ws-faq-icon">{openFaq === i ? '-' : '+'}</span>
                </div>
                {openFaq === i && (
                  <div className="ws-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sticky Bottom Bar */}
      <div className="ws-sticky-bar">
        <div className="ws-countdown">
          <span className="ws-ending-text">Ending in</span>
          <div className="ws-timer">
            <div className="ws-time-box">
              <span className="ws-time-num">{timeLeft.days.toString().padStart(2, '0')}</span>
              <span className="ws-time-lbl">days</span>
            </div>
            <div className="ws-time-box">
              <span className="ws-time-num">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="ws-time-lbl">hrs</span>
            </div>
            <div className="ws-time-box">
              <span className="ws-time-num">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="ws-time-lbl">mins</span>
            </div>
            <div className="ws-time-box">
              <span className="ws-time-num">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="ws-time-lbl">secs</span>
            </div>
          </div>
        </div>
        <button className="ws-btn-sticky ws-btn-blink" onClick={() => setIsModalOpen(true)}>
          Enroll Now at Just ₹{currentWorkshop.price}
        </button>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="ws-modal-overlay">
          <div className="ws-modal">
            <button className="ws-modal-close" onClick={() => { setIsModalOpen(false); setPaymentStep(false); }}>×</button>
            
            {!paymentStep ? (
              <>
                <h2 style={{color: '#0f172a', marginBottom: '10px'}}>Complete Registration</h2>
                <p style={{color: '#64748b', marginBottom: '20px'}}>Enter your details to proceed to payment.</p>
                
                <form onSubmit={handleRegister} className="ws-form">
                  <div className="ws-form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="ws-form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="ws-form-group">
                    <label>WhatsApp Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <button type="submit" className="ws-btn-red" style={{width: '100%', marginTop: '10px'}}>
                    Proceed to Pay ₹{currentWorkshop.price}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <h2 style={{ color: '#0f172a', marginBottom: '10px' }}>Complete Your Payment</h2>
                <p style={{ color: '#64748b', marginBottom: '20px' }}>Pay ₹{currentWorkshop.price} securely via UPI</p>
                
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                  <QRCodeSVG 
                    value={`upi://pay?pa=${contactInfo?.upiId || 'test@upi'}&pn=Codewizen&am=${currentWorkshop.price}&cu=INR`} 
                    size={200}
                    level={"H"}
                  />
                </div>
                
                <p style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 'bold', marginBottom: '20px' }}>Scan with PhonePe, GPay, or Paytm</p>
                
                <a 
                  href={`upi://pay?pa=${contactInfo?.upiId || 'test@upi'}&pn=Codewizen&am=${currentWorkshop.price}&cu=INR`}
                  className="ws-btn-red"
                  style={{ display: 'block', textDecoration: 'none', background: '#5f259f', marginBottom: '15px', color: 'white' }}
                >
                  Open PhonePe / UPI App
                </a>
                
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>After payment, you will receive a confirmation message shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Workshop;
