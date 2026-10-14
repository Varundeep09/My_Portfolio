import React from 'react';
import { 
  Code2, 
  Server, 
  LineChart, 
  BrainCircuit, 
  BarChart3, 
  Database, 
  Wrench, 
  Compass
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      icon: Code2,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript fundamentals"]
    },
    {
      name: "Backend Development",
      icon: Server,
      accent: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      skills: ["Django", "FastAPI", "REST APIs", "RBAC"]
    },
    {
      name: "Data Analysis",
      icon: LineChart,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      skills: ["Pandas", "NumPy", "EDA", "Data Cleaning", "Feature Engineering"]
    },
    {
      name: "Machine Learning",
      icon: BrainCircuit,
      accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
      skills: ["Classification", "Logistic Regression", "Random Forest", "Model Evaluation"]
    },
    {
      name: "Data Visualization",
      icon: BarChart3,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      skills: ["Power BI", "Excel", "Matplotlib", "Seaborn"]
    },
    {
      name: "Databases",
      icon: Database,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      skills: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      name: "Tools & Environments",
      icon: Wrench,
      accent: "text-slate-300 border-slate-700 bg-slate-800/40",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Antigravity IDE"]
    }
  ];

  const currentlyLearning = [
    { topic: "JavaScript & React", category: "Modern Frontend Web" },
    { topic: "Generative AI Foundations", category: "Applied AI" },
    { topic: "LLM Fundamentals", category: "Language Modelling" },
    { topic: "Retrieval-Augmented Generation (RAG)", category: "Information Retrieval" },
    { topic: "Prompt Engineering", category: "Model Steering" },
    { topic: "Vector Embeddings", category: "Semantic Search" }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Core Stack &bull; Scannable Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills &amp; Domain Expertise
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Proficiencies across programming, backend architecture, data pipelines, predictive machine learning, and analytical tooling.
          </p>
        </div>

        {/* 7 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isWide = idx === skillCategories.length - 1; // Last item spans on large displays
            return (
              <div
                key={cat.name}
                className={`p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group ${
                  isWide ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl border ${cat.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clearly Labeled "Currently Learning" Area */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-amber-500/20 shadow-xl relative overflow-hidden">
          {/* Subtle amber ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono tracking-wider text-amber-300 uppercase mb-2">
                <Compass className="w-3.5 h-3.5" />
                Active Exploration Area &bull; In Progress
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Currently Learning &amp; Upskilling
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Ongoing technical self-study and exploratory projects in modern web architectures and Generative AI paradigms. Explicitly presented as learning in progress rather than completed certifications.
              </p>
            </div>

            <div className="text-xs font-mono text-amber-300/80 bg-slate-950/80 border border-amber-500/20 px-3 py-1.5 rounded-lg shrink-0">
              Target: Applied GenAI &amp; Full-Stack React
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentlyLearning.map((item) => (
              <div
                key={item.topic}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-amber-500/30 transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {item.topic}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {item.category}
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
