import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/header/Dashboard';
import ImageComponent from './components/header/ImageComponent';
import ButtonComponent from './components/header/ButtonComponent';
import HorizontalBlock from './components/header/HorizontalBlock';
import CourseSelection from './components/header/CourseSelection';
import CopyrightComponent from './components/header/CopyrightComponent';
import LoginSignup from './components/header/LoginSignup';
import HTML from './components/header/HTML';
import Overview from './components/header/Overview';
import LearnPortal from './components/header/LearnPortal';
import Profile from './components/header/profile';

function App() {
  const user = localStorage.getItem("token")

  return (
    <div className="App">
      <Routes>
        (user && <Route path="/" element={<MainPage />} />)
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/HTML" element={<HTML />} />
        <Route path="/LearnPortal" element={<LearnPortal />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

function MainPage() {
  return (
    <>
      <Dashboard />
      <Overview />
      <div className="centered-container">
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
