// components/JoditEditor.tsx
import dynamic from 'next/dynamic';

// Dynamically import the Jodit Editor to avoid SSR issues
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MyEditor: React.FC<EditorProps> = ({ value, onChange }) => {
  const toolbar: string = [
    'bold',
    'italic',
    'underline',
    '|',
    'align',
    'outdent',
    'indent',
    '|',
    'undo',
    'redo',
    '|',
    'font',
    'fontsize',
    '|',
    'image',
    'link',
    '|',
    'table',
    'brush',
    'code',
  ] as unknown as string;

  return (
    <div>
      <JoditEditor
        value={value}
        onChange={onChange}
        config={{
          readonly: false, // Set to true to make the editor readonly
          height: 400,
          toolbar,
        }}
      />
    </div>
  );
};

export default MyEditor;
