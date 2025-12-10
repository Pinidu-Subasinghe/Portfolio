import { useEffect } from "react";
import { Download, Eye } from "lucide-react";
import Typed from "typed.js";
import SLIITLogo from "../assets/sliit.png";
import CustomsLogo from "../assets/slc.png";
import ResumePDF from "../assets/Pinidu_Subasinghe_Frontend_Intern_Resume.pdf";

export default function Hero() {
  useEffect(() => {
    const options = {
      strings: [
        "Hey, I'm Pinidu Pramudith &#128075;",
        "Frontend Developer &#128187;",
        "UI/UX Enthusiast &#127912;",
        "Crafting Modern Web Experiences &#128640;",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      showCursor: false,
      contentType: "html",
    };

    const typed = new Typed("#typed-text", options);
    return () => typed.destroy();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="pt-24 pb-12 scroll-mt-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0f1a] to-[#1e293b] px-4 sm:px-6 lg:px-12"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left section */}
        <div className="w-full lg:w-1/2 space-y-6 lg:pl-12 text-center lg:text-left order-1">
          <div className="relative h-36 mb-2 sm:mb-4">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0ff] drop-shadow-neon leading-tight absolute inset-0 flex items-center justify-center lg:justify-start"
            >
              <span id="typed-text" className="inline-block"></span>
            </h2>
          </div>

          <p className="text-gray-300 max-w-md text-lg md:text-xl leading-relaxed">
            I’m a third-year{" "}
            <strong>B.Sc. (Hons) Information Technology</strong> student at{" "}
            <strong>SLIIT</strong> and currently work as a{" "}
            <strong>Customs Inspector</strong> at{" "}
            <strong>Sri Lanka Customs</strong>. Passionate about{" "}
            <strong>frontend and full-stack (MERN) development</strong>, I enjoy
            crafting responsive, user-focused web experiences using modern tools.
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4 max-w-md sm:max-w-full mx-auto lg:mx-0">
            <img src={SLIITLogo} alt="SLIIT Logo"
              className="h-10 sm:h-12 object-contain filter invert brightness-0"
              loading="lazy"
            />
            <img src={CustomsLogo} alt="Sri Lanka Customs Logo"
              className="h-10 sm:h-12 object-contain filter invert brightness-0"
              loading="lazy"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#0ff] text-[#0ff] hover:bg-[#0ff] hover:text-black transition-all duration-300 neon-glow"
            >
              Explore My Work
            </a>

            <a
              href={ResumePDF}
              target="_blank"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black transition-all duration-300 neon-glow"
            >
              <Eye className="mr-2" size={20} />
              View Resume
            </a>

            <a
              href={ResumePDF}
              download="Pinidu_Subasinghe_Frontend_Intern_Resume.pdf"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black transition-all duration-300 neon-glow"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right side – GitHub Profile Image */}
        <div className="hidden sm:flex w-full lg:w-1/2 justify-center lg:justify-end pr-0 lg:pr-12 relative order-2">
          <div className="absolute inset-0 bg-[#0ff] opacity-10 blur-3xl rounded-xl pointer-events-none"></div>

          <img
            src="https://github.com/Pinidu-Subasinghe.png"
            alt="GitHub Profile"
            className="relative rounded-xl shadow-neon border border-[#1f2937] w-[10rem] md:w-[20rem] lg:w-[30rem] max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
            style={{ maxHeight: "70vh", objectFit: "contain" }}
          />
        </div>

      </div>
    </section>
  );
}

