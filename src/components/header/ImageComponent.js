import React from 'react';
import './ImageComponent.css';
import image from './otterTeach.png';

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={image} alt="Description" className="image" />
    </div>
  );
};

export default ImageComponent;
