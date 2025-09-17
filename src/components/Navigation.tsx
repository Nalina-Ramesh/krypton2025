import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { KryptonLogo } from './KryptonLogo';
import { 
  Home, 
  Box, 
  FlaskConical, 
  Gamepad2, 
  MessageCircle, 
  Users, 
  LogIn,
  LayoutDashboard,
  Settings,
  Moon,
  Sun
} from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  userType?: 'student' | 'teacher' | null;
}

export function Navigation({ 
  isDarkMode, 
  onToggleDarkMode,
  userType 
}: NavigationProps) {
  const navItems = [
    { id: '/', label: 'Home', icon: Home },
    { id: '/animation', label: '3D Animation', icon: Box },
    { id: '/labs', label: 'Virtual Labs', icon: FlaskConical },
    { id: '/games', label: 'Learning Games', icon: Gamepad2 },
    { id: '/chatbot', label: 'AI Assistant', icon: MessageCircle },
    { id: '/about', label: 'About Us', icon: Users },
  ];

  const authItems = [
    { id: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: '/login', label: 'Sign In', icon: LogIn },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="cursor-pointer gentle-transition gentle-hover">
            <KryptonLogo size="sm" />
          </Link>

          {/* Main Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link to={item.id} key={item.id} className="gentle-transition hover:bg-secondary/50 text-high-contrast">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gentle-transition justify-start"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="gentle-transition hover:bg-secondary/50"
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

          {/* Auth/Dashboard buttons */}
          {userType ? (
            <Link to="/dashboard">
              <Button
                variant="default"
                size="sm"
                className="gentle-transition gentle-hover"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                variant="default"
                size="sm"
                className="gentle-transition gentle-hover"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden gentle-transition hover:bg-secondary/50"
            onClick={() => {
              // Toggle mobile menu (implementation would go here)
            }}
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden border-t border-border/50 py-2">
        <div className="grid grid-cols-2 gap-2">
          {navItems.slice(0, 6).map((item) => {
            const Icon = item.icon;
            return (
              <Link to={item.id} key={item.id} className="gentle-transition hover:bg-secondary/50 text-high-contrast">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gentle-transition justify-start"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  </nav>
  );
}