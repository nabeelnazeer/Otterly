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
              {/* Add additional steps here */}
            </ol>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Title</h2>
            <p>Type: <code>&lt;title&gt;CatPhotoApp&lt;/title&gt;</code></p>
            <p>Explanation: Sets the title of the HTML document.</p>
            <p>This element is not self-closing. It requires an opening tag <code>&lt;title&gt;</code> and a closing tag <code>&lt;/title&gt;</code>.</p>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Body Section</h2>
            <p>Type: <code>&lt;body&gt;</code></p>
            <p>Explanation: Begins the body section containing visible content.</p>
            <p>This element is not self-closing. It requires an opening tag <code>&lt;body&gt;</code> and a closing tag <code>&lt;/body&gt;</code>.</p>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Step 5: &lt;main&gt; - Represents the main content of the HTML document.</h2>
            <p>Type: <code>&lt;main&gt;</code></p>
            <p>Explanation: Represents the main content of the HTML document.</p>
            <p>This element is not self-closing. It requires an opening tag <code>&lt;main&gt;</code> and a closing tag <code>&lt;/main&gt;</code>.</p>
          </div>
        );
      case 6:
        return (
          <div>
            <h2>Step 6: Main Heading</h2>
            <p>Type: <code>&lt;h1&gt;CatPhotoApp&lt;/h1&gt;</code></p>
            <p>Explanation: Defines the main heading of the page.</p>
            <p>This element is not self-closing. It requires an opening tag <code>&lt;h1&gt;</code>, the content "CatPhotoApp", and a closing tag <code>&lt;/h1&gt;</code>.</p>
          </div>
        );
      case 7:
        return (
          <div>
            <h2>Step 7: First Section</h2>
            <p>Type: <code>&lt;section&gt;</code></p>
            <p>Explanation: Divides the content into sections.</p>
            <p>This element is not self-closing. It consists of an opening tag <code>&lt;section&gt;</code> and a closing tag <code>&lt;/section&gt;</code>.</p>
          </div>
        );
      case 8:
        return (
          <div>
            <h2>Step 8: Cat Photos Subheading</h2>
            <p>Type: <code>&lt;h2&gt;Cat Photos&lt;/h2&gt;</code></p>
            <p>Explanation: Defines a subheading for the section.</p>
            <p>This element is not self-closing. It consists of an opening tag <code>&lt;h2&gt;</code>, the content "Cat Photos", and a closing tag <code>&lt;/h2&gt;</code>.</p>
          </div>
        );
      case 9:
        return (
          <div>
            <h2>Step 9: Add Link to Cat Photos</h2>
            <p>Type: <code>&lt;!-- TODO: Add link to cat photos --&gt;</code></p>
            <p>Explanation: HTML comment indicating a task to be completed.</p>
          </div>
        );
      case 10:
        return (
          <div>
            <h2>Step 10: Add Link to Cat Photos</h2>
            <p>Type: <code>&lt;p&gt;See more &lt;a target="_blank" href="https://freecatphotoapp.com"&gt;cat photos&lt;/a&gt; in our gallery.&lt;/p&gt;</code></p>
            <p>Explanation: Displays text with a hyperlink to cat photos.</p>
          </div>
        );
      case 11:
        return (
          <div>
            <h2>Step 11: Add Image with Link</h2>
            <p>Type: <code>&lt;a href="https://freecatphotoapp.com"&gt;&lt;img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."&gt;&lt;/a&gt;</code></p>
            <p>Explanation: Displays an image with a hyperlink to the cat photo app.</p>
            <p>Context: This HTML code snippet embeds an image of a cute orange cat lying on its back. Clicking on the image will redirect the user to the cat photo app website.</p>
          </div>
        );
      case 12:
        return (
          <div>
          <h2>Step 12: Cat Lists</h2>
          <p>Type: <code>&lt;h2&gt;Cat Lists&lt;/h2&gt;</code></p>
          <p>Explanation: Defines another subheading for the section.</p>
          <p>This element is not self-closing. It consists of an opening tag <code>&lt;h2&gt;</code>, the content "Cat Lists", and a closing tag <code>&lt;/h2&gt;</code>.</p>
        </div>
        );
        case 13:
          return (
            <div>
              <h2>Step 13: Things cats love</h2>
              <p>Type: <code>&lt;h3&gt;Things cats love:&lt;/h3&gt;</code></p>
              <p>Explanation: Defines a sub-subheading.</p>
              <p>This element is not self-closing. It consists of an opening tag <code>&lt;h3&gt;</code>, the content "Things cats love:", and a closing tag <code>&lt;/h3&gt;</code>.</p>
            </div>
          );
          case 14:
            return (
              <div>
                <h2>Step 14: Start an Unordered List</h2>
                <p>Type: <code>&lt;ul&gt;</code></p>
                <p>Explanation: Starts an unordered list.</p>
                <p>This element is not self-closing. It consists of an opening tag <code>&lt;ul&gt;</code> and a closing tag <code>&lt;/ul&gt;</code>.</p>
              </div>
            );
            case 15:
              return (
                <div>
                  <h2>Step 15: List Item for Catnip</h2>
                  <p>Type: <code>&lt;li&gt;cat nip&lt;/li&gt;</code></p>
                  <p>Explanation: List item indicating something cats love.</p>
                  <p>This element is self-closing. It consists of an opening tag <code>&lt;li&gt;</code>, the content "cat nip", and a closing tag <code>&lt;/li&gt;</code>.</p>
                </div>
              );
                    
              
            
      // Add more cases for additional steps if needed
      default:
        return (<div>Hooray! You completed the project.</div>);
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
