import React from 'react';
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
        {/* Mobile: horizontal carousel */}
        <div className="sm:hidden">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-2 -mx-2">
            {skills.map((skill, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-64">
                <SkillCard name={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
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

export default Skills;
