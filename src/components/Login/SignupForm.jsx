// src/components/SignUpForm.jsx

import React, { useState } from 'react';
import './Auth.css';

function SignUpForm({ onToggleView }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [idProof, setIdProof] = useState(null); // State to hold the file
  const [userType, setUserType] = useState('normal'); // 'normal' or 'verified'
  const [terms, setTerms] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!terms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    // --- SIGNUP LOGIC ---
    // We must use FormData because we are uploading a file.
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('userType', userType);

    if (userType === 'verified') {
      if (!organizationName || !idProof) {
        alert('Verified users must provide an organization and ID proof.');
        return;
      }
      formData.append('organizationName', organizationName);
      formData.append('idProof', idProof);
    }

    // --- Send this data to your backend ---
    // Your API endpoint must be set up to handle 'multipart/form-data'
    console.log('--- Sign-Up Data (as FormData) ---');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Example of how you would send this to a server:
    // fetch('/api/signup', {
    //   method: 'POST',
    //   body: formData, // Send formData, not JSON
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="auth-container">
      <h1 className="auth-logo">FaunaFlux</h1>
      <h2 className="auth-title">Create Your Account</h2>

      <div className="auth-toggle">
        <span
          className={`toggle-option ${userType === 'normal' ? 'active' : ''}`}
          onClick={() => setUserType('normal')}
        >
          Normal User
        </span>
        <span
          className={`toggle-option ${userType === 'verified' ? 'active' : ''}`}
          onClick={() => setUserType('verified')}
        >
          Verified User
        </span>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            // Dynamic placeholder
            placeholder={
              userType === 'verified'
                ? 'Organizational Email'
                : 'Email'
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* --- Conditional Fields for Verified Users --- */}
        {userType === 'verified' && (
          <>
            <div className="input-group">
              <input
                type="text"
                placeholder="Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="id-proof-upload" className="file-upload-label">
                <span className="file-upload-text">
                  {idProof ? idProof.name : "Upload ID Proof"}
                </span>
                <svg
                  className="file-upload-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </label>
              <input
                id="id-proof-upload" // ID must match the label's htmlFor
                className="file-upload-input" // Class to hide it
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={(e) => setIdProof(e.target.files[0])}
                required
              />
            </div>
          </>
        )}
        {/* --- End Conditional Fields --- */}

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword1(!showPassword1)}
          >
            {showPassword1 ? 'Hide' : 'Show'}
          </span>
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword2(!showPassword2)}
          >
            {showPassword2 ? 'Hide' : 'Show'}
          </span>
        </div>

        <div className="form-extras">
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            I agree to the <a href="/terms">Terms & Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="auth-button">
          SIGN UP
        </button>
      </form>

      <p className="auth-switch-link">
        Already have an account? <span onClick={onToggleView}>Login</span>
      </p>
    </div>
  );
}

export default SignUpForm;