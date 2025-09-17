import React, { useEffect, useRef } from 'react';

interface VantaBackgroundProps {
  effect: 'net' | 'waves' | 'fog' | 'clouds';
  className?: string;
  children?: React.ReactNode;
}

export function VantaBackground({ effect, className = '', children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const loadVanta = async () => {
      // Load Three.js
      if (!(window as any).THREE) {
        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        document.head.appendChild(script1);
        
        await new Promise((resolve) => {
          script1.onload = resolve;
        });
      }

      // Load Vanta effect
      if (!(window as any).VANTA) {
        const script2 = document.createElement('script');
        
        switch (effect) {
          case 'net':
            script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
            break;
          case 'waves':
            script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
            break;
          case 'fog':
            script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js';
            break;
          case 'clouds':
            script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js';
            break;
        }
        
        document.head.appendChild(script2);
        
        await new Promise((resolve) => {
          script2.onload = resolve;
        });
      }

      // Initialize Vanta effect
      if (vantaRef.current && (window as any).VANTA) {
        const config = getVantaConfig(effect);
        vantaEffect.current = (window as any).VANTA[effect.toUpperCase()]({
          el: vantaRef.current,
          ...config
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [effect]);

  const getVantaConfig = (effectType: string) => {
    const baseConfig = {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
    };

    switch (effectType) {
      case 'net':
        return {
          ...baseConfig,
          color: 0x35b7ff,
          backgroundColor: 0x0A0B0E,
          points: 8.00,
          maxDistance: 20.00,
          spacing: 15.00,
        };
      case 'waves':
        return {
          ...baseConfig,
          color: 0x35b7ff,
          backgroundColor: 0x0A0B0E,
          waveHeight: 20.00,
          waveSpeed: 1.00,
          zoom: 0.65,
        };
      case 'fog':
        return {
          ...baseConfig,
          highlightColor: 0x35b7ff,
          midtoneColor: 0x1a1b23,
          lowlightColor: 0x0A0B0E,
          baseColor: 0x0A0B0E,
          blurFactor: 0.90,
          speed: 1.00,
          zoom: 1.00,
        };
      case 'clouds':
        return {
          ...baseConfig,
          cloudShadows: true,
          color: 0x35b7ff,
          backgroundColor: 0x0A0B0E,
          skyColor: 0x1a1b23,
          cloudColor: 0x35b7ff,
          speed: 0.60,
        };
      default:
        return baseConfig;
    }
  };

  return (
    <div ref={vantaRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}
