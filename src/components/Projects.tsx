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
      title: 'Trader Performance vs Market Sentiment Analysis',
      description: 'Behavioral finance and machine learning project analyzing how market sentiment (Fear vs Greed) influences trader profitability.',
      highlights: [
        'Merged trader transaction data with Bitcoin sentiment dataset',
        'Engineered rolling PnL, volatility, and behavioral features',
        'Performed trader segmentation and clustering analysis',
        'Built Gradient Boosting classifier with time-based validation',
      ],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      isAI: true,
    },
    {
      title: 'AI Resume Builder & LinkedIn Intelligence',
      description: 'LLM-powered resume analysis system that evaluates structure, skills, strengths, weaknesses, and suggests job roles.',
      highlights: [
        'PDF parsing and semantic chunking for resume extraction',
        'Embeddings + FAISS vector similarity search for skill matching',
        'Resume scoring with structured feedback generation',
        'Job role recommendation using LLM reasoning',
      ],
      tags: ['Python', 'Gemini API', 'LangChain', 'FAISS', 'Flask'],
      isAI: true,
    },
    {
      title: 'AI Fact Checker',
      description: 'Document-based claim extraction and verification system using LLM with web retrieval.',
      highlights: [
        'Extracts verifiable claims from PDF documents',
        'Uses web search for real-time claim verification',
        'Classifies claims as Verified, Inaccurate, or False',
        'Built using retrieval-augmented reasoning pipeline',
      ],
      tags: ['Python', 'Streamlit', 'Gemini API', 'Serper API'],
      isAI: true,
    },
    {
      title: 'Customer Lifetime Value Prediction',
      description: 'End-to-end ML pipeline predicting customer lifetime value using RFM analysis.',
      highlights: [
        'MySQL ETL pipeline with SQLAlchemy ORM',
        'RFM feature engineering for customer segmentation',
        'Random Forest regression model development',
        'Business-focused CLV insights and recommendations',
      ],
      tags: ['Python', 'MySQL', 'Scikit-learn', 'SQLAlchemy'],
      isAI: true,
    },
    {
      title: 'StockVision',
      description: 'Time-series forecasting project comparing ARIMA and LSTM for stock price prediction.',
      highlights: [
        'Data preprocessing and normalization for time-series data',
        'Statistical modeling using ARIMA methodology',
        'Deep learning implementation using LSTM networks',
        'Evaluated using RMSE and MAE metrics',
      ],
      tags: ['Python', 'ARIMA', 'TensorFlow', 'PyTorch'],
      isAI: true,
    },
    {
      title: 'Marketing Campaign ROI Analysis',
      description: 'SQL and Tableau-based business analytics project evaluating marketing performance.',
      highlights: [
        'ROI calculation using (Revenue – Spend) / Spend formula',
        'SQL data cleaning and aggregation across multiple sources',
        'Channel-level performance insights and attribution analysis',
        'Interactive Tableau dashboard for executive reporting',
      ],
      tags: ['MySQL', 'SQL', 'Tableau'],
      isAI: false,
    },
    {
      title: 'Breast Cancer Prediction',
      description: 'Machine learning model predicting malignant vs benign tumors.',
      highlights: [
        'Applied Wisconsin Breast Cancer Dataset for training',
        'Compared Logistic Regression, SVM, and Random Forest models',
        'PCA for dimensionality reduction and feature optimization',
        'Evaluated using Accuracy, Precision, Recall, and AUC-ROC',
      ],
      tags: ['Python', 'Scikit-learn', 'PCA'],
      isAI: true,
    },
    {
      title: 'Flight Price Prediction',
      description: 'Regression model predicting airline ticket prices using feature engineering and Random Forest.',
      highlights: [
        'Extensive EDA and datetime feature extraction',
        'One-hot and ordinal encoding for categorical variables',
        'Random Forest with hyperparameter tuning optimization',
        'Achieved strong R² performance on test set',
      ],
      tags: ['Python', 'Pandas', 'Scikit-learn'],
      isAI: true,
    },
    {
      title: 'PulsePro – HR Analytics Dashboard',
      description: 'Power BI-based workforce analytics dashboard.',
      highlights: [
        'Interactive dashboards for real-time HR metrics',
        'Workforce retention and performance insights',
        'Strategic workforce planning and forecasting analysis',
        'Executive-level reporting and KPI tracking',
      ],
      tags: ['Power BI'],
      isAI: false,
    },
    {
      title: 'PayEase',
      description: 'Java-based fees management system.',
      highlights: [
        'Automated fee calculations and billing logic',
        'Secure payment gateway integration',
        'Real-time reporting and transaction analytics',
        'Modular NetBeans architecture for maintainability',
      ],
      tags: ['Java'],
      isAI: false,
    },
    {
      title: 'AcademEase',
      description: 'C++ console-based student record management system.',
      highlights: [
        'User authentication and role-based access control',
        'CRUD operations for student records management',
        'File-based persistent storage mechanism',
        'Secure access control and data validation',
      ],
      tags: ['C++'],
      isAI: false,
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
              className={`rounded-2xl p-7 border transition-all duration-500 group ${
                project.isAI
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                  : 'bg-gray-800/50 border-gray-700 hover:border-gray-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
              } hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                </div>
                <a
                  href="#"
                  className="ml-3 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="mb-5">
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      project.isAI
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
