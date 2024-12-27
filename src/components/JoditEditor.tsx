/* eslint-disable no-underscore-dangle */
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const FullFeaturedEditor = () => {
  const editorRef: any = useRef(null);

  const config = {
    readonly: false,
    toolbar: true,
    height: 500,
    uploader: {
      insertImageAsBase64URI: true,
    },
    toolbarSticky: true,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: true,
    allowResizeY: true,
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'ul',
      'ol',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      'paragraph',
      '|',
      'image',
      'table',
      'link',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      'fullsize',
      '|',
      'preview',
      'selectall',
      'cut',
      'copy',
      'paste',
    ],
    buttonsXS: [
      'bold',
      'italic',
      'underline',
      '|',
      'ul',
      'ol',
      '|',
      'undo',
      'redo',
    ],
    language: 'en',
    tabIndex: 1,
    placeholder: 'Start typing your content here...',
  };

  const handleAddContent = () => {
    const dummyContent = `
      <div>
        <h1>Welcome to Text Editor</h1>
        <p>
          This is a sample paragraph. Use the <strong>bold</strong>, <em>italic</em>, 
          and <u>underline</u> options to style your text. 
          You can also <a href="https://www.example.com" target="_blank">add links</a> to your content.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Rich text formatting</li>
          <li>Insert images and media</li>
          <li>Interactive tables</li>
          <li>Customizable toolbar</li>
        </ul>

        <h3>Example Table</h3>
        <table border="1" style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rich Text</td>
              <td>Edit and format text easily.</td>
            </tr>
            <tr>
              <td>Media</td>
              <td>Embed images, videos, and links.</td>
            </tr>
          </tbody>
        </table>

        <p>
          Thank you for trying out the <strong>Jodit Text Editor</strong>. Have fun editing!
        </p>
      </div>
    `;

    if (editorRef.current) {
      editorRef.current.setEditorValue(dummyContent);
    }
  };

  const handleAddGreetings = () => {
    const editorInstance = editorRef?.current;
    if (editorInstance) {
      const { selection } = editorInstance;
      if (selection) {
        const { range } = selection;
        if (range) {
          selection?.insertHTML('Welcome,');
          const newRange = selection.range;
          selection.selectRange(newRange);
        }
      }
    }
  };

  return (
    <div className="p-5">
      <JoditEditor
        ref={editorRef}
        value=""
        config={{
          ...config,
          events: {
            afterInit: (editor: any) => {
              editorRef.current = editor;
            },
          },
        }}
      />

      <div className="mt-5 flex space-x-3">
        <button
          onClick={handleAddContent}
          className="rounded-md bg-blue-500 px-5 py-2.5 text-white"
        >
          Add Sample Content
        </button>

        <button
          onClick={handleAddGreetings}
          className="rounded-md bg-blue-500 px-5 py-2.5 text-white"
        >
          Add Greetings where cursor?
        </button>

        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window?.open('/test', '_blank');
            }
          }}
          className="rounded-md bg-blue-500 px-5 py-2.5 text-white"
        >
          Open In New Tab
        </button>
      </div>
    </div>
  );
};

export default FullFeaturedEditor;
