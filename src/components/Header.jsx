export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 border-b border-[#1e293b] flex items-center justify-between fixed top-0 z-10 shadow-neon transition-all duration-300 hover:shadow-lg">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#38bdf8] text-3xl font-extrabold drop-shadow-neon animate-pulse-slow flex items-center">
        <span className="mr-2">👨‍💻</span>Pinidu Pramudith
      </h1>
      <nav>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}