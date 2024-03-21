import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './HTML.css';
import Dashboard from './Dashboard';
import CourseTable from './CourseTable';
import { Link } from 'react-router-dom';

const HTML = () => {
  return (
    <div>
      <Dashboard />
      <div className="course-structure">
        <h2>Course Structure</h2>
        <div className="course-list">
          <div className="course-item">
            <FontAwesomeIcon icon={faBook} className="course-icon" />
            <h3 className="course-title">HTML Course</h3>
            <p className="course-description">HTML (Hypertext Markup Language) is the backbone of web content, providing the structure and semantics for webpages. In this Responsive Web Design Certification, you'll embark on a journey to master HTML, starting with the construction of a delightful cat photo app. Through this hands-on project, you'll learn the essential elements of HTML, including headings, paragraphs, lists, links, and images. As you progress, you'll gain a deeper understanding of how to organize and present content effectively, ensuring accessibility and search engine optimization. With HTML, you'll have the power to create visually appealing and semantically meaningful webpages, laying the foundation for a rich and engaging user experience.</p>
            <CourseTable />
            {/* Link to LearnPortal with onClick event to togglePreview */}
            <Link to='/LearnPortal'>
              <button className="button begin-button" >
                <span>
                  Begin!
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML;
