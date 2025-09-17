import React from 'react';

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#35b7ff]/20 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-20 w-6 h-6 border border-[#35b7ff]/30 rotate-45 animate-float-medium" />
      <div className="absolute bottom-40 left-20 w-8 h-1 bg-[#35b7ff]/25 animate-float-fast" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#35b7ff]/20 rounded-full animate-float-slow" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#35b7ff]/30 rounded-full animate-float-medium" />
      <div className="absolute top-1/3 right-1/3 w-5 h-5 border border-[#35b7ff]/20 rounded-full animate-float-fast" />
      
      {/* Floating code symbols */}
      <div className="absolute top-32 right-32 text-[#35b7ff]/20 text-2xl animate-float-slow select-none">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-32 left-32 text-[#35b7ff]/15 text-xl animate-float-medium select-none">
        { }
      </div>
      <div className="absolute top-1/2 right-1/4 text-[#35b7ff]/25 text-lg animate-float-fast select-none">
        0x
      </div>
    </div>
  );
}
