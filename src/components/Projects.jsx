import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import {
  TrendingUp,
  Monitor,
  Camera,
  User,
  Bus,
  Calculator,
  Heart,
  Scissors,
  MessageSquareText,
  BriefcaseBusiness,
} from "lucide-react";

import SLIITLogo from "../assets/sliit.png";
import { link } from "framer-motion/client";

const projects = [
  {
    title: "Lakneth Digital Solutions - Marketing Agency Website",
    icon: <TrendingUp />,
    description:
      "🚀 A responsive agency website frontend built with React.js and styled with Tailwind CSS.",
    link: "https://github.com/Pinidu-Subasinghe/Lakneth-Digital-Solutions",
    techStack: [
      "React",
      "Lucide Icons",
      "Tailwind CSS",
      "JavaScript",
      "JSON",
      "Vercel",
      "Whatsapp API",
      "Facebook Graph API",
    ],
  },
  {
    title: "Monaz Salon — Salon Reservation",
    icon: <Scissors />,
    description:
      "Monaz Salon is a modern salon reservation web app built with the MERN stack. Features booking, JWT-based auth, and Bootstrap Icons for a polished UI.",
    link: "https://github.com/Pinidu-Subasinghe/Monaz-Salon",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Bootstrap",
    ],
  },
  {
    title: "Ask.ly - Q&A Platform",
    icon: <MessageSquareText />,
    description:
      "A modern Q&A web app where users can post questions, answer others, upvote/downvote, and manage profiles — built with the MERN Stack.",
    link: "https://github.com/Pinidu-Subasinghe/Q-A-Platform",
    techStack: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "JWT",
    ],
  },
  {
    title: "OT Calculator",
    icon: <Calculator />,
    description:
      "A modern Overtime Calculator web app with glassmorphism UI, a looping background video, and holiday-aware logic for Sri Lanka (2025–2027).",
    link: "https://github.com/Pinidu-Subasinghe/OT-Calculator",
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    title: "Portfolio",
    icon: <User />,
    description:
      "My personal portfolio built with React and Tailwind CSS — features smooth animations and a clean, responsive design.",
    link: "https://github.com/Pinidu-Subasinghe/Portfolio",
    techStack: ["React", "Tailwind CSS", "lucideicons", "Motion", "Vercel"],
  },
  {
    title: "MindCare — Mental Health Care",
    icon: <Heart />,
    description:
      "MindCare connects patients and professionals for mental health support. Features journaling, chat, mood tracking, and scheduling — built with Next.js.",
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
      "E-commerce platform for modern clothing brands. Includes filtering, cart management, and a responsive UI.",
    link: "https://github.com/Pinidu-Subasinghe/Clothing_Store",
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
  },
  {
    title: "SKW Photography",
    icon: <Camera />,
    description:
      "An end-to-end MERN solution for photography studio management — rentals, resources, and feedback analytics.",
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
    description:
      "A university project for bus booking and fleet management with real-time seat availability and secure payments.",
    techStack: ["HTML", "CSS", "Java", "MySQL"],
    image: SLIITLogo,
  },
  {
    title: "Recruitment Company System",
    icon: <BriefcaseBusiness />,
    description:
      "A recruitment system enabling job seekers to apply and recruiters to manage listings — built using PHP and MySQL.",
    link: "https://github.com/Pinidu-Subasinghe/Recruitment-Company-System",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: SLIITLogo,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-28 pb-0 bg-[#0b0f1a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#38bdf8] drop-shadow-neon text-center">
          My Projects
        </h2>

        {/* ✅ Mobile: Horizontal carousel with equal-height cards */}
        <div className="sm:hidden">
          <MobileCarousel
            items={projects}
            renderItem={(p, i) => <ProjectCard key={i} {...p} />}
          />
        </div>

        {/* ✅ Desktop / Tablet grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ✅ Mobile Carousel — fixed equal card height */
function MobileCarousel({ items, renderItem }) {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  return (
    <div
      ref={carouselRef}
      className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-2 -mx-2"
    >
      {items.map((it, idx) => (
        <div
          key={idx}
          ref={(el) => (itemRefs.current[idx] = el)}
          className="snap-center flex-shrink-0 w-72 min-h-[400px] h-[400px] flex items-stretch"
        >
          <div className="w-full h-full flex">{renderItem(it, idx)}</div>
        </div>
      ))}
    </div>
  );
}
