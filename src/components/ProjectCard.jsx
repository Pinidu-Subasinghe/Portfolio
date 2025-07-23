export default function ProjectCard({ icon, title, description, link }) {
  return (
    <div className="bg-[#111827] p-6 rounded-xl shadow-md border border-[#1f2937] hover:shadow-neon transition-transform duration-300 transform hover:scale-105 text-center">
      <div className="text-[#0ff] mb-4 text-4xl flex justify-center drop-shadow-neon">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 text-[#38bdf8] drop-shadow-neon">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm px-5 py-2 rounded border border-[#0ff] text-[#0ff] hover:bg-[#0ff] hover:text-black transition-all duration-300 neon-glow"
      >
        View on GitHub →
      </a>
    </div>
  );
}
