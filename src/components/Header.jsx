export default function Header() {
  return (
    <header className="w-full bg-[#0f172a] p-4 border-b border-[#1e293b] flex items-center justify-between">
      <h1 className="text-[#0ff] text-2xl font-bold drop-shadow-neon">Welcome</h1>
      <nav>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#hero" className="hover:text-[#0ff]">Home</a></li>
          <li><a href="#projects" className="hover:text-[#0ff]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#0ff]">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
