import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import { COURSES } from '../data';
import { Course } from '../types';

interface ProgramsProps {
  darkMode: boolean;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
}

export function Programs({ darkMode, selectedCourseId, setSelectedCourseId }: ProgramsProps) {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [enquireSuccess, setEnquireSuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '' });

  const handleOpenDetail = (course: Course) => {
    setActiveCourse(course);
    setEnquireSuccess(false);
  };

  const handleCloseDetail = () => {
    setActiveCourse(null);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) return;
    setEnquireSuccess(true);
    setTimeout(() => {
      setEnquireSuccess(false);
      setActiveCourse(null);
      setEnquiryForm({ name: '', phone: '', email: '' });
    }, 2500);
  };

  return (
    <section 
      id="courses" 
      className={`relative py-24 border-t transition-colors ${
        darkMode ? 'bg-cyber-deep text-white cyber-grid-overlay' : 'bg-slate-50 text-slate-900 cyber-grid-overlay-light'
      }`}
    >
      {/* Background blurs */}
      <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Course Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-950'}`}>
              Featured Academy
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Our Professional <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500">
              Career-Focused
            </span> Programs
          </h2>

          <p className={`text-base font-sans max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>
            Carefully curated, specialized, and highly demand-driven educational pathways. Click any course to view full module details, syllabus breakdowns, and careers pathways.
          </p>
        </div>

        {/* Courses Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              onClick={() => handleOpenDetail(course)}
              className={`group relative rounded-3xl overflow-hidden border duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between cursor-pointer ${
                darkMode 
                  ? 'bg-cyber-dark/85 border-purple-500/15 text-white hover:border-purple-500/35 hover:bg-cyber-purple/15' 
                  : 'bg-white border-purple-100 text-slate-850 hover:border-purple-200 hover:shadow-purple-100 shadow-md'
              }`}
            >
              
              {/* Image banner inside card */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay with subtle course badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {course.badge && (
                  <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest uppercase font-black bg-purple-600/90 text-white backdrop-blur-sm shadow-md px-2.5 py-1 rounded-full">
                    {course.badge}
                  </span>
                )}

                {/* Small duration indicator banner */}
                <div className="absolute bottom-3 left-4 flex items-center space-x-1 text-[11px] font-mono text-purple-200 bg-purple-950/70 py-0.5 px-2 rounded backdrop-blur-[2px]">
                  <LucideIcon name="Clock" size={10} />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Course Title and Description content padding box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  
                  {/* Category icon */}
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-6 ${
                    darkMode ? 'bg-cyber-purple/50 text-purple-300' : 'bg-purple-50 text-purple-700'
                  }`}>
                    <LucideIcon name={course.icon} size={20} />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight leading-snug group-hover:text-purple-400 duration-200">
                    {course.title}
                  </h3>

                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-350' : 'text-slate-600'
                  }`}>
                    {course.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-500/10 flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold uppercase ${
                    darkMode ? 'text-cyber-glow' : 'text-purple-900'
                  }`}>
                    View Syllabus Detail
                  </span>
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:translate-x-1 transition-transform">
                    <LucideIcon name="ChevronRight" size={14} />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Dynamic Detail & Enquiry Overlay Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-deep/80 backdrop-blur-md overflow-y-auto">
          <div className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto ${
            darkMode 
              ? 'bg-cyber-dark/95 border-purple-500/35 text-white' 
              : 'bg-white border-purple-150 text-slate-900'
          }`}>
            
            {/* Custom decorative background glow inside modal */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full bg-purple-600/15 blur-3xl" />

            {/* Modal Exit Button */}
            <button 
              onClick={handleCloseDetail}
              className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
                darkMode ? 'bg-cyber-purple/35 hover:bg-cyber-purple/60 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <LucideIcon name="X" size={18} />
            </button>

            {/* Main Modal grid content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 pt-4">
              
              {/* Course Detail Display Part */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center space-x-2 bg-purple-500/10 px-3 py-1.5 rounded-full w-fit border border-purple-500/20">
                  <LucideIcon name={activeCourse.icon} size={15} className="text-purple-400" />
                  <span className={`text-xs font-mono font-bold uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-950'}`}>
                    {activeCourse.duration} Program
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
                  {activeCourse.title}
                </h3>

                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>
                  {activeCourse.fullDescription}
                </p>

                {/* Modules breakdown */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm sm:text-base tracking-tight text-purple-400 flex items-center space-x-2">
                    <LucideIcon name="FileText" size={16} />
                    <span>Course Curriculum Modules</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {activeCourse.modules.map((mod, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded-xl border flex items-start space-x-3 transition-colors ${
                          darkMode ? 'bg-cyber-deep/80 border-purple-500/10' : 'bg-slate-50 border-purple-200/50'
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-purple-400 bg-purple-500/15 py-0.5 px-2 rounded mt-0.5">
                          M{i+1}
                        </span>
                        <span className={`text-xs sm:text-sm font-sans ${darkMode ? 'text-slate-200' : 'text-slate-700 font-medium'}`}>
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills indicators */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase">
                    Key Practical Skills Mastered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCourse.skillsGained.map((skill, i) => (
                      <span key={i} className="text-[11px] font-medium font-mono px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Side Enquiry Form Part inside Modal */}
              <div className="lg:col-span-5">
                <div className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-cyber-deep/90 border-purple-500/15' : 'bg-purple-50/50 border-purple-200/60'
                }`}>
                  <h4 className="font-display font-bold text-lg tracking-tight mb-2">
                    Quick Admission Enquiry
                  </h4>
                  <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>
                    Submit your number below. A CyberWise counselor will reach out within 24 hours to guide your syllabus details & fee structures.
                  </p>

                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                        YOUR FULL NAME
                      </label>
                      <input 
                        type="text" 
                        required
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                        placeholder="e.g. Anand" 
                        className={`w-full text-xs px-4 py-3 rounded-xl border outline-none duration-150 ${
                          darkMode 
                            ? 'bg-cyber-dark border-purple-500/10 text-white focus:border-purple-500/40' 
                            : 'bg-white border-purple-200 text-slate-800 focus:border-purple-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                        WHATSAPP NUMBER
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                        placeholder="e.g. +91 9999999999" 
                        className={`w-full text-xs px-4 py-3 rounded-xl border outline-none duration-150 ${
                          darkMode 
                            ? 'bg-cyber-dark border-purple-500/10 text-white focus:border-purple-500/40' 
                            : 'bg-white border-purple-200 text-slate-800 focus:border-purple-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                        EMAIL ADDRESS (OPTIONAL)
                      </label>
                      <input 
                        type="email" 
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                        placeholder="e.g. anand@gmail.com" 
                        className={`w-full text-xs px-4 py-3 rounded-xl border outline-none duration-150 ${
                          darkMode 
                            ? 'bg-cyber-dark border-purple-500/10 text-white focus:border-purple-500/40' 
                            : 'bg-white border-purple-200 text-slate-800 focus:border-purple-500'
                        }`}
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={enquireSuccess}
                      className="w-full py-3.5 rounded-xl font-display font-bold text-xs tracking-tight uppercase bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-lg cursor-pointer transition-transform hover:-translate-y-0.5"
                    >
                      {enquireSuccess ? 'Success! Request Logged' : 'Submit My Application'}
                    </button>
                  </form>

                  {enquireSuccess && (
                    <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center space-x-2 justify-center text-xs animate-pulse">
                      <LucideIcon name="CheckCircle" size={14} />
                      <span>Thank you! Counselor will reach out shortly.</span>
                    </div>
                  )}

                  {/* Career paths list inside box */}
                  <div className="mt-6 pt-5 border-t border-purple-500/10">
                    <span className="block text-xs font-mono font-bold text-purple-400 uppercase mb-2">
                      Graduate Career Trajectories:
                    </span>
                    <div className="space-y-1.5">
                      {activeCourse.careerPaths.map((path, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}>{path}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
