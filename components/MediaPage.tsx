import React from 'react';

interface MediaPageProps {
  onNavigate: (page: string) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
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
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Media & Impact</span>
      </div>

      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Media Center
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Impact Beyond <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">The Classroom</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Highlighting contributions to public discourse, community empowerment initiatives, and expert commentary in national media and government publications.
            </p>
        </div>
        <div className="relative hidden md:block">
            {/* Decorative background element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform translate-y-8">
                    <span className="material-symbols-outlined text-4xl text-blue-600 mb-2">podium</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">15+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Speaking Engagements</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-4xl text-amber-500 mb-2">public</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">National</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Media Coverage</div>
                </div>
             </div>
        </div>
      </div>

      {/* Community Impact Case Study (Tokopedia) */}
      <section className="mb-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-green-100 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="material-symbols-outlined text-sm">storefront</span>
                    Digital Transformation Success
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    From Coastal Markets to <span className="text-green-600">Digital Commerce</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    During the COVID-19 pandemic, traditional fisherfolk communities faced unprecedented economic challenges. I led a dedicated mentorship program to transition the <strong>Damar Wulan Gebang</strong> fisherfolk group from offline-only sales to managing a fully functional e-commerce presence.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-200 dark:bg-green-900/50 flex items-center justify-center text-green-700 dark:text-green-400 shrink-0 font-bold text-xs">01</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Digital Literacy Training</h4>
                            <p className="text-xs text-slate-500">Comprehensive workshops on platform management and digital marketing basics.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-200 dark:bg-green-900/50 flex items-center justify-center text-green-700 dark:text-green-400 shrink-0 font-bold text-xs">02</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Store Launch</h4>
                            <p className="text-xs text-slate-500">Successful establishment of "Damar Wulan Gebang" on Tokopedia.</p>
                        </div>
                    </div>
                </div>
                <a 
                    href="https://www.tokopedia.com/damarwulangebang" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-600/20"
                >
                    Visit Their Tokopedia Store <span className="material-symbols-outlined">open_in_new</span>
                </a>
            </div>
            <div className="relative">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-lg mb-4 overflow-hidden relative">
                         <img 
                            src="https://i.ibb.co.com/FbY5Tnh0/8640df5e-5145-49c0-a401-e6e0bb6ca12c.png" 
                            alt="Damar Wulan Gebang Tokopedia Store" 
                            className="w-full h-full object-cover object-top"
                         />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Damar Wulan Gebang</h4>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <span className="material-symbols-outlined text-sm text-yellow-400 filled">star</span>
                                <span>Tokopedia Merchant</span>
                            </div>
                        </div>
                        <div className="font-bold text-green-600 text-sm">Tokopedia</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Merged Video Archive & Curriculum Section */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                Community Empowerment & Training Series
            </h2>
             <a 
                href="https://www.youtube.com/@kiprahalumnioz572"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-red-600 flex items-center gap-1 hover:underline"
            >
                View Channel <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Ministry Video */}
             <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                <div className="relative aspect-video bg-black">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YWGd9SRGdTo?start=26" 
                        title="KKP Ministry Sharing"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase mb-2">
                        <span className="material-symbols-outlined text-sm">mic</span> Guest Speaker
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        Sharing Entrepreneurship Experience
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                        Berbagi Pengalaman Kewirausahaan bersama Kementerian Kelautan dan Perikanan.
                    </p>
                </div>
             </div>

             {/* Training Video (Remarks) */}
             <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                <div className="relative aspect-video bg-black">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/m6CgID8EMFI" 
                        title="Training Session"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase mb-2">
                        <span className="material-symbols-outlined text-sm">school</span> Workshop Series
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        Australian Embassy & KUKM Remarks
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                        Sambutan Perwakilan Kedubes Australia dan Program bagi Nelayan dan Usaha Mikro.
                    </p>
                </div>
             </div>

             {/* Training Material 1 */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                 <div className="relative aspect-video bg-slate-100">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/QgZuT1JMMm4" 
                        title="Training Material 1"
                        allowFullScreen
                    ></iframe>
                 </div>
                 <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-600 uppercase mb-2">
                        <span className="material-symbols-outlined text-sm">library_books</span> Module 01
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">Digital Marketing Fundamentals</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Materi pelatihan dasar pemasaran digital untuk UMKM.</p>
                 </div>
            </div>

            {/* Training Material 2 */}
             <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                 <div className="relative aspect-video bg-slate-100">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/g1PqfgtHT1E" 
                        title="Training Material 2"
                        allowFullScreen
                    ></iframe>
                 </div>
                 <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-600 uppercase mb-2">
                        <span className="material-symbols-outlined text-sm">library_books</span> Module 02
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">Product Branding Strategy</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Strategi branding dan pengemasan produk untuk meningkatkan nilai jual.</p>
                 </div>
            </div>

            {/* Training Material 3 */}
             <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                 <div className="relative aspect-video bg-slate-100">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dJ8OcX-C6uY" 
                        title="Training Material 3"
                        allowFullScreen
                    ></iframe>
                 </div>
                 <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-600 uppercase mb-2">
                        <span className="material-symbols-outlined text-sm">library_books</span> Module 03
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">E-Commerce Operations</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Panduan operasional dan manajemen toko online di marketplace.</p>
                 </div>
            </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                In The News
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* News Video 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-video bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/G9qRvisdqDE"
                        title="Empowering Women Fisherfolks"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-3 mb-3 text-xs font-medium text-slate-500">
                        <span className="text-red-600 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">play_circle</span>Kominfo Newsroom</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>News Report</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                        Empowering Women Fisherfolks: Blue Swimming Crab Processing
                    </h3>
                     <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        Initiative to empower women in coastal communities through value-added processing skills.
                    </p>
                </div>
            </div>

            {/* News Video 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                 <div className="relative aspect-video bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dpCxfvtD1NY"
                        title="RCTV Coverage"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs font-medium text-slate-500">
                        <span className="text-red-600 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">live_tv</span>WEWARA RCTV CIREBON</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>News Report</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                        Australia Global Alumni Beri Pelatihan Warga Pesisir
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        Coverage by RCTV on the entrepreneurship training program for coastal residents facilitated by Australia Global Alumni, led by Dr. Tri Wismiarsi.
                    </p>
                </div>
            </div>

            {/* Article 1 (Restored) */}
            <article className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: 'url("https://mediacenter.slemankab.go.id/wp-content/uploads/2025/12/pemasaran-berbasis-AI-500x280.jpg")' }}
                    ></div>
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                        Technology & SMEs
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 text-xs font-medium text-slate-500">
                        <span className="text-blue-600 font-bold">SLEMAN MEDIA CENTER</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>Dec 22, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                        Digital Transformation: AI Marketing Strategies for Local SMEs
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        Highlighting the Business Incubation Program that equips young UMKM entrepreneurs with cutting-edge AI marketing skills.
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <a href="https://mediacenter.slemankab.go.id/2025/12/22/dorong-daya-saing-umkm-pemuda-karang-taruna-depok-sleman-bekali-diri-dengan-strategi-pemasaran-berbasis-ai/?print=print" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
                            Read Full Article <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <span className="material-symbols-outlined text-slate-300">newspaper</span>
                    </div>
                </div>
            </article>

            {/* Article 2 (Restored) */}
            <article className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: 'url("https://img.antaranews.com/cache/1200x800/2018/07/PSX_20180720_231741.jpg.webp")' }}
                    ></div>
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                        Community Empowerment
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 text-xs font-medium text-slate-500">
                        <span className="text-red-600 font-bold">ANTARANEWS</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>July 20, 2018</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-red-600 transition-colors">
                        Australia Global Alumni Training Empowers Academic Leaders
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        A focused entrepreneurship training program for women in the dairy village of Sidem, sharing skills to market value-added products.
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <a href="https://jatim.antaranews.com/berita/259770/australia-global-alumni-gelar-pelatihan-kewirausahaan-di-tulungagung" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
                            Read Full Article <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <span className="material-symbols-outlined text-slate-300">newspaper</span>
                    </div>
                </div>
            </article>
        </div>
      </section>

      {/* Logos / Trusted By */}
      <section className="py-12 border-t border-slate-100 dark:border-slate-800">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Institutions & Media Partners</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">school</span> Australia Awards
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">campaign</span> Sleman Kab
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">feed</span> Antara
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">account_balance</span> Sampoerna University
            </div>
        </div>
      </section>
    </div>
  );
};