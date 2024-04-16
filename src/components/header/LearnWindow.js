import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import './LearnWindow.css';

// Basic sanitization function to remove script tags
function sanitizeHtml(html) {
//  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
return html;
}

function LearnWindow() {
 const [htmlCode, setHtmlCode] = useState('');
  
 const handleChange = (newCode) => {
    setHtmlCode(newCode);
 };

 return (
    <div className="learn-window">
      <h1 className="app-title">HTML Project: A Cat Photo App</h1>
      <div className="content-wrapper">
        <div className="code-editor">
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
            showGutter={true}
          />
        </div>
        <div className="output-display">
          <h2>Output Display</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlCode) }} />
        </div>
      </div>
    </div>
 );
}

export default LearnWindow;