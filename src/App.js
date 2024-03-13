import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/header/Dashboard';
import ImageComponent from './components/header/ImageComponent'; // Import the ImageComponent
import ButtonComponent from './components/header/ButtonComponent';
import HorizontalBlock from './components/header/HorizontalBlock';

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
      </div>
    </Router>
  );
}

export default App;
