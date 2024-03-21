import React from 'react';
import './HTMLPreview.css';

const HTMLPreview = () => {
  return (
    <div className="html-preview-container">
      <div className="html-preview-box">
        <span className="close-btn">&times;</span>
        <h2 className="preview-title">Preview</h2>
        <div className="preview-content">
          {/* Your HTML content goes here */}
          <h1>CatPhotoApp</h1>
          <section>
            <h2>Cat Photos</h2>
            <p>See more <a href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
            <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back." /></a>
          </section>
          {/* More sections go here */}
        </div>
      </div>
    </div>
  );
}

export default HTMLPreview;
