import React from 'react';
import './Overview.css';
// import lottie from "lottie-react"

const Overview = () => {
  return (
    <div className="overview">
      <h2 className="overview__title">Learn to Code for Free</h2>
      <h3 className="overview__subtitle">Build Projects. Help an Otter Friend.</h3>
      <h3 className="overview__subtitle">Interactive Learning Experience.</h3>
      <p className="overview__text">
        Welcome to <span className="overview__brand">Otterly</span>, your one-stop shop for mastering web development in a fun and interactive way! Forget boring tutorials – Otterly throws you into a gamified world where you'll learn by doing, with a friendly virtual assistant by your side to guide you through challenges.
       
      </p>
      <div>
        {/* <lottie/> */}
      </div>
    </div>
    
  );
};

export default Overview;
