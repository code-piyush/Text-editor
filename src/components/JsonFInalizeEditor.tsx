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
      'source',
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
      'video',
      'table',
      'link',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      'copyformat',
      'symbol',
      'fullsize',
      'print',
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
  };

  const handleAddContent = () => {
    const editorInstance = editorRef?.current;

    if (editorInstance) {
      const { selection } = editorInstance;

      if (selection) {
        const { range } = selection;
        if (range) {
          selection?.insertHTML('SOME TEXT HERE');
          const newRange = selection.range;
          selection.selectRange(newRange);
        }
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleAddContent}
        className="rounded-md bg-gray-500 px-5 py-2.5 text-white"
      >
        Add
      </button>
      <JoditEditor
        ref={editorRef}
        value={editorRef?.current?.value}
        config={{
          ...config,
          events: {
            afterInit: (e: any) => {
              editorRef.current = e;
            },
          },
        }}
      />
      <button
        onClick={handleAddContent}
        className="rounded-md bg-gray-500 px-5 py-2.5 text-white"
      >
        See In preview
      </button>
      <div style={{ marginTop: '20px' }}>
        <h2>Editor Output:</h2>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            minHeight: '100px',
            background: '#f9f9f9',
          }}
          dangerouslySetInnerHTML={{ __html: editorRef?.current?.value }}
        />
      </div>
    </div>
  );
};

export default FullFeaturedEditor;
