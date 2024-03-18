import React from 'react';
import './ButtonComponent.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';


const ButtonComponent = () => {
  return (
    // <button className="button">
    //   Get Started (It's Free)
    // </button>
    <div>
      <Link to ="./LoginSignup" >
        <button className='button get-started-button'>
          Get Started (It's Free)
        </button>
      </Link>
    </div>
  );
};

export default ButtonComponent;
