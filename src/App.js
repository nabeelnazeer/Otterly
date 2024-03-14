import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/header/Dashboard';
import ImageComponent from './components/header/ImageComponent'; // Import the ImageComponent
import ButtonComponent from './components/header/ButtonComponent';
import HorizontalBlock from './components/header/HorizontalBlock';
import CourseSelection from './components/header/CourseSelection';
import CopyrightComponent from './components/header/CopyrightComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
        
        <div className="button-container">
          <ButtonComponent />
          <ImageComponent />
          <HorizontalBlock />
        </div>*
        <div className="button-container">
          <div className="centered-container">
            <CourseSelection />
          </div>
          <ButtonComponent />
        </div>
        
        <CopyrightComponent />
      </div>
    </Router>
  );
}

export default App;
