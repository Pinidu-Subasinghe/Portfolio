import React, { useEffect, useRef, useState } from "react";

const SkillCard = ({ name, percentage }) => {
  const progressRef = useRef(null);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
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
          duration: 1000,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
      return () => animation.cancel();
    }
  }, [isVisible, percentage]);

  // ✨ Modern neon cyan gradient with realistic light reflection
  const defaultBarColor =
    "bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 shadow-[0_0_15px_#22d3ee80,0_0_35px_#22d3ee60,0_0_60px_#22d3ee40]";

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
      "Express.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
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
    <div
      ref={cardRef}
      className="bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-md transition-all duration-300 border border-white/10 hover:border-cyan-400 flex flex-col justify-between h-full hover:shadow-[0_0_25px_#22d3ee40]"
    >
      {/* Header: logo + name + percentage (desktop only) */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {getLogo(name)}
          <h3 className="text-xl font-bold ml-2 text-white tracking-wide">
            {name === "JavaScript (ES6+)" ? "JavaScript" : name}
          </h3>
        </div>
        <span className="hidden sm:block text-cyan-300 text-sm font-semibold drop-shadow-[0_0_4px_#22d3ee]">
          {percentage}%
        </span>
      </div>

      {/* Skill bar with glowing inner light */}
      <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden relative">
        <div
          ref={progressRef}
          className={`h-4 rounded-full ${defaultBarColor} transition-all duration-500`}
          style={{
            width: "0%",
            boxShadow:
              "inset 0 0 5px #22d3ee80, 0 0 10px #22d3ee80, 0 0 25px #22d3ee60",
          }}
        ></div>

        {/* Soft reflection overlay for realism */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SkillCard;
