import React, { useRef, useState } from 'react';

export default function SpotlightCard({ children, className = '', style = {}, onClick, ...props }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`glass-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Spotlight Hover Glow Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, var(--accent-glow) 0%, transparent 80%)`,
          opacity: isHovered ? 0.75 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: 'inherit'
        }}
      />
      
      {/* Spotlight Border Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1px',
          background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, var(--accent-light) 0%, transparent 60%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: isHovered ? 0.9 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {children}
    </div>
  );
}
