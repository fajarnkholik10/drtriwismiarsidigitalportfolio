import React from 'react';
import { Award, BookOpen, Users, ArrowRight, Video, FileCheck, Quote } from 'lucide-react';

interface HomeOverviewProps {
  onNavigate: (page: string) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate }) => {
  return (
    <section className="mb-24 space-y-24">
      
      {/* 1. Philosophy Teaser */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl -z-10 blur-xl"></div>
            <div className="bg-white dark:bg-slate-900 border-l-4 border-green-500 p-8 rounded-r-2xl shadow-lg">
                <Quote className="text-green-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    "Good leaders think about long-lasting environmental effects as well as profits."
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    My teaching philosophy anchors on <strong>Sustainability</strong> and <strong>Active Learning</strong>. I believe in empowering students to apply abstract marketing theories to solve real-world problems—like helping local fisherfolks go digital.
                </p>
                <button 
                    onClick={() => onNavigate('philosophy')}
                    className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                    Read Teaching Philosophy <ArrowRight size={16} />
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                Educating the Next Generation of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Ethical Leaders</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
                At Sampoerna University, I utilize student-centered learning and simulations to bridge the gap between US-curriculum standards and Indonesian market realities.
            </p>
        </div>
      </div>

      {/* 2. The "Portfolio Hub" Bento Grid */}
      <div>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Portfolio Highlights</h2>
            <span className="text-sm text-slate-500">Executive Summary</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[500px]">
            
            {/* Box 1: Research (Large) */}
            <div 
                onClick={() => onNavigate('research')}
                className="md:col-span-2 md:row-span-2 bg-[#0a1f44] text-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01]"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BookOpen size={200} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <Award size={14} /> Research Excellence
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Australia Awards Indonesia & Grant Recipient</h3>
                        <p className="text-blue-200 max-w-md">
                            Recipient of 7 competitive grants including Australia Global Alumni Awards. Author of "Hambatan Ekspor UKM Indonesia" with research focused on SME resilience and International Marketing.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-amber-400 mt-8">
                        Explore Research Grants & Publications <ArrowRight size={20} />
                    </div>
                </div>
            </div>

            {/* Box 2: Certifications */}
            <div 
                onClick={() => onNavigate('certifications')}
                className="bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-6 border border-teal-100 dark:border-teal-800 hover:border-teal-500 cursor-pointer transition-colors group"
            >
                <div className="bg-white dark:bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center text-teal-600 mb-4 shadow-sm">
                    <FileCheck size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Professional Certified</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">CPM (Asia), BNSP Digital Marketing, & Quality Assurance.</p>
                <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Credentials <ArrowRight size={12} />
                </span>
            </div>

            {/* Box 3: Media & Community */}
            <div 
                onClick={() => onNavigate('media')}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer transition-colors group"
            >
                 <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                    <Users size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Impact Beyond Campus</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Empowering fisherfolks in "Damar Wulan Gebang" to go digital.</p>
                <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Watch Highlights <ArrowRight size={12} />
                </span>
            </div>

        </div>
      </div>

    </section>
  );
};