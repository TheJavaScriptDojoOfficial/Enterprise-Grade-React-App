import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
      © {new Date().getFullYear()} The JavaScript Dojo. All rights reserved.
    </footer>
  );
};

export default Footer;
