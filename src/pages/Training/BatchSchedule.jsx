import React from 'react';
import PageHero from '../../components/common/PageHero/PageHero';
import { Link } from 'react-router-dom';
import useFirebaseData from '../../hooks/useFirebaseData';

const BatchSchedule = () => {
  const [batches] = useFirebaseData('codewizen_batches', [
    { id: 1, course: "Java Full Stack", date: "Oct 10, 2026", time: "10:00 AM - 12:00 PM", status: "Upcoming" },
    { id: 2, course: "Data Science & ML", date: "Oct 15, 2026", time: "06:00 PM - 08:00 PM", status: "Upcoming" }
  ]);

  return (
    <>
      <PageHero 
        title="Batch Schedule" 
        description="Discover comprehensive details and insights about our upcoming batches program."
        breadcrumbs={[
          { label: "Training", link: "/training" },
          { label: "Batch Schedule" }
        ]}
      />
      
      <section className="generic-page-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div data-aos="fade-up">
          <h2 style={{ color: '#112255', marginBottom: '20px', fontSize: '32px', textAlign: 'center' }}>Live Batch Schedule</h2>
          <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8', marginBottom: '50px', textAlign: 'center' }}>
            Our programs are designed by industry experts. Find the perfect batch that fits your schedule.
          </p>
          
          <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            {batches.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No upcoming batches scheduled at the moment. Please check back later!</div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '20px', color: '#112255', fontWeight: 'bold' }}>Course Name</th>
                    <th style={{ padding: '20px', color: '#112255', fontWeight: 'bold' }}>Start Date</th>
                    <th style={{ padding: '20px', color: '#112255', fontWeight: 'bold' }}>Timings</th>
                    <th style={{ padding: '20px', color: '#112255', fontWeight: 'bold' }}>Status</th>
                    <th style={{ padding: '20px', color: '#112255', fontWeight: 'bold' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {batches.map((batch) => (
                    <tr key={batch.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '20px', fontWeight: 'bold', color: '#ea580c' }}>{batch.course}</td>
                      <td style={{ padding: '20px', color: '#475569' }}>{batch.date}</td>
                      <td style={{ padding: '20px', color: '#475569' }}>{batch.time}</td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '5px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                          {batch.status}
                        </span>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <Link to="/contact-us" style={{ background: '#112255', color: '#fff', padding: '8px 15px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
                          Enquire Now
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BatchSchedule;
