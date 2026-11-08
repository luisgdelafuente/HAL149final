import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { readCssColor } from '../utils/theme';
import { seededRandom } from '../utils/random';

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  phase: number;
  speed: number;
  accent: boolean;
}

/** Lightweight canvas starfield. Pauses off-screen and when the tab is hidden; static under reduced motion. */
export function Starfield({ className = '', density = 1 }: {className?: string;density?: number;}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const ink = readCssColor('text') || '230 238 248';
    const accent = readCssColor('accent') || '0 229 209';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rand = seededRandom(149);
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let inView = true;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const twinkle = reduced ? 1 : 0.65 + 0.35 * Math.sin(time * s.speed + s.phase);
        const y = reduced ? s.y : ((s.y - time * 0.0035 * s.r) % h + h) % h;
        ctx.fillStyle = `rgb(${s.accent ? accent : ink} / ${(s.a * twinkle).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(260, Math.round(w * h / 6500 * density));
      stars = Array.from({ length: count }, () => ({
        x: rand() * w,
        y: rand() * h,
        r: rand() * 1.1 + 0.25,
        a: rand() * 0.55 + 0.15,
        phase: rand() * Math.PI * 2,
        speed: rand() * 0.0016 + 0.0004,
        accent: rand() < 0.04
      }));
      draw(performance.now());
    };

    const tick = (time: number) => {
      draw(time);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf && !reduced && inView && !document.hidden) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();else
      stop();
    });
    io.observe(canvas);
    const onVisibility = () => document.hidden ? stop() : start();
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced, theme, density]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}