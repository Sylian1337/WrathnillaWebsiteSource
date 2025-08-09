// components/AnimatedPatchNote.tsx
'use client';
'use client';

import { motion } from 'framer-motion';

interface AnimatedPatchNoteProps {
  title: string;
  date: string;
  content: React.ReactNode;
}

const AnimatedPatchNote: React.FC<AnimatedPatchNoteProps> = ({ title, date, content }) => {
  return (
    <div>
      <motion.article
        className="prose prose-invert mx-auto p-8 bg-black/80 p-6 rounded-lg shadow-lg max-w-300 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="text-2xl mb-2">{title}</h1>
        <p className="text-gray-500">{date}</p>
      </motion.article>

      <motion.article
        className="prose prose-invert mx-auto p-8 bg-black/80 p-6 rounded-lg shadow-lg max-w-300 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.article>
    </div>
  );
};

export default AnimatedPatchNote;


/*
import { motion } from 'framer-motion';

interface AnimatedPatchNoteProps {
  title: string;
  date: string;
  content: React.ReactNode;
}

const AnimatedPatchNote: React.FC<AnimatedPatchNoteProps> = ({ title, date, content }) => {
  return (
    <div>
      <motion.article
        className="prose prose-invert mx-auto p-8 bg-black/80 p-6 rounded-lg shadow-lg max-w-300 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="text-2xl mb-2">{title}</h1>
        <p className="text-gray-500">{date}</p>
      </motion.article>

      <motion.article
        className="prose prose-invert mx-auto p-8 bg-black/80 p-6 rounded-lg shadow-lg max-w-300 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.article>
    </div>
  );
};

export default AnimatedPatchNote;
*/