import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title, description, breadcrumbs }) => {
  return (
    <section className="page-hero-section">
      <div className="page-hero-bg-map"></div>
      <div className="page-hero-container">
        <div className="page-hero-content" data-aos="fade-up">
          
          <nav className="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li className="separator">/</li>
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

          <h1 className="page-hero-title">{title}</h1>
          {description && <p className="page-hero-desc">{description}</p>}
        </div>
      </div>

      <div className="page-hero-bottom-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C320,140 420,20 720,80 C1020,140 1120,20 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
