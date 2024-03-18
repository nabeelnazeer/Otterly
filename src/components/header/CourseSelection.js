import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './CourseSelection.css'; // Import CSS file for styling

const CourseSelection = () => {
  const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <div className="course-selection">
      <h2>Choose a Course</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <Link key={index} to={`/${course}`} className="course-item">
            {course}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseSelection;
