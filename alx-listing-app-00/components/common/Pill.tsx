// components/common/Pill.tsx
import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
    >
      {label}
    </button>
  );
};

export default Pill;
