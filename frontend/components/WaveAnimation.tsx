import React from 'react';

interface WaveAnimationProps {
  className?: string;
  color?: string;
}

export function WaveAnimation({ className = '', color = '#35b7ff' }: WaveAnimationProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 */}
        <path
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          className="animate-wave-slow"
        />
        
        {/* Wave 2 */}
        <path
          d="M0,80 C300,40 600,120 900,80 C1050,50 1150,110 1200,80 L1200,120 L0,120 Z"
          fill={color}
          fillOpacity="0.1"
          className="animate-wave-medium"
        />
        
        {/* Wave 3 */}
        <path
          d="M0,100 C300,60 600,140 900,100 C1050,70 1150,130 1200,100 L1200,120 L0,120 Z"
          fill={color}
          fillOpacity="0.05"
          className="animate-wave-fast"
        />
      </svg>
    </div>
  );
}
