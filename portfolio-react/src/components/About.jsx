import React from 'react';
import { 
  BarChart3, 
  BrainCircuit, 
  Code2, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const specializations = [
    {
      icon: BarChart3,
      title: "Data Analytics & ETL Pipelines",
      accent: "from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/30",
      description: "Automated end-to-end data processing workflows, cleaning messy datasets, handling outliers, and building analytical dashboards with actionable statistical insights.",
      skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "EDA"]
    },
    {
      icon: BrainCircuit,
      title: "Data Science & Machine Learning",
      accent: "from-sky-500/20 to-indigo-500/20 text-sky-400 border-sky-500/30",
      description: "Trained and evaluated predictive classifiers (Random Forest, Logistic Regression), engineered feature vectors, and designed plain-language model explainability workflows.",
      skills: ["Scikit-Learn", "Classification", "Feature Engineering", "Model Evaluation"]
    },
    {
      icon: Code2,
      title: "Python Development & Backend APIs",
      accent: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30",
      description: "Designed RESTful microservices and applications with dynamic pricing engines, role-based access control (RBAC), and relational database modeling.",
      skills: ["FastAPI", "Flask", "Django", "PostgreSQL", "MySQL", "REST APIs"]
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            About Me &bull; Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connecting Empirical Data with Practical Software.
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Computer Science graduate specializing in AI &amp; Machine Learning with a focus on data analytics, predictive modelling, and Python backend engineering.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I graduated in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning from <strong className="text-white font-semibold">IPS Academy Institute of Engineering and Science, Indore</strong> (CGPA: 8.575/10).
              </p>
              <p>
                My technical foundation centers around <strong className="text-cyan-300 font-semibold">Python</strong> and <strong className="text-cyan-300 font-semibold">SQL</strong>. Through hands-on internship experience at Alphanext Technology Solutions, I built automated ETL routines cleaning and analyzing 20,000+ real-world records. At Tokyo Quant and Infosys Springboard, I developed interactive analytical dashboards and architected asynchronous REST APIs with FastAPI.
              </p>
              <p>
                I believe in building software that delivers tangible clarity—whether that means extracting reliable signals from ambiguous datasets or ensuring backend services execute with clean architecture and strict schema validation.
              </p>
            </div>

            {/* Factual Credential Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <GraduationCap className="w-4 h-4" /> Degree &amp; Merit
                </div>
                <div className="text-sm font-bold text-white">B.Tech CSE (AI &amp; ML)</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">IPS Academy &bull; CGPA: 8.575/10</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <MapPin className="w-4 h-4" /> Location &amp; Mobility
                </div>
                <div className="text-sm font-bold text-white">Indore, India</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Available for On-site &amp; Remote</div>
              </div>
            </div>

            {/* Target Roles Pill List */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Target Professional Roles
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                  Data Analyst
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-sky-950/60 border border-sky-800/60 text-sky-300">
                  Data Scientist / Machine Learning
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-indigo-300">
                  Python Developer
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Varundeep_Sengar.pdf"
                download="Varundeep_Sengar.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white font-semibold text-sm border border-cyan-500/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Varundeep</span>
              </a>
            </div>

          </div>

          {/* Right Column: Specialization Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {specializations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.accent} border shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
