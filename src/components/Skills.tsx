
import React, { useEffect } from 'react';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Process Improvement Methodologies",
    skills: [
      { name: "Lean Manufacturing", percentage: 95 },
      { name: "Six Sigma", percentage: 90 },
      { name: "Value Stream Mapping", percentage: 85 },
      { name: "Kaizen", percentage: 80 }
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "AutoCAD", percentage: 85 },
      { name: "SolidWorks", percentage: 80 },
      { name: "MS Project", percentage: 90 },
      { name: "Arena Simulation", percentage: 75 }
    ]
  },
  {
    title: "Data Analysis",
    skills: [
      { name: "Excel (Advanced)", percentage: 95 },
      { name: "Minitab", percentage: 85 },
      { name: "Python", percentage: 80 },
      { name: "Tableau", percentage: 75 }
    ]
  }
];

const Skills = () => {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hidden-element').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.hidden-element').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16 hidden-element">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="separator mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="hidden-element" style={{transitionDelay: `${0.1 * categoryIndex}s`}}>
              <h3 className="text-xl font-bold mb-6 text-portfolioBlue">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-portfolioAccent">{skill.percentage}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <div 
                        className="skill-progress" 
                        style={{'--progress-width': `${skill.percentage}%`} as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
