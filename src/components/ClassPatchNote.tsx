'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface ClassPatchNoteProps {
  title: string;
  children: React.ReactNode;
}

const ClassPatchNote: React.FC<ClassPatchNoteProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="bg-gray-800/60 p-4 rounded-lg shadow-lg mb-6 transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <span>{open ? <FaChevronDown /> : <FaChevronRight />}</span>
      </button>

      <div
        className={`prose prose-invert mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </section>
    </>
  );
};

export default ClassPatchNote;
