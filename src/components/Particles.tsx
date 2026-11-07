import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a list of particles on mount
    const count = 60;
    const items: Particle[] = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 2 + 1, // 1px to 3px
        delay: Math.random() * 5, // 0s to 5s delay
        duration: Math.random() * 5 + 4, // 4s to 9s duration
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full opacity-60 animate-pulse-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: p.size > 2 ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none',
          }}
        />
      ))}

      {/* Ambient colorful glow spheres */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
