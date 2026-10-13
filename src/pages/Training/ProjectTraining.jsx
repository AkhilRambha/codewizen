import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaGitAlt, FaCloudUploadAlt, FaUsersCog, FaBug, FaProjectDiagram } from 'react-icons/fa';

const ProjectTraining = () => {
  const capstoneProjects = [
    {
      title: "Core Banking & Microservices Engine",
      domain: "Distributed Systems & FinTech",
      tech: "Java, Spring Boot, Apache Kafka, PostgreSQL, Docker",
      description: "Architect high-throughput event-driven microservices with distributed transaction handling, idempotent payment processing, and ACID reliability.",
      icon: "🏦"
    },
    {
      title: "Enterprise GenAI Knowledge RAG Pipeline",
      domain: "Artificial Intelligence & Vector Search",
      tech: "Python, LangChain, Pinecone Vector DB, OpenAI, FastAPI",
      description: "Develop a multi-tenant semantic document retrieval system with automated embedding pipelines, citation grounding, and streaming responses.",
      icon: "🤖"
    },
    {
      title: "Multi-Tenant E-Commerce Cloud SaaS",
      domain: "Full-Stack Web Engineering",
      tech: "React 19, Node.js, Express, Redis Caching, AWS S3",
      description: "Build an end-to-end storefront and admin ecosystem with distributed cart locking, webhook payments, and sub-100ms API response targets.",
      icon: "🛒"
    },
    {
      title: "Zero-Downtime Cloud DevOps Suite",
      domain: "Cloud Infrastructure & SRE",
      tech: "AWS EKS, Terraform, Kubernetes, Helm, GitHub Actions",
      description: "Provision multi-environment infrastructure as code (IaC), zero-downtime blue-green rollouts, and Prometheus/Grafana observability dashboards.",
      icon: "☁️"
    },
    {
      title: "Real-Time Streaming Fraud Detector",
      domain: "Big Data & Machine Learning",
      tech: "Python, Apache Spark, Kafka, MLflow, Scikit-Learn",
      description: "Stream millions of live simulated transactions per minute through ML scoring models, raising real-time alerts on fraudulent activities.",
      icon: "📊"
    },
    {
      title: "Enterprise Automated QA & Security Hub",
      domain: "Quality Engineering & DevSecOps",
      tech: "Selenium WebDriver, Cypress, TestNG, OWASP ZAP",
      description: "Build parallelized cross-browser test frameworks with CI integration, automated regression testing, and security vulnerability scanning.",
      icon: "🛡️"
    }
  ];

  const exposurePillars = [
    {
      icon: <FaUsersCog size={28} color="#e87500" />,
      title: "Agile & Sprint Sprints",
      desc: "Work in 2-week sprint cycles using Jira boards, daily standup syncs, user stories, and acceptance criteria."
    },
    {
      icon: <FaGitAlt size={28} color="#e87500" />,
      title: "Production Git Workflows",
      desc: "Trunk-based branch strategies, Pull Request templates, resolving merge conflicts, and peer reviews."
    },
    {
      icon: <FaCloudUploadAlt size={28} color="#e87500" />,
      title: "Live Cloud Deployments",
      desc: "Deploy code directly to production cloud instances (AWS/GCP), containerized using modern Docker environments."
    },
    {
      icon: <FaBug size={28} color="#e87500" />,
      title: "Live Debugging & Profiling",
      desc: "Learn real-world incident response: reading stack traces, profiling memory leaks, and tuning database query plans."
    }
  ];

  return (
    <>
      <PageHero 
        title="100% Real-Time Projects & Live Exposure" 
        description="Experience enterprise-grade software development. Build production architectures, master corporate toolchains, and build a portfolio that commands respect."
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Real-Time Projects" }
        ]}
      />
      
      <section style={{ padding: '80px 20px', maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Exposure Introduction */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px' }} data-aos="fade-up">
          <span style={{ color: '#e87500', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '14px' }}>
            BEYOND BASIC TUTORIALS
          </span>
          <h2 style={{ color: '#112255', fontSize: '36px', marginTop: '10px', marginBottom: '20px' }}>
            What is 100% Real-Time Exposure?
          </h2>
          <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8' }}>
            Traditional training stops at basic syntax. At Codewizen, our 100% live online model simulates an actual corporate tech company. You participate in sprint planning, write clean modular production code, submit Pull Requests, and deploy to live cloud servers.
          </p>
        </div>

        {/* 4 Exposure Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginBottom: '80px' }} data-aos="fade-up">
          {exposurePillars.map((pillar, idx) => (
            <div key={idx} style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <div style={{ marginBottom: '16px' }}>{pillar.icon}</div>
              <h3 style={{ color: '#112255', fontSize: '20px', marginBottom: '10px' }}>{pillar.title}</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Capstones Grid */}
        <div style={{ marginBottom: '80px' }} data-aos="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#e87500', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '14px' }}>
              PORTFOLIO BUILDERS
            </span>
            <h2 style={{ color: '#112255', fontSize: '34px', marginTop: '10px' }}>
              Real-World Capstone Projects You Build
            </h2>
            <p style={{ color: '#64748b', fontSize: '17px', marginTop: '10px' }}>
              Each learner works on dedicated end-to-end architectures designed to solve real business problems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {capstoneProjects.map((project, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', 
                  borderRadius: '18px', 
                  padding: '35px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 25px rgba(17,34,85,0.06)',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '15px' }}>{project.icon}</div>
                <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#e87500', background: '#fff3ed', padding: '4px 12px', borderRadius: '20px', marginBottom: '12px' }}>
                  {project.domain}
                </span>
                <h3 style={{ color: '#112255', fontSize: '22px', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                  {project.description}
                </p>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '15px', fontSize: '13px', color: '#1e3a8a', fontWeight: '600' }}>
                  🛠️ {project.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div style={{ background: 'linear-gradient(135deg, #112255 0%, #0b1120 100%)', padding: '60px 40px', borderRadius: '24px', textAlign: 'center', color: '#ffffff' }} data-aos="zoom-in">
          <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Ready to Build Real-Time Systems?</h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '650px', margin: '0 auto 30px' }}>
            Join our 100% live online interactive cohorts. Experience senior engineering code reviews, real cloud infrastructure, and live debugging.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us" className="btn-primary" style={{ padding: '14px 32px' }}>
              Book Free Online Demo
            </Link>
            <Link to="/upcoming-batches" className="btn-outline" style={{ padding: '14px 32px', color: '#ffffff', borderColor: '#ffffff' }}>
              View Batch Schedule
            </Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default ProjectTraining;
