import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/common/PageHero/PageHero.css';
import './OurTrainers.css';
import { FaBuilding } from 'react-icons/fa';

const OurTrainers = () => {
  // Placeholder data for trainers
  const trainers = [
    {
      id: 1,
      name: "Rahul Verma",
      role: "Senior Enterprise Architect",
      company: "Top MNC",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "With 12+ years of experience building scalable enterprise Java applications, Rahul brings real-time microservices architecture into the classroom.",
      tags: ["Java", "Spring Boot", "Microservices", "AWS"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Lead Full Stack Developer",
      company: "Product Based Startup",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Priya is a React expert who has built robust frontends for millions of users. She focuses on component design, state management, and modern web standards.",
      tags: ["React JS", "Node JS", "TypeScript", "Redux"]
    },
    {
      id: 3,
      name: "Anil Kumar",
      role: "Principal Data Scientist",
      company: "Fortune 500 Tech",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Anil specializes in Machine Learning and Python. His hands-on approach ensures students don't just learn algorithms, but how to deploy them in production.",
      tags: ["Python", "Machine Learning", "TensorFlow", "SQL"]
    },
    {
      id: 4,
      name: "Deepika Reddy",
      role: "DevOps & Cloud Engineer",
      company: "Global IT Services",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Deepika transforms students into deployment experts. She covers everything from CI/CD pipelines to Docker containerization and Kubernetes orchestration.",
      tags: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 5,
      name: "Karthik Raj",
      role: "QA Automation Lead",
      company: "Fintech Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Karthik teaches the art of breaking software. His testing classes dive deep into Selenium, automated test suites, and agile QA methodologies.",
      tags: ["Selenium", "Java", "TestNG", "Agile"]
    },
    {
      id: 6,
      name: "Neha Patel",
      role: "UI/UX & Frontend Expert",
      company: "Top Design Agency",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef43ce5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Neha bridges the gap between design and code. She teaches students how to build pixel-perfect, highly responsive interfaces using modern CSS frameworks.",
      tags: ["HTML/CSS", "JavaScript", "Figma", "Tailwind"]
    }
  ];

  return (
    <div className="trainers-page">
      
      {/* ── HERO ── */}
      <section className="trainers-hero">
        <div className="trainers-hero-grid"></div>
        <div className="trainers-hero-content" data-aos="fade-up">
          <nav className="breadcrumbs" style={{ marginBottom: '20px' }}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="separator">/</li>
              <li><Link to="/about-us">About Us</Link></li>
              <li className="separator">/</li>
              <li><span>Our Trainers</span></li>
            </ul>
          </nav>
          <span className="trainers-eyebrow">Meet The Experts</span>
          <h1>Learn directly from <br/><span className="about-orange">Industry Leaders</span></h1>
          <p>
            Our trainers are not academicians. They are working professionals, technical architects, and lead engineers currently employed at top multinational companies.
          </p>
        </div>
      </section>

      {/* ── TRAINERS GRID ── */}
      <section className="trainers-section">
        <div className="trainers-section-header" data-aos="fade-up">
          <h2>Our Core Faculty</h2>
          <p>Discover the mentors who will guide you from writing your first line of code to receiving your first job offer.</p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div 
              className="trainer-card" 
              key={trainer.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="trainer-img-wrapper">
                <img src={trainer.image} alt={trainer.name} loading="lazy" />
                <div className="trainer-overlay">
                  <div className="trainer-company">
                    <FaBuilding /> {trainer.company}
                  </div>
                </div>
              </div>
              
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <div className="trainer-role">{trainer.role}</div>
                <p className="trainer-desc">{trainer.desc}</p>
                
                <div className="trainer-tags-wrap">
                  <span className="trainer-tags-title">Expertise</span>
                  <div className="trainer-tags">
                    {trainer.tags.map(tag => (
                      <span className="t-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OurTrainers;
