import React from 'react';
import './ProjectPreview.css'; // Import CSS file for styling
import image1 from "./demo1.png";
import image2 from "./demo2.png";


const ProjectPreview = ({ onClose }) => {
  return (
    <div className="project-preview-container">
      <div className="project-preview-box">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 className="preview-title">Here's a preview of what you will build</h2>
        <div className="image-container">
          <img src={image2} alt="Preview Image 1" className="preview-image" />
          <img src={image1} alt="Preview Image 2" className="preview-image" />
        </div>
        <button className="start-coding-btn" onClick={onClose}>Start Coding</button>
      </div>
    </div>
  );
}

export default ProjectPreview;
