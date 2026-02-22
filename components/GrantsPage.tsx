import React from 'react';
import { Award, BookOpen, Globe, ExternalLink, Calendar } from 'lucide-react';

interface GrantsPageProps {
  onNavigate: (page: string) => void;
}

const RESEARCH_GRANTS = [
    {
      year: "2017 & 2018",
      title: "A Qualitative Comparison Study of Online Store Branding and Marketing Innovation in Indonesia and the United Kingdom",
      organization: "Ministry of Technology Research and Higher Education (Kemenristekdikti)",
      description: "International Collaborative Research Grant (2017 & 2018), Riset Kerja sama Luar Negeri (KLN). An international research collaboration with Edinburgh Napier University, UK.",
      link: "https://dppm.uii.ac.id/wp-content/uploads/2020/07/Surat-Pemberitahuan-Monev-KLN-Penerima-Hibah-DRPM.pdf",
      linkText: "View Monitoring Document"
    },
    {
      year: "2013",
      title: "Network and Innovation as SMEs Strategy in Exporting: Causation or Effectuation Approach?",
      organization: "Kopertis Wilayah III",
      description: "Fundamental Research Grant 2013 from Coordinator for Private Tertiary Education Institutions, Regional III."
    },
    {
      year: "2010",
      title: "Ethnicity, Culture and Entrepreneurial Orientation: Example from Different Ethnics Family Firms in Indonesia",
      organization: "Directorate General for Higher Education (Dikti)",
      description: "Grant for International Seminar. Presented at the 6th Workshop on Family Firms Management Research, Barcelona, Spain."
    }
];

const COMMUNITY_GRANTS = [
    {
      year: "2021",
      title: "Strengthening Women and Youth Fisherfolks Livelihoods during Covid-19 Pandemic",
      organization: "Australia Global Alumni",
      description: "The 2021 Alumni Grant Scheme Award for community development program.",
      link: "https://www.australiaawardsindonesia.org/project/detail/200/15/strengthening-women-and-youth-fisherfolks-livelihood-during-the-covid-19-pandemic",
      linkText: "View Project Detail"
    },
    {
      year: "2017",
      title: "Enhancing Women’s Lives through Better Marketing of Dairy Products in Krisik and Sidem Villages",
      organization: "Australia Global Alumni",
      description: "The 2017 Alumni Grant Scheme Award for community development program."
    },
    {
      year: "2014",
      title: "Milk of Gold for Pudak Villagers: Interventions for Improving Welfare and Livelihood in Krisik Village (Ponorogo) and Sidem Village (Tulung Agung)",
      organization: "Australia Awards",
      description: "2014 Alumni Grant Scheme Award for community development program."
    },
    {
      year: "2013",
      title: "Poverty Reduction through Facilitating Livelihood Enhancement: Training on Building Hanging Rack for Seaweed Farmers in Nusa Lembongan, Bali",
      organization: "Australia Awards Indonesia",
      description: "Australia Awards (2013) for community development program."
    }
];

export const GrantsPage: React.FC<GrantsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 animate-in fade-in duration-700">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
        <button
            onClick={() => onNavigate('home')}
            className="hover:text-primary transition-colors flex items-center gap-1"
        >
          Home
        </button>
        <span>/</span>
        <span className="font-medium text-slate-900 dark:text-slate-200">Grants & Awards</span>
      </div>

      {/* Page Heading */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Grants & <span className="text-primary">Awards</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A comprehensive record of competitive funding, international scholarships, and community development awards that have shaped my academic and professional journey.
        </p>
      </div>

      {/* Prestigious Scholarships Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="text-primary" /> Prestigious Scholarships
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
            {/* Chevening Award */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0a1f44] text-white shadow-xl group">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <Globe className="absolute -right-10 -top-10 w-64 h-64" />
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner mb-6">
                        <Award className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight">Chevening Award Recipient</h3>
                    <p className="text-blue-100 text-base mb-8 font-light leading-relaxed flex-grow">
                        Awarded the Chevening Scholarship to study at the <strong>University of Strathclyde, Glasgow, UK</strong>, for a master’s degree, and obtained an <strong>M.Sc. in International Marketing</strong>.
                    </p>
                    <a 
                        href="https://idcheveningalumni.com/alumni/profile/tri-wismiarsi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#0a1f44] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-amber-50 transition-all shadow-lg w-fit"
                    >
                        View Alumni Profile <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            {/* Australia Awards */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 to-emerald-900 text-white shadow-xl group">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <BookOpen className="absolute -right-10 -top-10 w-64 h-64" />
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner mb-6">
                        <Award className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight">Australian Development Scholarship (ADS)</h3>
                    <p className="text-emerald-50 text-base mb-8 font-light leading-relaxed flex-grow">
                        Awarded the prestigious <strong>Australian Development Scholarship (ADS)</strong> by the Australian Government to pursue a doctoral degree in <strong>International Business</strong> at <strong>Monash University</strong>. Selected as one of only 345 recipients from a highly competitive field of nearly 3,373 applicants.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a 
                            href="https://alumni-friends.monash.edu/ascendportal/s/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-emerald-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg"
                        >
                            View Alumni Portal <ExternalLink size={16} />
                        </a>
                        <a 
                            href="https://drive.google.com/file/d/1lZ8mNHfxT2n2KnC-r6U5QSCIV9C8vdg7/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-800/50 text-white border border-emerald-400/30 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-800 transition-all shadow-lg backdrop-blur-sm"
                        >
                            View Offer Letter <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div className="space-y-16">
          {/* Research Grants Section */}
          <section className="scroll-mt-24">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <BookOpen className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Research Grants</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{RESEARCH_GRANTS.length} Grants Found</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-6">
                {RESEARCH_GRANTS.map((grant, idx) => (
                    <div key={idx} className="group bg-white dark:bg-[#1a2632] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="flex-shrink-0">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold font-mono border border-slate-200 dark:border-slate-700">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {grant.year}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {grant.title}
                                </h4>
                                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">
                                    {grant.organization}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                    {grant.description}
                                </p>
                                {grant.link && (
                                    <a 
                                        href={grant.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline decoration-2 underline-offset-4"
                                    >
                                        {grant.linkText || "View Details"} <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                
                {RESEARCH_GRANTS.length === 0 && (
                    <div className="p-12 text-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500 font-medium">No research grants found matching your criteria.</p>
                    </div>
                )}
             </div>
          </section>

          {/* Community Grants Section */}
          <section className="scroll-mt-24">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                    <Award className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Community Development Grants</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{COMMUNITY_GRANTS.length} Awards Found</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {COMMUNITY_GRANTS.map((grant, idx) => (
                    <div key={idx} className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-amber-200 dark:hover:border-amber-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        
                        <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-xs font-bold font-mono border border-amber-100 dark:border-amber-800/50">
                                <Calendar className="w-3.5 h-3.5" />
                                {grant.year}
                            </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-3">
                            {grant.title}
                        </h4>
                        
                        <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3 uppercase tracking-wide">
                            {grant.organization}
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 flex-grow">
                            {grant.description}
                        </p>
                        
                        {grant.link && (
                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                <a 
                                    href={grant.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline decoration-2 underline-offset-4"
                                >
                                    {grant.linkText || "View Project Detail"} <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
                
                {COMMUNITY_GRANTS.length === 0 && (
                    <div className="col-span-full p-12 text-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500 font-medium">No community grants found matching your criteria.</p>
                    </div>
                )}
             </div>
          </section>
      </div>
    </div>
  );
};
