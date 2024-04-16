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
              case 16:
                return (
                  <div>
                    <h2>Step 16: Laser Pointers</h2>
                    <p>Type: <code>&lt;li&gt;laser pointers&lt;/li&gt;</code></p>
                    <p>Explanation: Another list item.</p>
                    <p>This element is self-closing. It consists of an opening tag <code>&lt;li&gt;</code>, the content "laser pointers", and a closing tag <code>&lt;/li&gt;</code>.</p>
                  </div>

                  
                );
                case 17:
  return (
    <div>
      <h2>Step 17: Lasagna Image</h2>
      <p>Type: <code>&lt;figure&gt;</code></p>
      <p>Explanation: Defines a container for images with optional captions.</p>
      <p>This element is not self-closing. It consists of an opening tag <code>&lt;figure&gt;</code> and a closing tag <code>&lt;/figure&gt;</code>.</p>
    </div>
  );
case 18:
  return (
    <div>
      <h2>Step 18: Lasagna Image Source</h2>
      <p>Type: <code>&lt;img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate."&gt;</code></p>
      <p>Explanation: Inserts an image of lasagna with a descriptive alt attribute.</p>
      <p>This element is self-closing and requires the <code>src</code> attribute to specify the image source and the <code>alt</code> attribute to provide alternative text for accessibility.</p>
    </div>
  );
case 19:
  return (
    <div>
      <h2>Step 19: Lasagna Image Caption</h2>
      <p>Type: <code>&lt;figcaption&gt;Cats &lt;em&gt;love&lt;/em&gt; lasagna.&lt;/figcaption&gt;</code></p>
      <p>Explanation: Adds a caption to the lasagna image using the <code>&lt;figcaption&gt;</code> element.</p>
      <p>This element is not self-closing and should be placed within the <code>&lt;figure&gt;</code> element. It contains the caption text, emphasizing the word "love" with the <code>&lt;em&gt;</code> element.</p>
    </div>
  );
case 20:
  return (
    <div>
      <h2>Step 20: Top 3 Things Cats Hate Heading</h2>
      <p>Type: <code>&lt;h3&gt;Top 3 things cats hate:&lt;/h3&gt;</code></p>
      <p>Explanation: Defines a subheading for the list of things cats hate.</p>
      <p>This element is not self-closing. It consists of an opening tag <code>&lt;h3&gt;</code>, the content "Top 3 things cats hate:", and a closing tag <code>&lt;/h3&gt;</code>.</p>
    </div>
  );
case 21:
  return (
    <div>
      <h2>Step 21: List of Things Cats Hate</h2>
      <p>Type: <code>&lt;ol&gt;</code></p>
      <p>Explanation: Starts an ordered list for the things cats hate.</p>
      <p>This element is not self-closing. It consists of an opening tag <code>&lt;ol&gt;</code> and a closing tag <code>&lt;/ol&gt;</code>.</p>
    </div>
  );
case 22:
  return (
    <div>
      <h2>Step 22: Flea Treatment List Item</h2>
      <p>Type: <code>&lt;li&gt;flea treatment&lt;/li&gt;</code></p>
      <p>Explanation: List item indicating one of the things cats hate.</p>
      <p>This element is self-closing. It consists of an opening tag <code>&lt;li&gt;</code>, the content "flea treatment", and a closing tag <code>&lt;/li&gt;</code>.</p>
    </div>
  );
case 23:
  return (
    <div>
      <h2>Step 23: Thunder List Item</h2>
      <p>Type: <code>&lt;li&gt;thunder&lt;/li&gt;</code></p>
      <p>Explanation: Another list item indicating something else cats hate.</p>
      <p>This element is self-closing. It consists of an opening tag <code>&lt;li&gt;</code>, the content "thunder", and a closing tag <code>&lt;/li&gt;</code>.</p>
    </div>
  );
case 24:
  return (
    <div>
      <h2>Step 24: Other Cats List Item</h2>
      <p>Type: <code>&lt;li&gt;other cats&lt;/li&gt;</code></p>
      <p>Explanation: Another list item indicating one more thing cats hate.</p>
      <p>This element is self-closing. It consists of an opening tag <code>&lt;li&gt;</code>, the content "other cats", and a closing tag <code>&lt;/li&gt;</code>.</p>
    </div>

  );
  case 25:
    return (
      <div>
        <h2>Step 25: Cats Image</h2>
        <p>Type: <code>&lt;figure&gt;</code></p>
        <p>Explanation: Defines a container for images with optional captions.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;figure&gt;</code> and a closing tag <code>&lt;/figure&gt;</code>.</p>
      </div>
    );
  case 26:
    return (
      <div>
        <h2>Step 26: Cats Image Source</h2>
        <p>Type: <code>&lt;img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field."&gt;</code></p>
        <p>Explanation: Inserts an image of cats with a descriptive alt attribute.</p>
        <p>This element is self-closing and requires the <code>src</code> attribute to specify the image source and the <code>alt</code> attribute to provide alternative text for accessibility.</p>
      </div>
    );
  case 27:
    return (
      <div>
        <h2>Step 27: Cats Image Caption</h2>
        <p>Type: <code>&lt;figcaption&gt;Cats &lt;strong&gt;hate&lt;/strong&gt; other cats.&lt;/figcaption&gt;</code></p>
        <p>Explanation: Adds a caption to the cats image using the <code>&lt;figcaption&gt;</code> element.</p>
        <p>This element is not self-closing and should be placed within the <code>&lt;figure&gt;</code> element. It contains the caption text, emphasizing the word "hate" with the <code>&lt;strong&gt;</code> element.</p>
      </div>
    );
  case 28:
    return (
      <div>
        <h2>Step 28: Cat Form Section</h2>
        <p>Type: <code>&lt;section&gt;</code></p>
        <p>Explanation: Divides the content into sections.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;section&gt;</code> and a closing tag <code>&lt;/section&gt;</code>.</p>
      </div>
    );
  case 29:
    return (
      <div>
        <h2>Step 29: Cat Form Heading</h2>
        <p>Type: <code>&lt;h2&gt;Cat Form&lt;/h2&gt;</code></p>
        <p>Explanation: Defines a heading for the section containing the cat form.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;h2&gt;</code>, the content "Cat Form", and a closing tag <code>&lt;/h2&gt;</code>.</p>
      </div>
    );
  case 30:
    return (
      <div>
        <h2>Step 30: Cat Form</h2>
        <p>Type: <code>&lt;form action="https://freecatphotoapp.com/submit-cat-photo"&gt;</code></p>
        <p>Explanation: Starts a form for submitting cat photos.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;form&gt;</code> with the <code>action</code> attribute specifying the form submission URL and a closing tag <code>&lt;/form&gt;</code>.</p>
      </div>
    );
  case 31:
    return (
      <div>
        <h2>Step 31: Indoor/Outdoor Radio Buttons</h2>
        <p>Type: <code>&lt;fieldset&gt;</code></p>
        <p>Explanation: Groups related form elements together.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;fieldset&gt;</code> and a closing tag <code>&lt;/fieldset&gt;</code>.</p>
      </div>
    );
  case 32:
    return (
      <div>
        <h2>Step 32: Indoor Radio Button</h2>
        <p>Type: <code>&lt;label&gt;&lt;input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked&gt; Indoor&lt;/label&gt;</code></p>
        <p>Explanation: Adds a radio button for selecting indoor cats.</p>
        <p>This element combines a label and an input element. The <code>checked</code> attribute ensures that the "Indoor" option is selected by default.</p>
      </div>
    );
  case 33:
    return (
      <div>
        <h2>Step 33: Outdoor Radio Button</h2>
        <p>Type: <code>&lt;label&gt;&lt;input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"&gt; Outdoor&lt;/label&gt;</code></p>
        <p>Explanation: Adds a radio button for selecting outdoor cats.</p>
        <p>This element combines a label and an input element. Users can select either "Indoor" or "Outdoor" as the cat's living environment.</p>
      </div>
    );
  case 34:
    return (
      <div>
        <h2>Step 34: Personality Checkbox Group</h2>
        <p>Type: <code>&lt;fieldset&gt;</code></p>
        <p>Explanation: Groups related form elements together.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;fieldset&gt;</code> and a closing tag <code>&lt;/fieldset&gt;</code>.</p>
      </div>
    );
  case 35:
    return (
      <div>
        <h2>Step 35: Loving Checkbox</h2>
        <p>Type: <code>&lt;input id="loving" type="checkbox" name="personality" value="loving" checked&gt; &lt;label for="loving"&gt;Loving&lt;/label&gt;</code></p>
        <p>Explanation: Adds a checkbox for indicating a loving cat personality.</p>
        <p>This element combines an input checkbox and a label. The <code>checked</code> attribute ensures that the "Loving" option is selected by default.</p>
      </div>
    );
  case 36:
    return (
      <div>
        <h2>Step 36: Lazy Checkbox</h2>
        <p>Type: <code>&lt;input id="lazy" type="checkbox" name="personality" value="lazy"&gt; &lt;label for="lazy"&gt;Lazy&lt;/label&gt;</code></p>
        <p>Explanation: Adds a checkbox for indicating a lazy cat personality.</p>
        <p>This element combines an input checkbox and a label. Users can select one or more personality traits for their cat.</p>
      </div>
    );
  case 37:
    return (
      <div>
        <h2>Step 37: Energetic Checkbox</h2>
        <p>Type: <code>&lt;input id="energetic" type="checkbox" name="personality" value="energetic"&gt; &lt;label for="energetic"&gt;Energetic&lt;/label&gt;</code></p>
        <p>Explanation: Adds a checkbox for indicating an energetic cat personality.</p>
        <p>This element combines an input checkbox and a label. Users can select one or more personality traits for their cat.</p>
      </div>
    );
  case 38:
    return (
      <div>
        <h2>Step 38: Cat Photo URL Input</h2>
        <p>Type: <code>&lt;input type="text" name="catphotourl" placeholder="cat photo URL" required&gt;</code></p>
        <p>Explanation: Adds a text input field for entering the cat photo URL.</p>
        <p>This element is self-closing and requires the <code>name</code> attribute for form submission and the <code>placeholder</code> attribute for displaying a hint text.</p>
      </div>
    );
  case 39:
    return (
      <div>
        <h2>Step 39: Submit Button</h2>
        <p>Type: <code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code></p>
        <p>Explanation: Adds a button for submitting the cat photo form.</p>
        <p>This element is not self-closing. It consists of an opening tag <code>&lt;button&gt;</code> with the <code>type</code> attribute set to "submit" and a closing tag <code>&lt;/button&gt;</code>.</p>
      </div>
    );
  default:
    return (<div>Hooray! You completed the HTML code for the Cat Photo App.</div>);
  
  


               
                    
              
            
      // // Add more cases for additional steps if needed
      // default:
      //   return (<div>Hooray! You completed the project.</div>);
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
