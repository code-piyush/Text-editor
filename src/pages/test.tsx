const TestPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        onClick={() => {
          if (typeof window !== 'undefined') {
            window?.close();
          }
        }}
        className="rounded-md bg-blue-500 px-5 py-2.5 text-white"
      >
        Get Back
      </button>
    </div>
  );
};

export default TestPage;
