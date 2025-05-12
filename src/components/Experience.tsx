
import React, { useEffect } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Industrial Engineer",
    company: "Company Name",
    period: "Jan 2020 - Present",
    achievements: [
      "Led process optimization initiatives across 3 manufacturing plants, resulting in 15% increase in productivity and $1.2M annual cost savings",
      "Developed and implemented standardized work procedures that reduced cycle times by 22% and defect rates by 18%",
      "Conducted time and motion studies to identify bottlenecks, resulting in workflow improvements that increased throughput by 12%",
      "Spearheaded Lean Six Sigma projects with cross-functional teams to address quality issues, achieving 40% reduction in product defects"
    ]
  },
  {
    title: "Industrial Engineer",
    company: "Company Name",
    period: "Mar 2016 - Dec 2019",
    achievements: [
      "Analyzed production workflows and redesigned layout to optimize material flow, reducing transportation waste by 30%",
      "Implemented statistical process control techniques that improved product quality by 25% and reduced rework costs by $300K annually",
      "Developed simulation models using Arena to test process improvements before implementation, minimizing disruption to ongoing operations",
      "Collaborated with IT department to design and implement automated data collection systems that improved reporting accuracy by 35%"
    ]
  },
  {
    title: "Industrial Engineering Intern",
    company: "Company Name",
    period: "Jun 2015 - Sep 2015",
    achievements: [
      "Assisted in conducting time studies and process mapping for key production areas",
      "Participated in 5S implementation projects, resulting in improved workplace organization and 15% reduction in motion waste",
      "Analyzed production data to identify trends and opportunities for improvement"
    ]
  }
];

const Experience = () => {
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
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 hidden-element">
          <h2 className="section-title">Professional Experience</h2>
          <div className="separator mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 md:pl-12 hidden-element" style={{transitionDelay: `${0.2 * index}s`}}>
              {/* Timeline dot */}
              <div className="timeline-dot hidden md:block"></div>
              
              <div className="card p-6 md:p-8">
                <h3 className="text-2xl font-bold text-portfolioBlue mb-1">{exp.title}</h3>
                <h4 className="text-xl text-gray-700 mb-2">{exp.company}</h4>
                <h5 className="text-gray-500 mb-4">{exp.period}</h5>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="text-portfolioAccent mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
