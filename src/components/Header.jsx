export default function Header() {
  return (
    <header className="w-full bg-[#0f172a] p-4 border-b border-[#1e293b] flex items-center justify-between fixed top-0 z-10">
      <h1 className="text-[#0ff] text-2xl font-bold drop-shadow-neon">Pinidu Pramudith</h1>
      <nav>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#hero" className="text-gray-300 hover:text-[#0ff] transition-colors">Home</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-[#0ff] transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-[#0ff] transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}