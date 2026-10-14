import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  FileText, 
  Menu, 
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

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
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#090a10]/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group transition-opacity"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-white text-sm group-hover:border-amber-400/50 transition-colors shrink-0">
            <span>VS</span>
            <span className="text-amber-400 text-xs ml-0.5">*</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              Varundeep Sengar
            </span>
            <span className="text-[11px] font-mono text-slate-400 leading-tight">
              Data &amp; Python Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-white/[0.04] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Social Links */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-3 border-r border-white/10">
            <a
              href="https://github.com/Varundeep09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
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

            <a
              href="mailto:sengarvarundeep@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="/Varundeep_Sengar.pdf"
            download="Varundeep_Sengar.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-200 hover:text-white border border-white/15 hover:border-amber-400/50 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggler Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/Varundeep_Sengar.pdf"
            download="Varundeep_Sengar.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/15 text-xs font-semibold text-slate-200"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-b border-white/10 bg-[#0c0e17]/95 backdrop-blur-xl px-4 sm:px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Varundeep09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919589097257"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="/Varundeep_Sengar.pdf"
              download="Varundeep_Sengar.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300"
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
