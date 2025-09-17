import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface ChartSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: ChartSegment[];
  size?: number;
}

export function DonutChart({ segments, size = 300 }: DonutChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedSegments, setAnimatedSegments] = useState(segments.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const timers = segments.map((_, index) => 
        setTimeout(() => {
          setAnimatedSegments(prev => {
            const newValues = [...prev];
            newValues[index] = segments[index].value;
            return newValues;
          });
        }, index * 200)
      );

      return () => timers.forEach(clearTimeout);
    }
  }, [isInView, segments]);

  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  let cumulativePercentage = 0;

  const radius = (size - 40) / 2;
  const strokeWidth = 40;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={normalizedRadius}
          fill="transparent"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        {segments.map((segment, index) => {
          const percentage = animatedSegments[index] / total;
          const strokeDasharray = `${percentage * circumference} ${circumference}`;
          const strokeDashoffset = -cumulativePercentage * circumference;
          
          const prevCumulative = cumulativePercentage;
          cumulativePercentage += percentage;

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={normalizedRadius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out hover:brightness-110"
              style={{
                transitionDelay: `${index * 200}ms`,
                filter: 'drop-shadow(0 0 8px rgba(53, 183, 255, 0.3))',
              }}
            />
          );
        })}
      </svg>
      
      <div className="mt-8 space-y-3">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <div 
              className="w-4 h-4 rounded-full shadow-lg"
              style={{ 
                backgroundColor: segment.color,
                boxShadow: `0 0 10px ${segment.color}40`
              }}
            />
            <span className="text-white/80">{segment.label}</span>
            <span className="text-white font-medium">{segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
