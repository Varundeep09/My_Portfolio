import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Alphanext Technology Solutions",
      role: "Graduate Trainee Engineer Intern",
      period: "May 2026 – July 2026",
      nature: "Data Science Internship",
      natureType: "internship",
      natureBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description: "Automated end-to-end Python ETL pipelines and performed statistical data transformations on large-scale datasets.",
      points: [
        "Automated Python ETL workflows processing 20,000+ real-world records from extraction to staging.",
        "Cleaned datasets systematically by handling missing values, identifying outliers, and reconciling inconsistencies.",
        "Applied exploratory data analysis (EDA) and descriptive statistics to reveal feature distributions and trends."
      ],
      technologies: ["Python", "ETL Pipelines", "Pandas", "NumPy", "Data Cleaning", "Statistical Analysis"]
    },
    {
      company: "Tokyo Quant",
      role: "Data Analytics & Data Science Trainee",
      period: "June 2025 – January 2026",
      nature: "Hands-on Technical Training",
      natureType: "training",
      natureBadge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      description: "Rigorous technical training curriculum focused on exploratory data analysis, SQL querying, and business intelligence reporting.",
      points: [
        "Conducted exploratory data analysis, data wrangling, and trend analysis using Python, Pandas, NumPy, and SQL.",
        "Engineered 3+ analytical dashboards translating complex tabular data into visual operational reports.",
        "Applied core Data Analytics and Machine Learning foundations to real-world analytical case studies."
      ],
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "EDA", "Dashboarding"]
    },
    {
      company: "Infosys Springboard",
      role: "Python Development Virtual Internship 6.0",
      period: "November 2025 – January 2026",
      nature: "Virtual Internship",
      natureType: "internship",
      natureBadge: "bg-slate-800 text-slate-300 border-white/10",
      description: "Virtual engineering internship centered on modern Python backend web development and relational databases.",
      points: [
        "Architected a flight booking simulator using Python and FastAPI backend endpoints.",
        "Implemented dynamic pricing algorithms based on demand factors and seat inventory state machines.",
        "Integrated relational database structures ensuring transactional integrity for seat allocations."
      ],
      technologies: ["Python", "FastAPI", "SQL", "REST APIs", "Dynamic Pricing", "Relational DB"]
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] bg-[#090a10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>02 &bull; EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Technical Internships
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Hands-on professional internships and rigorous technical training programs focused on Python, ETL pipelines, and data analytics.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-3xl bg-[#12141f] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent group-hover:via-amber-400/80 transition-all" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${exp.natureBadge}`}>
                      {exp.nature}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-amber-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 lg:text-right shrink-0">
                  {exp.natureType === 'training' ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-amber-300">
                      <BookOpen className="w-3.5 h-3.5" /> Hands-on Training
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-emerald-300">
                      <Briefcase className="w-3.5 h-3.5" /> Practical Internship
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-5">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
