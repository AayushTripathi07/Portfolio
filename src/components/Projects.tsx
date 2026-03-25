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
    },
    {
      title: 'Resume Intelligence System using Endee Vector Database',
      description: 'Semantic resume search engine using Sentence Transformers embeddings and Endee vector database for similarity-based retrieval.',
      highlights: [
        'Built semantic resume search engine using Sentence Transformers embeddings and Endee vector database',
        'Implemented PDF parsing, embedding generation, and vector indexing for natural language recruiter queries',
        'Designed Streamlit interface enabling recruiters to search resumes using plain English queries',
        'Enabled semantic candidate matching beyond traditional keyword search',
      ],
      tags: ['Python', 'Streamlit', 'Sentence Transformers', 'Endee Vector Database', 'NLP'],
      isGenAI: true,
      architecture: 'Resume PDFs → Text Extraction → Sentence Embeddings → Endee Vector Index → Query Embedding → Similarity Search → Ranked Resume Results',
    },
    {
      title: 'AI Resume Checker & LinkedIn Job Scraper',
      description: 'Generative AI-powered resume analysis system using Google Gemini with ATS compatibility checking and LinkedIn job scraping.',
      highlights: [
        'Built Generative AI-powered resume analysis system using Gemini to evaluate candidate profiles',
        'Implemented ATS compatibility checking with resume summaries and optimization suggestions',
        'Developed LinkedIn job scraping module to retrieve relevant job listings',
        'Designed Streamlit interface for uploading resumes and receiving structured AI feedback',
      ],
      tags: ['Python', 'Streamlit', 'Google Gemini API', 'Web Scraping', 'NLP'],
      isGenAI: true,
      architecture: 'Resume Upload → Text Extraction → Content Parsing → Gemini LLM Analysis → ATS Evaluation → Resume Feedback → LinkedIn Job Scraping',
    },
    {
      title: 'AI Fact Checker',
      description: 'Document-based claim extraction and verification system using LLM with web retrieval for real-time fact-checking.',
      highlights: [
        'Extracts 10+ verifiable claims per document with high precision',
        'Real-time web search integration reduces verification latency',
        'Classifies claims with confidence scores (Verified, Inaccurate, False)',
        'Built RAG pipeline for improved context-aware reasoning',
      ],
      tags: ['Python', 'Streamlit', 'Gemini API', 'Serper API'],
      isGenAI: true,
      architecture: 'Document / PDF Input → Claim Extraction (LLM) → Web Search (Serper API) → Evidence Retrieval → LLM Verification → Fact Classification → Explanation Generation',
    },
  ];

  const additionalProjects = [
    {
      title: 'StockVision – Stock Price Forecasting',
      description: 'Hybrid forecasting pipeline comparing ARIMA and LSTM models for accurate stock price predictions.',
      tags: ['Python', 'ARIMA', 'LSTM', 'TensorFlow'],
      isGenAI: false,
    },
    {
      title: 'PayEase – Fees Management System',
      description: 'Java-based fee management system designed to automate payment processing, reporting, and financial tracking.',
      tags: ['Java', 'NetBeans Platform', 'OOP'],
      isGenAI: false,
    },
    {
      title: 'Trader Sentiment Analysis',
      description: 'Behavioral finance ML analyzing how market sentiment influences trader profitability.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      isGenAI: false,
    },
    {
      title: 'Customer Lifetime Value Prediction',
      description: 'ML pipeline predicting customer lifetime value using RFM analysis.',
      tags: ['Python', 'MySQL', 'Scikit-learn', 'SQLAlchemy'],
      isGenAI: false,
    },
    {
      title: 'Marketing Campaign ROI Analysis',
      description: 'SQL and Tableau-based analytics evaluating marketing channel performance.',
      tags: ['MySQL', 'SQL', 'Tableau'],
      isGenAI: false,
    },
    {
      title: 'Breast Cancer Prediction',
      description: 'ML model comparing Logistic Regression, SVM, and Random Forest for classification.',
      tags: ['Python', 'Scikit-learn', 'PCA'],
      isGenAI: false,
    },
    {
      title: 'Flight Price Prediction',
      description: 'Regression model with feature engineering achieving R² ≈ 0.81 on price prediction.',
      tags: ['Python', 'Pandas', 'Scikit-learn'],
      isGenAI: false,
    },
    {
      title: 'PulsePro – HR Analytics Dashboard',
      description: 'Power BI dashboard for workforce analytics and strategic planning.',
      tags: ['Power BI'],
      isGenAI: false,
    },
    {
      title: 'AcademEase – Student Record System',
      description: 'C++ console-based student record management with persistent storage.',
      tags: ['C++'],
      isGenAI: false,
    },
    {
      title: 'Caress – Mental Health Companion App',
      description: 'Mental health support application with conversational AI interaction.',
      tags: ['React', 'AI', 'Mental Health Tech'],
      isGenAI: false,
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
          href="#"
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

      <button className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
        View GitHub <Github size={14} className="ml-2" />
      </button>
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
          href="#"
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
