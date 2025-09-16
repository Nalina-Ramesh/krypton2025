import React from 'react';

interface KryptonLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export function KryptonLogo({ size = 'md', showText = true, className = '' }: KryptonLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Atomic-inspired logo with orbital rings */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer orbital ring */}
          <circle 
            cx="24" 
            cy="24" 
            r="20" 
            stroke="url(#gradient1)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-spin"
            style={{ animationDuration: '20s', animationDirection: 'normal' }}
          />
          
          {/* Inner orbital ring */}
          <circle 
            cx="24" 
            cy="24" 
            r="14" 
            stroke="url(#gradient2)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-spin"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          />
          
          {/* Central nucleus with K */}
          <circle 
            cx="24" 
            cy="24" 
            r="8" 
            fill="url(#gradientCore)"
            className="drop-shadow-lg"
          />
          
          {/* K letter in center */}
          <text 
            x="24" 
            y="28" 
            textAnchor="middle" 
            className="fill-white font-bold text-sm"
            style={{ fontSize: '12px' }}
          >
            K
          </text>
          
          {/* Electron dots */}
          <circle cx="44" cy="24" r="2" fill="#87CEEB" className="animate-pulse" />
          <circle cx="4" cy="24" r="2" fill="#98FF98" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="24" cy="4" r="2" fill="#B0E0E6" className="animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#5F9EA0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#98FF98" />
              <stop offset="100%" stopColor="#9FE2BF" />
            </linearGradient>
            <linearGradient id="gradientCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5F9EA0" />
              <stop offset="100%" stopColor="#4682B4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-high-contrast ${textSizeClasses[size]} leading-none`}>
            Krypton
          </span>
          <span className="text-xs text-muted-foreground leading-none mt-1">
            Learn Beyond Limits
          </span>
        </div>
      )}
    </div>
  );
}