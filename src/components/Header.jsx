import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking a link
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-8 py-5 border-b border-[#1e293b] flex items-center justify-between fixed top-0 z-10 shadow-neon transition-all duration-300 hover:shadow-lg">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#38bdf8] text-2xl font-extrabold drop-shadow-neon animate-pulse-slow flex items-center">
        <span className="mr-2">👨‍💻</span>Pinidu Pramudith
      </h1>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-[#0ff] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block md:flex md:space-x-6 absolute md:static top-16 right-4 bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon block md:inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon block md:inline-block"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon block md:inline-block"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-300 hover:text-[#0ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-neon block md:inline-block"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
