import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/header/Dashboard';
import ImageComponent from './components/header/ImageComponent';
import ButtonComponent from './components/header/ButtonComponent';
import HorizontalBlock from './components/header/HorizontalBlock';
import CourseSelection from './components/header/CourseSelection';
import CopyrightComponent from './components/header/CopyrightComponent';
import LoginSignup from './components/header/LoginSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for the main page content */}
          <Route path="/" element={<MainPage />} />

          {/* Define the route for the UtilityPage component */}
          <Route path="/LoginSignup" element={<LoginSignup />} />
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
      <div className="button-container">
        <ButtonComponent />
        <ImageComponent />
        <HorizontalBlock />
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