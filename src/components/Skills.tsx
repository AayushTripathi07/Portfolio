import { useEffect, useRef, useState } from 'react';
import { Code, Database, BarChart3, Brain, Sparkles } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'SQL', 'C++'],
    },
    {
      title: 'Data Tools',
      icon: BarChart3,
      skills: ['Power BI', 'Tableau', 'MS Excel', 'Power Query'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'SSMS', 'MongoDB'],
    },
    {
      title: 'Technical Skills',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'Data Visualization', 'Statistical Analysis', 'Database Management'],
    },
  ];

  const exploringAreas = [
    'Retrieval-Augmented Generation (RAG)',
    'LLM Evaluation & Prompt Optimization',
    'Financial Machine Learning',
    'Scalable ML Pipelines & Production Systems',
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-white/5 px-3 py-1 rounded-full text-gray-300 border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-blue-500/20 rounded-2xl p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={24} className="text-blue-400" />
              <h3 className="text-2xl font-bold">Currently Exploring</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {exploringAreas.map((area, index) => (
                <div
                  key={area}
                  className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${450 + index * 50}ms` }}
                >
                  <span className="text-blue-400 text-lg flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
