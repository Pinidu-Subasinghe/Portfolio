import { Mail, Github, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#38bdf8] drop-shadow-neon">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I'm always excited to collaborate on new projects or discuss
          innovative ideas. Reach out to me via email or connect on social
          platforms!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:it23181892@my.sliit.lk"
            className="text-[#0ff] hover:text-[#38bdf8] transition-colors"
            aria-label="Email"
          >
            <Mail size={32} className="drop-shadow-neon" />
          </a>
          <a
            href="https://github.com/pinidu2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0ff] hover:text-[#38bdf8] transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} className="drop-shadow-neon" />
          </a>
          <a
            href="https://www.linkedin.com/in/pinidupramudith0618"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0ff] hover:text-[#38bdf8] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} className="drop-shadow-neon" />
          </a>
          <a
            href="https://www.facebook.com/share/1aBQeLtzAh/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0ff] hover:text-[#38bdf8] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={32} className="drop-shadow-neon" />
          </a>

          <a
            href="https://www.instagram.com/pinidu_pramudith/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0ff] hover:text-[#38bdf8] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={32} className="drop-shadow-neon" />
          </a>
        </div>
        <a
          href="mailto:it23181892@my.sliit.lk"
          className="inline-block px-6 py-3 rounded border border-[#0ff] text-[#0ff] hover:bg-[#0ff] hover:text-black transition-all duration-300 neon-glow"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
}
