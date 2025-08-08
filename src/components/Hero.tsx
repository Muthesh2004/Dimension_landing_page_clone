'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-[-8rem] right-[-8rem] w-[25rem] h-[25rem] bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-float2"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          A new dimension<br /> of creativity
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Build immersive, performant, and visually stunning websites with ease using cutting-edge web technologies.
        </p>
        <button className="mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
