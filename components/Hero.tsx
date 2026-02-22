import React from 'react';
import { Verified, Globe, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
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
              Dr. Tri Wismiarsi is a Senior Lecturer and Researcher specializing in SME Resilience, International Marketing, and Consumer Behavior. Integrating academic rigor with real-world community impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                    <Verified size={20} />
                </div>
                <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Education</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">PhD & Chevening Scholar</div>
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
            {/* Floating Badge */}
            <div className="absolute bottom-0 right-0 md:right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-bounce duration-[3000ms]">
                <span className="text-2xl">🇮🇩</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Jakarta Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};