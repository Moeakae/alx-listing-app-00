// components/layout/Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 text-center text-sm text-gray-600 mt-8">
      <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2">
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
