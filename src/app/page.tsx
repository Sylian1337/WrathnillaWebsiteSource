"use client"

import Background from "@/components/Background";
import PatchNotesList from "@/components/PatchNotesList";
import { motion } from "framer-motion";

import Image from "next/image";
import { FaDiscord, FaPatreon } from "react-icons/fa";

export default function Home() {
  return (
      <main >
<div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 space-y-4">
  {/* Discord Button */}
  <div className="group relative w-12 h-12">
    <a
      href="https://discord.gg/YOUR_INVITE"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-in-out w-48 flex items-center justify-end bg-[#5865F2] text-white rounded-l-full px-4 py-2 shadow-lg"
    >
      <span className="text-sm font-semibold mr-3">Join Discord</span>
      <FaDiscord className="w-6 h-6" />
    </a>
  </div>

  {/* Patreon Button */}
  <div className="group relative w-12 h-12">
    <a
      href="https://patreon.com/YOUR_PAGE"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-in-out w-48 flex items-center justify-end bg-[#F96854] text-white rounded-l-full px-4 py-2 shadow-lg"
    >
      <span className="text-sm font-semibold mr-3">Join Patreon</span>
      <FaPatreon className="w-6 h-6" />
    </a>
  </div>
</div>




        <section className="flex items-center justify-center text-center h-full ">
          <motion.article className="bg-black/60 p-6 rounded-lg shadow-lg mb-15 mt-20 min-w-200 max-w-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            >
            <h1 className="text-3xl md:text-4xl mb-2">Welcome to Project Wrathnilla+</h1>
            <p className="">Experience a new version of World Of Warcraft, created for solo play, completely free!</p>
          </motion.article>
        </section>

        <section className="flex items-center justify-center text-center h-full mb-20">
          <motion.article className="bg-black/80 p-6 rounded-lg shadow-lg min-w-250 max-w-250"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
          <div className="flex-inline justify-between">
            <img src="https://cdn.discordapp.com/avatars/861623842606940200/e9a010ec1be1cde42d898e761e349128.webp?size=128" className="  w-20 h-20 rounded-full mx-auto"/>
            <p className="mt-2">Ed-Kay</p>
            <p className="mb-2 text-gray-400">Solo Developer + Creator</p>
            <hr className="text-gray-700 text-opacity-100"></hr>
          </div>
            
            <p className="mt-3 md:mt-4">Wrathnilla is my passion project, and its aimed at solo play.</p>
            <p className="">Hey Ed, just Sylian here, you can send me what you want and your vision, and I can try to add it :)</p>
          </motion.article>
        </section>

        <PatchNotesList/>
      </main>
  );
}