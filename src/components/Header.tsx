'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          Dimension<span className="text-indigo-400">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black px-6 pb-4 space-y-2 text-gray-300"
        >
          <a href="#features" className="block hover:text-white transition">Features</a>
          <a href="#about" className="block hover:text-white transition">About</a>
          <a href="#contact" className="block hover:text-white transition">Contact</a>
        </motion.nav>
      )}
    </header>
  );
}
