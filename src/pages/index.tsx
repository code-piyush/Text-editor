// pages/index.tsx

import FullFeaturedEditor from '@/components/JoditEditor';

const Index = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-xl font-bold italic px-5">
        Jodit Editor Full-Featured Demo
      </h1>

      <FullFeaturedEditor />
    </div>
  );
};

export default Index;
