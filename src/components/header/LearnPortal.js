import React, { useState } from 'react';
import Dashboard from './Dashboard';
import LearnWindow from './LearnWindow';
// import LearnHTMLPreview from './HTMLPreview'; // Import the HTML preview component
import HTMLPreview from './HTMLPreview';

function LearnPortal() {
  const [showPreview, setShowPreview] = useState(false); // State to control the visibility of the HTML preview

  // Function to toggle the visibility of the HTML preview
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div>
      <Dashboard />
      <LearnWindow />
      {/* Conditionally render the HTML preview if showPreview is true */}
      {showPreview && <HTMLPreview/>}
    </div>
  );
}

export default LearnPortal;
