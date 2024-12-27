// pages/index.tsx

import FullFeaturedEditor from '@/components/JoditEditor';

const Index = () => {
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
