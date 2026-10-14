import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText("sengarvarundeep@gmail.com");
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = "sengarvarundeep@gmail.com";
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn("Clipboard access failed:", err);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Contact Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities &bull; Open to Roles
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Discuss How Data &amp; Python Can Solve Your Problems.
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
              Whether you are hiring for <strong className="text-white font-semibold">Data Analyst</strong>, <strong className="text-white font-semibold">Data Science / ML</strong>, or <strong className="text-white font-semibold">Python Developer</strong> roles, or exploring technical collaboration, feel free to reach out directly.
            </p>

            {/* Contact Actions Grid */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/25 cursor-pointer text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 transition-all cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy: sengarvarundeep@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href="/Varundeep_Sengar.pdf"
                download="Varundeep_Sengar.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social links row */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Connect Online:</span>
              <a
                href="https://github.com/Varundeep09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub / Varundeep09</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn / Varundeep Sengar</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Indore, India</span>
              </span>
            </div>

          </div>
        </div>

        {/* Global Footer */}
        <footer className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-bold">Varundeep Sengar</span>
            <span>&bull;</span>
            <span>Data Analyst &bull; Data Scientist &bull; Python Developer</span>
          </div>

          <div className="text-slate-500 text-center sm:text-right">
            Built with React &bull; Tailwind CSS &bull; Vite
          </div>
        </footer>

      </div>
    </section>
  );
}
