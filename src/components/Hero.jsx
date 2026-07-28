import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Copy, Check, Download } from 'lucide-react';

export default function Hero({ onCopyEmail, copiedEmail }) {
  // Typewriter effect state
  const phrases = [
    'premium web applications.',
    'high-performance UIs.',
    'robust backend APIs.',
    'scalable full-stack solutions.'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && text.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 100);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length - 1));
      }, 50);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justify: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="bg-grid-pattern"
    >
      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>

        <div style={{ maxWidth: '900px' }}>
          {/* Glowing Badge */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div className="badge badge-active" style={{ padding: '0.5rem 1.1rem', fontSize: '0.9rem' }}>
              <span className="status-dot"></span>
              <span>Available for Opportunities & Freelance</span>
            </div>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: 'var(--text-main)'
            }}
          >
            <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.85em', display: 'block', marginBottom: '0.2rem' }}>
              Hi, I'm
            </span>
            <span className="accent-text">{personalInfo.name}</span>
          </h1>

          {/* Subtitle with Dynamic Typewriter Effect */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--text-main)',
              marginBottom: '1.5rem',
              lineHeight: 1.3,
              minHeight: '3rem'
            }}
          >
            <span>I design & build </span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
              {text}
            </span>
            <span
              className="caret"
              style={{
                display: 'inline-block',
                width: '3px',
                height: '0.9em',
                backgroundColor: 'var(--accent-primary)',
                marginLeft: '3px',
                verticalAlign: 'middle',
                animation: 'blink 1s infinite'
              }}
            />
          </h2>

          {/* Hero Description */}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              maxWidth: '740px',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}
          >
            A software engineer specializing in building premium web applications, high-performance user interfaces, and robust backend architectures. Focused on turning complex code into user-centric experiences.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '4rem'
            }}
          >
            <a href="#projects" className="btn-primary" id="view-projects-btn">
              View Projects <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary" id="contact-me-btn">
              Get In Touch
            </a>

            <a
              href="/vian-pandya_resume.pdf"
              download="vian-pandya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="download-cv-btn"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => onCopyEmail(personalInfo.email)}
              className="btn-secondary"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check size={18} color="var(--accent-teal)" /> : <Copy size={18} />}
              <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
            </button>
          </div>

          {/* Interactive Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    marginBottom: '0.25rem'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Mouse Scroll Indicator */}
      {/* <div 
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-dim)',
          textDecoration: 'none',
          fontSize: '0.8rem'
        }}
      >
        <a href="#about" aria-label="Scroll down to About section" style={{ color: 'inherit' }}>
          <div 
            style={{
              width: '26px',
              height: '42px',
              borderRadius: '15px',
              border: '2px solid var(--border-bright)',
              display: 'flex',
              justify: 'center',
              paddingTop: '6px'
            }}
          >
            <div 
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                backgroundColor: 'var(--accent-primary)',
                animation: 'scrollWheel 1.8s infinite ease-in-out'
              }}
            />
          </div>
        </a>
      </div> */}

      {/* Inline Caret & Wheel Keyframe Styles */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollWheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
