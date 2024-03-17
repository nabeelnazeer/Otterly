import React from 'react';
import './header/LoginSignup.css';

// Define the LoginSignup component
function LoginSignup() {
  return (
    <div className="login-signup-container">
      {/* Render the HTML content directly */}
      <iframe src={`${process.env.PUBLIC_URL}/LoginSignup.html`} title="Login/Signup" className="login-signup-iframe" />
    </div>
  );
}

export default LoginSignup;
