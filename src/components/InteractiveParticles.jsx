import React, { useEffect, useRef } from 'react';

export default function InteractiveParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    // Get dynamic accent color from computed style
    let accentColor = '#6366f1';
    const updateAccentColor = () => {
      const computed = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim();
      if (computed) {
        accentColor = computed;
      }
    };

    updateAccentColor();

    // Observe theme changes on documentElement
    const observer = new MutationObserver(() => {
      updateAccentColor();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 1;
        this.alpha = Math.random() * 0.5 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce/Wrap boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Subtle mouse pull
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.2;
            this.y += (dy / dist) * force * 0.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    const initParticles = () => {
      const area = canvas.width * canvas.height;
      const density = Math.floor(area / 12000); // Dynamic count based on size
      particles = [];
      const maxParticles = Math.min(density, 120); // Cap it for performance
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    // Re-initialize particles on major size changes to keep density perfect
    let resizeTimeout;
    const handleResizeDebounce = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 200);
    };
    window.addEventListener('resize', handleResizeDebounce);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const connect = () => {
      ctx.globalAlpha = 1.0;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = dx * dx + dy * dy; // squared distance

          // Connection range (e.g. 100px)
          const connectionLimit = 110 * 110; 
          if (dist < connectionLimit) {
            const distance = Math.sqrt(dist);
            const alpha = (1 - distance / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[a].x - mouse.x;
          const dy = particles[a].y - mouse.y;
          const dist = dx * dx + dy * dy;
          const mouseLimit = mouse.radius * mouse.radius;
          if (dist < mouseLimit) {
            const distance = Math.sqrt(dist);
            const alpha = (1 - distance / mouse.radius) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResizeDebounce);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.65
      }}
    />
  );
}
