
import React, { useEffect } from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  type: 'education' | 'certification';
  title: string;
  institution: string;
  year: string;
  details: string;
}

const educationItems: EducationItem[] = [
  {
    type: 'education',
    title: "Master of Science in Industrial Engineering",
    institution: "University Name",
    year: "Graduation Year",
    details: "Thesis: \"Optimization of Manufacturing Systems Using Simulation-Based Analysis\""
  },
  {
    type: 'education',
    title: "Bachelor of Science in Industrial Engineering",
    institution: "University Name",
    year: "Graduation Year",
    details: "Relevant Coursework: Operations Research, Manufacturing Systems, Ergonomics, Quality Control"
  },
  {
    type: 'certification',
    title: "Six Sigma Black Belt (CSSBB)",
    institution: "Certifying Body",
    year: "Year Obtained",
    details: ""
  },
  {
    type: 'certification',
    title: "Project Management Professional (PMP)",
    institution: "Project Management Institute",
    year: "Year Obtained",
    details: ""
  }
];

const Education = () => {
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
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 hidden-element">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="separator mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="card p-6 flex flex-col items-center text-center hidden-element" 
              style={{transitionDelay: `${0.2 * index}s`}}
            >
              <div className="w-16 h-16 rounded-full bg-portfolioBlue bg-opacity-10 flex items-center justify-center mb-4 text-portfolioBlue">
                {item.type === 'education' ? (
                  <GraduationCap size={32} />
                ) : (
                  <Award size={32} />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-portfolioBlue">{item.title}</h3>
              <h4 className="text-lg text-gray-700 mb-1">{item.institution}</h4>
              <p className="text-gray-500 mb-4">{item.year}</p>
              {item.details && <p className="text-gray-600">{item.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
