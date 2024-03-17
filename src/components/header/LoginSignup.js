// import React from 'react';
// import './LoginSignup.css';

// // Define the LoginSignup component
// function LoginSignup() {
//   return (
//     <div className="login-signup-container">
//       {/* Render the HTML content directly */}
//       <iframe src={`${process.env.PUBLIC_URL}/LoginSignup.html`} title="Login/Signup" className="login-signup-iframe" />
//     </div>
//   );
// }

// export default LoginSignup;

// LoginSignup.js
import React from 'react';
import './LoginSignup.css';
import Dashboard from './Dashboard';

// Define the LoginSignup component
function LoginSignup() {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      {/* <div>
        <Dashboard/>
      </div> */}
      <div className="login">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">LOG IN</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button>Log in</button>
        </form>
      </div>

      <div className="register">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">SIGN UP</label>
          <input className="input" type="text" name="txt" placeholder="Name your Otter" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
