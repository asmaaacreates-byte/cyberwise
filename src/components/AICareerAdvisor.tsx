import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';

interface AICareerAdvisorProps {
  darkMode: boolean;
}

export function AICareerAdvisor({ darkMode }: AICareerAdvisorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDream, setSelectedDream] = useState('');
  const [currentSkill, setCurrentSkill] = useState('');
  const [customQuery, setCustomQuery] = useState('');
  const [chatLog, setChatLog] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Welcome to CyberWise Career AI. Choose your objective below or type your career dream, and I will generate an optimized learning pathway!' }
  ]);
  const [generating, setGenerating] = useState(false);

  const predefinedDreams = [
    { label: "Become a Video Editor", value: "video-editor", reply: "🎥 To become a high-paid Visual Editor: Register for the 'Professional Videography' program. Master camera mechanics for 1.5 months, then dive deep into Premiere Pro for advanced cutting, syncs, sound matching, and DaVinci Resolve calibration for corporate video deliverables." },
    { label: "Launch an Online Shop", value: "ecom-owner", reply: "🛒 To launch a dropshipping/D2C brand: Enroll in the 'E-Commerce & Business Growth' track. Master Shopify store configurations, automated product drops, conversion design elements, Meta targeting, plus spoken boardroom presentation skills." },
    { label: "Be an AI Marketer", value: "ai-marketer", reply: "🧠 To act as an AI Marketing specialist: Enroll in the 'AI-Driven Digital Marketing' program. Study predictive copy generators, keyword automation engines, Meta programmatic attribution matrices, and analytics reporting arrays." },
    { label: "Pr-Specialist/PR Agent", value: "pr-specialist", reply: "💬 To act as a Global Client Relations lead: Select 'Spoken English & Communication' coupled with basic digital growth courses. This neutralizes accent issues, installs executive public narrative structures, and sets up your LinkedIn portfolio." }
  ];

  const handlePredefinedChoice = (value: string, label: string) => {
    const choice = predefinedDreams.find(d => d.value === value);
    if (!choice) return;

    setChatLog(prev => [
      ...prev,
      { sender: 'user', text: `My dream: ${label}` }
    ]);

    setGenerating(true);
    setTimeout(() => {
      setChatLog(prev => [
        ...prev,
        { sender: 'ai', text: choice.reply }
      ]);
      setGenerating(false);
    }, 1200);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    const userText = customQuery;
    setChatLog(prev => [
      ...prev,
      { sender: 'user', text: userText }
    ]);
    setCustomQuery('');
    setGenerating(true);

    // Simulate intelligent mapping engine
    setTimeout(() => {
      let aiText = `✨ That's an outstanding career path! At CyberWise, we recommend bridging both digital platforms. You should start with `;
      
      const lower = userText.toLowerCase();
      if (lower.includes('camera') || lower.includes('film') || lower.includes('video') || lower.includes('edit') || lower.includes('youtube')) {
        aiText += "the 'Professional Videography' course to cement physical studio setups, cinematic lens theories, and DaVinci Resolve color suites. These elements yield massive agency freelancing paychecks.";
      } else if (lower.includes('business') || lower.includes('money') || lower.includes('shop') || lower.includes('sell') || lower.includes('product')) {
        aiText += "the 'E-Commerce & Business Growth' program. This handles technical catalog design, secure payment checkouts, and dropshipping pipelines so you can earn while you graduate.";
      } else if (lower.includes('speak') || lower.includes('talk') || lower.includes('english') || lower.includes('interview')) {
        aiText += "the 'Spoken English & Communication' program. Elevating phonetics, presentation narration mechanics, and confidence lets you clear any global corporate desk interview.";
      } else {
        aiText += "our 'AI-Driven Digital Marketing' framework. Combining automated copywriting tools, high-conversion branding blueprints, and analytics tracking shields your career from digital displacement.";
      }

      setChatLog(prev => [
        ...prev,
        { sender: 'ai', text: aiText }
      ]);
      setGenerating(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Sparkles Button in bottom right corner */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer flex items-center space-x-2 border animate-pulse ${
          darkMode 
            ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 border-purple-400 text-white shadow-purple-500/50' 
            : 'bg-gradient-to-r from-purple-700 to-indigo-700 border-purple-200 text-white shadow-purple-200'
        }`}
        title="Talk to CyberWise AI Roadmap Advisor"
      >
        <LucideIcon name="Sparkles" size={20} className="animate-spin duration-3000" />
        <span className="font-display font-extrabold text-xs tracking-tight hidden sm:inline">AI Advisor</span>
      </button>

      {/* Drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          
          {/* Dismiss Click Barrier */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />
          
          {/* Custom drawer container with glow */}
          <div className={`relative w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l z-10 transition-transform duration-300 ${
            darkMode 
              ? 'bg-cyber-dark/95 border-purple-500/15 text-white' 
              : 'bg-white border-purple-200 text-slate-950'
          }`}>
            
            {/* Drawer Header inside assistant */}
            <div className={`p-5 border-b flex items-center justify-between ${
              darkMode ? 'bg-cyber-deep/80 border-purple-500/10' : 'bg-purple-50/50 border-purple-200'
            }`}>
              <div className="flex items-center space-x-2.5">
                <div className="h-8 w-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <LucideIcon name="Sparkles" size={16} />
                </div>
                <div>
                  <h3 className="font-display font-black text-sm tracking-tight leading-none">CyberWise Advisor</h3>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-purple-400 block mt-1">Autonomous AI Matcher</span>
                </div>
              </div>

              {/* Exit drawing button */}
              <button 
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg cursor-pointer hover:bg-slate-500/10`}
              >
                <LucideIcon name="X" size={16} />
              </button>
            </div>

            {/* Chat message logs scroll area */}
            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              {chatLog.map((chat, idx) => (
                <div 
                  key={idx}
                  className={`flex flex-col space-y-1 max-w-[85%] ${
                    chat.sender === 'user' ? 'ml-auto text-right' : 'mr-auto text-left'
                  }`}
                >
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                    {chat.sender === 'user' ? 'Student Interest' : 'CyberWise Guidance Bot'}
                  </span>
                  
                  <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    chat.sender === 'user'
                      ? darkMode 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none shadow-md' 
                        : 'bg-purple-600 text-white rounded-tr-none'
                      : darkMode 
                        ? 'glass-effect-dark bg-cyber-deep/90 text-slate-200 rounded-tl-none border-purple-500/10' 
                        : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                  }`}>
                    {chat.text}
                  </div>
                </div>
              ))}

              {generating && (
                <div className="flex items-center space-x-2 text-xs text-purple-400 font-mono animate-pulse">
                  <LucideIcon name="Loader" className="animate-spin" size={14} />
                  <span>Generating Career Path Plan...</span>
                </div>
              )}
            </div>

            {/* Action panel & form submission */}
            <div className={`p-5 border-t space-y-4 ${
              darkMode ? 'bg-cyber-deep/80 border-purple-500/10' : 'bg-purple-50/50 border-purple-200'
            }`}>
              
              {/* Predefined prompt questions */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono tracking-wider font-semibold text-slate-400">
                  CHOOSE A HIGHLY POPULAR GOAL:
                </span>
                
                <div className="flex flex-wrap gap-1.5">
                  {predefinedDreams.map((dream, i) => (
                    <button
                      key={i}
                      onClick={() => handlePredefinedChoice(dream.value, dream.label)}
                      disabled={generating}
                      className={`text-[10px] font-medium px-2.5 py-1.5 rounded-lg border duration-150 cursor-pointer ${
                        darkMode 
                          ? 'bg-cyber-dark/80 border-purple-500/10 hover:border-purple-500/35 text-slate-300' 
                          : 'bg-white border-purple-200 hover:bg-purple-50 text-slate-700 font-semibold'
                      }`}
                    >
                      {dream.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom input string form */}
              <form onSubmit={handleCustomSubmit} className="flex space-x-2 pt-2">
                <input 
                  type="text"
                  required
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="Describe your career dream..."
                  disabled={generating}
                  className={`flex-1 text-xs px-4 py-3 rounded-xl border outline-none font-sans ${
                    darkMode 
                      ? 'bg-cyber-dark border-purple-500/10 text-white focus:border-purple-500/40' 
                      : 'bg-white border-purple-200 text-slate-800 focus:border-purple-500'
                  }`}
                />
                
                <button 
                  type="submit"
                  disabled={generating || !customQuery.trim()}
                  className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl duration-150 cursor-pointer disabled:opacity-40"
                >
                  <LucideIcon name="Send" size={14} />
                </button>
              </form>

            </div>

          </div>

        </div>
      )}

    </>
  );
}
