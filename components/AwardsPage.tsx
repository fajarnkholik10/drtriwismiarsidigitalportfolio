import React from 'react';
import { Award, ExternalLink, BookOpen, Globe } from 'lucide-react';

interface AwardsPageProps {
  onNavigate: (page: string) => void;
}

export const AwardsPage: React.FC<AwardsPageProps> = ({ onNavigate }) => {
  const grants = [
    {
      year: "2021",
      organization: "Australia Global Alumni",
      description: "The 2021 Alumni Grant Scheme (Australia Global Alumni) Award for community development program on \"Strengthening Women and Youth Fisherfolks Livelihoods during Covid-19 Pandemic.\"",
      link: "https://www.australiaawardsindonesia.org/project/detail/200/15/strengthening-women-and-youth-fisherfolks-livelihood-during-the-covid-19-pandemic",
      linkText: "View Project Detail"
    },
    {
      year: "2017 & 2018",
      organization: "Ministry of Technology Research and Higher Education (Kemenristekdikti)",
      description: "International Collaborative Research Grant (2017 & 2018), Riset Kerja sama Luar Negeri (KLN), from Ministry of Technology Research and Higher Education (Kemenristekdikti), for carrying out research on \"A Qualitative Comparison Study of Online Store Branding and Marketing Innovation in Indonesia and the United Kingdom\", an international research collaboration with Edinburgh Napier University, UK.",
      link: "https://dppm.uii.ac.id/wp-content/uploads/2020/07/Surat-Pemberitahuan-Monev-KLN-Penerima-Hibah-DRPM.pdf",
      linkText: "View Monitoring Document"
    },
    {
      year: "2017",
      organization: "Australia Global Alumni",
      description: "The 2017 Alumni Grant Scheme (Australia Global Alumni) Award for community development program on \"Enhancing Women’s Lives through Better Marketing of Dairy Products in Krisik and Sidem Villages.\""
    },
    {
      year: "2014",
      organization: "Australia Awards",
      description: "2014 Alumni Grant Scheme Award for community development program on \"Milk of Gold for Pudak Villagers: Interventions for Improving Welfare and Livelihood in Krisik Village (Ponorogo) and Sidem Village (Tulung Agung).\""
    },
    {
      year: "2013",
      organization: "Australia Awards Indonesia",
      description: "Australia Awards (2013) for community development program, \"Poverty Reduction through Facilitating Livelihood Enhancement: Training on Building Hanging Rack for Seaweed Farmers in Nusa Lembongan, Bali\""
    },
    {
      year: "2013",
      organization: "Kopertis Wilayah III",
      description: "Fundamental Research Grant 2013 from Coordinator for Private Tertiary Education Institutions, Regional III (Kopertis Wilayah III), for carrying out research on \"Network and Innovation as SMEs Strategy in Exporting: Causation or Effectuation Approach?\""
    },
    {
      year: "2010",
      organization: "Directorate General for Higher Education (Dikti)",
      description: "Grant for International Seminar from Directorate General for Higher Education for presenting research result, \"Ethnicity, Culture and Entrepreneurial Orientation: Example from Different Ethnics Family Firms in Indonesia\", written jointly with M.S. Shihab, which was presented on 6th Workshop on Family Firms Management Research, 6-8 June 2010, European Institute for Advanced Studies in Management, Esade Entrepreneurship Institute, Barcelona, Spain."
    }
  ];

  return (
    <div className="py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
        <button 
            onClick={() => onNavigate('home')}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-sm">home</span> Home
        </button>
        <span className="text-[#4c739a] text-sm">/</span>
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Awards & Grants</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
          Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Competitive Grants</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          A track record of securing international funding and recognition for impactful research and community development initiatives across Indonesia, UK, and Australia.
        </p>
      </div>

      {/* Featured Award: Chevening */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-[#0a1f44] to-[#1e3a8a] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Globe size={300} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                    <Award size={48} className="text-amber-400" />
                </div>
                <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Prestigious International Scholarship
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Chevening Award Recipient</h2>
                    <p className="text-blue-100 text-lg mb-6 font-light leading-relaxed">
                        Awarded the Chevening Scholarship to study at the <strong>University of Strathclyde, Glasgow, UK</strong>, specializing in International Marketing and obtaining an <strong>M.Sc in International Marketing</strong>.
                    </p>
                    <a 
                        href="https://idcheveningalumni.com/alumni/profile/tri-wismiarsi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#0a1f44] px-6 py-3 rounded-lg font-bold text-sm hover:bg-amber-50 transition-colors"
                    >
                        View Alumni Profile <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* Grants Timeline */}
      <section>
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="text-primary" /> Grants & Funding Track Record
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 grow"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-12">
            {grants.map((grant, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-primary group-hover:scale-125 transition-transform"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                            {grant.year}
                        </span>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                        <p className="text-slate-900 dark:text-slate-200 leading-relaxed font-medium mb-4">
                            {grant.description}
                        </p>
                        
                        {grant.link && (
                            <a 
                                href={grant.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
                            >
                                {grant.linkText || "View details"} <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};