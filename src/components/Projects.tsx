import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Caress',
      description: 'Flutter-based mental health app integrating ML models (90% prediction accuracy) with stress detection and automated alerts.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['Flutter', 'ML', 'Mobile App'],
    },
    {
      title: 'StockVision',
      description: 'Stock price forecasting system using ARIMA + LSTM, achieving 20% higher accuracy and reduced RMSE/MAE.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['Python', 'LSTM', 'Time Series'],
    },
    {
      title: 'PulsePro',
      description: 'Power BI HR analytics dashboard that improved decision-making and reduced analysis time by 25%.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['Power BI', 'Analytics', 'Dashboard'],
    },
    {
      title: 'Flight Price Prediction',
      description: 'Flask-based web app deployed on Heroku for predicting flight fares with 85%+ accuracy.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['Flask', 'ML', 'Deployment'],
    },
    {
      title: 'Museum Ticketing Chatbot',
      description: 'AI-based chatbot for automated museum ticketing with multilingual support, payment integration, and analytics insights.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['AI', 'Chatbot', 'NLP'],
    },
    {
      title: 'AcademEase',
      description: 'Web app for managing academic records using Flask and SQL to improve institutional data organization.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['Flask', 'SQL', 'Web App'],
    },
    {
      title: 'PayEase',
      description: 'Java-based payment automation system supporting secure transactions and automatic record generation.',
      github: 'https://github.com/AayushTripathi07',
      tags: ['Java', 'Automation', 'Security'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm text-gray-400 group-hover:text-white transition-colors"
              >
                View Project <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
