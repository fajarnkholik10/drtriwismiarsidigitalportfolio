import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { MediaPage } from './components/MediaPage';
import { ResearchPage } from './components/ResearchPage';
import { StudentFeedback } from './components/StudentFeedback';
import { CertificationsPage } from './components/CertificationsPage';
import { Philosophy } from './components/Philosophy';
import { GrantsPage } from './components/GrantsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="max-w-[1200px] mx-auto px-6 pb-20 w-full flex-grow">
        {currentPage === 'home' ? (
          <HomePage onNavigate={setCurrentPage} />
        ) : currentPage === 'philosophy' ? (
          <Philosophy onNavigate={setCurrentPage} />
        ) : currentPage === 'media' ? (
          <MediaPage onNavigate={setCurrentPage} />
        ) : currentPage === 'feedback' ? (
          <StudentFeedback onNavigate={setCurrentPage} />
        ) : currentPage === 'certifications' ? (
          <CertificationsPage onNavigate={setCurrentPage} />
        ) : currentPage === 'grants' ? (
          <GrantsPage onNavigate={setCurrentPage} />
        ) : (
          <ResearchPage onNavigate={setCurrentPage} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;