import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
// import VirtualAssistant from './VirtualAssistant'; // Import the VirtualAssistant component
import './LearnWindow.css';

function LearnWindow() {
  const [htmlCode, setHtmlCode] = useState('');
  
  // Function to handle changes in the code editor
  const handleChange = (newCode) => {
    setHtmlCode(newCode);
    // You can add additional logic here if needed
  };

  return (
    <div className="learn-window">
      <h1 className="app-title">HTML Project: A Cat Photo App</h1>
      <div className="content-wrapper">
        <div className="code-editor">
          {/* Render the VirtualAssistant component */}
          {/* <VirtualAssistant htmlCode={htmlCode} setHtmlCode={setHtmlCode} /> */}
          <h2>Code Editor</h2>
          <AceEditor
            mode="html"
            theme="github"
            onChange={handleChange}
            value={htmlCode}
            name="html-code-editor"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="500px"
            fontSize={16}
            wrapEnabled
            showPrintMargin={false}
            showGutter={true} // Enable line numbering
          />
        </div>
        <div className="output-display">
          <h2>Output Display</h2>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>
      </div>
    </div>
  );
}

export default LearnWindow;
