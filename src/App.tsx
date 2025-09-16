import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AnimationPage } from './components/pages/AnimationPage';
import { LabsPage } from './components/pages/LabsPage';
import { GamesPage } from './components/pages/GamesPage';
import { ChatbotPage } from './components/pages/ChatbotPage';
import { AboutPage } from './components/pages/AboutPage';
import { LoginPage } from './components/pages/LoginPage';
import { DashboardPage } from './components/pages/DashboardPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userType, setUserType] = useState<'student' | 'teacher' | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleUserTypeSelect = (type: 'student' | 'teacher') => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'animation':
        return <AnimationPage />;
      case 'labs':
        return <LabsPage />;
      case 'games':
        return <GamesPage />;
      case 'chatbot':
        return <ChatbotPage />;
      case 'about':
        return <AboutPage />;
      case 'login':
        return <LoginPage onUserTypeSelect={handleUserTypeSelect} />;
      case 'dashboard':
        return userType ? <DashboardPage userType={userType} /> : <LoginPage onUserTypeSelect={handleUserTypeSelect} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - only show if not on login page */}
      {currentPage !== 'login' && (
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleToggleDarkMode}
          userType={userType}
        />
      )}
      
      {/* Main Content */}
      <main className={currentPage === 'login' ? '' : 'pt-0'}>
        {renderPage()}
      </main>
    </div>
  );
}