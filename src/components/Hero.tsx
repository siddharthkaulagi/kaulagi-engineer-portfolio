
import React from 'react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-portfolioBlue-dark via-portfolioBlue to-portfolioBlue-light text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-7/12 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Hello, I'm <span className="text-portfolioAccent">SIDDHARTH KAULAGI</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 animate-fade-in" style={{animationDelay: '0.4s'}}>Industrial Engineer</h2>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
              Optimizing processes, driving efficiency, and solving complex industrial challenges through data-driven methodologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                View Projects
              </button>
              <a href="#" className="btn btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center md:justify-end animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://placehold.co/400x400/1A365D/FFFFFF/png?text=SK" 
                alt="Siddharth Kaulagi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
