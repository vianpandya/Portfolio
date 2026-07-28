import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare, Globe, Sparkles } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact({ onCopyEmail, copiedEmail }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="badge" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
            <Mail size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>
            Let's Build Something <span className="accent-text">Exceptional</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you have a full-stack project, a backend architecture query, or a job opportunity—reach out directly to Vian Pandya.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Email Quick Access & Socials Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Primary Email Box */}
            <div 
              className="glass-card" 
              style={{ 
                padding: '2rem', 
                border: '1px solid var(--accent-glow)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'var(--accent-glow)',
                  borderRadius: '50%',
                  filter: 'blur(30px)'
                }}
              />

              <h3 
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <Mail size={20} color="var(--accent-primary)" />
                Direct Email
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Click below to copy Vian's official email address instantly.
              </p>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'space-between',
                  background: '#05070c',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.75rem',
                  padding: '0.85rem 1.25rem',
                  gap: '1rem'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.95rem',
                    color: 'var(--accent-light)',
                    wordBreak: 'break-all'
                  }}
                >
                  {personalInfo.email}
                </span>

                <button
                  onClick={() => onCopyEmail(personalInfo.email)}
                  className="btn-primary"
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem', flexShrink: 0 }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social & Network Links */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'var(--text-main)'
                }}
              >
                Developer Profiles
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary" 
                  style={{ padding: '0.65rem 1rem', fontSize: '0.85rem', justifyContent: 'center' }}
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary" 
                  style={{ padding: '0.65rem 1rem', fontSize: '0.85rem', justifyContent: 'center' }}
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Contact Interactive Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '1.5rem'
              }}
            >
              Send a Direct Message
            </h3>

            {submitted ? (
              <div 
                style={{ 
                  padding: '2rem', 
                  textAlign: 'center', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  border: '1px solid var(--accent-teal)', 
                  borderRadius: '0.75rem',
                  color: 'var(--text-main)'
                }}
              >
                <Sparkles size={32} color="var(--accent-teal)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Message Received!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thank you! Vian Pandya will get back to you at <strong>{formState.email || 'your email'}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Project Type or Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Web Application / API Design"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Message Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project scope, goals, or requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Send size={16} /> Send Message to Vian
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
