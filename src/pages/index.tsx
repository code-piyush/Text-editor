// pages/index.tsx

import { useEffect, useState } from 'react';

import FullFeaturedEditor from '@/components/JoditEditor';

const Index = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.addEventListener('orientationchange', () => {
        const width = Number(window?.outerHeight);

        setMessage(`ORIENTATION CHANGED ${width}`);
      });
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="px-5 text-xl font-bold italic">
        Jodit Editor Full-Featured Demo
      </h1>

      <p>{message}</p>

      <FullFeaturedEditor />
    </div>
  );
};

export default Index;
