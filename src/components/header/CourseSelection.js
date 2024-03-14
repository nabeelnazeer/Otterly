import React from 'react';
import './CourseSelection.css'; // Import CSS file for styling

const CourseSelection = () => {
  const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <div className="course-selection">
      <h2>Choose a Course</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSelection;
