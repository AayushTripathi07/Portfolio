import { useEffect, useRef, useState } from 'react';
import { Github, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);
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

  const featuredProjects = [
    {
      title: 'StockVision AI – Intelligence-First Trading Terminal',
      description: 'AI-powered financial intelligence platform combining multi-source data, ensemble forecasting, and LLM reasoning for comprehensive market analysis.',
      highlights: [
        'Multi-source data ingestion (Yahoo Finance, Alpha Vantage, Reddit, Groww)',
        'Ensemble forecasting (PatchTST, LSTM, ARIMA) for robust predictions',
        'AI debate engine (bull vs bear vs judge) with LLM reasoning',
        'Sentiment analysis + market regime detection',
        'RMSE/MAE evaluation and comprehensive visualization dashboard',
      ],
      tags: ['Python', 'Streamlit', 'TensorFlow', 'PyTorch', 'PatchTST', 'LSTM', 'ARIMA', 'Gemini', 'Groq', 'NLP'],
      isGenAI: true,
      architecture: 'Data Sources → Data Cleaning & Preprocessing → Feature Engineering → ARIMA + LSTM + PatchTST Models → Ensemble Forecasting → Sentiment Analysis (News/Reddit) → LLM Debate Engine (Bull vs Bear vs Judge) → Final Trading Insight + Visualization Dashboard',
      github: 'https://github.com/AayushTripathi07/stockvision-ai',
    },
    {
      title: 'MedIntel AI – Medical Research Intelligence Platform',
      description: 'AI-powered medical research platform that retrieves, ranks, and generates structured insights from real-time clinical and scientific data.',
      highlights: [
        'Real-time retrieval from PubMed, ClinicalTrials.gov, OpenAlex',
        'Dual-LLM architecture (Ollama Phi-3 + Zephyr fallback)',
        'Credibility-based ranking (recency + reliability scoring)',
        'Structured, source-grounded medical insight generation',
        'Multi-turn contextual reasoning for deeper analysis',
      ],
      tags: ['MERN Stack', 'Ollama', 'HuggingFace', 'NLP', 'LLMs', 'APIs'],
      isGenAI: true,
      architecture: 'User Query → Research Retrieval → Ranking Engine → Dual LLM Processing → Structured Insight Generation → Contextual Memory',
      github: 'https://github.com/AayushTripathi07/medintel-ai',
    },
    {
      title: 'Promptly AI – Developer Automation Engine',
      description: 'AI-powered developer terminal that automates code generation, file handling, and execution workflows.',
      highlights: [
        'Multi-persona LLM reasoning system',
        'Regex-based code extraction and formatting',
        'Automated file creation and workspace management',
        'Local execution pipeline with intelligent parsing',
        'Eliminates manual copy-paste workflow',
      ],
      tags: ['Python', 'Ollama', 'Qwen2.5-Coder', 'Regex', 'Automation Systems'],
      isGenAI: true,
      architecture: 'User Prompt → LLM Processing → Code Extraction → File System Automation → Execution Pipeline',
      github: 'https://github.com/AayushTripathi07/Promptly-AI',
    },
    {
      title: 'Conversational AI Agent – AutoStream AI',
      description: 'Production-grade conversational AI system for lead generation and CRM automation.',
      highlights: [
        'LangGraph-based agent orchestration',
        'Dual-LLM architecture (Gemini + Groq fallback)',
        'Context-aware multi-turn conversations',
        'Automated CRM capture and lead qualification',
        'Vector-based retrieval using FAISS',
      ],
      tags: ['LangGraph', 'FastAPI', 'Streamlit', 'FAISS', 'SQLite', 'Gemini', 'Groq'],
      isGenAI: true,
      architecture: 'User Input → Agent Graph → LLM Processing → Context Memory → CRM Capture → Response Generation',
      github: 'https://github.com/AayushTripathi07/Conversational-AI-Agent',
    },
  ];

  const additionalProjects = [
    {
      title: 'ResumeIQ',
      description: 'Resume Intelligence System using Endee Vector Database for semantic candidate matching.',
      tags: ['Python', 'Streamlit', 'Sentence Transformers', 'Endee Vector DB'],
      isGenAI: true,
      github: 'https://github.com/AayushTripathi07/resume-intelligence',
    },
    {
      title: 'AI Resume Checker + LinkedIn Scraper',
      description: 'Generative AI-powered resume analysis with ATS compatibility and LinkedIn job scraping.',
      tags: ['Python', 'Streamlit', 'Google Gemini API', 'Web Scraping'],
      isGenAI: true,
      github: 'https://github.com/AayushTripathi07/ai-resume-checker',
    },
    {
      title: 'AI Fact Checker',
      description: 'Document-based claim extraction and verification using LLM with web retrieval.',
      tags: ['Python', 'Streamlit', 'Gemini API', 'Serper API'],
      isGenAI: true,
      github: 'https://github.com/AayushTripathi07/Fact-Checking-Web-App',
    },
    {
      title: 'Marketing Analytics AI Pipeline',
      description: 'End-to-end AI pipeline for marketing campaign ROI analysis and optimization.',
      tags: ['Python', 'MySQL', 'SQL', 'Tableau', 'Scikit-learn'],
      isGenAI: false,
      github: 'https://github.com/AayushTripathi07/marketing-analytics-ai-pipeline',
    },
    {
      title: 'PulsePro',
      description: 'Power BI dashboard for workforce analytics and strategic planning.',
      tags: ['Power BI'],
      isGenAI: false,
      github: 'https://github.com/AayushTripathi07/PulsePro',
    },
    {
      title: 'StockVision (Basic)',
      description: 'Hybrid forecasting pipeline comparing ARIMA and LSTM models for stock price predictions.',
      tags: ['Python', 'ARIMA', 'LSTM', 'TensorFlow'],
      isGenAI: false,
      github: 'https://github.com/AayushTripathi07/StockVision',
    },
  ];

  const FeaturedCard = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => (
    <div
      className={`rounded-2xl p-8 border transition-all duration-500 group ${
        project.isGenAI
          ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] lg:col-span-1'
          : 'bg-gray-800/50 border-gray-700 hover:border-gray-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] lg:col-span-1'
      } hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 text-gray-400 hover:text-white transition-colors flex-shrink-0"
          title="GitHub"
        >
          <Github size={20} />
        </a>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

      <div className="mb-6">
        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="text-gray-300 text-sm flex items-start">
              <span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.architecture && (
        <div className="mb-6">
          <button
            onClick={() => setExpandedArchitecture(expandedArchitecture === project.title ? null : project.title)}
            className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
          >
            <span>System Architecture</span>
            <ChevronDown size={14} className={`ml-2 transition-transform ${expandedArchitecture === project.title ? 'rotate-180' : ''}`} />
          </button>
          {expandedArchitecture === project.title && (
            <div className="mt-3 p-3 bg-blue-950/20 border border-blue-500/20 rounded-lg">
              <code className="text-xs text-blue-200 leading-relaxed">{project.architecture}</code>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              project.isGenAI
                ? 'bg-blue-950/40 border-blue-500/30 text-blue-200'
                : 'bg-white/5 border-gray-700 text-gray-300'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
      >
        View GitHub <Github size={14} className="ml-2" />
      </a>
    </div>
  );

  const AdditionalCard = ({ project, index }: { project: typeof additionalProjects[0]; index: number }) => (
    <div
      className={`rounded-xl p-5 border transition-all duration-500 group ${
        project.isGenAI
          ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-blue-500/20 hover:border-blue-500/40'
          : 'bg-gray-800/40 border-gray-700 hover:border-gray-500'
      } hover:scale-102 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${(index + 4) * 50}ms` }}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-base font-semibold leading-snug pr-2">{project.title}</h4>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          title="GitHub"
        >
          <Github size={16} />
        </a>
      </div>

      <p className="text-gray-400 text-xs leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-full border transition-colors ${
              project.isGenAI
                ? 'bg-blue-950/40 border-blue-500/30 text-blue-200'
                : 'bg-white/5 border-gray-700 text-gray-300'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Projects
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <FeaturedCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Additional Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalProjects.map((project, index) => (
                <AdditionalCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
