import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Database, 
  Terminal, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Workflow
} from 'lucide-react';

export default function DataVisualCard() {
  const [activeTab, setActiveTab] = useState('ml');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none min-w-0">
      {/* Background ambient lighting */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800/90 shadow-2xl overflow-hidden transition-all duration-300 hover:border-slate-700/80 min-w-0">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-800/80 bg-slate-950/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate">
              varundeep_workspace.py
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Runtime Active
            </span>
          </div>
        </div>

        {/* Role Mode Selector Tabs */}
        <div className="grid grid-cols-3 p-1 sm:p-1.5 bg-slate-950/40 border-b border-slate-800/60 text-xs font-medium min-w-0">
          <button
            onClick={() => setActiveTab('ml')}
            className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1.5 sm:px-3 rounded-lg transition-all cursor-pointer min-w-0 ${
              activeTab === 'ml'
                ? 'bg-slate-800/90 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">Data Science</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1.5 sm:px-3 rounded-lg transition-all cursor-pointer min-w-0 ${
              activeTab === 'analytics'
                ? 'bg-slate-800/90 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('python')}
            className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1.5 sm:px-3 rounded-lg transition-all cursor-pointer min-w-0 ${
              activeTab === 'python'
                ? 'bg-slate-800/90 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">Python / APIs</span>
          </button>
        </div>

        {/* Interactive Viewport Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 min-w-0">
          {activeTab === 'ml' && (
            <div className="space-y-4 min-w-0">
              {/* Pipeline Overview */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1 gap-2">
                <span className="font-mono text-slate-300 flex items-center gap-1.5 truncate">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">Predictive Churn Pipeline</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50 shrink-0">
                  ROC-AUC: Verified
                </span>
              </div>

              {/* Code / Pipeline Simulation Snippet */}
              <div className="rounded-lg bg-slate-950/90 border border-slate-800 p-3 sm:p-3.5 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto min-w-0">
                <div className="text-slate-500">// Feature extraction &amp; model inference</div>
                <div className="text-cyan-400">clf = RandomForestClassifier(n_estimators=100)</div>
                <div className="text-slate-300">risk_proba = clf.predict_proba(customer_vector)[0][1]</div>
                <div className="text-amber-300 mt-1"># Local GenAI explainer generates plain-English rationale</div>
                <div className="text-emerald-400">return &#123; "risk": "Low", "churn_proba": 0.14, "action": "Retain" &#125;</div>
              </div>

              {/* Verified Feature Attribution Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-1 min-w-0">
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono truncate">Classifier</div>
                  <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5 truncate">Random Forest</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono truncate">Evaluation</div>
                  <div className="text-[11px] sm:text-xs font-bold text-emerald-400 mt-0.5 truncate">Precision/Recall</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono truncate">Explainability</div>
                  <div className="text-[11px] sm:text-xs font-bold text-cyan-400 mt-0.5 truncate">LLM Layer (Local)</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              {/* Analytics Pipeline Overview */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span className="font-mono text-slate-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  Alphanext Internship &bull; 20,000+ Records
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  ETL Automated
                </span>
              </div>

              {/* ETL Flow steps */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-sky-950 text-sky-400 flex items-center justify-center font-mono text-[10px] font-bold">1</span>
                    <span className="text-slate-300 font-medium">Data Extraction &amp; SQL Querying</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">MySQL &bull; PostgreSQL</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center font-mono text-[10px] font-bold">2</span>
                    <span className="text-slate-300 font-medium">Cleaning &amp; Statistical Imputation</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">Pandas &bull; NumPy</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-indigo-950 text-indigo-400 flex items-center justify-center font-mono text-[10px] font-bold">3</span>
                    <span className="text-slate-300 font-medium">Trend Analysis &amp; Dashboarding</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">Power BI &bull; Seaborn</span>
                </div>
              </div>

              {/* Metrics Pill Grid */}
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                  Outlier Filtering
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                  Feature Correlation
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                  Exploratory Data Analysis
                </span>
              </div>
            </div>
          )}

          {activeTab === 'python' && (
            <div className="space-y-4 min-w-0">
              {/* Python Architecture Overview */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1 gap-2">
                <span className="font-mono text-slate-300 flex items-center gap-1.5 truncate">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">REST API &bull; Flight Booking</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50 shrink-0">
                  Python 3.11
                </span>
              </div>

              {/* Code snippet */}
              <div className="rounded-lg bg-slate-950/90 border border-slate-800 p-3 sm:p-3.5 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto min-w-0">
                <div className="text-slate-500">// FastAPI asynchronous seat reservation</div>
                <div className="text-indigo-400">@app.post("/flights/&#123;id&#125;/book")</div>
                <div className="text-cyan-400">async def book_seat(flight_id: int, user: AuthUser):</div>
                <div className="text-slate-300 pl-4">fare = dynamic_pricing_engine(flight_id)</div>
                <div className="text-emerald-400 pl-4">return await db.execute(seat_transaction)</div>
              </div>

              {/* Tech Highlights */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-1 min-w-0">
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono truncate">Frameworks</div>
                  <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5 truncate">FastAPI &bull; Flask</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono truncate">Databases</div>
                  <div className="text-[11px] sm:text-xs font-bold text-sky-400 mt-0.5 truncate">PostgreSQL</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono truncate">Security</div>
                  <div className="text-[11px] sm:text-xs font-bold text-indigo-400 mt-0.5 truncate">Auth &bull; RBAC</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Card Footer Micro-Bar */}
        <div className="px-4 sm:px-5 py-3 sm:py-3.5 border-t border-slate-800/70 bg-slate-950/80 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img 
              src="/profile.jpg" 
              alt="Varundeep Sengar" 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-cyan-500/40 shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <div className="text-xs font-bold text-white truncate">Varundeep Sengar</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">B.Tech AI &amp; ML &bull; CGPA 8.575/10</div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xs:inline">Verified Projects</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
