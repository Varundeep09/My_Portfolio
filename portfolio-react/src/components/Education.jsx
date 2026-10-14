import React from 'react';
import { 
  Award, 
  Calendar, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "IPS Academy Institute of Engineering and Science, Indore",
      period: "2022 – 2026",
      score: "CGPA: 8.575 / 10",
      scoreType: "CGPA",
      status: "Graduating 2026",
      description: "Comprehensive curriculum covering Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Management Systems, and Python Programming.",
      courses: ["Artificial Intelligence", "Machine Learning", "Data Structures", "DBMS & SQL", "Python Backend"]
    },
    {
      degree: "Higher Secondary Certificate (Class XII) — PCM",
      institution: "Madhya Pradesh Board of Secondary Education (MP Board)",
      period: "2022",
      score: "65%",
      scoreType: "Percentage",
      status: "Completed",
      description: "Core science discipline specializing in Physics, Chemistry, and Mathematics (PCM), establishing quantitative and analytical problem-solving fundamentals.",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Central Board of Secondary Education (CBSE Board)",
      period: "2020",
      score: "82%",
      scoreType: "Percentage",
      status: "Completed",
      description: "General secondary education curriculum emphasizing science, mathematics, computer applications, and analytical coursework.",
      courses: ["Mathematics", "Science", "Information Technology", "English"]
    }
  ];

  const certifications = [
    {
      title: "RDBMS PostgreSQL",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      scope: "Relational database design, SQL querying, constraints, schema normalization, and database administration."
    },
    {
      title: "Infosys Python Foundation",
      issuer: "ICT Academy & Infosys Foundation",
      scope: "Core Python programming principles, algorithmic logic, data structures, and object-oriented paradigms."
    },
    {
      title: "Python Development Virtual Internship 6.0",
      issuer: "Infosys Springboard",
      scope: "FastAPI framework architecture, dynamic pricing algorithm simulation, and RESTful API endpoints."
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.08] bg-[#0c0e17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>03 &bull; EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Academic achievements, foundational coursework in Computer Science &amp; AI/ML, and verified technical credentials.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {educationList.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`p-6 sm:p-7 rounded-3xl bg-[#12141f] border ${
                idx === 0 
                  ? 'border-amber-400/40 ring-1 ring-amber-400/20' 
                  : 'border-white/10'
              } flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative`}
            >
              <div>
                {/* Top header badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                    idx === 0 
                      ? 'bg-amber-400/10 text-amber-300 border-amber-400/30' 
                      : 'bg-white/[0.04] text-slate-300 border-white/10'
                  }`}>
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-slate-400 mb-3 flex items-start gap-1.5">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              {/* Course tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {edu.courses.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-slate-400"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#12141f] border border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Verified Technical Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white leading-tight">
                    {cert.title}
                  </span>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-2">
                  {cert.issuer}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.scope}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
