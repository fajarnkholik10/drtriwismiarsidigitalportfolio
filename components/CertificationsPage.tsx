import React from 'react';
import { Verified, Calendar, Award, CheckCircle2, ShieldCheck, FileCheck, ExternalLink } from 'lucide-react';

interface CertificationsPageProps {
  onNavigate: (page: string) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onNavigate }) => {
  const certifications = [
    {
      id: "cpm-asia",
      title: "Certified Professional Marketer (Asia)",
      issuer: "Asia Marketing Federation (AMF)",
      date: "Jul 26, 2023",
      expiry: "Life-long Credential",
      regNo: "0990",
      color: "teal",
      link: "https://drive.google.com/file/d/1UjXvGV4OLXcY4itlWC_RVRn-elCfG_Tn/view?usp=drive_link",
      description: "A prestigious regional certification conferred by the Asia Marketing Federation, validating comprehensive strategic marketing expertise tailored to the Asian business landscape.",
      competencies: [
        "Strategic Marketing Management (Asia)",
        "Marketing Research & Information",
        "Asian Business Environment",
        "Global Brand Management"
      ]
    },
    {
      id: "bnsp-digital-marketing",
      title: "Certified Digital Marketing",
      issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
      date: "Jan 25, 2025",
      expiry: "Jan 25, 2028",
      regNo: "TIK 1565 07847 2025",
      color: "blue",
      link: "https://drive.google.com/file/d/1abJlGTSIwODUZx99dyH-piAabBXxtNEf/view?usp=drive_link",
      description: "National level competency certification in Digital Marketing, validating expertise in executing comprehensive digital strategies, social media management, and data-driven marketing research.",
      competencies: [
        "Planning Research on a Product/Brand",
        "Using Social Media and Online Tools",
        "Preparing Digital Content & Product Knowledge",
        "Analyzing Social Media and Digital Business Media",
        "Executing Brand Promotion Activities",
        "Optimizing Social Media Management"
      ]
    },
    {
      id: "ciiqa",
      title: "Certified International Internal Quality Auditor (CIIQA)",
      issuer: "LSP Quantum HRM Internasional",
      date: "Feb 24, 2024",
      expiry: "Feb 26, 2027",
      regNo: "QHI-1295-CIIQA-24",
      color: "amber",
      link: "https://drive.google.com/file/d/1Ll1t5kG7_QNRT9isY06gj-WrqBXkB8Px/view?usp=drive_link",
      description: "International certification for Internal Quality Audit in Higher Education, demonstrating competence in evaluating and assuring quality standards based on ISO 17024 schemes.",
      competencies: [
        "Internal & External Quality Assurance Systems",
        "Quality Standards of Higher Education",
        "Implementation of Audit Work Programs & Reporting",
        "Formulating Follow-up Recommendations",
        "Managerial Competencies: Integrity, Decision Making"
      ]
    },
    {
      id: "pmi",
      title: "PMI Project Management Ready™",
      issuer: "Project Management Institute (PMI)",
      date: "Jan 31, 2024",
      expiry: "Life-long Credential",
      regNo: "B5Jm-s4kd",
      color: "purple",
      link: "https://drive.google.com/file/d/175eReb6XvCVokT2zda0BZsHtc2ac0drO/view?usp=drive_link",
      description: "Global credential validating foundational knowledge in project management concepts, including both traditional plan-based methodologies and agile frameworks.",
      competencies: [
        "Project Management Fundamentals",
        "Traditional Plan-Based Methodologies",
        "Agile Methodologies",
        "Business Analysis Frameworks"
      ]
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
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Professional Certifications</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Verified size={14} /> Professional Credentials
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Certifications</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Demonstrating commitment to continuous professional development through nationally and internationally recognized competency standards in Digital Marketing, Quality Assurance, and Project Management.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-8">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            {/* Decorative colored bar */}
            <div className={`absolute top-0 left-0 bottom-0 w-2 ${
                cert.color === 'blue' ? 'bg-blue-500' : 
                cert.color === 'amber' ? 'bg-amber-500' : 
                cert.color === 'teal' ? 'bg-teal-500' : 'bg-purple-600'
            }`}></div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Cert Info */}
                <div className="md:w-1/3 space-y-4 flex flex-col">
                    <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${
                             cert.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 
                             cert.color === 'amber' ? 'bg-gradient-to-br from-amber-400 to-orange-600' : 
                             cert.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-emerald-600' : 'bg-gradient-to-br from-purple-500 to-indigo-700'
                        }`}>
                            <Award size={24} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                            cert.color === 'blue' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 
                            cert.color === 'amber' ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 
                            cert.color === 'teal' ? 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300' : 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                            {cert.color === 'blue' ? 'National' : 'International'}
                        </span>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">{cert.title}</h3>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <ShieldCheck size={16} /> {cert.issuer}
                        </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl space-y-2 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 flex items-center gap-2"><Calendar size={14} /> Issued</span>
                            <span className="font-bold text-slate-900 dark:text-white">{cert.date}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 flex items-center gap-2"><FileCheck size={14} /> Valid Until</span>
                            <span className="font-bold text-slate-900 dark:text-white">{cert.expiry}</span>
                        </div>
                        {cert.regNo && (
                            <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800">
                                <span className="text-xs text-slate-400 block mb-1">Registration Number</span>
                                <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300 break-all">{cert.regNo}</span>
                            </div>
                        )}
                    </div>

                    <div className="mt-auto pt-2">
                        <a 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                                cert.color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30' : 
                                cert.color === 'amber' ? 'bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30' : 
                                cert.color === 'teal' ? 'bg-teal-50 text-teal-700 hover:bg-teal-100 dark:bg-teal-900/20 dark:hover:bg-teal-900/30' :
                                'bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30'
                            }`}
                        >
                            <ExternalLink size={16} /> View Certificate
                        </a>
                    </div>
                </div>

                {/* Right: Competencies */}
                <div className="md:w-2/3 border-l border-slate-100 dark:border-slate-800 md:pl-8 pt-6 md:pt-0">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Competency Scope</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {cert.description}
                    </p>
                    
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Key Competencies Verified:</h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {cert.competencies.map((skill, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${
                                    cert.color === 'blue' ? 'text-blue-500' : 
                                    cert.color === 'amber' ? 'text-amber-500' : 
                                    cert.color === 'teal' ? 'text-teal-500' : 'text-purple-500'
                                }`} />
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};