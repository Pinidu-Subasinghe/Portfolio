import ProjectCard from './ProjectCard';
import { Monitor, Camera, User } from 'lucide-react';

const projects = [
  {
    title: "SKW Photography",
    icon: <Camera />,
    description: "Photography portfolio for SKW Studio. Built with React and Tailwind, featuring a sleek gallery and responsive design.",
    link: "https://github.com/pinidu2002/SKW_Photograph"
  },
  {
    title: "ZapCart",
    icon: <Monitor />,
    description: "E-commerce platform for modern clothing brands. Includes cart functionality, product filters, and a user-friendly interface.",
    link: "https://github.com/pinidu2002/Clothing_Store"
  },
  {
    title: "Portfolio",
    icon: <User />,
    description: "My personal portfolio showcasing my skills and projects. Built with React, Tailwind CSS, featuring a modern design and smooth animations.",
    link: "https://github.com/pinidu2002/Portfolio"
  }
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