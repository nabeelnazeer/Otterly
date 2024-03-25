import React, { useState } from 'react';
import './LoginSignup.css';
import { signInWithGoogle } from './auth'; // Import authentication service

function LoginSignup() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle(); // Call authentication service method for Google sign-in
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleLabelClick = () => {
    setShowSignUp(!showSignUp); // Toggle the showSignUp state
  };

  return (
    <div className="main">
      <div className="login">
        <form className={`form ${showSignUp ? 'hidden' : ''}`}>
          <label htmlFor="chk" aria-hidden="true" onClick={handleLabelClick}>LOG IN</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button>Log in</button>
          <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            Remember Me
          </label>
        </form>
      </div>
      
      <div className={`register ${showSignUp ? 'show' : ''}`}>
        <form className={`form ${showSignUp ? '' : 'hidden'}`}>
          <label htmlFor="chk" aria-hidden="true" onClick={handleLabelClick}>SIGN UP</label>
          <input className="input" type="text" name="txt" placeholder="Name your Otter" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
          <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
        </form>
      </div>

      <div>
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default LoginSignup;
