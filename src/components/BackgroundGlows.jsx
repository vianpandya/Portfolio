import React from 'react';

export default function BackgroundGlows() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.8
      }}
    >
      {/* Orb 1: Primary Accent Glow */}
      <div
        className="orb orb-1"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(80px)',
          top: '-10%',
          left: '-10%',
          opacity: 0.6,
          animation: 'driftOrb1 25s ease-in-out infinite alternate'
        }}
      />

      {/* Orb 2: Cyan/Teal Glow */}
      <div
        className="orb orb-2"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 70%)',
          filter: 'blur(90px)',
          bottom: '10%',
          right: '-10%',
          opacity: 0.5,
          animation: 'driftOrb2 30s ease-in-out infinite alternate'
        }}
      />

      {/* Orb 3: Rose/Amber Highlight */}
      <div
        className="orb orb-3"
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.08) 0%, rgba(244, 63, 94, 0) 70%)',
          filter: 'blur(70px)',
          top: '40%',
          left: '30%',
          opacity: 0.4,
          animation: 'driftOrb3 22s ease-in-out infinite alternate'
        }}
      />
    </div>
  );
}
