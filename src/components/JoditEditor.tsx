import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

interface FullFeaturedEditorProps {
  value: string;
  onChange: (value: string) => void;
}

// let editorInstance: any = null;

const FullFeaturedEditor: React.FC<FullFeaturedEditorProps> = ({
  value,
  onChange,
}) => {
  const editorRef = useRef(null);

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

  // const handleAddContent = () => {
  //   console.log('editorInstance?.selection > ', editorInstance?.selection);

  //   editorInstance?.selection?.insertHTML('SOME TEXT HERE');
  // };

  return (
    <div>
      {/* <button
        onClick={handleAddContent}
        className="rounded-md bg-gray-500 px-5 py-2.5 text-white"
      >
        Add
      </button> */}

      <JoditEditor
        ref={editorRef}
        value={value}
        config={{
          ...config,
          events: {
            afterInit: (e: any) => {
              // editorInstance = e;
              return false;
            },
          },
        }}
        onBlur={(newContent) => onChange(newContent)}
      />
    </div>
  );
};

export default FullFeaturedEditor;
