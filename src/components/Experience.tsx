import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start mb-6">
              <div className="bg-white/10 p-3 rounded-lg mr-4">
                <Briefcase size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Data Analyst Intern</h3>
                <p className="text-xl text-gray-300 mb-3">EDF International</p>
                <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>June 2024 – July 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">•</span>
                <span>Cleaned and prepared a customer database of 1.6M entries using Python, achieving a 95% reduction in data errors.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">•</span>
                <span>Utilized SSMS and SQL for data management and reporting.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1">•</span>
                <span>Created Power BI dashboards to visualize KPIs and improve decision-making.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
