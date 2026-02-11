'use client';

import { useEffect, useRef } from 'react';

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star particles
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }> = [];

    // Create stars with varied colors - MANY MORE STARS
    const starColors = [
      'rgba(255, 255, 255,',      // White
      'rgba(200, 220, 255,',      // Blue-white
      'rgba(255, 240, 220,',      // Warm white
      'rgba(180, 200, 255,',      // Light blue
      'rgba(255, 255, 240,',      // Soft white
    ];

    // Create 500 stars for a dense starfield
    for (let i = 0; i < 500; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.7 + 0.3,
        fadeSpeed: Math.random() * 0.015 + 0.005,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Milky Way nebula effect - more subtle and realistic
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.35,
        0,
        canvas.width * 0.5,
        canvas.height * 0.35,
        canvas.width * 0.7
      );
      gradient.addColorStop(0, 'rgba(180, 150, 220, 0.12)');
      gradient.addColorStop(0.2, 'rgba(150, 180, 220, 0.08)');
      gradient.addColorStop(0.4, 'rgba(220, 180, 140, 0.06)');
      gradient.addColorStop(0.6, 'rgba(100, 130, 180, 0.04)');
      gradient.addColorStop(1, 'rgba(30, 40, 80, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle effect
        star.opacity += star.fadeSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) {
          star.fadeSpeed = -star.fadeSpeed;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color} ${star.opacity})`;
        ctx.fill();

        // Add glow for bigger stars
        if (star.radius > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color} ${star.opacity * 0.25})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(to bottom, #0d1b2a, #1b2838, #2d3e50, #1e2d3d)' 
      }}
    />
  );
}
