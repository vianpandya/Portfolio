import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Code, Heart, FileText } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0',
        background: 'rgba(5, 7, 12, 0.9)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justify: 'space-between',
            gap: '1.5rem'
          }}
        >
          {/* Left Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              {personalInfo.name} — Full-Stack Developer
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Built with React, Vite & Modern Web Standards • {personalInfo.email}
            </div>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="badge"
                style={{ cursor: 'pointer', padding: '0.5rem 0.85rem', gap: '0.4rem', color: 'var(--accent-light)', borderColor: 'var(--border-bright)' }}
                title="View & Download Resume PDF"
              >
                <FileText size={14} />
                <span>Resume PDF</span>
              </button>
            )}

            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              IST (UTC+5:30)
            </span>

            <button
              onClick={scrollToTop}
              className="badge"
              style={{ cursor: 'pointer', padding: '0.5rem 0.85rem', gap: '0.4rem', color: 'var(--text-main)' }}
              title="Back to Top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Vian Pandya. All rights reserved. Crafted with high attention to design detail.
        </div>
      </div>
    </footer>
  );
}
