import React, { useRef, useState, useEffect } from 'react';

interface CubeProps {
  className?: string;
}

export function GlassCube({ className }: CubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotate(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cubeRef.current) return;

    const rect = cubeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientY - centerY) / 5;
    const y = (e.clientX - centerX) / 5;

    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cubeRef}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-64 h-64 mx-auto transform-gpu transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: `rotateX(${rotation.x + autoRotate * 0.3}deg) rotateY(${rotation.y + autoRotate}deg)`,
          filter: 'drop-shadow(0 0 20px rgba(53, 183, 255, 0.3))',
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg flex items-center justify-center translate-z-32 hover:border-[#35b7ff]/50 transition-colors">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#35b7ff] text-glow">2500+</div>
            <div className="text-sm text-white/80">TPS</div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg flex items-center justify-center rotate-y-180 translate-z-32 hover:border-[#35b7ff]/50 transition-colors">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#35b7ff] text-glow">ZERO</div>
            <div className="text-sm text-white/80">FEES</div>
          </div>
        </div>

        {/* Right Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg flex items-center justify-center rotate-y-90 translate-z-32 hover:border-[#35b7ff]/50 transition-colors">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#35b7ff] text-glow">L2</div>
            <div className="text-sm text-white/80">ROLLUP</div>
          </div>
        </div>

        {/* Left Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg flex items-center justify-center -rotate-y-90 translate-z-32 hover:border-[#35b7ff]/50 transition-colors">
          <div className="text-center">
            <div className="text-lg font-bold text-[#35b7ff] text-glow">ELITE</div>
            <div className="text-sm text-white/80">TECH</div>
          </div>
        </div>

        {/* Top Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg flex items-center justify-center rotate-x-90 translate-z-32 hover:border-[#35b7ff]/50 transition-colors">
          <div className="text-center">
            <div className="text-lg font-bold text-[#35b7ff] text-glow">FAST</div>
            <div className="text-sm text-white/80">SECURE</div>
          </div>
        </div>

        {/* Bottom Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg flex items-center justify-center -rotate-x-90 translate-z-32 hover:border-[#35b7ff]/50 transition-colors">
          <div className="text-center">
            <div className="text-lg font-bold text-[#35b7ff] text-glow">DEFI</div>
            <div className="text-sm text-white/80">READY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
