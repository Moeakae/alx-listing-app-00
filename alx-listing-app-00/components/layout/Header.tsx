// components/layout/Header.tsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <span>StayFinder</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search locations, stays..."
          className="w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <button className="text-blue-600 font-medium hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</button>
      </div>

      {/* Accommodation Types */}
      <div className="hidden md:flex gap-4 mt-4 md:mt-0">
        {['Rooms', 'Mansion', 'Countryside', 'Apartments', 'Villa'].map((type) => (
          <button
            key={type}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            {type}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
