import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden scroll-smooth">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Phase 2: Hero Section */}
        <Hero />

        {/* Phase 3: Professional Background & Specializations */}
        <About />

        {/* Phase 3: Work Experience & Technical Internships */}
        <Experience />

        {/* Phase 3: Academic Credentials & Certifications */}
        <Education />

        {/* Phase 3: Technical Skills & Currently Learning */}
        <Skills />

        {/* Phase 3: Verified Projects Portfolio */}
        <Projects />

        {/* Phase 3: Contact & Global Footer */}
        <Contact />
      </main>
    </div>
  );
}
