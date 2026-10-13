import React from "react";
import "./Placements.css";
import useFirebaseData from '../../../hooks/useFirebaseData';

function Placements() {
  const [projects] = useFirebaseData('codewizen_realtime_projects', [
    { 
      id: 1, 
      name: "Core Banking & Payments Engine", 
      domain: "Microservices Architecture", 
      tech: "Spring Boot • Kafka • Docker • PostgreSQL", 
      badge: "Enterprise FinTech", 
      icon: "🏦",
      tagline: "High-throughput distributed ledger with Kafka event streaming"
    },
    { 
      id: 2, 
      name: "Enterprise GenAI Knowledge RAG", 
      domain: "AI & Vector Search", 
      tech: "Python • LangChain • Pinecone • OpenAI API", 
      badge: "Generative AI", 
      icon: "🤖",
      tagline: "Multi-tenant vector search with automated document ingestion"
    },
    { 
      id: 3, 
      name: "Multi-Tenant E-Commerce SaaS", 
      domain: "Full-Stack Web Engineering", 
      tech: "React 19 • Node.js • Redis • AWS S3", 
      badge: "Cloud SaaS", 
      icon: "🛒",
      tagline: "Distributed caching, automated payments & real-time inventory"
    },
    { 
      id: 4, 
      name: "Zero-Downtime DevOps & CI/CD", 
      domain: "Cloud & Site Reliability", 
      tech: "Kubernetes • Terraform • AWS EKS • GitHub Actions", 
      badge: "DevOps & Cloud", 
      icon: "☁️",
      tagline: "GitOps infrastructure provisioning with Prometheus monitoring"
    },
    { 
      id: 5, 
      name: "Real-Time Fraud Analytics Pipeline", 
      domain: "Big Data & Machine Learning", 
      tech: "Python • Apache Spark • MLflow • Scikit-Learn", 
      badge: "Data Science", 
      icon: "📊",
      tagline: "Live transactional stream processing with ML anomaly scoring"
    },
    { 
      id: 6, 
      name: "Automated Enterprise QA Test Hub", 
      domain: "Test Automation & Security", 
      tech: "Selenium • Cypress • TestNG • OWASP ZAP", 
      badge: "QA & Security", 
      icon: "🛡️",
      tagline: "Cross-browser test suites with automated vulnerability scans"
    }
  ]);

  return (
    <section className="placements-section" id="real-time-projects">
      <div className="placements-container">
        <div className="section-header center-header" data-aos="fade-up">
          <span className="section-eyebrow">100% REAL-TIME PROJECTS</span>
          <h2 style={{ color: '#112255' }}>Enterprise Applications You Will Build</h2>
          <p className="section-subtitle">
            Zero toy projects. Work on production-ready architectures with live code reviews and cloud deployments.
          </p>
        </div>

        <div className="placements-marquee-container">
          <div className="placements-marquee">
            {/* Double the list to create a seamless infinite loop */}
            {[...projects, ...projects].map((item, index) => (
              <div
                className="premium-placement-card"
                key={index}
              >
                <div className="premium-card-bg"></div>
                <div className="premium-card-content">
                  <div className="premium-header">
                    <div className="avatar-ring" style={{ fontSize: '28px', background: 'linear-gradient(135deg, #112255, #1e3a8a)' }}>
                      <span role="img" aria-label={item.name}>{item.icon}</span>
                    </div>
                    <div className="premium-info">
                      <h3 style={{ fontSize: '1.05rem' }}>{item.name}</h3>
                      <span className="premium-course">{item.domain}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '16px', lineHeight: '1.5' }}>
                    {item.tagline}
                  </p>

                  <div className="premium-footer">
                    <div className="company-badge">
                      <span className="badge-icon">⚙️</span>
                      <span className="badge-text" style={{ fontSize: '0.78rem' }}>{item.tech}</span>
                    </div>
                    <div className="ctc-badge">
                      <span className="badge-icon">🚀</span>
                      <span className="badge-text">{item.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placements;