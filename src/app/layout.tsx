import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/Navbar';
import "./globals.css";
import Background from "@/components/Background";
import { FaDiscord } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProjectWrathnilla+",
  description: "World of Warcraft Emulation Project",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white relative min-h-screen">
        <Background />
        <Navbar />
        <div className="pt-20">{children}</div>

        <footer className="w-full py-6 px-4 text-center border-t border-gray-800 text-gray-500 text-sm mt-5">
        © {new Date().getFullYear()} Ed_Kay / Project Wrathnilla+ — All rights reserved.
      </footer>
      </body>
    </html>
  );
}