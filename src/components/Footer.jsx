import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, FileText, Globe, Clock } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 2rem 0',
        background: 'rgba(5, 7, 12, 0.95)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Column 1: Brand & Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {personalInfo.name}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              {personalInfo.title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem' }}>
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 500 }}>
                {personalInfo.status}
              </span>
            </div>
          </div>

          {/* Column 2: Connect & Documents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Connect & Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem'
                }}
                className="footer-link-item"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn Profile</span>
              </a>

              <a 
                href={`mailto:${personalInfo.email}`}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem'
                }}
                className="footer-link-item"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>

              <a 
                href="/vian-pandya_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem'
                }}
                className="footer-link-item"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Column 3: Logistics & Time Zone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Work & Logistics
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Globe size={16} style={{ marginTop: '0.15rem', color: 'var(--text-dim)' }} />
                <div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>Location</div>
                  <div>{personalInfo.location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Clock size={16} style={{ marginTop: '0.15rem', color: 'var(--text-dim)' }} />
                <div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>Time Zone</div>
                  <div>IST (UTC+5:30)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & scrollToTop */}
        <div 
          className="footer-bottom"
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.04)', 
            marginTop: '2rem', 
            paddingTop: '1.5rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '1rem',
            fontSize: '0.8rem', 
            color: 'var(--text-dim)' 
          }}
        >
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React, Vite & Modern Web Standards.
          </div>
          
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
