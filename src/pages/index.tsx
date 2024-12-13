// pages/index.tsx
import { useState } from 'react';

import MyEditor from '../components/JoditEditor';

const Index = () => {
  const [editorValue, setEditorValue] = useState<string>('');

  const handleEditorChange = (newValue: string) => {
    setEditorValue(newValue);
  };

  return (
    <div>
      <h1>Next.js with Jodit Editor</h1>
      <MyEditor value={editorValue} onChange={handleEditorChange} />
      <div>
        <h2>Editor Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorValue }} />
      </div>
    </div>
  );
};

export default Index;
