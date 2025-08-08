'use client';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo + Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Dimension<span className="text-indigo-400">.</span></h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Dimension. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#showcase" className="hover:text-white transition">Showcase</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
