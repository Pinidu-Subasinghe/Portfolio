import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ name, percentage }) => {
  const progressRef = useRef(null);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && progressRef.current) {
      const progress = progressRef.current;
      progress.style.width = "0%";
      const animation = progress.animate(
        [{ width: "0%" }, { width: `${percentage}%` }],
        {
          duration: 1500,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
      return () => animation.cancel();
    }
  }, [isVisible, percentage]);

  const getGradientStyle = (name) => {
    switch (name) {
      case "HTML5":
        return "bg-gradient-to-r from-orange-500 to-red-600";
      case "CSS3":
        return "bg-gradient-to-r from-blue-500 to-indigo-600";
      case "JavaScript (ES6+)":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case "React.js":
        return "bg-gradient-to-r from-cyan-400 to-blue-600";
      case "Node.js":
        return "bg-gradient-to-r from-green-500 to-emerald-600";
      case "Java":
        return "bg-gradient-to-r from-[#1c1c1c] to-[#e76f00]";
      case "MongoDB":
        return "bg-gradient-to-r from-green-700 to-teal-600";
      case "Kotlin":
        return "bg-gradient-to-r from-purple-500 to-pink-600";
      case "C++":
        return "bg-gradient-to-r from-indigo-500 to-blue-700";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-700";
    }
  };

  const getLogo = (name) => {
    const logos = {
      HTML5:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "JavaScript (ES6+)":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "React.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Node.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      MongoDB:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      Kotlin:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      "C++":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    };

    return (
      <img
        src={
          logos[name] ||
          "https://img.icons8.com/ios-filled/50/ffffff/question-mark.png"
        }
        alt={name}
        className="w-6 h-6 mr-2"
      />
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ translateY: -6 }}
      className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
    >
      <div className="flex items-center mb-4">
        {getLogo(name)}
        <h3 className="text-xl font-bold ml-2 text-white">{name}</h3>
      </div>
      <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
        <div
          ref={progressRef}
          className={`h-4 rounded-full ${getGradientStyle(name)}`}
          style={{ width: "0%" }}
        ></div>
      </div>
      <p className="text-center mt-2 text-sm font-medium text-gray-300">
        {percentage}%
      </p>
  </motion.div>
  );
};

export default SkillCard;
