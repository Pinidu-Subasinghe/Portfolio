import { useEffect } from 'react';
import { Download } from 'lucide-react';
import Typed from 'typed.js';

export default function Hero() {
  useEffect(() => {
    const options = {
      strings: [
        "Hey, I'm Pinidu Pramudith 👋",
        "Full-Stack Developer 💻",
        "Creative Designer 🎨",
        "Building Modern Web Experiences 🚀"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    };
    const typed = new Typed('#typed-text', options);
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0f1a] to-[#1e293b]"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0ff] drop-shadow-neon">
            <span id="typed-text"></span>
          </h2>
          <p className="text-gray-300 max-w-md text-lg md:text-xl leading-relaxed">
            Passionate about crafting innovative, user-centric web applications with cutting-edge technologies like React, Node.js, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#0ff] text-[#0ff] hover:bg-[#0ff] hover:text-black transition-all duration-300 neon-glow text-base font-medium"
            >
              Explore My Work
            </a>
            <a
              href="/path-to-resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black transition-all duration-300 neon-glow text-base font-medium"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-[#0ff] opacity-10 blur-3xl rounded-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Developer working"
            className="relative rounded-xl shadow-neon border border-[#1f2937] max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}