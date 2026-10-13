import React, { useState, useEffect } from "react";
import "./Benefits.css";
import { FaTimes, FaCheck, FaLightbulb, FaExclamationCircle } from "react-icons/fa";

function Benefits() {
  // Staggered automatic pop-up states for the cloud thought bubbles
  const [showCloud1, setShowCloud1] = useState(false);
  const [showCloud2, setShowCloud2] = useState(false);
  const [showCloud3, setShowCloud3] = useState(false);

  // Modal insight trigger state if student wants more detail
  const [selectedInsight, setSelectedInsight] = useState(null);

  useEffect(() => {
    // Automatically reveal cloud thoughts one by one as student reads
    const t1 = setTimeout(() => setShowCloud1(true), 1200);
    const t2 = setTimeout(() => setShowCloud2(true), 3200);
    const t3 = setTimeout(() => setShowCloud3(true), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const insightData = {
    ats: {
      title: "The ATS Resume Shock",
      tip: "Over 75% of resumes are automatically rejected in 6 seconds because they lack real production keywords.",
      fix: "Replace basic college projects (ToDo App, Calculator) with a live microservice architecture and direct GitHub commit links."
    },
    tutorial: {
      title: "The Tutorial Trap",
      tip: "Watching 50 hours of YouTube tutorials without writing architecture is NOT building skills.",
      fix: "Work in Agile sprints, resolve Git merge conflicts, write modular APIs, and containerize using Docker."
    },
    interview: {
      title: "The Live Code Test",
      tip: "Tech leads don't ask definition questions anymore. They want to see live deployed cloud projects.",
      fix: "Deploy your project live to AWS/Vercel with automated CI/CD and be ready to explain your database architecture."
    }
  };

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        
        {/* Provocative Header That Makes Students Pause and Think */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">A 60-SECOND REALITY CHECK</span>
          <h2>15 Lakh Graduates. Zero Callbacks. Are You Making This Mistake?</h2>
          <p className="section-subtitle">
            Read this before you apply to another tech job.
          </p>
        </div>

        {/* Short, Gripping Narrative Story Card */}
        <div className="story-container-compact" data-aos="fade-up">
          
          <div className="compact-story-box">

            {/* Paragraph 1: The Numbers Problem */}
            <p className="story-p-short">
              Every year, over <strong className="glow-keyword">15 Lakh engineering students</strong> graduate in India. But for every single entry-level job opening, more than <strong>1,000 applicants</strong> fight for the seat. Most students send out 200+ applications on LinkedIn and Naukri — and receive nothing but dead silence.
            </p>

            {/* Automatic Thought Cloud Pop-up 1 */}
            <div className={`thought-cloud-wrapper ${showCloud1 ? "visible" : ""}`}>
              <div className="thought-cloud-bubble cloud-orange" onClick={() => setSelectedInsight("ats")}>
                <div className="cloud-inner">
                  <div className="cloud-avatar">💭</div>
                  <div className="cloud-text">
                    <span className="cloud-title">STUDENT THINKS:</span>
                    <p className="cloud-query">"Wait... Does my resume even pass the 6-second ATS bot filter, or am I getting rejected automatically?"</p>
                  </div>
                </div>
                <div className="cloud-tail">
                  <span className="tail-dot d-1"></span>
                  <span className="tail-dot d-2"></span>
                  <span className="tail-dot d-3"></span>
                </div>
              </div>
            </div>

            {/* Paragraph 2: The Real Reason */}
            <p className="story-p-short">
              Why? Because colleges only taught textbook definitions. Resumes are filled with the same copied YouTube clones — a <em>ToDo list</em>, a <em>Calculator</em>, or a <em>Weather app</em>. Automated ATS bots scan them and discard them in six seconds without a human ever reading them.
            </p>

            {/* Automatic Thought Cloud Pop-up 2 */}
            <div className={`thought-cloud-wrapper ${showCloud2 ? "visible" : ""}`}>
              <div className="thought-cloud-bubble cloud-blue" onClick={() => setSelectedInsight("tutorial")}>
                <div className="cloud-inner">
                  <div className="cloud-avatar">💭</div>
                  <div className="cloud-text">
                    <span className="cloud-title">STUDENT THINKS:</span>
                    <p className="cloud-query">"Am I just stuck in tutorial hell watching videos, instead of building real production systems?"</p>
                  </div>
                </div>
                <div className="cloud-tail">
                  <span className="tail-dot d-1"></span>
                  <span className="tail-dot d-2"></span>
                  <span className="tail-dot d-3"></span>
                </div>
              </div>
            </div>

            {/* Paragraph 3: The Interview Reality */}
            <p className="story-p-short">
              And if you reach a technical round, interviewers won't ask: <em>"What is OOPs?"</em>. They ask: <em>"How did you resolve Git merge conflicts? What happens if your API crashes under 10k users? Show me your live deployed cloud code."</em> Rote learners freeze immediately.
            </p>

            {/* Automatic Thought Cloud Pop-up 3 */}
            <div className={`thought-cloud-wrapper ${showCloud3 ? "visible" : ""}`}>
              <div className="thought-cloud-bubble cloud-green" onClick={() => setSelectedInsight("interview")}>
                <div className="cloud-inner">
                  <div className="cloud-avatar">💭</div>
                  <div className="cloud-text">
                    <span className="cloud-title">STUDENT THINKS:</span>
                    <p className="cloud-query">"Can I actually show a live deployed project on GitHub, or does my code only run on localhost?"</p>
                  </div>
                </div>
                <div className="cloud-tail">
                  <span className="tail-dot d-1"></span>
                  <span className="tail-dot d-2"></span>
                  <span className="tail-dot d-3"></span>
                </div>
              </div>
            </div>

            {/* The Pivot: Why Codewizen */}
            <div className="story-solution-highlight">
              <h3>🚀 The Codewizen Shift: 100% Real-Time Projects</h3>
              <p>
                This is why students choose us. We skip outdated theory. You join <strong>100% Live Online cohorts</strong>, write enterprise code in <strong>Agile Jira sprints</strong>, resolve Git PRs, and deploy live microservices to <strong>AWS Cloud</strong>. In interviews, you don't sound like a fresher — you talk with the authority of an active software engineer.
              </p>
            </div>

          </div>

          {/* Quick Reality Stats Strip */}
          <div className="reality-stats-strip">
            <div className="rss-item">
              <strong>15 Lakh+</strong>
              <span>Yearly Grads in India</span>
            </div>
            <div className="rss-item">
              <strong style={{ color: '#ea580c' }}>75%+</strong>
              <span>Resumes Rejected by ATS</span>
            </div>
            <div className="rss-item">
              <strong style={{ color: '#10b981' }}>100%</strong>
              <span>Real-Time Live Projects</span>
            </div>
          </div>

        </div>

      </div>

      {/* Quick Insight Mini-Modal when student clicks a cloud */}
      {selectedInsight && (
        <div className="insight-modal-overlay" onClick={() => setSelectedInsight(null)}>
          <div className="insight-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="imc-header">
              <div className="imc-badge"><FaLightbulb /> REALITY INSIGHT</div>
              <button className="imc-close" onClick={() => setSelectedInsight(null)}><FaTimes /></button>
            </div>
            <h4>{insightData[selectedInsight].title}</h4>
            <div className="imc-block alert">
              <FaExclamationCircle className="imc-icon" />
              <p><strong>The Trap:</strong> {insightData[selectedInsight].tip}</p>
            </div>
            <div className="imc-block success">
              <FaCheck className="imc-icon" />
              <p><strong>The Fix with Codewizen:</strong> {insightData[selectedInsight].fix}</p>
            </div>
            <button className="imc-btn" onClick={() => setSelectedInsight(null)}>Got it, back to story</button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Benefits;
