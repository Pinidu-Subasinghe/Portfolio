import ProjectCard from "./ProjectCard";
import { Monitor, Camera, User, Bus, Calculator, Heart, Scissors } from "lucide-react";
import SLIITLogo from "../assets/sliit.png";

const projects = [
  {
    title: "Monaz Salon — Salon Reservation",
    icon: <Scissors />,
    description:
      "Monaz Salon is a modern salon reservation web app built with the MERN stack. Features booking, JWT-based auth, and Bootstrap Icons for a polished UI.",
    link: "https://github.com/Pinidu-Subasinghe/Monaz-Salon",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Bootstrap"],
  },
  {
    title: "Ask.ly - Q&A Platform",
    icon: <Calculator />,
    description:
      "A modern Question & Answer web application where users can post questions, answer others, upvote/downvote, and manage their profiles — similar to Stack Overflow, but simpler, faster, and built with the MERN Stack.",
    link: "https://github.com/Pinidu-Subasinghe/Q-A-Platform",
    techStack: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS", "JWT"],
  },
  {
    title: "OT Calculator",
    icon: <Calculator />,
    description:
      "A modern Overtime Calculator web app built with HTML, CSS, and JavaScript. Features glassmorphism UI, a background video, and holiday-aware calculations for Sri Lanka (2025–2027).",
    link: "https://github.com/Pinidu-Subasinghe/OT-Calculator",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio",
    icon: <User />,
    description:
      "My personal portfolio showcasing my skills and projects. Built with React, Tailwind CSS, featuring a modern design and smooth animations.",
    link: "https://github.com/Pinidu-Subasinghe/Portfolio",
    techStack: [
      "React",
      "Tailwind CSS",
      "Lucide",
      "Motion",
      "Vercel",
    ],
  },
  {
    title: "MindCare — Mental Health Care",
    icon: <Heart />,
    description:
      "MindCare is a secure, user-friendly web application that connects patients and mental health professionals. Features mood tracking, journaling, real-time chat, and appointment scheduling with a focus on privacy and accessibility.",
    link: "https://github.com/Pinidu-Subasinghe/Mind-Care",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Mongoose",
      "MongoDB",
    ],
  },
  {
    title: "ZapCart",
    icon: <Monitor />,
    description:
      "E-commerce platform for modern clothing brands. Includes cart functionality, product filters, and a user-friendly interface.",
    techStack: [
      "React",
      "Vite",
      "Bootstrap",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
      "Express",
      "Postman",
    ],

    link: "https://github.com/Pinidu-Subasinghe/Clothing_Store",
  },
  {
    title: "SKW Photography",
    icon: <Camera />,
    description:
      "A complete IT solution built to streamline and modernize the operations of a photography studio. Developed using the MERN stack.",
    link: "https://github.com/Pinidu-Subasinghe/SKW_Photograph",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "Postman",
    ],

    image: SLIITLogo,
  },
  {
    title: "Bus Reservation System",
    icon: <Bus />,
    image: SLIITLogo,
    description:
      "University group project to make bus travel efficient and user-friendly. Features real-time seat availability, secure payments, and fleet management.",
    techStack: ["HTML", "CSS", "Java", "MySQL"],
  },
  {
    title: "Recruitment Company System",
    icon: <User />,
    description:
      "A web app for a recruitment company to streamline hiring. Job seekers create profiles and apply for jobs; recruiters manage listings and candidates.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: SLIITLogo,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 pb-0 bg-[#0b0f1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#38bdf8] drop-shadow-neon text-center">
          My Projects
        </h2>

        {/* Mobile: vertical scroll stack with a max height so users can scroll down through cards */}
        <div className="sm:hidden">
          <div className="flex flex-col gap-6 max-h-[70vh] overflow-y-auto py-2 px-2 -mx-2">
            {projects.map((project, i) => (
              <div key={i} className="w-full px-2 snap-start">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / Tablet grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileCarousel({ items, renderItem }) {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const indexRef = useRef(0);

  // ensure array slots
  itemRefs.current = [];

  useEffect(() => {
    const len = items.length;
    const carousel = carouselRef.current;
    if (!carousel || len === 0) return;

    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % len;
      const el = itemRefs.current[indexRef.current];
      if (el && el.scrollIntoView) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [items]);

  return (
    <div ref={carouselRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-2 -mx-2">
      {items.map((it, idx) => (
        <div key={idx} ref={(el) => (itemRefs.current[idx] = el)} className="snap-center flex-shrink-0 w-72">
          {renderItem(it, idx)}
        </div>
      ))}
    </div>
  );
}
