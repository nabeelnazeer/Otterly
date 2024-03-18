import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import './LearnWindow.css';
import Dashboard from './Dashboard';

function LearnWindow() {
  const [htmlCode, setHtmlCode] = useState('');

  return (
    
    <div className="learn-window">
      <h1 className="app-title">HTML Project: A Cat Photo App</h1>
      <div className="content-wrapper">
        <div className="code-editor">
          <h2>Code Editor</h2>
          <AceEditor
            mode="html"
            theme="github"
            onChange={setHtmlCode}
            value={htmlCode}
            name="html-code-editor"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="500px"
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
