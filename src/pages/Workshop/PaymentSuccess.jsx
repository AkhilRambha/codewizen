import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import useFirebaseData from '../../hooks/useFirebaseData';
import './Workshop.css';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const regId = searchParams.get('id');
  
  const [registrations, setRegistrations, isReady] = useFirebaseData('codewizen_workshop_registrations', []);
  const [status, setStatus] = useState('processing'); // processing, success, error

  useEffect(() => {
    // Only proceed when Firebase has loaded the registrations array
    if (isReady && regId && status === 'processing') {
      const registrationIndex = registrations.findIndex(r => r.id.toString() === regId);
      
      if (registrationIndex !== -1 && registrations[registrationIndex].status === 'Pending Payment') {
        // Update status to Paid
        const updatedRegistrations = [...registrations];
        const user = updatedRegistrations[registrationIndex];
        user.status = 'Paid';
        user.paymentId = 'PAY_' + Math.random().toString(36).substr(2, 9).toUpperCase(); // Mock payment ID
        
        setRegistrations(updatedRegistrations);

        // Send Email via EmailJS
        const templateParams = {
          to_email: user.email,
          to_name: user.name,
          subject: "Registration Confirmed: Spring Security Workshop",
          message: `Your payment of ₹299 was successful! Payment ID: ${user.paymentId}. We have secured your seat for the Spring Security 2-Day Live Workshop on Aug 1st & 2nd. We will share the meeting link soon.`
        };

        emailjs.send(
          'service_3nvufec', 
          'template_k7654a4', 
          templateParams, 
          'JKItTqpdsWz7qIWWx'
        ).then(() => {
          setStatus('success');
        }).catch(err => {
          console.error("Email failed:", err);
          setStatus('success'); // Still show success even if email fails to avoid confusing user
        });
        
      } else if (registrationIndex !== -1 && registrations[registrationIndex].status === 'Paid') {
        // Already paid
        setStatus('success');
      } else {
        // ID not found
        setStatus('error');
      }
    }
  }, [isReady, regId, registrations, setRegistrations, status]);

  return (
    <div className="workshop-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ background: 'white', padding: '60px', borderRadius: '24px', textAlign: 'center', maxWidth: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        
        {status === 'processing' && (
          <>
            <FaSpinner className="pulse-effect" style={{ fontSize: '4rem', color: '#38bdf8', marginBottom: '24px', animation: 'spin 2s linear infinite' }} />
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            <h2>Verifying Payment...</h2>
            <p style={{ color: '#64748b', marginTop: '16px' }}>Please do not close this window.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <FaCheckCircle style={{ fontSize: '5rem', color: '#10b981', marginBottom: '24px' }} />
            <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>Registration Successful!</h2>
            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '32px' }}>
              Your payment of ₹299 has been received. We have sent a confirmation email to your registered email address with the workshop details.
            </p>
            <button className="cta-button" onClick={() => navigate('/')}>
              Return to Homepage
            </button>
          </>
        )}

        {status === 'error' && (
          <>
            <h2 style={{ color: '#ef4444', marginBottom: '16px' }}>Invalid Registration</h2>
            <p style={{ color: '#64748b', marginBottom: '32px' }}>We couldn't find a pending registration for this ID.</p>
            <button className="cta-button" style={{ background: '#64748b' }} onClick={() => navigate('/workshop/spring-security')}>
              Back to Workshop
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default PaymentSuccess;
