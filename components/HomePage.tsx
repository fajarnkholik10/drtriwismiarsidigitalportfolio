import React from 'react';
import { Verified, Globe, Sparkles, Award, BookOpen, Users, ArrowRight, Quote, FileCheck, Play, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 space-y-20">
      
      {/* --- HERO SECTION (Old Format) --- */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Open for Collaboration
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                Bridging Theory <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">To Market Reality</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Dr. Tri Wismiarsi is a Senior Lecturer and Researcher specializing in SME Resilience, International Marketing, and Consumer Behavior. She is committed to integrating academic rigor with real-world community impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                      <Verified size={20} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Education</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">PhD & Australia Awards Indonesia</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600">
                      <Globe size={20} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Research</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">International SME Grants</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600">
                      <Sparkles size={20} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Impact</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">Community Empowerment</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-8 border-white dark:border-slate-900 shadow-2xl">
                <img 
                  alt="Tri Wismiarsi, S.Hut., M.Sc., Ph.D." 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  src="https://i.ibb.co.com/TBPhg7NK/Photoprofile.png" 
                />
              </div>
              <div className="absolute bottom-0 right-0 md:right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-bounce duration-[3000ms]">
                  <span className="text-2xl">🇮🇩</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Jakarta Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (Old Format) --- */}
      <section className="transform -translate-y-6">
        <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 dark:divide-slate-800/50">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "270", label: "Scholar Citations" },
            { value: "7", label: "Competitive Grants" },
            { value: "50+", label: "Publications" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                  {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- VIDEO INTRODUCTION SECTION (Old Format) --- */}
      <section>
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-0"></div>
            <div className="grid md:grid-cols-12 gap-0 relative z-10">
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Watch Introduction
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Meet Dr. Tri Wismiarsi
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Get to know more about her research focus and passion for empowering the next generation of leaders.
                    </p>
                </div>
                <div className="md:col-span-7 bg-black aspect-video">
                    <iframe 
                        src="https://drive.google.com/file/d/184WFhwfjKwyUrVHIYkdSYLJ61qLgIXnH/preview" 
                        width="100%" 
                        height="100%" 
                        allow="autoplay; fullscreen"
                        className="w-full h-full"
                        title="Introduction Video"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* --- TEACHING PHILOSOPHY (New Standard Layout) --- */}
      <section className="py-12 border-b border-slate-100 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
              <div className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-sm mb-4">
                  <Quote size={16} /> Teaching Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                  Educating the Next Generation of <span className="text-green-600">Ethical Leaders</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  "Good leaders think about long-lasting environmental effects as well as profits."
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                  My teaching philosophy anchors on <strong>Sustainability</strong> and <strong>Active Learning</strong>. At Sampoerna University, I utilize <strong>Participatory Learning</strong> and <strong>Experiential Learning</strong> to bridge the gap between US-curriculum standards and Indonesian market realities.
              </p>
              <button 
                  onClick={() => onNavigate('philosophy')}
                  className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-6 py-3 rounded-xl font-bold hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors flex items-center gap-2"
              >
                  Read Full Philosophy <ArrowRight size={16} />
              </button>
          </div>
          <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://i.ibb.co.com/tTJFn1Ss/Whats-App-Image-2026-02-01-at-17-43-55-1.jpg" 
                    alt="Teaching Philosophy" 
                    className="w-full h-full object-cover"
                  />
              </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO HIGHLIGHTS (New Standard Grid) --- */}
      <section className="py-12">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Portfolio Highlights</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                  A collection of research, professional certifications, and community impact initiatives.
              </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Research */}
              <div 
                  onClick={() => onNavigate('research')}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform cursor-pointer group"
              >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <BookOpen size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Research</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      Focused on SME resilience, International Marketing, and Consumer Behavior.
                  </p>
                  <span className="text-blue-600 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Publications <ArrowRight size={14} />
                  </span>
              </div>

              {/* Grants & Awards */}
              <div 
                  onClick={() => onNavigate('research')}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform cursor-pointer group"
              >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Award size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Grants & Awards</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      Recipient of 7 competitive grants including Australia Global Alumni Awards.
                  </p>
                  <span className="text-purple-600 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Awards <ArrowRight size={14} />
                  </span>
              </div>

              {/* Certifications */}
              <div 
                  onClick={() => onNavigate('certifications')}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform cursor-pointer group"
              >
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <FileCheck size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Certifications</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      CPM (Asia), BNSP Digital Marketing, & Quality Assurance.
                  </p>
                  <span className="text-teal-600 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Credentials <ArrowRight size={14} />
                  </span>
              </div>

              {/* Media/Impact */}
              <div 
                  onClick={() => onNavigate('media')}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform cursor-pointer group"
              >
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Users size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Community Impact</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      Empowering fisherfolks in "Damar Wulan Gebang" to go digital.
                  </p>
                  <span className="text-amber-600 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                      Watch Highlights <ArrowRight size={14} />
                  </span>
              </div>
          </div>
      </section>

      {/* --- GLOBAL ENGAGEMENT SECTION (New Standard Grid) --- */}
      <section className="py-12 border-t border-slate-100 dark:border-slate-800">
         <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                Global Engagement <span className="text-slate-400">&</span> Networks
            </h2>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {/* Image 1: ATINER */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative">
                     <img 
                        src="https://i.ibb.co.com/tMhGh5MV/Whats-App-Image-2026-02-19-at-08-33-42.jpg" 
                        alt="ATINER Conference Athens" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">Presented research on online store branding strategies.</p>
                     </div>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase mb-3 tracking-wider">
                        <span className="material-symbols-outlined text-sm">podium</span> Conference
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        Annual International Conference on Global Studies (ATINER)
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">Athens, Greece</p>
                </div>
            </div>

            {/* Image 2: Strathclyde */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative">
                     <img 
                        src="https://i.ibb.co.com/wh7SsDNR/Whats-App-Image-2026-02-19-at-08-38-33.jpg" 
                        alt="Strathclyde Alumni Networking" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">Strengthening ties with UK alumni network.</p>
                     </div>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase mb-3 tracking-wider">
                        <span className="material-symbols-outlined text-sm">groups</span> Networking
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        University of Strathclyde Alumni Gathering
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">Glasgow, UK (Alumni Network)</p>
                </div>
            </div>

            {/* Image 3: ENU */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative">
                     <img 
                        src="https://i.ibb.co.com/v6f2VZgb/Whats-App-Image-2026-02-19-at-08-49-19.jpg" 
                        alt="ENU Collaboration" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">DIKTI funded research on comparative online branding.</p>
                     </div>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase mb-3 tracking-wider">
                        <span className="material-symbols-outlined text-sm">handshake</span> Collaboration
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        Research Collaboration with Edinburgh Napier University
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">Funded by DIKTI</p>
                </div>
            </div>
         </div>
      </section>

      {/* --- CONTACT CTA (Old Format) --- */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Interested in Collaboration?</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Dr. Tri is available for academic partnerships, research supervision, and curriculum consultation.
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/tri-wismiarsi-1068086a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 inline-flex items-center justify-center"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
