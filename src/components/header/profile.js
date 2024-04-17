import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './profile.css';

function Profile() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const location = useLocation()

  const [name, setName] = useState('Na Bee');
  const [isEditingName, setIsEditingName] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here if needed
    navigate('/'); // Navigate to the login page
  };

  const handleNameEdit = (newName) => {
    setName(newName);
    setIsEditingName(false);
  };

  const handleNameKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameEdit(e.target.value);
    }
  };

  const handleCourseClick = (course) => {
    console.log(`Clicked on course: ${course}`);
    navigate('/HTML');
  };

  return (
    <div className="profile-container"> 
      <div className="profile-info"> 
        <h2>Profile</h2>
        <div className="name-email-section">
          <p>Name: {isEditingName ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleNameKeyPress} /> : name}</p>
          {!isEditingName && (
            <span className="edit-icon" onClick={() => setIsEditingName(true)}>
              &#9998;
            </span>
          )}
        </div>
        <div className="name-email-section">
          <p>Email: na.bee@gmail.com</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Log Out</button> {/* Add className */}
      </div>
      <h3>Courses</h3>
      <div className="progress-bar-wrapper">
        <div className="progress-line"></div>
        <div className="course-nodes">
          <div className="node" onClick={() => handleCourseClick('HTML')}>
            <span className="node-text">HTML</span>
          </div>
          <div className="node" onClick={() => handleCourseClick('CSS')}>
            <span className="node-text">CSS</span>
          </div>
          <div className="node" onClick={() => handleCourseClick('React')}>
            <span className="node-text">React</span>
          </div>
          <div className="node" onClick={() => handleCourseClick('Express')}>
            <span className="node-text">Express</span>
          </div>
          <div className="node" onClick={() => handleCourseClick('Node')}>
            <span className="node-text">Node</span>
          </div>
          <div className="node" onClick={() => handleCourseClick('MongoDB')}>
            <span className="node-text">MongoDB</span>
          </div>
        </div>
      </div>
      <div className="notes">
        <h3>My Notes</h3>
        <a href="notes.html">View My Notes</a>
      </div>
    </div>
  );
}

export default Profile;
