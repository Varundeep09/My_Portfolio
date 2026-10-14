import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  FileText, 
  Menu, 
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 sm:gap-3 text-white font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-slate-950 text-xs sm:text-sm shadow-md shadow-cyan-500/20 shrink-0">
            VS
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight leading-none text-white">
              Varundeep Sengar
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 leading-tight mt-0.5">
              Data &amp; Python Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Social Links */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800">
            <a
              href="https://github.com/Varundeep09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:sengarvarundeep@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="/Varundeep_Sengar.pdf"
            download="Varundeep_Sengar.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggler Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/Varundeep_Sengar.pdf"
            download="Varundeep_Sengar.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 sm:px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Varundeep09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="/Varundeep_Sengar.pdf"
              download="Varundeep_Sengar.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/20 border border-cyan-500/40 text-xs font-semibold text-cyan-300"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
