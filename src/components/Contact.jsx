import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare, Globe, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact({ onCopyEmail, copiedEmail }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field, value) => {
    let err = '';
    if (field === 'name') {
      if (!value.trim()) err = 'Full name is required.';
      else if (value.trim().length < 2) err = 'Name must be at least 2 characters.';
    }
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = 'Email address is required.';
      else if (!emailRegex.test(value.trim())) err = 'Please enter a valid email address.';
    }
    if (field === 'subject') {
      if (value.trim() && value.trim().length < 3) err = 'Subject must be at least 3 characters.';
    }
    if (field === 'message') {
      if (!value.trim()) err = 'Message details are required.';
      else if (value.trim().length < 10) err = 'Message must be at least 10 characters long.';
    }
    return err;
  };

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formState[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const validateForm = () => {
    const newErrors = {};
    ['name', 'email', 'subject', 'message'].forEach((field) => {
      const err = validateField(field, formState[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', position: 'relative' }}>
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
                Click to copy email or compose directly in Outlook.
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
                    wordBreak: 'break-all',
                    flex: 1
                  }}
                >
                  {personalInfo.email}
                </span>

                <button
                  onClick={() => onCopyEmail(personalInfo.email)}
                  className="btn-secondary"
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem', flexShrink: 0, marginLeft: 'auto' }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Single Email Vian Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary"
                style={{ width: '100%', marginTop: '1rem', textAlign: 'center', justifyContent: 'center' }}
              >
                <Mail size={16} />
                Email Vian
              </a>
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

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  <LinkedinIcon size={18} /> LinkedIn Profile
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
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Mercer"
                    value={formState.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: touched.name && errors.name
                        ? '1px solid #ef4444'
                        : touched.name && !errors.name && formState.name
                        ? '1px solid rgba(16, 185, 129, 0.5)'
                        : '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      transition: 'var(--transition-fast)'
                    }}
                  />
                  {touched.name && errors.name && (
                    <span style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <AlertCircle size={13} /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: touched.email && errors.email
                        ? '1px solid #ef4444'
                        : touched.email && !errors.email && formState.email
                        ? '1px solid rgba(16, 185, 129, 0.5)'
                        : '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      transition: 'var(--transition-fast)'
                    }}
                  />
                  {touched.email && errors.email && (
                    <span style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <AlertCircle size={13} /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Project Type or Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Web Application / API Design"
                    value={formState.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: touched.subject && errors.subject
                        ? '1px solid #ef4444'
                        : touched.subject && !errors.subject && formState.subject
                        ? '1px solid rgba(16, 185, 129, 0.5)'
                        : '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      transition: 'var(--transition-fast)'
                    }}
                  />
                  {touched.subject && errors.subject && (
                    <span style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <AlertCircle size={13} /> {errors.subject}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project scope, goals, or requirements..."
                    value={formState.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.6rem',
                      background: '#05070c',
                      border: touched.message && errors.message
                        ? '1px solid #ef4444'
                        : touched.message && !errors.message && formState.message
                        ? '1px solid rgba(16, 185, 129, 0.5)'
                        : '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      resize: 'vertical',
                      transition: 'var(--transition-fast)'
                    }}
                  />
                  {touched.message && errors.message && (
                    <span style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <AlertCircle size={13} /> {errors.message}
                    </span>
                  )}
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
