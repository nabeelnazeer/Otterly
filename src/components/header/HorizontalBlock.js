import React from 'react';
import './HorizontalBlock.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon if using Font Awesome icons

const HorizontalBlock = ({ children }) => {
  return (
    <div className="horizontal-block">
      <h1 className="title">Courses Offered:</h1>
      <div className="company-icons">
        {/* Add icons here */}
        <FontAwesomeIcon icon="fagoogle" className="icon" />
        <FontAwesomeIcon icon="apple" className="icon" />
        <FontAwesomeIcon icon="amazon" className="icon" />
        {/* Add more icons as needed */}
      </div>
      {children}
    </div>
  );
};

export default HorizontalBlock;
