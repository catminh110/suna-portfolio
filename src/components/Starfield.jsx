import React, { useMemo } from 'react';

const Starfield = () => {
  // Generate random stars once
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 120; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 1; // 1px to 3px
      const delay = Math.random() * 4; // animation delay
      const duration = Math.random() * 3 + 2; // 2s to 5s twinkling
      starArray.push({
        id: i,
        style: {
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        },
      });
    }
    return starArray;
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-space-dark">
      {/* Deep Space Background Glows (Nebulae) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[45%] h-[45%] rounded-full bg-indigo-950/15 blur-[140px] pointer-events-none" />

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle opacity-75"
            style={star.style}
          />
        ))}
      </div>

      {/* Subtle cosmic grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"
      />
    </div>
  );
};

export default Starfield;
