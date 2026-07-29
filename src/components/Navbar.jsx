import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Code, 
  Terminal, 
  Sparkles, 
  Layers, 
  Mail, 
  Menu, 
  X, 
  Palette, 
  Search 
} from 'lucide-react';

export default function Navbar({ activeTheme, setTheme, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const themes = [
    { id: 'indigo', color: '#6366f1', label: 'Indigo' },
    { id: 'emerald', color: '#059669', label: 'Emerald' },
    { id: 'cyan', color: '#06b6d4', label: 'Cyan' },
    { id: 'amber', color: '#f59e0b', label: 'Amber' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.history.replaceState(null, '', window.location.pathname);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(9, 11, 16, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            textDecoration: 'none', 
            color: 'var(--text-main)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.2rem'
          }}
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '0.6rem',
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, rgba(255,255,255,0.1) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px var(--accent-glow)',
              color: '#ffffff'
            }}
          >
            <Code size={20} />
          </div>
          <span>
            {personalInfo.name.split(' ')[0]} <span style={{ color: 'var(--accent-primary)' }}>{personalInfo.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '0.4rem 1.5rem',
            borderRadius: '9999px',
            border: '1px solid var(--border-subtle)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions (Theme Picker & Mobile Menu) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Color Selector Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }} className="theme-dots">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={`Switch accent to ${t.label}`}
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: t.color,
                  border: activeTheme === t.id ? '2px solid #ffffff' : '2px solid transparent',
                  cursor: 'pointer',
                  transform: activeTheme === t.id ? 'scale(1.15)' : 'scale(1)',
                  transition: 'var(--transition-fast)'
                }}
              />
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-dark)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                textAlign: 'center',
                width: '100%'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Responsive Inline CSS Media Query */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-contact-btn { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
