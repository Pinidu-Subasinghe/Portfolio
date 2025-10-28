import JWTLogo from "../assets/jwt.svg";

export default function ProjectCard({
  title,
  icon,
  description,
  link,
  image,
  techStack = [],
}) {
  const getTechLogo = (tech) => {
    const normalizeTech = (t) =>
      t
        .trim()
        .toLowerCase()
        .replace(/\.?js$/, "")
        .replace(/\s+/g, "");

    const logos = {
      html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      javascript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      mysql:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      mongodb:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      jwt: JWTLogo,
      mern: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      next: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nextdotjs.svg",
      nextjs: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nextdotjs.svg",
      mongoose: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mongoose.svg",
      vercel: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/vercel.svg",
      socketio: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/socketdotio.svg",
      clerk: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/clerk.svg",
      nextauth:
        "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nextauthdotjs.svg",
      cloudinary:
        "https://cloudinary-res.cloudinary.com/image/upload/c_scale,fl_attachment,w_500/v1/logo/for_white_bg/cloudinary_icon_for_white_bg.png",
      vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
      bootstrap:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      react:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      express:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      node:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      tailwindcss:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
      postman:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      lucide: "https://lucide.dev/logo.svg",
      motion:
        "https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc",
    };

    return (
      logos[normalizeTech(tech)] ||
      "https://img.icons8.com/ios-filled/50/ffffff/question-mark.png"
    );
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-cyan-400 shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
      {/* Header: Icon + Title */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3 text-cyan-400">
          <div className="text-2xl">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        {image && (
          <img
            src={image}
            alt="Logo"
            className="h-5 w-auto object-contain grayscale invert"
          />
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed mb-4">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {techStack.map((tech, i) => (
          <img
            key={i}
            src={getTechLogo(tech)}
            alt={tech}
            title={tech}
            className="h-6 w-6 object-contain transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        ))}
      </div>

      {/* GitHub Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-cyan-300 text-sm hover:underline"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}
