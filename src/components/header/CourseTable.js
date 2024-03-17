import React, { useState } from 'react';
import './CourseTable.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CourseTable = () => {
  const [showModules, setShowModules] = useState(false);

  const toggleModules = () => {
    setShowModules(!showModules);
  };

  // Generate 69 module boxes
  const moduleBoxes = [];
  for (let i = 1; i <= 69; i++) {
    moduleBoxes.push(<div className="module-box" key={i}>{i}</div>);
  }

  return (
    <div className="container">
      <h2>HTML Project</h2>
      <div className="course">
        <h3>HTML - Building a Cat Photo App</h3>
        <p>Learn HTML by building a delightful cat photo app. Master essential elements like headings, paragraphs, lists, links, and images.</p>
        <div className="dropdown" onClick={toggleModules}>
          <span className="arrow"><FontAwesomeIcon icon={faAngleDown} /></span>
          <div className={`modules ${showModules ? 'show' : 'hide'}`}>
            {moduleBoxes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
