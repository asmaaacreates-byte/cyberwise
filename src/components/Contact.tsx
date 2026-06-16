import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'digital-marketing',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const errors = { name: '', phone: '' };

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      hasError = true;
    }
    if (!formData.phone.trim()) {
      errors.phone = 'WhatsApp phone number is required';
      hasError = true;
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setSubmitStatus('loading');
    
    // Simulate real database submission log
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'digital-marketing',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`relative py-24 transition-colors ${
        darkMode ? 'bg-cyber-dark text-white' : 'bg-white text-slate-900 border-t border-purple-50'
      }`}
    >
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Contact Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25">
            <LucideIcon name="Heart" size={13} className="text-purple-400" />
            <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-900'}`}>
              Establish Contact
            </span>
          </div>

          <h2 className="font-display font-black text-3.5xl sm:text-4.5xl leading-tight tracking-tight">
            Connect With <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              Our Counselors
            </span>
          </h2>

          <p className={`text-sm sm:text-base font-sans max-w-2xl mx-auto ${darkMode ? 'text-slate-350' : 'text-slate-600 font-medium'}`}>
            Have questions about degree pathways, batch timings, or job placements? Get in touch with our Perinthalmanna office directly or drop an application below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact coordinates, details & social media links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Card coordinates */}
            <div className={`p-6 rounded-3xl border space-y-6 ${
              darkMode ? 'bg-cyber-deep/80 border-purple-500/15' : 'bg-slate-50 border-purple-250 shadow-md'
            }`}>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300 shrink-0">
                  <LucideIcon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-purple-400">
                    Location Hub Address
                  </h4>
                  <p className={`text-sm tracking-tight leading-relaxed mt-1 font-sans font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    CyberWise Skillversity, Angadippuram, opposite of AM Honda, Perinthalmanna, Kerala - 679322
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300 shrink-0">
                  <LucideIcon name="MailOpen" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-purple-400">
                    Academic Inquiries Email
                  </h4>
                  <p className={`text-sm tracking-tight leading-relaxed mt-1 font-sans font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    info@cyberwiseskillversity.com <br />
                    admissions@cyberwise.edu.in
                  </p>
                </div>
              </div>

            </div>

            {/* Social media connections */}
            <div className="space-y-4">
              <h4 className={`text-xs font-mono font-bold tracking-wider uppercase ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Connect with our Digital Channels:
              </h4>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all cursor-pointer ${
                    darkMode ? 'bg-cyber-deep/80 hover:bg-purple-500/20 text-purple-300 border border-purple-500/10' : 'bg-purple-100/60 hover:bg-purple-100 text-purple-800'
                  }`}
                >
                  <LucideIcon name="Instagram" size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all cursor-pointer ${
                    darkMode ? 'bg-cyber-deep/80 hover:bg-purple-500/20 text-purple-300 border border-purple-500/10' : 'bg-purple-100/60 hover:bg-purple-100 text-purple-800'
                  }`}
                >
                  <LucideIcon name="Facebook" size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all cursor-pointer ${
                    darkMode ? 'bg-cyber-deep/80 hover:bg-purple-500/20 text-purple-300 border border-purple-500/10' : 'bg-purple-100/60 hover:bg-purple-100 text-purple-800'
                  }`}
                >
                  <LucideIcon name="Linkedin" size={18} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all cursor-pointer ${
                    darkMode ? 'bg-cyber-deep/80 hover:bg-purple-500/20 text-purple-300 border border-purple-500/10' : 'bg-purple-100/60 hover:bg-purple-100 text-purple-800'
                  }`}
                >
                  <LucideIcon name="Youtube" size={18} />
                </a>
              </div>
            </div>

            {/* Embedded maps widget with dark mode styled border */}
            <div className={`p-1 rounded-2xl border overflow-hidden aspect-video ${
              darkMode ? 'bg-cyber-deep/90 border-purple-500/15' : 'bg-slate-50 border-purple-150 shadow-md'
            }`}>
              {/* Pointing to Angadippuram, opposite of AM Honda, Perinthalmanna */}
              <iframe 
                src="https://maps.google.com/maps?q=AM%20Honda%20Angadippuram%20Perinthalmanna%20Kerala&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full rounded-xl border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Block: Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
              darkMode ? 'bg-cyber-dark/85 border-purple-500/15' : 'bg-white border-purple-200 shadow-md'
            }`}>
              
              <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight leading-snug mb-2">
                Submit an Admission Form
              </h3>
              
              <p className={`text-xs leading-relaxed mb-8 ${darkMode ? 'text-slate-450' : 'text-slate-650 font-medium'}`}>
                Fill in your background preference, and our Perinthalmanna lead mentors will reach out to draft your prospective syllabus guide and demo class batches.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                      YOUR FULL NAME *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand S" 
                      className={`w-full text-xs px-4 py-3.5 rounded-xl border outline-none font-sans ${
                        darkMode 
                          ? 'bg-cyber-deep border-purple-500/10 text-white focus:border-purple-500/40' 
                          : 'bg-slate-50 border-purple-200 text-slate-800 focus:border-purple-500'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[10px] font-mono text-pink-500 block mt-1">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                      WHATSAPP NUMBER *
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9846012345" 
                      className={`w-full text-xs px-4 py-3.5 rounded-xl border outline-none font-sans ${
                        darkMode 
                          ? 'bg-cyber-deep border-purple-500/10 text-white focus:border-purple-500/40' 
                          : 'bg-slate-50 border-purple-200 text-slate-800 focus:border-purple-500'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[10px] font-mono text-pink-500 block mt-1">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                      EMAIL ADDRESS (OPTIONAL)
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. anand@gmail.com" 
                      className={`w-full text-xs px-4 py-3.5 rounded-xl border outline-none font-sans ${
                        darkMode 
                          ? 'bg-cyber-deep border-purple-500/10 text-white focus:border-purple-500/40' 
                          : 'bg-slate-50 border-purple-200 text-slate-800 focus:border-purple-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                      PREFERRED CORE COURSE
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`w-full text-xs px-4 py-3.5 rounded-xl border outline-none font-sans appearance-none cursor-pointer ${
                        darkMode 
                          ? 'bg-cyber-deep border-purple-500/10 text-white focus:border-purple-500/40' 
                          : 'bg-slate-50 border-purple-200 text-slate-800 focus:border-purple-500'
                      }`}
                    >
                      <option value="digital-marketing">AI-Driven Digital Marketing</option>
                      <option value="videography">Professional Videography</option>
                      <option value="ecommerce">E-Commerce & Business Growth</option>
                      <option value="spoken-english">Spoken English & Communication</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-purple-400 mb-1">
                    YOUR RESEARCH INTEREST / CURRENT STATUS / GOALS
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about yourself (e.g., I want to start a videography channel or shift to an agency gig...)" 
                    className={`w-full text-xs px-4 py-3.5 rounded-xl border outline-none font-sans ${
                      darkMode 
                        ? 'bg-cyber-deep border-purple-500/10 text-white focus:border-purple-500/40' 
                        : 'bg-slate-50 border-purple-200 text-slate-800 focus:border-purple-500'
                    }`}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 rounded-xl font-display font-bold text-xs tracking-tight uppercase bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-lg cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  {submitStatus === 'loading' ? 'SUBMITTING...' : 'PROCEED WITH SECURE RESERVATION'}
                </button>

              </form>

              {submitStatus === 'success' && (
                <div className="mt-5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-start space-x-3 text-xs leading-normal animate-fade-in">
                  <LucideIcon name="CheckCircle" size={16} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Admissions Application Logged!</span>
                    <span className="block mt-1">Our enrollment mentor has securely logged your request. We will initiate contact directly on WhatsApp or over email to finalize program credentials.</span>
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
