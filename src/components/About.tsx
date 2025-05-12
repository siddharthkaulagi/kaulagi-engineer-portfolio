
import React, { useEffect } from 'react';
import { ChartLineUp, Cog, Search, Clipboard } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 hidden-element">
          <h2 className="section-title">About Me</h2>
          <div className="separator mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto hidden-element">
          <p className="text-lg mb-6 leading-relaxed">
            I am an industrial engineer with several years of experience specializing in process optimization, lean manufacturing implementation, and continuous improvement methodologies. Throughout my career, I have successfully led projects that have resulted in significant cost savings, productivity improvements, and enhanced quality standards across various manufacturing and service environments.
          </p>
          <p className="text-lg mb-10 leading-relaxed">
            My approach combines technical expertise with practical problem-solving to develop sustainable solutions that drive measurable business value. I am passionate about leveraging data-driven insights to optimize operations and create efficient, waste-free processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="card p-6 text-center hidden-element" style={{transitionDelay: '0.1s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-portfolioAccent bg-opacity-20 text-portfolioAccent mb-4">
              <ChartLineUp size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
            <p className="text-gray-600">Streamlining operations to maximize efficiency and minimize waste</p>
          </div>
          
          <div className="card p-6 text-center hidden-element" style={{transitionDelay: '0.2s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-portfolioAccent bg-opacity-20 text-portfolioAccent mb-4">
              <Cog size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lean Manufacturing</h3>
            <p className="text-gray-600">Implementing lean principles to create value and eliminate non-value-adding activities</p>
          </div>
          
          <div className="card p-6 text-center hidden-element" style={{transitionDelay: '0.3s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-portfolioAccent bg-opacity-20 text-portfolioAccent mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
            <p className="text-gray-600">Leveraging statistical methods to derive actionable insights from operational data</p>
          </div>
          
          <div className="card p-6 text-center hidden-element" style={{transitionDelay: '0.4s'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-portfolioAccent bg-opacity-20 text-portfolioAccent mb-4">
              <Clipboard size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Management</h3>
            <p className="text-gray-600">Leading cross-functional teams to deliver complex projects on time and within budget</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
