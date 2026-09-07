import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Admin.css';

// EMAILJS CONFIGURATION PLACEHOLDERS
// Please replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_3nvufec';
const EMAILJS_TEMPLATE_ID = 'template_k7654a4';
const EMAILJS_PUBLIC_KEY = 'JKItTqpdsWz7qIWWx';

const AdminSettings = () => {
  const [adminEmail, setAdminEmail] = useFirebaseData('codewizen_admin_email', 'codewizen@gmail.com');
  const [contactInfo, setContactInfo] = useFirebaseData('codewizen_contact_info', {
    email: 'info@codewizen.com',
    phone: '+91 9676400893',
    whatsapp: '+91 9676400893',
    address: '3rd floor, Besides JC Brothers, beside KPHB metro station, Kukatpally Housing Board Colony, Bhagya Nagar Colony, Hyderabad',
    upiId: 'yourname@upi'
  });

  // Security State
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');

  // Contact State
  const [draftContact, setDraftContact] = useState(contactInfo);

  // OTP State
  const [otpStep, setOtpStep] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [pendingAction, setPendingAction] = useState(null); // 'password' or 'contact'
  const [isSending, setIsSending] = useState(false);

  const [message, setMessage] = useState({ text: '', type: '' });

  const sendOtpEmail = async (otpCode) => {
    setIsSending(true);

    // If keys are placeholders, just simulate it
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID_HERE') {
      setTimeout(() => {
        setIsSending(false);
        setOtpStep(true);
        setMessage({
          text: `[SIMULATION] EmailJS keys missing. OTP is: ${otpCode}. Sent to ${contactInfo.email}`,
          type: 'success'
        });
      }, 1000);
      return;
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OTP || EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: adminEmail, // Now uses the dynamic admin email
          to_name: 'Admin',
          otp: otpCode,
          subject: 'Your Codewizen Admin Verification Code',
          message: `Your Codewizen Admin OTP code is ${otpCode}. Do not share this with anyone.`
        },
        publicKey
      );

      setIsSending(false);
      setOtpStep(true);
      setMessage({ text: `An OTP has been sent securely to ${adminEmail}.`, type: 'success' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSending(false);
      setMessage({ text: 'Failed to send OTP email. Please check your EmailJS configuration.', type: 'error' });
    }
  };

  const initiatePasswordChange = (e) => {
    e.preventDefault();
    if (!newPassword && !newAdminEmail) {
      setMessage({ text: 'Please enter a new password or a new secure email.', type: 'error' });
      return;
    }
    if (newPassword && newPassword !== confirmPassword) {
      setMessage({ text: 'Passwords do not match!', type: 'error' });
      return;
    }
    if (newPassword && newPassword.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setPendingAction('password');
    sendOtpEmail(otpCode);
  };

  const initiateContactChange = (e) => {
    e.preventDefault();
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setPendingAction('contact');
    sendOtpEmail(otpCode);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (enteredOtp === generatedOtp) {
      if (pendingAction === 'password') {
        if (newPassword) setAdminPassword(newPassword);
        if (newAdminEmail) setAdminEmail(newAdminEmail);
        setMessage({ text: 'Security settings updated successfully!', type: 'success' });
        setNewPassword('');
        setConfirmPassword('');
        setNewAdminEmail('');
      } else if (pendingAction === 'contact') {
        setContactInfo(draftContact);
        setMessage({ text: 'Contact details updated successfully!', type: 'success' });
      }
      setEnteredOtp('');
      setOtpStep(false);
      setPendingAction(null);
    } else {
      setMessage({ text: 'Invalid OTP. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Admin Security & Settings</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>

        {/* CONTACT SETTINGS FORM */}
        <div className="admin-table-container" style={{ padding: '30px' }}>
          <div style={{ marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
            <h3><FaPhone style={{ color: '#ea580c', marginRight: '10px' }} /> Contact Details</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginTop: '5px' }}>
              Update the global contact information shown on the website.
            </p>
          </div>

          <form onSubmit={initiateContactChange} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>Admin / Public Email</label>
              <input type="email" required value={draftContact.email} onChange={(e) => setDraftContact({ ...draftContact, email: e.target.value })} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>Phone Number</label>
              <input type="text" required value={draftContact.phone} onChange={(e) => setDraftContact({ ...draftContact, phone: e.target.value })} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>WhatsApp Number</label>
              <input type="text" required value={draftContact.whatsapp} onChange={(e) => setDraftContact({ ...draftContact, whatsapp: e.target.value })} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>Physical Address</label>
              <textarea required rows="3" value={draftContact.address} onChange={(e) => setDraftContact({ ...draftContact, address: e.target.value })} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }}></textarea>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>Payment UPI ID (PhonePe/GPay)</label>
              <input type="text" required value={draftContact.upiId || ''} onChange={(e) => setDraftContact({ ...draftContact, upiId: e.target.value })} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <button type="submit" className="admin-btn-primary" style={{ marginTop: '10px', padding: '12px' }} disabled={isSending}>
              {isSending && pendingAction === 'contact' ? 'Sending OTP...' : 'Save Contact Details (Requires OTP)'}
            </button>
          </form>
        </div>

        {/* SECURITY SETTINGS FORM */}
        <div className="admin-table-container" style={{ padding: '30px' }}>
          <div style={{ marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
            <h3><FaLock style={{ color: '#ea580c', marginRight: '10px' }} /> Security Settings</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginTop: '5px' }}>
              Securely update your admin panel login password and the secure email address where OTPs are sent. (Leave blank to keep unchanged)
            </p>
          </div>

          <form onSubmit={initiatePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>Current Secure Email</label>
              <input type="text" disabled value={adminEmail} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f1f5f9' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>New Secure Email</label>
              <input type="email" value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#112255' }}>Confirm New Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
            </div>
            <button type="submit" className="admin-btn-primary" style={{ marginTop: '10px', padding: '12px' }} disabled={isSending}>
              {isSending && pendingAction === 'password' ? 'Sending OTP...' : 'Save Security Settings (Requires OTP)'}
            </button>
          </form>
        </div>

      </div>

      {/* OTP MODAL */}
      {otpStep && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '400px', textAlign: 'center' }}>
            <FaEnvelope style={{ fontSize: '40px', color: '#ea580c', marginBottom: '15px' }} />
            <h3>OTP Verification</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
              We've sent a 6-digit OTP to <strong>{contactInfo.email}</strong>.
            </p>

            {message.text && (
              <div style={{ marginBottom: '15px', color: message.type === 'error' ? '#dc2626' : '#16a34a', fontSize: '14px' }}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                required
                maxLength="6"
                placeholder="000000"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, ''))}
                style={{ width: '100%', padding: '15px', border: '2px solid #ea580c', borderRadius: '8px', fontSize: '24px', letterSpacing: '8px', textAlign: 'center', outline: 'none' }}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" className="admin-btn-secondary" style={{ flex: 1 }} onClick={() => { setOtpStep(false); setPendingAction(null); setMessage({ text: '', type: '' }); }}>Cancel</button>
                <button type="submit" className="admin-btn-primary" style={{ flex: 1 }}>Verify</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Global Success Messages outside Modal */}
      {!otpStep && message.text && message.type === 'success' && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#10b981', color: 'white', padding: '15px 25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 9999 }}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
