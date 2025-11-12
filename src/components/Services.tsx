import { useEffect, useRef, useState } from 'react';
import { BarChart, Layout, Cpu } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: BarChart,
      title: 'Data Analysis',
      description: 'Expert data cleaning, preparation, and analysis of large datasets using Python, SQL, and statistical methods.',
    },
    {
      icon: Layout,
      title: 'Dashboard Development',
      description: 'Interactive data visualizations and KPI dashboards using Power BI, Tableau, and advanced Excel techniques.',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Predictive model design and implementation using ML/DL techniques, now expanding into LLMs and GenAI solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Services
        </h2>
        <p className={`text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          I offer data analysis, dashboard development, and machine learning model design services tailored to business and research needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 text-center max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 leading-relaxed">
            Currently upgrading my expertise by learning LLMs (Large Language Models) and Generative AI (GenAI) to deliver AI-powered data solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
