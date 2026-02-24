import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreAreas = [
    {
      title: 'Data Analytics',
      skills: ['SQL, MySQL', 'Tableau, Power BI', 'Business Intelligence', 'KPI & ROI Analysis'],
    },
    {
      title: 'Machine Learning',
      skills: ['Feature Engineering', 'Random Forest, Gradient Boosting', 'Time-Series (ARIMA, LSTM)', 'Model Evaluation'],
    },
    {
      title: 'AI / ML Engineering',
      skills: ['End-to-End ML Pipelines', 'Model Optimization', 'Hyperparameter Tuning', 'Deployment (Flask, Streamlit)'],
    },
    {
      title: 'LLM & GenAI',
      skills: ['Prompt Engineering', 'Embeddings & Vector Search', 'FAISS', 'Retrieval-Augmented Generation (RAG)'],
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10 animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">
            Aayush Tripathi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8 animate-fadeInUp animation-delay-100">
            Data & AI Engineer
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            Specializing in Analytics, Machine Learning & GenAI Systems
          </p>

          <div className="max-w-4xl mx-auto mb-12 animate-fadeInUp animation-delay-300">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              I build end-to-end data and AI systems — from analytics dashboards and predictive models to LLM-powered intelligent applications. My work spans data cleaning, feature engineering, machine learning, time-series forecasting, and retrieval-augmented generation systems. I focus on practical, production-oriented solutions that generate measurable impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp animation-delay-400">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              View Projects
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=19YrWKKq35L9iXOT5XHLWlkGpQsXR5V53"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mb-16 animate-fadeInUp animation-delay-500">
          <h3 className="text-xl font-bold text-center mb-10">Core Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {coreAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">{area.title}</h4>
                <ul className="space-y-3">
                  {area.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <ArrowDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
