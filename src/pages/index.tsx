// pages/index.tsx
import { useState } from 'react';

import FullFeaturedEditor from '@/components/JoditEditor';

const Index = () => {
  const [editorValue, setEditorValue] = useState<string>('');

  const handleEditorChange = (newValue: string) => {
    setEditorValue(newValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Jodit Editor Full-Featured Demo</h1>
      <FullFeaturedEditor value={editorValue} onChange={handleEditorChange} />
      <div style={{ marginTop: '20px' }}>
        <h2>Editor Output:</h2>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            minHeight: '100px',
            background: '#f9f9f9',
          }}
          dangerouslySetInnerHTML={{ __html: editorValue }}
        />
      </div>
    </div>
  );
};

export default Index;
