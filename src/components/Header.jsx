import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0b0f1a]/90 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 py-5 flex items-center justify-between transition-all duration-300">
      {/* Logo / Name */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#38bdf8] text-2xl font-extrabold tracking-wide flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="Profile"
          className="w-7 h-7 rounded-full mr-2 border border-cyan-400/40"
        />
        Pinidu Pramudith
      </h1>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300 hover:text-[#0ff] transition-transform duration-300 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className={`w-7 h-7 transform transition-all duration-500 ease-in-out ${
            isOpen ? "rotate-180 text-[#0ff]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation */}
      <nav
        className={`absolute md:static top-[70px] right-4 sm:right-8 w-[80%] sm:w-[60%] md:w-auto 
          bg-[#0b0f1a]/95 backdrop-blur-lg border border-cyan-400/10 
          md:bg-transparent md:border-none rounded-2xl md:rounded-none 
          overflow-hidden transform transition-all duration-500 ease-in-out 
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0"
          }`}
      >
        <ul className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:space-x-10 py-6 md:py-0">
          {["Home", "Projects", "Skills", "Contact"].map((section, i) => {
            const targetId =
              section === "Home" ? "hero" : section.toLowerCase();
            return (
              <li
                key={section}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-10px] md:opacity-100 md:translate-y-0"
                }`}
              >
                <a
                  href={`#${targetId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(targetId);
                  }}
                  className="block text-gray-300 hover:text-[#0ff] text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 px-6 md:px-0 py-2 md:py-0"
                >
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
