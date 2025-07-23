export default function SidePanel() {
  return (
    <aside className="w-48 bg-[#0f172a] p-6 pt-10 border-r border-[#1e293b]">
      <h1 className="text-[#0ff] text-2xl font-bold drop-shadow-neon mb-4">Welcome</h1>
      <ul className="space-y-4 text-sm">
        <li><a href="#hero" className="hover:text-[#0ff]">Home</a></li>
        <li><a href="#projects" className="hover:text-[#0ff]">Projects</a></li>
        <li><a href="#contact" className="hover:text-[#0ff]">Contact</a></li>
      </ul>
    </aside>
  );
}
