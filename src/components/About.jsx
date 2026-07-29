import React, { useState } from 'react';
import { personalInfo, codeSnippets } from '../data/portfolioData';
import { Terminal, Copy, Check, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('code');
  const [copiedCode, setCopiedCode] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText(codeSnippets.aboutMe);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const principles = [
    {
      icon: <Zap size={22} color="var(--accent-primary)" />,
      title: "Performance First",
      desc: "Optimizing bundle sizes, database indexing, and network requests for sub-second response times."
    },
    {
      icon: <Layers size={22} color="var(--accent-cyan)" />,
      title: "Clean Modular Architecture",
      desc: "Structuring codebases with clear separation of concerns, reusable components, and robust API endpoints."
    },
    {
      icon: <Cpu size={22} color="var(--accent-teal)" />,
      title: "Polyglot Engineering",
      desc: "Adapting the optimal tool for the job—whether React/Angular on the frontend, or Node.js/.NET on the backend."
    },
    {
      icon: <ShieldCheck size={22} color="var(--accent-amber)" />,
      title: "Data Integrity & Security",
      desc: "Enforcing strict schema validation, secure authentication, and type-safe database queries across SQL & NoSQL."
    }
  ];

  return (
    <section id="about" style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="badge" style={{ marginBottom: '0.75rem' }}>
            <Terminal size={14} />
            <span>Developer Overview</span>
          </div>
          <h2 className="section-title">
            Engineering with <span className="accent-text">Precision & Intent</span>
          </h2>
          <p className="section-subtitle">
            I bridges the gap between complex backend architectures and sleek, responsive user interfaces.
          </p>
        </div>

        {/* Content Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Principles Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'space-between' }}>
            <h3 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '0.25rem'
              }}
            >
              Core Principles
            </h3>

            {principles.map((item, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ 
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  flex: 1
                }}
              >
                <div 
                  style={{
                    padding: '0.6rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Code Window */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '0', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}
          >
            {/* Terminal Top Bar */}
            <div 
              style={{ 
                padding: '0.85rem 1.25rem', 
                background: 'rgba(0, 0, 0, 0.4)', 
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  vian-pandya.config.js
                </span>
              </div>

              <button
                onClick={copySnippet}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {copiedCode ? <Check size={14} color="var(--accent-teal)" /> : <Copy size={14} />}
                <span>{copiedCode ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div style={{ padding: '1.5rem', background: '#05070c', flex: 1, display: 'flex', alignItems: 'center' }}>
              <pre 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.85rem', 
                  color: 'var(--text-main)', 
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  margin: 0
                }}
              >
                <code>{codeSnippets.aboutMe}</code>
              </pre>
            </div>

            {/* Terminal Footer */}
            <div 
              style={{ 
                padding: '0.75rem 1.25rem', 
                background: 'rgba(255, 255, 255, 0.02)', 
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>Status: 200 OK</span>
              <span>UTF-8 | JavaScript</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
