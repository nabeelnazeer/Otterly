import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/header/Dashboard';
import ImageComponent from './components/header/ImageComponent';
import ButtonComponent from './components/header/ButtonComponent';
import HorizontalBlock from './components/header/HorizontalBlock';
import CourseSelection from './components/header/CourseSelection';
import CopyrightComponent from './components/header/CopyrightComponent';

// import LearnWindow from './components/header/LearnWindow.js';

import LoginSignup from './components/header/LoginSignup';
// import UtilityPage from './components/header/UtilityPage'; // Import the UtilityPage component
import HTML from './components/header/HTML';
import Overview from './components/header/Overview';
import LearnPortal from './components/header/LearnPortal';
import Profile from './components/header/profile';
// import image from "src/components/header/otterTeach.png";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for the main page content */}
          <Route path="/" element={<MainPage />} />

          {/* Define the route for the UtilityPage component */}

         {/* <LearnPortal/> */}

          <Route path="/LoginSignup" element={<LoginSignup />} />
         
          <Route path = "/HTML" element={<HTML/>} />

          <Route path = "/LearnPortal" element ={<LearnPortal/>}/>
          
          <Route path="/" exact element={<LoginSignup/>} />
          <Route path="/profile" element={<Profile/>} />

          {/* <Route path = "/profile" element = {<Profile/>}/> */}

          {/* <Route path = "/image" elemet = {<image/>}/> */}

        </Routes>
      </div>
    </Router>
  );
}

// Define the component for the main page content
function MainPage() {
  return (
    <>
      <Dashboard />
      <Overview/>
      <div className = "centered-container">
      <div className="button-container">
        <ButtonComponent />
        <ImageComponent />
        <HorizontalBlock />
      </div>
      </div>
      <div className="button-container">
        <div className="centered-container">
          <CourseSelection />
        </div>
        <ButtonComponent />
      </div>
      <CopyrightComponent />
    </>
  );
}

export default App;