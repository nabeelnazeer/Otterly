import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';
import { signInWithGoogle } from './auth';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const url = "https://localhost:3000/api/users"; // Endpoint URL for user registration
      const response = await axios.post(url, formData);
      navigate("/profile"); // Redirect to profile page after successful registration
      console.log(response.data.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        console.error('Error:', error);
      }
    }
    
    try {
      const formData = new FormData(e.target);
      const url = "https://localhost:3000/api/auth"; // Endpoint URL for authentication
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("token", res.data);
      window.location = "/"; // Redirect to homepage after successful authentication
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="main">
      <div className="login">
        <form className={`form ${showSignUp ? 'hidden' : ''}`} onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true" onClick={handleToggleSignUp}>LOG IN</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="password" placeholder="Password" required />
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
          <input className="input" type="text" name="name" placeholder="Name your Otter" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="password" placeholder="Password" required />
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
