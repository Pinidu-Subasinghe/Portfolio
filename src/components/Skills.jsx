import React, { useEffect, useRef } from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    { name: 'HTML5', percentage: 85 },
    { name: 'CSS3', percentage: 80 },
    { name: 'JavaScript (ES6+)', percentage: 75 },
    { name: 'React.js', percentage: 70 },
    { name: 'Node.js', percentage: 65 },
    { name: 'Java', percentage: 60 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'Kotlin', percentage: 60 },
    { name: 'C++', percentage: 75 },
  ];

  return (
    <section id="skills" className="py-28 bg-[#0b0f1a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#38bdf8] drop-shadow-neon text-center">My Skills</h2>

        {/* Mobile: horizontal auto-rotating carousel (1.5s) */}
        <div className="sm:hidden">
          <MobileCarousel items={skills} renderItem={(s, i) => <SkillCard key={i} name={s.name} percentage={s.percentage} />} />
        </div>

        {/* Desktop / Tablet grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
};

function MobileCarousel({ items, renderItem }) {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const indexRef = useRef(0);

  itemRefs.current = [];

  useEffect(() => {
    const len = items.length;
    const carousel = carouselRef.current;
    if (!carousel || len === 0) return;

    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % len;
      const el = itemRefs.current[indexRef.current];
      if (el && el.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [items]);

  return (
    <div ref={carouselRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-2 -mx-2">
      {items.map((it, idx) => (
        <div key={idx} ref={(el) => (itemRefs.current[idx] = el)} className="snap-center flex-shrink-0 w-64">
          {renderItem(it, idx)}
        </div>
      ))}
    </div>
  );
}

export default Skills;
