import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0B0E] flex items-center justify-center">
      <div className="text-center">
        {/* Animated Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-[#35b7ff]/30 rounded animate-pulse glow-blue"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-12 h-12 bg-[#35b7ff] rounded-lg flex items-center justify-center glow-blue animate-pulse">
            <span className="text-black font-bold text-xl">P</span>
          </div>
          <span className="text-3xl font-bold text-glow">Paxeer</span>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#35b7ff] transition-all duration-300 ease-out glow-blue"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <div className="mt-4 text-white/60 text-sm">
          Loading {progress}%
        </div>
      </div>
    </div>
  );
}
