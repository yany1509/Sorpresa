'use client';

import { useEffect, useRef } from 'react';

export default function ConcertBackground() {
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

    // Spotlight particles
    const spotlights: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }> = [];

    // Sparkle particles (like stage lights)
    const sparkles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }> = [];

    // Create spotlights
    const spotlightColors = [
      'rgba(100, 150, 255,',  // Blue
      'rgba(255, 200, 100,',  // Orange/Gold
      'rgba(150, 100, 255,',  // Purple
      'rgba(255, 150, 150,',  // Pink
    ];

    for (let i = 0; i < 5; i++) {
      spotlights.push({
        x: Math.random() * canvas.width,
        y: 0,
        radius: 100 + Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.1,
        fadeSpeed: Math.random() * 0.01 + 0.005,
        color: spotlightColors[Math.floor(Math.random() * spotlightColors.length)]
      });
    }

    // Create sparkles
    for (let i = 0; i < 150; i++) {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.3 + 0.2,
        opacity: Math.random(),
        fadeSpeed: Math.random() * 0.02 + 0.01,
        color: spotlightColors[Math.floor(Math.random() * spotlightColors.length)]
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw spotlights
      spotlights.forEach(spotlight => {
        // Fade effect
        spotlight.opacity += spotlight.fadeSpeed;
        if (spotlight.opacity > 0.4 || spotlight.opacity < 0.1) {
          spotlight.fadeSpeed = -spotlight.fadeSpeed;
        }

        // Draw spotlight beam
        const gradient = ctx.createRadialGradient(
          spotlight.x,
          spotlight.y,
          0,
          spotlight.x,
          canvas.height * 0.6,
          spotlight.radius * 3
        );
        gradient.addColorStop(0, `${spotlight.color} ${spotlight.opacity})`);
        gradient.addColorStop(0.5, `${spotlight.color} ${spotlight.opacity * 0.3})`);
        gradient.addColorStop(1, `${spotlight.color} 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw sparkles
      sparkles.forEach(sparkle => {
        // Update position
        sparkle.x += sparkle.vx;
        sparkle.y += sparkle.vy;

        // Reset if out of bounds
        if (sparkle.y > canvas.height) {
          sparkle.y = 0;
          sparkle.x = Math.random() * canvas.width;
        }
        if (sparkle.x < 0) sparkle.x = canvas.width;
        if (sparkle.x > canvas.width) sparkle.x = 0;

        // Twinkle effect
        sparkle.opacity += sparkle.fadeSpeed;
        if (sparkle.opacity > 1 || sparkle.opacity < 0.2) {
          sparkle.fadeSpeed = -sparkle.fadeSpeed;
        }

        // Draw sparkle
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${sparkle.color} ${sparkle.opacity})`;
        ctx.fill();

        // Add glow
        if (sparkle.radius > 1.5) {
          ctx.beginPath();
          ctx.arc(sparkle.x, sparkle.y, sparkle.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${sparkle.color} ${sparkle.opacity * 0.3})`;
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
        background: 'linear-gradient(to bottom, #0d1b2a 0%, #1a2540 15%, #1e2a45 30%, #1a1a2e 50%, #16213e 70%, #0f1624 100%)' 
      }}
    />
  );
}
