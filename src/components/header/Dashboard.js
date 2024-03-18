import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Overview from './Overview';
import image from './avatar.png';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="nav">
        <div className="nav__left">
          <div className="nav__avatar">
            <img
              src={image}
              alt="Avatar"
              className="nav__avatarImg"
            />
          </div>
          <div className="nav__menu">
            <Link to="/">
              <button className='nav__menuBtn'>Home</button>
            </Link>
          </div>
        </div>
        <div className="nav__center">
          <h1 className="nav__brand">Otterly</h1>
        </div>
        <div className="nav__right">
          <div className="nav__search">
            <input
              type="text"
              className="nav__searchInput"
              placeholder="Search..."
            />
          </div>
        </div>
      </nav>
      {/* <Overview /> */}
    </div>
  );
};

export default Dashboard;
