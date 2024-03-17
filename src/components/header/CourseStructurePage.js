import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for icons
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Import the book icon
import './CourseStructurePage.css'; // Import CSS file for styling
import Dashboard from './Dashboard'; // Import Dashboard component
// import ModuleDropdown from './ModuleDropdown';
import CourseTable from './CourseTable';
import CopyrightComponent from './CopyrightComponent';

const CourseStructurePage = () => {
  return (
    <div>
      <Dashboard /> {/* Include the Dashboard component */}
      <div className="course-structure">
        <h2>Course Structure</h2>
        <div className="course-list">
          <div className="course-item">
            <FontAwesomeIcon icon={faBook} className="course-icon" /> {/* Icon */}
            <h3 className="course-title">HTML Course</h3>
            <p className="course-description">HTML (Hypertext Markup Language) is the backbone of web content, providing the structure and semantics for webpages. In this Responsive Web Design Certification, you'll embark on a journey to master HTML, starting with the construction of a delightful cat photo app. Through this hands-on project, you'll learn the essential elements of HTML, including headings, paragraphs, lists, links, and images. As you progress, you'll gain a deeper understanding of how to organize and present content effectively, ensuring accessibility and search engine optimization. With HTML, you'll have the power to create visually appealing and semantically meaningful webpages, laying the foundation for a rich and engaging user experience.</p>
            <CourseTable/>
            <button>
  <span> Begin!
  </span>
</button>
          </div>
         </div>
      </div>
      <CopyrightComponent/>
    </div>
  
  );
};

export default CourseStructurePage;
