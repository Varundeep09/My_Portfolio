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
      accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      description: "Automated end-to-end data processing workflows, cleaning messy datasets, handling outliers, and building analytical dashboards with actionable statistical insights.",
      skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "EDA"]
    },
    {
      icon: BrainCircuit,
      title: "Data Science & Machine Learning",
      accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      description: "Trained and evaluated predictive classifiers (Random Forest, Logistic Regression), engineered feature vectors, and designed plain-language model explainability workflows.",
      skills: ["Scikit-Learn", "Classification", "Feature Engineering", "Model Evaluation"]
    },
    {
      icon: Code2,
      title: "Python Development & Backend APIs",
      accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      description: "Designed RESTful microservices and applications with dynamic pricing engines, role-based access control (RBAC), and relational database modeling.",
      skills: ["FastAPI", "Flask", "Django", "PostgreSQL", "MySQL", "REST APIs"]
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] bg-[#0c0e17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>01 &bull; ABOUT ME</span>
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
                My technical foundation centers around <strong className="text-amber-300 font-semibold">Python</strong> and <strong className="text-amber-300 font-semibold">SQL</strong>. Through hands-on internship experience at Alphanext Technology Solutions, I built automated ETL routines cleaning and analyzing 20,000+ real-world records. At Tokyo Quant and Infosys Springboard, I developed interactive analytical dashboards and architected asynchronous REST APIs with FastAPI.
              </p>
              <p>
                I believe in building software that delivers tangible clarity—whether that means extracting reliable signals from ambiguous datasets or ensuring backend services execute with clean architecture and strict schema validation.
              </p>
            </div>

            {/* Factual Credential Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#12141f] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                  <GraduationCap className="w-4 h-4" /> Degree &amp; Merit
                </div>
                <div className="text-sm font-bold text-white">B.Tech CSE (AI &amp; ML)</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">IPS Academy &bull; CGPA: 8.575/10</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#12141f] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <MapPin className="w-4 h-4" /> Location &amp; Mobility
                </div>
                <div className="text-sm font-bold text-white">Indore, India</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Available for On-site &amp; Remote</div>
              </div>
            </div>

            {/* Target Roles Pill List */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#12141f] border border-white/10 space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Target Professional Roles
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-amber-300">
                  Data Analyst
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200">
                  Data Scientist / Machine Learning
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200">
                  Python Developer
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Varundeep_Sengar.pdf"
                download="Varundeep_Sengar.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 hover:border-amber-400/50 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 hover:text-white font-semibold text-sm border border-amber-400/30 transition-all duration-200"
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
                  className="p-5 sm:p-6 rounded-2xl bg-[#12141f] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border shrink-0 ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-slate-400"
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
