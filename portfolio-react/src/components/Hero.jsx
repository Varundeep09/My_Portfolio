import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Terminal, 
  Database, 
  BrainCircuit
} from 'lucide-react';
import DataVisualCard from './DataVisualCard';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Subtle Background Glow Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden max-w-full">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-sky-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/2 right-0 w-72 sm:w-[450px] h-[350px] bg-gradient-to-bl from-indigo-600/10 via-blue-600/10 to-transparent blur-3xl rounded-full" />
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:4rem_4rem]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-7 min-w-0">
            
            {/* Status & Role Label */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs font-mono tracking-wider text-slate-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">AVAILABLE FOR ROLES</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-400">INDORE, INDIA</span>
              </div>

              <div className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-wider sm:tracking-widest text-cyan-400 uppercase flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>DATA ANALYTICS</span>
                <span className="text-slate-600">&bull;</span>
                <span>DATA SCIENCE</span>
                <span className="text-slate-600">&bull;</span>
                <span>PYTHON DEVELOPMENT</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.15] break-words">
              Turning Data Into Insights.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                Building With Python.
              </span>
            </h1>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              I'm a Computer Science graduate specializing in AI and Machine Learning, with practical experience in Python development, data analytics, backend APIs, and predictive modelling.
            </p>

            {/* Technical Scope Badges */}
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" /> Machine Learning &amp; EDA
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <Terminal className="w-3.5 h-3.5 text-sky-400" /> FastAPI &amp; Flask APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <Database className="w-3.5 h-3.5 text-indigo-400" /> SQL &amp; PostgreSQL
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer text-center"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Varundeep_Sengar.pdf"
                download="Varundeep_Sengar.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer text-center"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 font-medium text-sm transition-colors cursor-pointer text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Context & Education Footnote */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-mono border-t border-slate-900">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>B.Tech CSE (AI &amp; ML) &bull; CGPA 8.575/10</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Indore, Madhya Pradesh</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Focal Point (Interactive Data & AI Visual) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full min-w-0">
            <DataVisualCard />
          </div>

        </div>
      </div>
    </section>
  );
}
