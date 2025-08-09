// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 50); // Hide if scrolling down past 50px
      setLastScroll(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center p-3 sm:p-4 bg-black/50 z-50 transform transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-center flex-1">
        <Link className="text-white text-lg sm:text-xl font-bold" href="/">
          Project Wrathnilla+
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
