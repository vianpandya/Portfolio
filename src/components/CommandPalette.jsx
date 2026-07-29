import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Search, 
  X, 
  Code, 
  Terminal, 
  Folder, 
  Mail, 
  Palette, 
  Copy, 
  ArrowRight 
} from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onCopyEmail, copiedEmail, setTheme }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.replaceState(null, '', window.location.pathname);
    onClose();
  };

  const actions = [
    { id: 'about', label: 'Go to About & Philosophy', icon: <Terminal size={16} />, action: () => handleScrollTo('about') },
    { id: 'skills', label: 'Go to Skills & Tech Stack', icon: <Code size={16} />, action: () => handleScrollTo('skills') },
    { id: 'projects', label: 'Go to Featured Projects', icon: <Folder size={16} />, action: () => handleScrollTo('projects') },
    { id: 'contact', label: 'Go to Contact Hub', icon: <Mail size={16} />, action: () => handleScrollTo('contact') },
    { id: 'copy-email', label: `Copy Email (${personalInfo.email})`, icon: <Copy size={16} />, action: () => { onCopyEmail(personalInfo.email); onClose(); } },
    { id: 'theme-indigo', label: 'Switch Theme: Electric Indigo', icon: <Palette size={16} color="#6366f1" />, action: () => { setTheme('indigo'); onClose(); } },
    { id: 'theme-emerald', label: 'Switch Theme: Emerald Cyber', icon: <Palette size={16} color="#059669" />, action: () => { setTheme('emerald'); onClose(); } },
    { id: 'theme-cyan', label: 'Switch Theme: Deep Cyan', icon: <Palette size={16} color="#06b6d4" />, action: () => { setTheme('cyan'); onClose(); } },
    { id: 'theme-amber', label: 'Switch Theme: Cyber Amber', icon: <Palette size={16} color="#f59e0b" />, action: () => { setTheme('amber'); onClose(); } }
  ];

  const filteredActions = actions.filter(act => 
    act.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="glass-card" 
        style={{ 
          maxWidth: '560px', 
          width: '100%', 
          padding: '0', 
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
          border: '1px solid var(--border-bright)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1rem 1.25rem', 
            borderBottom: '1px solid var(--border-subtle)',
            gap: '0.75rem' 
          }}
        >
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Type a command or search section... (Press Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.98rem'
            }}
          />
          <button 
            type="button"
            onClick={onClose} 
            style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Close command palette"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action List */}
        <div style={{ maxHeight: '350px', overflowY: 'auto', padding: '0.5rem' }}>
          {filteredActions.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No commands matching "{query}"
            </div>
          ) : (
            filteredActions.map((act) => (
              <button
                key={act.id}
                onClick={act.action}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '0.92rem',
                  transition: 'var(--transition-fast)',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>{act.icon}</span>
                  <span>{act.label}</span>
                </div>
                <ArrowRight size={14} color="var(--text-dim)" />
              </button>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div 
          style={{ 
            padding: '0.75rem 1.25rem', 
            background: 'rgba(0, 0, 0, 0.3)', 
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            fontSize: '0.78rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span>Vian Pandya Portfolio CLI</span>
          <span>Press ESC or Click Outside</span>
        </div>
      </div>
    </div>
  );
}
