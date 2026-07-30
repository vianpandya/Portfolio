import React, { useState, useEffect, useRef } from 'react';
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef(null);

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

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0 && selectedIndex < filteredActions.length) {
      const activeItem = listRef.current.children[selectedIndex];
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, filteredActions.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredActions.length > 0 ? (prev + 1) % filteredActions.length : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredActions.length > 0 ? (prev - 1 + filteredActions.length) % filteredActions.length : 0
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
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
  }, [isOpen, onClose, filteredActions, selectedIndex]);

  if (!isOpen) return null;

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
            placeholder="Type a command..."
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
        <div ref={listRef} style={{ maxHeight: '350px', overflowY: 'auto', padding: '0.5rem' }}>
          {filteredActions.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No commands matching "{query}"
            </div>
          ) : (
            filteredActions.map((act, idx) => (
              <button
                key={act.id}
                onClick={act.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: idx === selectedIndex ? 'var(--accent-glow)' : 'none',
                  border: 'none',
                  borderLeft: idx === selectedIndex ? '3px solid var(--accent-primary)' : '3px solid transparent',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '0.92rem',
                  transition: 'var(--transition-fast)',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: idx === selectedIndex ? 'var(--accent-light)' : 'var(--accent-primary)' }}>{act.icon}</span>
                  <span style={{ fontWeight: idx === selectedIndex ? 600 : 400 }}>{act.label}</span>
                </div>
                <ArrowRight size={14} color={idx === selectedIndex ? 'var(--accent-light)' : 'var(--text-dim)'} />
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
          <span>Press ↑ ↓ Navigate • ↵ Select • ESC Exit</span>
        </div>
      </div>
    </div>
  );
}
