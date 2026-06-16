import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';

interface AdmissionUgcProps {
  darkMode: boolean;
}

export function AdmissionUgc({ darkMode }: AdmissionUgcProps) {
  const [educationLevel, setEducationLevel] = useState<string>('');
  const [careerInterest, setCareerInterest] = useState<string>('');
  const [calculatedResult, setCalculatedResult] = useState<string | null>(null);

  const handleCalculatePathway = (e: React.FormEvent) => {
    e.preventDefault();
    if (!educationLevel || !careerInterest) return;

    let path = '';
    if (educationLevel === 'tenth') {
      path = "Diploma in Vocational Education (D.Voc) integrated with direct portfolio building. Ideal for launching early media production or dropshipping brand support careers.";
    } else if (educationLevel === 'twelfth') {
      if (careerInterest === 'creative') {
        path = "UGC-Accredited Bachelor of Vocational Education (B.Voc) in Digital Media Production, Cinematography, and Creative Editing. 3-Year degree pathway with full credit integration.";
      } else {
        path = "UGC-Accredited B.Voc Degree in Digital Marketing, Business Intelligence, and E-Commerce scalable management systems. 3-Year approved credit pathway.";
      }
    } else {
      path = "Executive Advanced Diploma & PG Pathway options with 100% placement alignment. Build a digital portfolio ready to capture international agency or freelance markets.";
    }

    setCalculatedResult(path);
  };

  const handleReset = () => {
    setEducationLevel('');
    setCareerInterest('');
    setCalculatedResult(null);
  };

  return (
    <section 
      id="admissions" 
      className={`relative py-24 border-t transition-all ${
        darkMode ? 'bg-cyber-deep cyber-grid-overlay text-white' : 'bg-slate-50 cyber-grid-overlay-light text-slate-900'
      }`}
    >
      {/* Floating abstract decorative nodes */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left copy: UGC Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              <LucideIcon name="ShieldCheck" size={12} className="text-purple-400" />
              <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-950'}`}>
                Accredited Degrees
              </span>
            </div>

            <h2 className="font-display font-black text-3.5xl sm:text-4.5xl leading-tight tracking-tight">
              Build Your Career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 font-extrabold pr-2">
                While Earning
              </span> Recognized Qualifications
            </h2>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
              Explore career-focused programs integrated with UGC-accredited degree opportunities, allowing students to gain both academic credentials and practical industry expertise.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-all">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 font-bold shrink-0">
                  <LucideIcon name="Globe" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight text-purple-400">Global Credit Transfer Framework</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Our UGC-accredited programs are built to standard global credit guidelines, helping you transfer certificates or apply for higher studies abroad.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-all">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 font-bold shrink-0">
                  <LucideIcon name="Briefcase" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight text-purple-400">Dual Portfolio Certification</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Graduate with both a recognized university degree credential AND a massive portfolio showing live web apps, editing reels, and marketing matrices.</p>
                </div>
              </div>
            </div>

            {/* Quick action pointer trigger */}
            <div className="pt-4">
              <a 
                href="#contact"
                className={`inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-display font-bold text-xs tracking-tight uppercase duration-300 transform hover:-translate-y-0.5 shadow-md ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-800 hover:to-indigo-800 hover:shadow-lg hover:shadow-purple-500/20' 
                    : 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-800 hover:to-indigo-800 hover:shadow-lg'
                }`}
              >
                <span>Start Your Journey</span>
                <LucideIcon name="ArrowRight" size={14} />
              </a>
            </div>

          </div>

          {/* Right Block: UGC Degree Pathway Eligibility Checker */}
          <div className="lg:col-span-6">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? 'bg-cyber-dark/95 border-purple-500/15' : 'bg-white border-purple-150 shadow-xl'
            }`}>
              
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-wider font-semibold text-purple-400 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
                <span>INTERACTIVE PATHWAY FINDER</span>
              </div>

              <h3 className="font-display font-black text-xl tracking-tight leading-snug mb-2">
                Determine Your Pathway Option
              </h3>
              
              <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>
                Tell us your current educational profile and creative goal, and our dynamic planner will instantly map your accredited UGC pathways!
              </p>

              {!calculatedResult ? (
                <form onSubmit={handleCalculatePathway} className="space-y-5">
                  
                  {/* Step 1 input selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold text-purple-400">
                      CURRENT COMPLETED EDUCATION LEVEL
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setEducationLevel('tenth')}
                        className={`p-3.5 rounded-xl text-center font-display font-bold text-xs border duration-150 cursor-pointer ${
                          educationLevel === 'tenth'
                            ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                            : darkMode ? 'bg-cyber-deep border-purple-500/10 text-slate-300 hover:border-purple-500/30' : 'bg-slate-50 border-purple-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300'
                        }`}
                      >
                        10th Standard / Matric
                      </button>
                      <button
                        type="button"
                        onClick={() => setEducationLevel('twelfth')}
                        className={`p-3.5 rounded-xl text-center font-display font-bold text-xs border duration-150 cursor-pointer ${
                          educationLevel === 'twelfth'
                            ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                            : darkMode ? 'bg-cyber-deep border-purple-500/10 text-slate-300 hover:border-purple-500/30' : 'bg-slate-50 border-purple-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300'
                        }`}
                      >
                        12th / Plus Two / Pre-Degree
                      </button>
                      <button
                        type="button"
                        onClick={() => setEducationLevel('graduate')}
                        className={`p-3.5 rounded-xl text-center font-display font-bold text-xs border duration-150 cursor-pointer ${
                          educationLevel === 'graduate'
                            ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                            : darkMode ? 'bg-cyber-deep border-purple-500/10 text-slate-300 hover:border-purple-500/30' : 'bg-slate-50 border-purple-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300'
                        }`}
                      >
                        Degree / Graduate / Working
                      </button>
                    </div>
                  </div>

                  {/* Step 2 input selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold text-purple-400">
                      YOUR NEW PRIMARY SKILL PREFERENCE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setCareerInterest('creative')}
                        className={`p-4 rounded-xl text-left font-display font-bold text-xs border duration-150 cursor-pointer flex items-center space-x-3 ${
                          careerInterest === 'creative'
                            ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                            : darkMode ? 'bg-cyber-deep border-purple-500/10 text-slate-300 hover:border-purple-500/30' : 'bg-slate-50 border-purple-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300'
                        }`}
                      >
                        <LucideIcon name="Camera" size={16} />
                        <div>
                          <span className="block font-bold">Creative Media</span>
                          <span className="block text-[10px] text-slate-500 font-medium">Videography & Storytelling</span>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCareerInterest('tech')}
                        className={`p-4 rounded-xl text-left font-display font-bold text-xs border duration-150 cursor-pointer flex items-center space-x-3 ${
                          careerInterest === 'tech'
                            ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                            : darkMode ? 'bg-cyber-deep border-purple-500/10 text-slate-300 hover:border-purple-500/30' : 'bg-slate-50 border-purple-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300'
                        }`}
                      >
                        <LucideIcon name="Megaphone" size={16} />
                        <div>
                          <span className="block font-bold">Growth & Analytics</span>
                          <span className="block text-[10px] text-slate-500 font-medium">Auto-Marketing & Ecomm</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!educationLevel || !careerInterest}
                    className="w-full py-4 rounded-xl font-display font-bold text-xs tracking-tight uppercase duration-200 cursor-pointer bg-gradient-to-r from-purple-700 to-indigo-700 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 shadow-md"
                  >
                    Calibrate My Career Degree
                  </button>
                </form>
              ) : (
                <div className="space-y-6 animate-fade-in text-left">
                  
                  {/* Calibrated result card */}
                  <div className={`p-5 rounded-2xl border ${
                    darkMode ? 'bg-cyber-deep/80 border-purple-500/20' : 'bg-purple-50 border-purple-200'
                  }`}>
                    <div className="flex items-center space-x-2 text-purple-400 mb-2">
                      <LucideIcon name="CheckCircle" size={18} className="text-emerald-500" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase">
                        Degree Pathway Allocated:
                      </span>
                    </div>

                    <p className={`text-sm tracking-tight leading-relaxed font-sans ${darkMode ? 'text-slate-100' : 'text-slate-800 font-semibold'}`}>
                      {calculatedResult}
                    </p>
                  </div>

                  {/* Immediate registration prompt */}
                  <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center space-x-3 text-xs leading-relaxed text-slate-400">
                    <LucideIcon name="HelpCircle" size={16} className="text-purple-400 shrink-0" />
                    <span>This maps to recognized university criteria under the National Skills Qualifications Framework (NSQF).</span>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={handleReset}
                      className={`flex-1 py-3 text-center rounded-xl font-display font-bold text-xs border duration-150 hover:scale-[1.01] cursor-pointer ${
                        darkMode ? 'border-purple-500/20 text-white bg-cyber-purple/20' : 'border-purple-200 text-slate-700 bg-slate-50'
                      }`}
                    >
                      Check Another
                    </button>
                    
                    <a
                      href="#contact"
                      className="flex-1 py-3 text-center rounded-xl font-display font-bold text-xs bg-purple-600 hover:bg-purple-700 text-white duration-150 hover:scale-[1.01]"
                    >
                      Reserve My Seat Today
                    </a>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
