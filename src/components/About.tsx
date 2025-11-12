import { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A dedicated Data/Business Analyst and Machine Learning enthusiast pursuing a B.Tech. in Computer Science and Engineering at Bennett University. My expertise lies in data analysis, statistical modeling, and business intelligence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Experience at EDF International involved optimizing data accuracy by 95% through large-scale data cleaning and developing actionable insights using Python, SQL, and Power BI. Passion for leveraging data-driven methodologies to enhance organizational performance and drive informed decision-making.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently expanding skills in Large Language Models (LLMs) and Generative AI (GenAI) to integrate advanced AI capabilities into analytical and automation workflows.
            </p>
          </div>

          <div className={`mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-6">
              <GraduationCap size={32} className="text-white mr-4" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">B.Tech. in Computer Science and Engineering</h4>
              <p className="text-gray-400">Bennett University, Greater Noida</p>
              <p className="text-gray-500 mt-1">2022 – 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
