// src/components/LoginForm.jsx

import React, { useState } from 'react';
import './Auth.css';

function LoginForm({ onToggleView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('normal'); // 'normal' or 'verified'

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- LOGIN LOGIC ---
    // Send this data to your backend:
    console.log('Login attempt:', { email, password, userType });
    // Example: api.login(email, password, userType)...
  };

  return (
    <div className="auth-container">
      <h1 className="auth-logo">FaunaFlux</h1>
      <h2 className="auth-title">Access Your Account</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <div className="form-extras">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="auth-button">
          LOGIN
        </button>
      </form>

      <p className="auth-switch-link">
        New to FaunaFlux? <span onClick={onToggleView}>Sign Up Now</span>
      </p>
    </div>
  );
}

export default LoginForm;