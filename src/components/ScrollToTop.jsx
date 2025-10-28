import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
      className="fixed right-4 bottom-6 z-50 p-3 rounded-full 
                 bg-cyan-400 text-black 
                 shadow-[0_0_15px_#22d3ee80,0_0_35px_#22d3ee60] 
                 hover:shadow-[0_0_25px_#22d3eeaa,0_0_45px_#22d3ee80] 
                 transition-all duration-300 
                 hover:scale-110 hover:bg-cyan-300
                 focus:outline-none focus:ring-4 focus:ring-cyan-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
