import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-blue-600 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
