import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;
    let animationFrameId = null;
    let stars = [];

    const createStars = (width, height) => {
      const isSmallScreen = width < 768;
      const count = isSmallScreen ? 50 : 120;
      const colors = ['#ffffff', '#e9d5ff', '#a5f3fc', '#f5d0fe'];

      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.5,
        baseAlpha: Math.random() * 0.55 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.006,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = createStars(width, height);
    };

    const drawStars = (animate) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (animate) {
          star.phase += star.speed;
        }
        const twinkleOffset = animate ? Math.sin(star.phase) * 0.25 : 0;
        const alpha = Math.max(0.15, Math.min(1, star.baseAlpha + twinkleOffset));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const renderLoop = () => {
      if (document.hidden || prefersReducedMotion) {
        animationFrameId = null;
        return;
      }
      drawStars(true);
      animationFrameId = window.requestAnimationFrame(renderLoop);
    };

    const startOrStopAnimation = () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      if (document.hidden) {
        return;
      }

      if (prefersReducedMotion) {
        drawStars(false);
      } else {
        animationFrameId = window.requestAnimationFrame(renderLoop);
      }
    };

    const handleResize = () => {
      setCanvasSize();
      if (prefersReducedMotion || document.hidden) {
        drawStars(false);
      }
    };

    const handleVisibilityChange = () => {
      startOrStopAnimation();
    };

    const handleMotionChange = (event) => {
      prefersReducedMotion = event.matches;
      startOrStopAnimation();
    };

    setCanvasSize();
    startOrStopAnimation();

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-space-dark">
      {/* Deep Space Background Glows (Nebulae) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[45%] h-[45%] rounded-full bg-indigo-950/15 blur-[140px] pointer-events-none" />

      {/* Optimized Canvas Starfield */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle cosmic grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"
      />
    </div>
  );
};

export default Starfield;
