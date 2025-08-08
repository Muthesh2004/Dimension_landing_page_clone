'use client';
import { motion } from 'framer-motion';
import { FaRocket, FaPaintBrush, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket size={40} />,
    title: "Fast Performance",
    desc: "Experience blazing fast load times and smooth interactions for all devices."
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: "Beautiful UI",
    desc: "Designed with modern aesthetics in mind for a stunning visual experience."
  },
  {
    icon: <FaBolt size={40} />,
    title: "Cutting-edge Tech",
    desc: "Built with the latest technologies to keep your project future-ready."
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-indigo-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
