"use client"

import { motion } from 'framer-motion';
// components/PatchNotesList.tsx
import PatchNoteCard from './PatchNoteCard';

const patchNotes = [
  {
    version: 'Patch 1.0',
    date: 'June 1, 2025',
    summary: 'Initial release with major class overhauls and new solo play features.',
    url: '/patch-notes/patch-1'
  },
  {
    version: 'Patch 1.1',
    date: 'June 15, 2025',
    summary: 'Balance adjustments and bug fixes.',
    url: '/patch-notes/patch-1'
  },
  // Add more patch notes as needed
];

const PatchNotesList: React.FC = () => (
  <section className="flex items-center justify-center text-center h-full">
    <motion.article className="bg-black/80 p-6 rounded-lg shadow-lg min-w-250 max-w-250"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-inline justify-between">
        <h1 className="text-2xl md:text-2xl mb-2">Patch Notes</h1>
        <hr className="text-gray-700 text-opacity-100 mb-4" />
        {patchNotes.map((note) => (
          <PatchNoteCard
            key={note.version}
            version={note.version}
            date={note.date}
            summary={note.summary}
            url={note.url}
          />
        ))}
      </div>
    </motion.article>
  </section>
);

export default PatchNotesList;




















// components/PatchNotesList.tsx
/*import Link from 'next/link';
import React from 'react';

interface PatchNote {
  version: string;
  date: string;
  notes: string[];
  url: string;
}

const patchNotes: PatchNote[] = [
  {
    version: '1.0',
    date: '2025-06-01',
    notes: [
      'First patch note(s) for the new version',
    ],
    url: "/patch-notes/patch-1",
  },
  // Add more patch notes as needed
];

const PatchNotesList: React.FC = () => {
  return (
    <section className="flex items-center justify-center text-center h-full">
      <article className="bg-black/80 p-6 rounded-lg shadow-lg min-w-250 max-w-250">
        <div className="flex-inline justify-between">
          <h1 className="text-2xl md:text-2xl mb-2">Patch Notes</h1>
          <hr className="text-gray-700 text-opacity-100 mb-4" />
          {patchNotes.map((patch) => (
            <Link href={patch.url}>
            <div key={patch.version} className="mb-4">
              <h2 className="text-xl font-bold">
                Patch {patch.version} - {patch.date}
              </h2>
              <ul className="list-disc list-inside text-left mt-2">
                {patch.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
};

export default PatchNotesList;
*/