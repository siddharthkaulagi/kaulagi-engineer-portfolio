
import React, { useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Manufacturing Process Optimization",
    description: "Comprehensive value stream mapping and implementation of pull system that reduced WIP inventory by 40% and lead time by 25%, resulting in $450K annual savings.",
    image: "https://placehold.co/800x600/1A365D/FFFFFF/png?text=Manufacturing+Process",
    link: "#"
  },
  {
    title: "Ergonomic Workstation Redesign",
    description: "Redesigned 12 assembly workstations to improve ergonomics and efficiency, reducing workplace injuries by 35% and improving productivity by 18%.",
    image: "https://placehold.co/800x600/1A365D/FFFFFF/png?text=Ergonomic+Design",
    link: "#"
  },
  {
    title: "Supply Chain Optimization",
    description: "Developed network optimization model to determine optimal supplier locations, reducing transportation costs by 22% and improving on-time delivery performance from 92% to 98.5%.",
    image: "https://placehold.co/800x600/1A365D/FFFFFF/png?text=Supply+Chain",
    link: "#"
  },
  {
    title: "Quality Control System Implementation",
    description: "Implemented comprehensive statistical process control system across production lines, reducing defect rates by 45% and customer complaints by 60%.",
    image: "https://placehold.co/800x600/1A365D/FFFFFF/png?text=Quality+Control",
    link: "#"
  }
];

const Projects = () => {
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
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16 hidden-element">
          <h2 className="section-title">Featured Projects</h2>
          <div className="separator mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden hidden-element" style={{transitionDelay: `${0.2 * index}s`}}>
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-portfolioBlue">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-portfolioAccent hover:text-portfolioBlue-light font-medium transition-colors"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
