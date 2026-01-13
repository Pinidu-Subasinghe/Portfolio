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

      react:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      express:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
      bootstrap:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      postman:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",

      tailwindcss: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
      vercel: "https://cdn.simpleicons.org/vercel/FFFFFF",
      motion: "https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc",

      // ✅ FIXED Lakneth icons (normalized keys)
      lucideicons: "https://cdn.simpleicons.org/lucide/FFFFFF",
      json: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/json-6.png",
      whatsappapi: "https://cdn.simpleicons.org/whatsapp/25D366",
      facebookgraphapi: "https://cdn.simpleicons.org/facebook/0866FF",

      next: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      nextjs: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      mongoose: "https://cdn.simpleicons.org/mongoose/880000",
      cloudinary:
        "https://cloudinary-res.cloudinary.com/image/upload/c_scale,fl_attachment,w_500/v1/logo/for_white_bg/cloudinary_icon_for_white_bg.png",
    };

    return (
      logos[normalizeTech(tech)] ||
      "https://img.icons8.com/ios-filled/50/ffffff/question-mark.png"
    );
  };

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400 backdrop-blur-md shadow-md transition-all duration-300 flex flex-col justify-between h-full">
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
