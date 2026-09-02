import React from 'react';
import { FaChalkboardTeacher, FaClock, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import useLocalStorage from '../../../hooks/useLocalStorage';
import './BatchDetails.css';

const BatchDetails = ({ 
  courseName = "",
  nextBatch = "Upcoming Week", 
  sessionTime = "08:00 AM TO 10:00 AM", 
  duration = "3 months" 
}) => {
  const [batches] = useLocalStorage('codewizen_batches', []);
  
  // Find the first upcoming batch for this course, if courseName is provided
  const courseBatch = courseName 
    ? batches.find(b => b.course.toLowerCase().includes(courseName.toLowerCase()) && b.status === 'Upcoming')
    : null;

  const displayDate = courseBatch ? courseBatch.date : nextBatch;
  const displayTime = courseBatch ? courseBatch.time : sessionTime;
  const displayDuration = (courseBatch && courseBatch.duration) ? courseBatch.duration : duration;

  return (
    <section className="batch-details-section">
      <div className="batch-details-container">
        <div className="batch-header" data-aos="fade-up">
          <h2>Batch Details & Schedule</h2>
          <p>Choose a learning format and schedule that fits your lifestyle</p>
        </div>

        <div className="batch-cards-grid">
          
          <div className="batch-card" data-aos="fade-up" data-aos-delay="100">
            <div className="b-card-icon">
              <FaChalkboardTeacher />
            </div>
            <div className="b-card-label">Next Batch Starts</div>
            <div className="b-card-value">{displayDate}</div>
          </div>

          <div className="batch-card" data-aos="fade-up" data-aos-delay="200">
            <div className="b-card-icon">
              <FaClock />
            </div>
            <div className="b-card-label">Session Time</div>
            <div className="b-card-value">{displayTime}</div>
          </div>

          <div className="batch-card" data-aos="fade-up" data-aos-delay="300">
            <div className="b-card-icon">
              <FaCalendarAlt />
            </div>
            <div className="b-card-label">Course Duration</div>
            <div className="b-card-value">{displayDuration}</div>
          </div>

        </div>

        <div className="batch-action" data-aos="fade-up" data-aos-delay="400">
          <button className="download-curriculum-btn">
            Download Curriculum <FaDownload />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BatchDetails;
