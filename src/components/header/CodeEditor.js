import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import { Controlled as CodeMirror } from 'react-codemirror2';

function HTMLCodeEditor() {
  const [code, setCode] = useState('<h1>Hello, World!</h1>');

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <div>
      <h2>HTML Code Editor</h2>
      <CodeMirror
        value={code}
        onBeforeChange={handleChange}
        options={{
          mode: 'htmlmixed',
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  );
}

export default HTMLCodeEditor;
