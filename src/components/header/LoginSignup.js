import React, { useState } from 'react';
import './LoginSignup.css';
import { signInWithGoogle } from './auth';
import Dashboard from './Dashboard';

function LoginSignup() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional login/signup logic here
    window.location.href = '/profile';
  };

  return (
    <div className="main">
      <div className="login">
        <form className={`form ${showSignUp ? 'hidden' : ''}`} onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true" onClick={handleToggleSignUp}>LOG IN</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Log in</button>
          <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            Remember Me
          </label>
        </form>
      </div>

      <div className={`register ${showSignUp ? 'show' : ''}`}>
        <form className={`form ${showSignUp ? '' : 'hidden'}`} onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true" onClick={handleToggleSignUp}>SIGN UP</label>
          <input className="input" type="text" name="txt" placeholder="Name your Otter" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Sign up</button>
          <button type="button" onClick={handleSignInWithGoogle}>Sign in with Google</button>
        </form>
      </div>

      <div>
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default LoginSignup;
