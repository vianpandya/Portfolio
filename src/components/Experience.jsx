import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge" style={{ marginBottom: '0.75rem' }}>
            <Briefcase size={14} />
            <span>Career Path & Milestones</span>
          </div>
          <h2 className="section-title">
            Work <span className="accent-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Track record of shipping production-ready code, optimizing web performance, and building full-stack applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div 
            className="timeline-line"
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary) 0%, rgba(255,255,255,0.05) 100%)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experienceTimeline.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{ 
                  position: 'relative', 
                  paddingLeft: '3.5rem' 
                }}
              >
                {/* Node Icon Circle */}
                <div 
                  className="timeline-node"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.2rem',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-dark)',
                    border: '2px solid var(--accent-primary)',
                    boxShadow: '0 0 15px var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <Briefcase size={18} />
                </div>

                {/* Experience Glass Card */}
                <div className="glass-card" style={{ padding: '1.75rem' }}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div>
                      <h3 
                        style={{ 
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--text-main)'
                        }}
                      >
                        {item.role}
                      </h3>
                      <div style={{ color: 'var(--accent-light)', fontWeight: 500, fontSize: '0.95rem' }}>
                        {item.company}
                      </div>
                    </div>

                    <div className="badge" style={{ gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} color="var(--accent-teal)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-item {
            padding-left: 2.25rem !important;
          }
          .timeline-node {
            width: 30px !important;
            height: 30px !important;
            left: 0 !important;
          }
          .timeline-line {
            left: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
