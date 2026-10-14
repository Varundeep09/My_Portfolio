import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Info, 
  X,
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const projects = [
    {
      id: "churnprediction",
      number: "01",
      title: "Churn Prediction + AI Explanation",
      category: "Machine Learning & Decision Intelligence",
      role: "Predictive ML & Explainability",
      description: "Trained a Random Forest churn prediction model on customer feature vectors and coupled it with an experimental LLM-based explanation layer. The system generates concise, plain-language explanations of model outputs to help retention teams understand risk factors.",
      problem: "Traditional churn classifiers return numerical risk scores without actionable plain-language rationale, creating friction for non-technical customer retention teams.",
      solution: "Engineered Scikit-Learn feature pipelines and model inference coupled with a local explainability module that contextualizes feature attributions into plain-English reasoning while keeping raw model scores intact.",
      technologies: ["Python", "Scikit-Learn", "Random Forest", "FastAPI", "SQLite", "Local GenAI Explainer"],
      github: "https://github.com/Varundeep09/Churn-Prediction-AI-Explanation",
      live: null, // Hidden: no genuine live URL
      badge: "ML & Explainability"
    },
    {
      id: "campuscircle",
      number: "02",
      title: "Campus Circle — Academic Networking Platform",
      category: "Django Web Application",
      role: "Full-Stack Backend Development",
      description: "A comprehensive academic collaboration web platform connecting university students, alumni, and faculty members with role-based permissions, mentorship requests, and discussion feeds.",
      problem: "Fragmented communication across student cohorts and alumni networks hindered organic mentorship matching and campus event coordination.",
      solution: "Engineered a monolithic Django application featuring custom user models, authentication, role-based access control (RBAC), and relational MySQL models handling posts, requests, and events.",
      technologies: ["Python", "Django", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/Varundeep09/Campus_Circle",
      live: null, // Hidden: no genuine live URL
      badge: "Django & RBAC"
    },
    {
      id: "flightbooking",
      number: "03",
      title: "Flight Booking Simulator",
      category: "Python & FastAPI Application",
      role: "Backend API Engineering",
      description: "High-performance airline seat reservation simulator engineered during the Infosys Springboard virtual internship. Features dynamic pricing engines and seat allocation state machines.",
      problem: "Airline booking workflows require resilient transactional integrity to prevent double-booking during concurrent seat reservation requests.",
      solution: "Developed asynchronous RESTful endpoints with FastAPI, enforcing relational schema validation, dynamic fare calculations based on seat demand, and atomic booking transactions.",
      technologies: ["Python", "FastAPI", "SQL", "Database Concepts", "REST APIs", "Dynamic Pricing"],
      github: "https://github.com/Varundeep09/Flight-Booking-System",
      live: null, // Hidden: no genuine live URL
      badge: "FastAPI Backend"
    },
    {
      id: "expensetracker",
      number: "04",
      title: "Expense Tracker",
      category: "Personal Finance Web Application",
      role: "Flask & Database Development",
      description: "Full-stack personal finance tracking application helping individuals record daily expenditures, categorize transactions, and visualize monthly budgets through interactive charts.",
      problem: "Users lack simple, reliable self-hosted tools to monitor spending trends, budget thresholds, and categorize multi-source expenses.",
      solution: "Built a Flask application backed by PostgreSQL, featuring responsive expense forms, date filtering, and Chart.js dashboards for spending breakdown visualization.",
      technologies: ["Python", "Flask", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "Chart.js"],
      github: "https://github.com/Varundeep09/Expense-Tracker-Flask",
      live: null, // Hidden: live demo link removed
      badge: "Flask & PostgreSQL"
    },
    {
      id: "tuneinlocal",
      number: "05",
      title: "Tune-In-Local",
      category: "Java Web Application",
      role: "Java Web Architecture",
      description: "Community collaboration platform for independent musicians to register artist profiles, assemble local band formations, and coordinate jam sessions and live gig opportunities.",
      problem: "Grassroots music artists struggle to find local bandmates with matching genre tastes, instruments, and experience levels.",
      solution: "Developed an MVC web application using Java Servlets, JSP, MySQL, and Apache Tomcat, implementing artist registration, collaboration feeds, and group formation workflows.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "Apache Tomcat", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Varundeep09/Tune-In-Local",
      live: null, // Hidden: no genuine live URL
      badge: "Java & Servlets"
    },
    {
      id: "portfolio",
      number: "06",
      title: "My Portfolio",
      category: "Front-End Website",
      role: "Front-End Development",
      description: "Responsive personal portfolio website developed to showcase software engineering skills, verified academic credentials, and interactive project details in an accessible format.",
      problem: "Recruiters and hiring managers require a central, verified presentation of technical capabilities, code repositories, and educational background.",
      solution: "Designed and built an interactive web presence with semantic HTML5, responsive CSS3/Bootstrap layouts, AOS animations, and dynamic project modals.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS Animation", "Typed.js"],
      github: "https://github.com/Varundeep09/My_Portfolio",
      live: "https://varundeep09.github.io/My_Portfolio/", // Genuine live site
      badge: "Web Presentation"
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] bg-[#0c0e17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>05 &bull; SELECTED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical applications spanning machine learning pipelines, asynchronous backend APIs, and full-stack software development.
          </p>
        </div>

        {/* Six Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#12141f] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30">
                    {project.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 truncate">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Accuracy Note Flag if applicable */}
                {project.accuracyNote && (
                  <div className="p-3 rounded-xl bg-black/40 border border-amber-400/20 text-[11px] text-amber-300/90 leading-tight mb-4 flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.accuracyNote}</span>
                  </div>
                )}
              </div>

              {/* Technologies & Actions Footer */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-black/40 border border-white/5 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {/* Live Demo button: ONLY shown when genuine live URL exists */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-xs font-semibold text-amber-300 hover:text-white transition-colors cursor-pointer"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Details Toggle Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors p-1 cursor-pointer"
                    aria-label={`View details for ${project.title}`}
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-2xl rounded-3xl bg-[#12141f] border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30">
                    {selectedProject.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                  <div className="text-xs font-mono text-amber-400 font-semibold uppercase">Problem Context</div>
                  <p className="text-slate-300/90 leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Engineered Solution</div>
                  <p className="text-slate-300/90 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Accuracy note inside modal */}
              {selectedProject.accuracyNote && (
                <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 leading-relaxed flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{selectedProject.accuracyNote}</span>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Technologies &amp; Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide transition-colors cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs border border-white/15 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live App</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-medium cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
