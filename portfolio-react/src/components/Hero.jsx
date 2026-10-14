import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Database, 
  BrainCircuit,
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Subtle organic background ambient glow (warm editorial, no harsh neon) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full" />
        {/* Subtle architectural dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:2rem_2rem]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 min-w-0">
            
            {/* Status & Availability Kicker */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-semibold tracking-wide">AVAILABLE FOR ROLES</span>
                <span className="text-white/20">&bull;</span>
                <span className="text-slate-400">INDORE, INDIA</span>
              </div>

              <div className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-amber-400 uppercase flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>DATA ANALYTICS</span>
                <span className="text-white/20">&bull;</span>
                <span>DATA SCIENCE / ML</span>
                <span className="text-white/20">&bull;</span>
                <span>PYTHON DEVELOPMENT</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-sm font-mono text-slate-400 tracking-wide uppercase">
                Software &amp; Data Engineer
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] break-words">
                Varundeep <br className="hidden sm:inline" />
                <span className="text-slate-300">Sengar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-amber-200/90 tracking-tight">
                Turning Data Into Insights. Building With Python.
              </p>
            </div>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              I'm a Computer Science graduate specializing in AI and Machine Learning, with practical experience in Python development, data analytics, backend APIs, and predictive modelling.
            </p>

            {/* Technical Scope Tags */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-colors">
                <BrainCircuit className="w-3.5 h-3.5 text-amber-400" /> Machine Learning &amp; EDA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-colors">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> FastAPI &amp; Flask APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-colors">
                <Database className="w-3.5 h-3.5 text-amber-400" /> SQL &amp; PostgreSQL
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-md shadow-amber-400/15 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#090a10] cursor-pointer text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Varundeep_Sengar.pdf"
                download="Varundeep_Sengar.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 hover:border-amber-400/50 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#090a10] cursor-pointer text-center"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors cursor-pointer text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Context & Education Footnote */}
            <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-mono border-t border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>B.Tech CSE (AI &amp; ML) &bull; CGPA 8.6/10</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Indore, Madhya Pradesh</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Showcase (Inspired by Zuko's Lab & Tomasz Gajda) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full min-w-0">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer architectural card frame */}
              <div className="relative rounded-3xl bg-[#12141f] border border-white/10 p-4 sm:p-5 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <img
                    src="/profile.jpg"
                    alt="Varundeep Sengar — Data Science, Analytics & Python Engineer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141f] via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Relocation / Remote</span>
                  </div>
                </div>

                {/* Identity & Verified Credentials Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Varundeep Sengar
                    </h3>
                    <p className="text-xs font-mono text-amber-400 mt-0.5">
                      AI &amp; ML Specialization &bull; 8.6 CGPA
                    </p>
                  </div>

                  {/* Social Quick Links */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href="https://github.com/Varundeep09"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/919589097257"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect on WhatsApp"
                      className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Verified Metric Badges Row */}
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs sm:text-sm font-bold text-white">20,000+</div>
                    <div className="text-[10px] font-mono text-slate-400">ETL Records</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs sm:text-sm font-bold text-amber-300">6 Verified</div>
                    <div className="text-[10px] font-mono text-slate-400">Projects</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs sm:text-sm font-bold text-emerald-400">4 Roles</div>
                    <div className="text-[10px] font-mono text-slate-400">Experience</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
