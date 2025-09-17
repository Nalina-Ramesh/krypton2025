import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AnimationPage } from './components/pages/AnimationPage';
import { LabsPage } from './components/pages/LabsPage';
import { GamesPage } from './components/pages/GamesPage';
import { ChatbotPage } from './components/pages/ChatbotPage';
import { AboutPage } from './components/pages/AboutPage';
import { LoginPage } from './components/pages/LoginPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { PhysicsLabPage } from './components/pages/PhysicsLabPage';
import { ChemistryLabPage } from './components/pages/ChemistryLabPage';
import { BiologyLabPage } from './components/pages/BiologyLabPage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userType, setUserType] = useState<'student' | 'teacher' | null>(null);

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
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation - only show if not on login page */}
        <Navigation
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleToggleDarkMode}
          userType={userType}
        />

        {/* Main Content */}
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/animation" element={<AnimationPage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage onUserTypeSelect={handleUserTypeSelect} />} />
            <Route path="/dashboard" element={userType ? <DashboardPage userType={userType} /> : <LoginPage onUserTypeSelect={handleUserTypeSelect} />} />
            <Route path="/physics" element={<PhysicsLabPage />} />
            <Route path="/chemistry" element={<ChemistryLabPage />} />
            <Route path="/biology" element={<BiologyLabPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}