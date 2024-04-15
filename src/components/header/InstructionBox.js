import React, { useState } from 'react';
import "./InstructionBox.css";

const InstructionBox = () => {
  const [step, setStep] = useState(1); // State to keep track of the current step
  
  // Function to handle the "Next" button click
  const handleNextClick = () => {
    // Update the step state to move to the next step
    setStep(step + 1);
  };

  // Function to render instructions based on the current step
  const renderInstructions = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Welcome username!</h2>
            <p>Type in a Doctype at the beginning of your HTML code:</p>
            <p>A Document Type Declaration (DOCTYPE) is an instruction that tells the web browser about the version of HTML the page is written in. It's crucial for the browser to render the page correctly and follow the standards.</p>
            <ol>
              <li>Type: &lt;!DOCTYPE html&gt;</li>
            </ol>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Define the Structure</h2>
            <p>Add HTML, body, and main elements to structure your document:</p>
            <p>The <strong>HTML</strong> element represents the root of an HTML document. It wraps all content on the entire page.</p>
            <p>The <strong>body</strong> element contains the content of the HTML document, such as text, images, links, etc. It represents the content of the document that is directly visible to the user.</p>
            <p>The <strong>main</strong> element represents the main content of the document. It should contain the primary content of the page, excluding any header, footer, or navigation elements.</p>
            <ol>
              <li>Add: &lt;html&gt;&lt;body&gt;&lt;main&gt;</li>
            </ol>
            
          </div>
        );
      // Add more cases for additional steps if needed
      default:
        return ("hooray you completed the project");
    }
  };

  return (
    <div className="instruction-box">
      <div className="instruction-content">
        {renderInstructions()}
      </div>
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default InstructionBox;
