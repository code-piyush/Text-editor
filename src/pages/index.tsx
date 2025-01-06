// pages/index.tsx

import { useEffect } from 'react';

import FullFeaturedEditor from '@/components/JoditEditor';

const Index = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.addEventListener('orientationchange', () => {
        const width = Number(window?.outerHeight);

        console.log('ORIENTATION CHANGED', width);
      });
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="px-5 text-xl font-bold italic">
        Jodit Editor Full-Featured Demo
      </h1>

      <FullFeaturedEditor />
    </div>
  );
};

export default Index;
