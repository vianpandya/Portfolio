import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('indigo');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Intro Loader States
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Dynamic larger numeric jumps
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => setLoading(false), 400); // match fade transition duration
          return 100;
        }
        // Larger jumps (+7 to +18 per tick)
        const next = prev + Math.floor(Math.random() * 12) + 7;
        return next > 100 ? 100 : next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    const cleanUrlHash = () => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };
    cleanUrlHash();
    window.addEventListener('hashchange', cleanUrlHash);
    return () => window.removeEventListener('hashchange', cleanUrlHash);
  }, []);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Intro Loader Screen */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#090b10', // matches var(--bg-dark)
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-main)',
            opacity: fadeOut ? 0 : 1,
            transform: fadeOut ? 'scale(1.02)' : 'scale(1)',
            transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
            pointerEvents: fadeOut ? 'none' : 'all'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: '300px', width: '100%' }}>
            {/* Custom Logo/Monogram with Pulsing Accent Glow */}
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.25rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '76px',
                height: '76px',
                borderRadius: '1.1rem',
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid var(--border-bright)',
                boxShadow: '0 0 25px var(--accent-glow)',
                animation: 'pulseLogo 2s ease-in-out infinite'
              }}
            >
              <span style={{ color: 'var(--accent-light)' }}>V</span>
              <span style={{ color: 'var(--text-main)' }}>P</span>
            </div>

            {/* Status Information */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Initializing Portfolio
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
                {progress}%
              </div>
            </div>

            {/* Progress Bar Container */}
            <div
              style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '999px',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Progress Fill */}
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-light) 100%)',
                  boxShadow: '0 0 10px var(--accent-primary)',
                  transition: 'width 0.1s ease-out',
                  borderRadius: '999px'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        activeTheme={theme}
        setTheme={setTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} copiedEmail={copiedEmail} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onCopyEmail={handleCopyEmail} copiedEmail={copiedEmail} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
        setTheme={setTheme}
      />

      {/* Toast Floating Notification */}
      {copiedEmail && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 200,
            background: 'var(--bg-card)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--accent-teal)',
            color: 'var(--text-main)',
            padding: '0.85rem 1.4rem',
            borderRadius: '0.75rem',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6), 0 0 20px rgba(16,185,129,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{ padding: '0.35rem', borderRadius: '50%', background: 'rgba(16,185,129,0.2)' }}>
            <Check size={16} color="var(--accent-teal)" />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Copied to Clipboard!</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>vianpandya66@gmail.com</div>
          </div>
        </div>
      )}

    </div>
  );
}
