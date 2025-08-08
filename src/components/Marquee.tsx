export default function Marquee() {
  const items = [
    "⚡ Fast Performance",
    "🚀 Cutting-edge Tech",
    "🎨 Beautiful UI",
  ];

  return (
    <section className="bg-black py-12 flex items-center justify-center">
      <div className="flex flex-wrap gap-8 text-2xl font-bold text-gray-300 justify-center animate-fadeIn">
        {items.map((text, index) => (
          <span key={index} className="whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
