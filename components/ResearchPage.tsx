import React, { useState } from 'react';
import { Award, ExternalLink, Globe } from 'lucide-react';

interface ResearchPageProps {
  onNavigate: (page: string) => void;
}

interface Publication {
  title: string;
  citation: string;
  link?: string;
  type: 'Journal' | 'Conference' | 'Book';
  year: string;
}

const PUBLICATIONS: Publication[] = [
  // Journals
  {
    title: "Understanding Repurchase Decision Of Boba Milk Drinks Among Gen Z In Jakarta",
    citation: "Indrawan, U., Wismiarsi, T., Hatta, H. (2025). Journal of Business & Applied Management, Vol. XVIII (2): 129-144.",
    link: "https://journal.ubm.ac.id/index.php/business-applied-management/article/view/9040/3365",
    type: "Journal",
    year: "2025"
  },
  {
    title: "Entrepreneurial Orientation And Competitive Advantage As The Antecedents Of Smes Performance",
    citation: "Hutagalung, M. K. M., Wismiarsi, T., Ardiansyah, M., Kusumawardhani, D. (2025). SURPLUS: Jurnal Riset Mahasiswa Ekonomi Manajemen dan Akuntansi, Vol. 5 (2): 187 – 199.",
    link: "https://ejournal.iba.ac.id/index.php/surplus/article/view/1139/440",
    type: "Journal",
    year: "2025"
  },
  {
    title: "The paradox of flash sales: How time-limited offers influence impulsive buying tendency in the emerging market (e-Commerce in Jakarta, Indonesia)",
    citation: "Pangaribuan, C. H., Wanda, M., Prayitno. S. B., Wismiarsi, T., Barlian, E., Roemawi, N. F. Jurnal Manajemen dan Pemasaran Jasa, Vol. 18. (2): 278 – 293.",
    link: "https://e-journal.trisakti.ac.id/index.php/jasa/article/view/22350",
    type: "Journal",
    year: "2025"
  },
  {
    title: "Online Purchase Intention: The Impact of Animated Advertisement in Gundam Plastic Model",
    citation: "Putra, A.W., Wismiarsi, T. (2025). JEMASI: Jurnal Ekonomi, Manajemen dan Akuntansi, Vol. 21 (1).",
    link: "https://ejournal.iba.ac.id/index.php/jemasi/article/view/1003",
    type: "Journal",
    year: "2025"
  },
  {
    title: "Consumer Buying Intention: Food Choice Preferences Based on Cultural Orientation",
    citation: "Samita, A. S., Vianca, S. A., Wismiarsi, T. (2025). Jurnal Inovasi Manajemen, Kewirausahaan, Bisnis dan Digital, Vol. 2 (1).",
    link: "https://ejournal.arimbi.or.id/index.php/JIMaKeBiDi/article/view/455/719",
    type: "Journal",
    year: "2025"
  },
  {
    title: "Effect of Social Media Engagement and Beauty Influencers on Purchase Intentions of Indonesian Beauty Products",
    citation: "Basalamah, R.A.M, Umayah, A., Wismiarsi, T. (2025). JEMSI (Jurnal Ekonomi, Manajemen, dan Akuntansi), Vol. 11 (1).",
    link: "https://journal.lembagakita.org/jemsi/article/view/3756",
    type: "Journal",
    year: "2025"
  },
  {
    title: "The dynamic Interactions of Social Media Use, Self Efficacy, Academic Resilience, and Learning Engagement in college Students",
    citation: "Hiustra, M. L., Pangaribuan, C. H., Wismiarsi, T. (2024). Jurnal Digismantech, Vol. 4 (2).",
    link: "https://journal.ubm.ac.id/index.php/digismantech/article/view/7605/3146",
    type: "Journal",
    year: "2024"
  },
  {
    title: "The influences of content interactivity on purchase intention: An engagement mediation",
    citation: "Wismiarsi, T., Pangaribuan, C. H., Prayitno, S. B., & Ainin, A. Q. (2024). Multidisciplinary Science Journal, Vol. 6 (7).",
    link: "https://malque.pub/ojs/index.php/msj/article/view/1312",
    type: "Journal",
    year: "2024"
  },
  {
    title: "Gen Z: From Familiarity in Operating Digital Platforms into the Intention of Continuance Purchasing Online F&B Products",
    citation: "Machsus, A.A.M., Tarmidi, M., Wismiarsi, T. (2024). Journal of Business, Management, and Social Studies, 3 (2).",
    link: "https://jbms.site/index.php/JBMS/article/view/72/56",
    type: "Journal",
    year: "2024"
  },
  {
    title: "Understanding the Factors Influencing Customer Intention to Subscribe to Spotify Premium in Indonesia",
    citation: "Amelia, N., Zatalini, Z., Wismiarsi, T. (2023). Jurnal Manajemen dan Bisnis Sriwijaya, 21 (1). 4512–4521.",
    link: "https://garuda.kemdiktisaintek.go.id/documents/detail/3344818",
    type: "Journal",
    year: "2023"
  },
  {
    title: "Examining Augmented Reality on Purchase Intention through Technology Acceptance Model",
    citation: "Dewi, Z. A., Wismiarsi, T., Bintoro, B. P. K. (2023). Journal Scientia, Vol. 12 (4): 833 – 841.",
    link: "https://paperity.org/p/343529099/examining-augmented-reality-on-purchase-intention-through-technology-acceptence-model",
    type: "Journal",
    year: "2023"
  },
  {
    title: "Social Media Engagement and Influencer Personal Branding Relation",
    citation: "Saidah, N.L., Wulandari, Q.S.S., Wismiarsi, T. (2022). Visionida: Jurnal Manajemen dan Bisnis, 8(2).",
    link: "https://ojs.unida.info/Jvs/article/view/7247",
    type: "Journal",
    year: "2022"
  },
  {
    title: "Startup Branding: A Case Study of Pegipegi",
    citation: "Wismiarsi, T., Shihab, M.S., Hatta, H., Tjandra, N. (2020). Transnational Marketing Journal, 8 (1).",
    link: "https://transnationalmarket.com/article-detail/?id=77",
    type: "Journal",
    year: "2020"
  },
  {
    title: "Behaviour Loyalty: Apakah dipengaruhi Brand Personality dan Brand Experience? Sebuah Studi pada Industri Kosmetik",
    citation: "Wismiarsi, T. and Purnama, T. J. (2015). Jurnal Manajemen & Bisnis Sriwijaya, 13 (3).",
    link: "https://garuda.kemdiktisaintek.go.id/documents/detail/472411",
    type: "Journal",
    year: "2015"
  },
  {
    title: "Pengaruh Kemasan dan Harga pada Keputusan Pembelian Minuman Isotonik",
    citation: "Resmi, N and Wismiarsi, T. (2015). Jurnal Manajemen & Bisnis Sriwijaya, 13 (1).",
    link: "https://www.neliti.com/publications/283986/pengaruh-kemasan-dan-harga-pada-keputusan-pembelian-minuman-isotonik",
    type: "Journal",
    year: "2015"
  },
  {
    title: "Network and Innovation as SMEs Export Strategy: Causation or Effectuation Approach?",
    citation: "Wismiarsi, T. and Shihab, M.S. (2014). International Journal of Business and Management Study, 1 (2).",
    link: "https://repository.bakrie.ac.id/59/1/MNJ-Artikel-000%20Muhcin%20Shihab.pdf",
    type: "Journal",
    year: "2014"
  },
  {
    title: "Internationalisation of SMEs: A Network Perspective",
    citation: "Wismiarsi, T. and Shihab, M. S. (2010). Indonesia International Journal of Innovation, Entrepreneurship and Small Business, 1 (1).",
    type: "Journal",
    year: "2010"
  },
  {
    title: "Networking and Internationalisation of Small Firms in Indonesia",
    citation: "Wismiarsi, T., Hatta, H. and Adidarma, W. (2009). Jurnal Manajemen & Bisnis Sriwijaya, 7 (14).",
    link: "https://media.neliti.com/media/publications/283961-networking-and-internationalisation-of-s-155ac8d4.pdf",
    type: "Journal",
    year: "2009"
  },
  {
    title: "Integration of Market Orientation, Marketing Strategies and Performance: A Conceptual Framework for Indonesian SME",
    citation: "Shihab, M. S., Wismiarsi, T. and Yoto, Y. (2009). Jurnal Manajemen & Bisnis Sriwijaya, 7 (14).",
    link: "https://media.neliti.com/media/publications/284028-integration-of-market-orientation-market-66efe889.pdf",
    type: "Journal",
    year: "2009"
  },
  {
    title: "Relationship marketing and small business an example from Indonesian seaweed industry",
    citation: "Wismiarsi, T. (2009). Manajemen Usahawan Indonesia, No. 05, Th.XXXVIII.",
    link: "https://psb.feb.ui.ac.id/index.php?p=show_detail&id=90734&keywords=",
    type: "Journal",
    year: "2009"
  },
  {
    title: "Perception of profession: lessons from Indonesian seaweed farmers",
    citation: "Sriyanto, R. and Wismiarsi, T. (2009). Manajemen Usahawan Indonesia, No. 4, Th. XXXVIII.",
    link: "https://psb.feb.ui.ac.id/index.php?p=show_detail&id=90649&keywords=",
    type: "Journal",
    year: "2009"
  },
  {
    title: "Building Customer Loyalty through Trust and Commitment An Example from Indonesian Seaweed Industry",
    citation: "Hatta, H., Widyastuti, D. A and Wismiarsi, T. (2008). Jurnal Manajemen & Bisnis Sriwijaya, 6 (12).",
    type: "Journal",
    year: "2008"
  },
  {
    title: "Culture, Entrepreneurial Orientation and Firm Performance (The Indonesian-Native and Indonesia-Chinese Entrepreneurs)",
    citation: "Shihab, M. S., Wismiarsi, T. and Sine, K. (2008). Jurnal Manajemen & Bisnis Sriwijaya, 6 (11).",
    type: "Journal",
    year: "2008"
  },
  {
    title: "Is Education A Commercial Product? A Comparison between the UK and Indonesia",
    citation: "Wismiarsi, T. (2008). Journal of European Studies, IV (3).",
    type: "Journal",
    year: "2008"
  },
  {
    title: "The Strategy for Energy Crisis: United Kingdom and Indonesian Case Study",
    citation: "Wismiarsi, T. (2008). Journal of European Studies, IV (1).",
    type: "Journal",
    year: "2008"
  },
  
  // Conferences
  {
    title: "Understanding The Impact Of Purchase Intention Among Gen Z On Product Reviews On Electronic Products",
    citation: "Firmansyah, G. A., Harlan, B. B., Wismiarsi, T. (2025). 8th National Conference Business Management and Accounting.",
    link: "https://ojs.uph.edu/index.php/NCBMA/article/view/9978",
    type: "Conference",
    year: "2025"
  },
  {
    title: "Enhancing Job Performance: Exploring The Impact of Person-Job Fit, Job Autonomy, And Work-Life Balance",
    citation: "Showa, W. M., Wismiarsi, T., Ardiansyah, M. (2025). 8th National Conference Business Management and Accounting.",
    link: "https://ojs.uph.edu/index.php/NCBMA/article/view/9977",
    type: "Conference",
    year: "2025"
  },
  {
    title: "Employee Engagement as a Mediator to Role Benefit and Innovative Behavior (Evidence from Balinese Five-Star Hotel Employees)",
    citation: "Ariasih, P., Pangaribuan, C. H., Prayitno, S. B., Wismiarsi, T., Putra, O. P. B., Hidayat, D. (2023). E3S Web of Conferences (ICOBAR 2023).",
    link: "https://doi.org/10.1051/e3sconf/202342602155",
    type: "Conference",
    year: "2023"
  },
  {
    title: "Food Vloggers: Mapping the Relationships between Personal Relevance, Customer Engagement, and Repurchase Decision",
    citation: "Rozamuri, A. M., Setiawan, J., Pangaribuan, C. H., Hidayanti., Wismiarsi, T., Wahyuni., M. (2022). 7th International Conference on Informatics and Computing (ICIC).",
    link: "https://doi.org/10.1109/ICIC56845.2022.10007022",
    type: "Conference",
    year: "2022"
  },
  {
    title: "Online Stores Branding in Indonesia",
    citation: "Wismiarsi, T., Shihab, M.S., Hatta, H., and Tjandra, N. (2018). 12th Annual International Conference on Global Studies, Athens, Greece.",
    link: "https://www.atiner.gr/abstracts/2018ABST-CBC.pdf",
    type: "Conference",
    year: "2018"
  },
  {
    title: "The Branding Strategy of Online Stores in Indonesia",
    citation: "Wismiarsi, T., Shihab, M.S. and Hatta, H. (2017). 1st Asia Pacific Management Research Conference, Lombok, Indonesia.",
    link: "https://www.scribd.com/document/485454842/PROCEEDING-THE-1ST-APMRC-pdf#content=query:tri%20wismiarsi,pageNum:8",
    type: "Conference",
    year: "2017"
  },
  {
    title: "Pengaruh Risiko Pada Keputusan Belanja On-Line",
    citation: "Karami, K. A., Wismiarsi, T. (2016). Prosiding Seminar Nasional INDOCOMPAC.",
    link: "https://media.neliti.com/media/publications/171322-ID-pengaruh-risiko-pada-keputusan-belanja-o.pdf",
    type: "Conference",
    year: "2016"
  },
  {
    title: "Network and Innovation as SMEs Export Strategy: Causation or Effectuation Approach?",
    citation: "Wismiarsi, T. and Shihab, M. S. (2014). Advances in Human Science, Economics and Social Study, Bangkok.",
    link: "https://theired.org/conference/paper/network-and-innovation-as-smes-export-strategy-causation-or-effectuation-approach-indonesian-case-studies-4284",
    type: "Conference",
    year: "2014"
  },
  {
    title: "Pengaruh Service Scape pada Kesetiaan Pelanggan: Sebuah Studi Layanan Taksi di Jakarta",
    citation: "Hapsari, L. N. A and Wismiarsi, T. (2011). 5th PPM Conference on Management Research, Manado.",
    type: "Conference",
    year: "2011"
  },
  {
    title: "Keputusan Pembelian: Pengaruh Keamanan Makanan dan Citra Merek Pada Makanan Instan",
    citation: "Purnamasari, R. D., Hatta, H., and Wismiarsi, T. (2011). 5th PPM Conference on Management Research, Manado.",
    type: "Conference",
    year: "2011"
  },
  {
    title: "Merek dan UKM",
    citation: "Widyastuti, D. A. and Wismiarsi, T. (2010). 4th PPM Conference on Management Research, Jakarta.",
    type: "Conference",
    year: "2010"
  },
  {
    title: "Ethnicity, Culture and Entrepreneurial Orientation: Example from Different Ethnics Family Firms in Indonesia",
    citation: "Wismiarsi, T. and Shihab, M. S. (2010). 6th Workshop on Family Firms Management Research, Barcelona, Spain.",
    type: "Conference",
    year: "2010"
  },
  {
    title: "Marketing Strategies and Market Orientation for Sustainability of Small Businesses in Indonesia",
    citation: "Shihab, M. S., Wismiarsi, T., and Yoto, Y. (2009). 1st Indonesian Conference on Innovation, Entrepreneurship and Small Business, Bandung.",
    type: "Conference",
    year: "2009"
  },
  {
    title: "Entrepreneurship Education in Higher Education Institution: A Conceptual Paper",
    citation: "Sriyanto, R., Wismiarsi, T. and Sine, K. (2009). 1st Indonesian Conference on Innovation, Entrepreneurship and Small Business, Bandung.",
    type: "Conference",
    year: "2009"
  },
  {
    title: "Entrepreneurial Marketing: Networking and Internationalisation of Small Firms",
    citation: "Adidarma, W., Wismiarsi, T., Hatta, H. (2009). 1st Indonesian Conference on Innovation, Entrepreneurship and Small Business, Bandung.",
    type: "Conference",
    year: "2009"
  },
  {
    title: "Students Behavior in Choosing Higher Education Institution: A Model of Higher Education Students-Choice in Indonesia",
    citation: "Sriyanto, R. and Wismiarsi, T. (2008). 3rd ICBMR and 14th Euro-Asia Conference, Bali.",
    type: "Conference",
    year: "2008"
  },
  {
    title: "National, Corporate Culture and Entrepreneurial Orientation",
    citation: "Shihab, M. S., Wismiarsi, T. and Sine, K. (2009). 3rd ICBMR and 14th Euro-Asia Conference, Bali.",
    type: "Conference",
    year: "2009"
  },
  {
    title: "Trust and Commitment to Build Customer Loyalty: An Example from Indonesian Seaweed Industry",
    citation: "Wismiarsi, T., Widyastuti, D.A., and Hatta, H. (2008). 3rd ICBMR and 14th Euro-Asia Conference, Bali.",
    type: "Conference",
    year: "2008"
  },
  {
    title: "Export Barriers, Marketing Strategy, and Export Performance of Indonesian SMEs",
    citation: "Adidarma, W., and Wismiarsi, T. (2008). 3rd ICBMR and 14th Euro-Asia Conference, Bali.",
    type: "Conference",
    year: "2008"
  },
  {
    title: "CSR and the Prospect of Environmental CSR",
    citation: "Wismiarsi, T. (2006). Environmental CSR Workshop, Bogor.",
    type: "Conference",
    year: "2006"
  },
  {
    title: "CSR: Motivation and Implementation, Case Study from Indonesia",
    citation: "Wismiarsi, T. (2006). 1st International Conference on Business and Management Research, Bali.",
    type: "Conference",
    year: "2006"
  },
  {
    title: "Internationalization of Total Logistic Providers: A Challenge for the Stage Theories – Indonesian Case Studies",
    citation: "Zhoriva, E. and Wismiarsi, T. (2004). National Conference on Business Management Business Practice, Bandung.",
    type: "Conference",
    year: "2004"
  },
  {
    title: "The Relationship between Firm Characteristics, International Market Orientation, Learning Orientation and the Degree of Internationalization",
    citation: "Wismiarsi, T. (2004). 17th Doctoral Colloquium and 33rd European Marketing Academy (EMAC), Murcia, Spain.",
    type: "Conference",
    year: "2004"
  },
  {
    title: "Research Results: The Relationship between International Market Orientation, Learning Orientation and the Degree of Internationalization",
    citation: "Wismiarsi, T. (2003). 9th Doctoral Colloquium, Monash University, Melbourne.",
    type: "Conference",
    year: "2003"
  },
  {
    title: "International Market Orientation, Learning Orientation and the Degree of Internationalization",
    citation: "Wismiarsi, T. (2002). 8th Doctoral Colloquium, Monash University, Melbourne.",
    type: "Conference",
    year: "2002"
  }
];

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  const [filterYear, setFilterYear] = useState('All Years');
  const [showAllJournals, setShowAllJournals] = useState(false);
  const [showAllConferences, setShowAllConferences] = useState(false);

  // Generate Year options from Publications (most comprehensive source)
  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort().reverse();

  // Filter Publications (Journals & Conferences)
  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesYear = filterYear === 'All Years' || pub.year === filterYear;
    return matchesYear;
  });

  // Separate journals and conferences from the filtered list
  const journals = filteredPublications.filter(p => p.type === 'Journal').sort((a, b) => Number(b.year) - Number(a.year));
  const conferences = filteredPublications.filter(p => p.type === 'Conference').sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div className="py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-2 mb-4">
        <button
            onClick={() => onNavigate('home')}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-sm">home</span> Home
        </button>
        <span className="text-[#4c739a] text-sm">/</span>
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Research & Publications</span>
      </div>

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-tight mb-2">Research & Publications</h1>
        <p className="text-[#4c739a] dark:text-slate-400 text-lg">A comprehensive record of academic contributions and research dissemination across global journals and conferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar (Left) */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-6">
          {/* Metrics Card */}
          <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800">
            <h3 className="text-[#0d141b] dark:text-white font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span> Research Impact
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-slate-900">
                <span className="text-sm font-medium text-[#4c739a]">Citations</span>
                <span className="text-xl font-bold text-primary">270</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-slate-900">
                <span className="text-sm font-medium text-[#4c739a]">h-index</span>
                <span className="text-xl font-bold text-primary">7</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-slate-900">
                <span className="text-sm font-medium text-[#4c739a]">i10-index</span>
                <span className="text-xl font-bold text-primary">6</span>
              </div>
            </div>
            <a 
              href="https://scholar.google.com/citations?user=63I_lPQAAAAJ&hl=en&oi=sra"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 h-10 rounded-lg bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">school</span>
              Google Scholar
            </a>
          </div>
          {/* Research Interests */}
          <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800">
            <h3 className="text-[#0d141b] dark:text-white font-bold mb-4">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">SMEs</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">Marketing</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">International Business</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">Gen Z Behavior</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">Consumer Culture</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">Entrepreneurship</span>
            </div>
          </div>
        </aside>

        {/* Main Content (Right) */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8">
          {/* Featured Research Highlight */}
          <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 flex flex-col justify-center">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Featured Publication</p>
                <h2 className="text-[#0d141b] dark:text-white text-2xl font-bold mb-3 leading-tight">Hambatan Ekspor UKM Indonesia: Analisis Strategis & Rekomendasi</h2>
                <p className="text-[#4c739a] dark:text-slate-400 text-base mb-6">Published by Kompas, Jakarta, 2008. A comprehensive study on structural and psychological barriers facing Indonesian small enterprises in the global market.</p>
                <div className="flex gap-4">
                  <a 
                    href="https://library.ipmi.ac.id/index.php?p=show_detail&id=7002&keywords="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all"
                  >
                    <span className="material-symbols-outlined text-base">visibility</span> View Details
                  </a>
                </div>
              </div>
              <div 
                className="w-full md:w-1/5 min-h-[240px] bg-center bg-cover" 
                style={{ backgroundImage: 'url("https://i.ibb.co.com/TDRy0HTN/Whats-App-Image-2026-02-08-at-18-10-36.jpg")' }}
                role="img"
                aria-label="Cover of the book Hambatan Ekspor UKM Indonesia"
              ></div>
            </div>
          </div>

          {/* Filters - Moved Here */}
          <div className="flex justify-end items-center bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800 sticky top-20 z-40">
            <div className="flex gap-2 w-full md:w-auto">
                <select 
                className="h-12 rounded-lg bg-background-light dark:bg-slate-900 border-none text-sm focus:ring-2 focus:ring-primary min-w-[120px]"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                >
                <option>All Years</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
                </select>
            </div>
          </div>

          {/* Journals Section - Moved Up */}
          <section className="scroll-mt-20">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xl font-bold flex items-center gap-2 text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-primary">article</span> Journals
              </h3>
              <span className="text-sm text-[#4c739a]">{journals.length} Items</span>
            </div>
            
            <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800 divide-y divide-[#e7edf3] dark:divide-slate-800">
              {journals.slice(0, showAllJournals ? undefined : 5).map((pub, idx) => (
                <div key={idx} className="p-6 hover:bg-primary/5 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-lg font-bold text-[#0d141b] dark:text-white leading-snug">{pub.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase shrink-0 bg-primary/10 text-primary">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#4c739a] dark:text-slate-400 mb-3 italic">{pub.citation}</p>
                  {pub.link && (
                    <div className="flex items-center gap-4">
                      <a 
                        className="flex items-center gap-1 text-primary text-xs font-bold hover:underline" 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-sm">link</span> View Publication
                      </a>
                    </div>
                  )}
                </div>
              ))}
              
              {journals.length === 0 && (
                <div className="p-8 text-center text-slate-500">
                  No journals found matching your criteria.
                </div>
              )}
            </div>
            {journals.length > 5 && (
              <button 
                onClick={() => setShowAllJournals(!showAllJournals)}
                className="mt-4 w-full py-3 text-sm font-bold text-[#4c739a] border border-dashed border-[#4c739a]/30 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {showAllJournals ? "View Less Journals" : `View All ${journals.length} Journals`}
              </button>
            )}
          </section>

          {/* Conferences Section - Moved Up */}
          <section className="scroll-mt-20">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xl font-bold flex items-center gap-2 text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-amber-500">podium</span> Conferences
              </h3>
              <span className="text-sm text-[#4c739a]">{conferences.length} Items</span>
            </div>
            
            <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800 divide-y divide-[#e7edf3] dark:divide-slate-800">
              {conferences.slice(0, showAllConferences ? undefined : 5).map((pub, idx) => (
                <div key={idx} className="p-6 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-lg font-bold text-[#0d141b] dark:text-white leading-snug">{pub.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase shrink-0 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#4c739a] dark:text-slate-400 mb-3 italic">{pub.citation}</p>
                  {pub.link && (
                    <div className="flex items-center gap-4">
                      <a 
                        className="flex items-center gap-1 text-primary text-xs font-bold hover:underline" 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-sm">link</span> View Details
                      </a>
                    </div>
                  )}
                </div>
              ))}
              
              {conferences.length === 0 && (
                <div className="p-8 text-center text-slate-500">
                  No conferences found matching your criteria.
                </div>
              )}
            </div>
            {conferences.length > 5 && (
              <button 
                onClick={() => setShowAllConferences(!showAllConferences)}
                className="mt-4 w-full py-3 text-sm font-bold text-[#4c739a] border border-dashed border-[#4c739a]/30 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {showAllConferences ? "View Less Conferences" : `View All ${conferences.length} Conferences`}
              </button>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};