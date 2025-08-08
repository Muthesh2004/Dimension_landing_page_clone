'use client';
import { motion } from 'framer-motion';

const showcaseItems = [
  { img: "https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg", title: "Tech Innovation" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNyZ6NMb7LXjacOXb3V68eMYfkKpwr3BGpA&s", title: "Creative Design" },
  { img: "https://www.geektrust.in/blog/wp-content/uploads/2021/11/CLEAN-AND-READABLE-CODE-BLOG-POST-THUMBNAIL-JPEG.jpg", title: "Clean Code" },
  { img: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg", title: "App Development" },
  { img: "https://www.designveloper.com/wp-content/uploads/2023/03/overview-3-1024x538.png", title: "Modern Websites" },
  { img: "https://miro.medium.com/v2/resize:fit:1400/1*3KR97sF5PJfjOxacq5NFBA.jpeg", title: "UI/UX Excellence" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Our Showcase
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-gray-900">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
