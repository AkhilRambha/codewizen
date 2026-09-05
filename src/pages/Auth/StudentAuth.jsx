import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import emailjs from '@emailjs/browser';
import './StudentAuth.css';

const StudentAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [authStep, setAuthStep] = useState('credentials'); // credentials, otp
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = '/profile'; // Always go to learning page after login

  // Check if already authenticated and verified on this device
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const isDeviceVerified = localStorage.getItem(`codewizen_device_verified_${user.email}`);
        if (isDeviceVerified === 'true') {
          navigate(from, { replace: true });
        } else {
          // Logged in via Firebase but not verified via OTP on this device
          setAuthStep('otp');
          if (!generatedOtp) {
            sendOtp(user.email, user.displayName || 'Student');
          }
        }
      }
    });
    return unsubscribe;
  }, [navigate, from, generatedOtp]);

  const sendOtp = async (userEmail, userName) => {
    setLoading(true);
    try {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(code);
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OTP; // Reusing admin OTP template
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials not set.");
      }
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: userEmail,
          to_name: userName,
          otp: code,
          subject: 'Your Student Dashboard Access Code',
          message: `Welcome back to CodeWizen! Your 6-digit student verification code is: ${code}. Use this to securely access your learning dashboard and courses. Happy Learning!`
        },
        publicKey
      );
      
      setAuthStep('otp');
      setError('');
    } catch (err) {
      console.error('Failed to send OTP:', err);
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        // onAuthStateChanged will handle the rest (send OTP if not verified)
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Note: Firebase Auth doesn't let us easily set displayName during creation in one await step,
        // so we just pass the name variable to sendOtp.
        await sendOtp(userCredential.user.email, name);
      }
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please log in.');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else {
        setError(err.message || 'Authentication failed.');
      }
      setLoading(false);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      // Verified!
      localStorage.setItem(`codewizen_device_verified_${auth.currentUser.email}`, 'true');
      navigate(from, { replace: true });
    } else {
      setError('Invalid OTP code. Please try again.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setAuthStep('credentials');
    setGeneratedOtp(null);
    setOtp('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{authStep === 'otp' ? 'Device Verification' : (isLogin ? 'Student Login' : 'Create Account')}</h2>
        
        {error && <div className="auth-error">{error}</div>}

        {authStep === 'credentials' ? (
          <form onSubmit={handleCredentialsSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required={!isLogin} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required={!isLogin} />
                </div>
              </>
            )}
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
            </div>
            
            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
            </button>
            
            <p className="auth-toggle">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Log in'}</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <p style={{ marginBottom: '20px', color: '#475569', fontSize: '0.95rem' }}>
              To keep your account secure, we sent a 6-digit verification code to <strong>{auth.currentUser?.email || email}</strong>. Please enter it below to access your courses on this device.
            </p>
            
            <div className="form-group">
              <label>6-Digit OTP Code</label>
              <input 
                type="text" 
                maxLength={6} 
                value={otp} 
                onChange={e => setOtp(e.target.value.replace(/\D/g, ''))} 
                required 
                style={{ letterSpacing: '8px', fontSize: '1.2rem', textAlign: 'center' }}
              />
            </div>
            
            <button type="submit" className="auth-btn" disabled={loading || otp.length !== 6}>
              Verify & Access Courses
            </button>
            
            <p className="auth-toggle" style={{ marginTop: '20px' }}>
              <span onClick={() => sendOtp(auth.currentUser?.email || email, name || 'Student')}>Resend Code</span>
              {' | '}
              <span onClick={handleLogout}>Use different account</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default StudentAuth;
