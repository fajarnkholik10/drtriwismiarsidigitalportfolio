import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "25+", label: "Years Experience" },
  { value: "270", label: "Scholar Citations" },
  { value: "7", label: "Competitive Grants" },
  { value: "50+", label: "Publications and Conference" },
];

export const Stats: React.FC = () => {
  return (
    <section className="mb-20 transform -translate-y-6">
      <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 dark:divide-slate-800/50">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                {stat.value}
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};