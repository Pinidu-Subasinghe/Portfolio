import ProjectCard from "./ProjectCard";
import { Monitor, Camera, User, Bus } from "lucide-react";
import SLIITLogo from "../assets/sliit.png";

const projects = [
  {
    title: "Portfolio",
    icon: <User />,
    description:
      "My personal portfolio showcasing my skills and projects. Built with React, Tailwind CSS, featuring a modern design and smooth animations.",
    link: "https://github.com/pinidu2002/Portfolio",
    techStack: [
      "React",
      "Tailwind CSS",
      "Lucide",
      "Motion",
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

    link: "https://github.com/pinidu2002/Clothing_Store",
  },
  {
    title: "SKW Photography",
    icon: <Camera />,
    description:
      "A complete IT solution built to streamline and modernize the operations of a photography studio. Developed using the MERN stack.",
    link: "https://github.com/pinidu2002/SKW_Photograph",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
