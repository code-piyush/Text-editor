import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false, // Enable editing
    toolbar: true,
    toolbarSticky: false,
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      '|',
      'paragraph',
      'image',
      'table',
      '|',
      'undo',
      'redo',
      'hr',
    ],
  };

  console.log('content >> ', content);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Jodit Rich Text Editor</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // Tab key control
        onBlur={(newContent) => setContent(newContent)} // Save content on blur
        onChange={(newContent) => {}}
      />
      <h3>Editor Output:</h3>
      <div
        style={{
          border: '1px solid #ddd',
          padding: '10px',
          marginTop: '10px',
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default RichTextEditor;
