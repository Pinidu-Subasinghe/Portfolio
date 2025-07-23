import ProjectCard from './ProjectCard';
import { Monitor, Camera } from 'lucide-react';

const projects = [
  {
    title: "SKW Photography",
    icon: <Camera />,
    description: "Photography portfolio for SKW Studio. Built with React and Tailwind.",
    link: "https://github.com/pinidu2002/SKW_Photograph"
  },
  {
    title: "ZapCart",
    icon: <Monitor />,
    description: "E-commerce site for modern clothing brands. Includes cart and filter features.",
    link: "https://github.com/pinidu2002/Clothing_Store"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-3xl font-bold mb-8 text-[#38bdf8] drop-shadow-neon text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
