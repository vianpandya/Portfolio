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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
