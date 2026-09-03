import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock, FaUser } from 'react-icons/fa';
import useFirebaseData from '../../hooks/useFirebaseData';
import './Admin.css';

const AdminLogin = () => {
  const [adminPassword, , isReady] = useFirebaseData('codewizen_admin_password', 'admin@codewizen');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === adminPassword) {
      // Successful login
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-login-icon">
            <FaUserShield />
          </div>
          <h2>Admin Portal</h2>
          <p>Sign in to manage Codewizen content</p>
        </div>

        {error && <div className="admin-login-error">{error}</div>}

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="admin-input-group">
            <FaUser className="admin-input-icon" />
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="admin-input-group">
            <FaLock className="admin-input-icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="admin-login-btn" disabled={!isReady}>
            {!isReady ? 'Connecting to Database...' : 'Login to Dashboard'}
          </button>
        </form>

        <div className="admin-login-footer">
          <a href="/">← Back to Website</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
