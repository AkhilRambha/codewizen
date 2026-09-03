import React from 'react';
import { FaChalkboardTeacher, FaClock, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import useFirebaseData from '../../../hooks/useFirebaseData';
import './BatchDetails.css';

const BatchDetails = ({ 
  courseName = "",
}) => {
  const [batches] = useFirebaseData('codewizen_batches', []);
  const [courses] = useFirebaseData('codewizen_courses', []);
  
  // Find upcoming batches for this course
  const courseBatches = courseName 
    ? batches.filter(b => b.course.toLowerCase().includes(courseName.toLowerCase()) && b.status === 'Upcoming')
    : [];

  const courseData = courseName
    ? courses.find(c => c.name.toLowerCase().includes(courseName.toLowerCase()))
    : null;

  return (
    <section className="batch-details-section">
      <div className="batch-details-container">
        <div className="batch-header" data-aos="fade-up">
          <h2>Batch Details & Schedule</h2>
          <p>Choose a learning format and schedule that fits your lifestyle</p>
        </div>

        {courseBatches.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
            <h3 style={{ color: '#64748b', fontSize: '20px' }}>No upcoming batches scheduled for {courseName} yet.</h3>
            <p style={{ color: '#94a3b8', marginTop: '10px' }}>Please contact us or check back later!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {courseBatches.map((batch, index) => (
              <div key={batch.id} className="batch-cards-grid" style={{ background: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.4)', borderRadius: '12px', padding: '15px' }}>
                <div className="batch-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="b-card-icon">
                    <FaChalkboardTeacher />
                  </div>
                  <div className="b-card-label">Next Batch Starts</div>
                  <div className="b-card-value">{batch.date}</div>
                </div>

                <div className="batch-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="b-card-icon">
                    <FaClock />
                  </div>
                  <div className="b-card-label">Session Time</div>
                  <div className="b-card-value">{batch.time}</div>
                </div>

                <div className="batch-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="b-card-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="b-card-label">Course Duration</div>
                  <div className="b-card-value">{batch.duration}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {courseData?.curriculumPdf && (
          <div className="batch-action" data-aos="fade-up" data-aos-delay="400">
            <a href={courseData.curriculumPdf} download={`${courseName}_Curriculum.pdf`} className="download-curriculum-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Download Curriculum <FaDownload />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BatchDetails;
