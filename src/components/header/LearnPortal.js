import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import LearnWindow from './LearnWindow';
import ProjectPreview from './ProjectPreview'; // Import the ProjectPreview component

function LearnPortal() {
  const [showPreview, setShowPreview] = useState(true); // State to control the visibility of the project preview

  // Function to close the project preview
  const handleClosePreview = () => {
    setShowPreview(false);
  };

  useEffect(() => {
    // Code to execute when the component mounts (i.e., when the LearnPortal page loads)
    // You can set a timeout here to display the project preview for a certain duration
    // In this example, I'm just showing it on page load without any timeout
  }, []);

  return (
    <div>
      <Dashboard />
      <LearnWindow />
      {/* Render the project preview if showPreview is true */}
      {showPreview && <ProjectPreview onClose={handleClosePreview} />}
    </div>
  );
}

export default LearnPortal;
