import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

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
    <section id="contact" className="py-20 sm:py-24 border-t border-white/[0.08] bg-[#090a10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Contact Banner Card */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#12141f] border border-white/10 shadow-2xl relative overflow-hidden mb-16">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Opportunities &bull; Open to Roles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Discuss How Data &amp; Python Can Solve Your Problems.
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
              Whether you are hiring for <strong className="text-white font-semibold">Data Analyst</strong>, <strong className="text-white font-semibold">Data Science / ML</strong>, or <strong className="text-white font-semibold">Python Developer</strong> roles, or exploring technical collaboration, feel free to reach out directly.
            </p>

            {/* Contact Actions Grid */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="mailto:sengarvarundeep@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-md shadow-amber-400/15 cursor-pointer text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href="https://wa.me/919589097257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-semibold text-sm border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-200 shadow-sm shadow-emerald-950/40 cursor-pointer text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Connect on WhatsApp</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-sm border border-white/15 transition-all cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-400" />
                    <span>Copy: sengarvarundeep@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href="/Varundeep_Sengar.pdf"
                download="Varundeep_Sengar.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-sm border border-white/15 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
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
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub / Varundeep09</span>
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href="https://www.linkedin.com/in/varundeep-sengar-282b33255/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn / Varundeep Sengar</span>
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href="https://wa.me/919589097257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp / +91 95890 97257</span>
              </a>
              <span className="text-white/20">&bull;</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Indore, India</span>
              </span>
            </div>

          </div>
        </div>

        {/* Global Footer */}
        <footer className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Varundeep Sengar</span>
            <span className="text-white/20">&bull;</span>
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
