'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface SpellListProps {
  title: string;
  children: React.ReactNode;
}

const SpellList: React.FC<SpellListProps> = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left mb-2"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {open ? <FaChevronDown /> : <FaChevronRight />}
      </button>

      <ul
        className={`list-disc list-inside pl-5 space-y-1 text-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </ul>
    </div>
    </>
  );
};

export default SpellList;
