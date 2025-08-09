// components/PatchNoteCard.tsx
"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PatchNoteCardProps {
  version: string;
  date: string;
  summary: string;
  url: string;
}

const PatchNoteCard: React.FC<PatchNoteCardProps> = ({ version, date, summary, url }) => (
  <Link href={url}>
    <motion.article
      className="bg-gray-800/60 p-4 rounded-lg shadow-lg mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2">{version}</h2>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p>{summary}</p>
    </motion.article>
  </Link>
);

export default PatchNoteCard;
