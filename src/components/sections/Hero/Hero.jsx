import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      {/* ── Background Patterns ── */}
      <div className="hero-bg-map"></div>
      <div className="hero-dot-pattern top-left"></div>
      <div className="hero-dot-pattern top-right"></div>
      
      {/* Floating Plus Sign */}
      <div className="hero-plus-icon">+</div>

      <div className="hero-container">

        {/* ══════════════ LEFT SIDE ══════════════ */}
        <div className="hero-left" data-aos="fade-right" data-aos-duration="1000">
          
          {/* Eyebrow */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow">SOFTWARE TRAINING INSTITUTE</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Learn Today's<br />Technology.
            <span className="hero-headline-accent">Build Tomorrow's<br />Career.</span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            Master in-demand technologies through expert-led training,
            hands-on projects, practical assignments and
            career-focused preparation designed for today's IT industry.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#courses" className="hero-btn hero-btn-primary">
              Explore Courses <span>→</span>
            </a>
            <Link to="/free-demo" className="hero-btn hero-btn-secondary">
              Book Free Demo 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust-indicators">
            <div className="hero-trust-item">
              <div className="trust-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <span>Industry Expert<br />Trainers</span>
            </div>
            
            <div className="trust-divider"></div>
            
            <div className="hero-trust-item">
              <div className="trust-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <span>Hands-on<br />Projects</span>
            </div>

            <div className="trust-divider"></div>

            <div className="hero-trust-item">
              <div className="trust-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <span>Career<br />Support</span>
            </div>
          </div>

        </div>

        {/* ══════════════ RIGHT SIDE ══════════════ */}
        <div className="hero-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          
          <div className="hero-image-wrapper">
            
            {/* Dark Blue organic background shape */}
            <div className="hero-image-backdrop" data-aos="zoom-in" data-aos-delay="400"></div>
            
            {/* Orange decorative line */}
            <div className="hero-orange-line"></div>
            
            {/* Decorative circle outline */}
            <div className="hero-circle-outline"></div>

            {/* Main Image */}
            <div className="hero-img-container">
              <img 
                src="/hero_image.jpg" 
                alt="Students in a modern IT classroom" 
                className="hero-main-img" 
              />
            </div>

            {/* Practical Learning Card */}
            <div className="hero-practical-card" data-aos="fade-up" data-aos-delay="600">
              <div className="practical-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 2.5a3.5 3.5 0 0 0-5 0L2.5 8.5a3.5 3.5 0 0 0 0 5l6 6a3.5 3.5 0 0 0 5 0l6-6a3.5 3.5 0 0 0 0-5z"/><path d="M8.5 14.5L12 11l3.5 3.5"/><path d="M12 11v8"/>
                </svg>
              </div>
              <div className="practical-content">
                <strong>Practical Learning</strong>
                <span>Learn &bull; Practice &bull; Build &bull; Grow</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── Bottom Wave Transition ── */}
      <div className="hero-bottom-wave" data-aos="fade-up" data-aos-duration="1200">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          {/* Light wave layer */}
          <path d="M0,40 C320,100 420,-20 720,40 C1020,100 1120,-20 1440,40 L1440,120 L0,120 Z" fill="#eef2ff" opacity="0.5" />
          {/* Dark blue wave layer */}
          <path d="M0,80 C320,140 420,20 720,80 C1020,140 1120,20 1440,80 L1440,120 L0,120 Z" fill="#0b2059" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;