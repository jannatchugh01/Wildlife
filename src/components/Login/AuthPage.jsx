// src/components/AuthPage.jsx

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import './Auth.css';

// This is the specific image URL from the design you liked

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div
      className="auth-page"
    >
      {isLoginView ? (
        <LoginForm onToggleView={toggleView} />
      ) : (
        <SignUpForm onToggleView={toggleView} />
      )}
    </div>
  );
}

export default AuthPage;