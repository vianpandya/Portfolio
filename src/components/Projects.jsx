import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Code,
  CheckCircle,
  X,
  Sparkles,
  Server,
  Globe,
  ChevronDown,
  ChevronUp,
  ArrowUpRight
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightCard from './SpotlightCard';

function ImageWithPreload({ src, alt, className, style }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#090d16' }}>
      {!isLoaded && !hasError && (
        <div 
          className="skeleton-loader"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}
        >
          <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            <span className="pulse-dot" /> Loading preview...
          </div>
        </div>
      )}

      {hasError ? (
        <div 
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justify: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'var(--accent-light)',
            padding: '1rem',
            textAlign: 'center'
          }}
        >
          <Code size={28} style={{ marginBottom: '0.4rem', opacity: 0.8 }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            filter: isLoaded ? 'blur(0px) scale(1)' : 'blur(10px) scale(1.08)',
            transform: isLoaded ? 'scale(1)' : 'scale(1.08)',
            transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const tabs = ['All', 'Frontend', 'Full-Stack'];

  // Eagerly preload all project images in background as soon as component mounts
  useEffect(() => {
    projectsData.forEach((project) => {
      if (project.image) {
        const img = new Image();
        img.src = project.image;
      }
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section id="projects" style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <ScrollReveal delay={100}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="badge" style={{ marginBottom: '0.75rem' }}>
              <FolderGit2 size={14} />
              <span>Featured Portfolio Works</span>
            </div>
            <h2 className="section-title">
              Featured <span className="accent-text">Projects & Applications</span>
            </h2>
            <p className="section-subtitle">
              A showcase of live frontend web applications and full-stack enterprise systems built by Vian Pandya.
            </p>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`badge ${activeTab === tab ? 'badge-active' : ''}`}
                  style={{
                    cursor: 'pointer',
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.9rem'
                  }}
                >
                  {tab === 'All' && 'All Projects'}
                  {tab === 'Frontend' && 'Frontend Web Apps'}
                  {tab === 'Full-Stack' && 'Full-Stack Systems'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {visibleProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 80} animation="fade-in-up" style={{ display: 'flex' }}>
              <SpotlightCard
                className="project-card-box"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                {/* Top Website Image Preview Area */}
                <div className="project-image-wrapper">
                  <ImageWithPreload
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                  />
                  <div className="project-image-overlay">
                    <div className="project-hover-circle" title="View Project Details">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>


                {/* Bottom Card Content Box */}
                <div style={{ padding: '1.65rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    {/* Category Accent Line & Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                      <span
                        style={{
                          height: '2px',
                          width: '22px',
                          background: 'var(--accent-primary)',
                          borderRadius: '2px'
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-primary)',
                          fontWeight: 700
                        }}
                      >
                        {project.category.toUpperCase()} PROJECT
                      </span>
                    </div>

                    {/* Project Title */}
                    <div style={{ marginBottom: '0.8rem' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: 'var(--text-main)',
                          margin: 0,
                          lineHeight: 1.25
                        }}
                      >
                        {project.title.split('—')[0].trim()}
                      </h3>
                    </div>

                    {/* Project Description */}
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        marginBottom: '1.35rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tech Capsules & Side-by-Side Action Buttons */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            padding: '0.3rem 0.75rem',
                            borderRadius: '9999px',
                            color: 'var(--text-muted)',
                            fontWeight: 600
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions-row">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="btn-secondary"
                        style={{
                          flex: project.url ? 1 : 'none',
                          width: project.url ? 'auto' : '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          padding: '0.65rem 1rem',
                          fontSize: '0.88rem',
                          borderRadius: '0.6rem'
                        }}
                      >
                        <span>View Details</span>
                      </button>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-preview-btn"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            padding: '0.65rem 1rem',
                            borderRadius: '0.6rem',
                            fontSize: '0.88rem'
                          }}
                        >
                          <span>Live Preview</span>
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-moving-border"
            >
              <span>{showAll ? 'Show Less Projects' : `View More Projects`}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}

      </div>

      {/* Project Deep-Dive Modal Drawer */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="glass-card"
            style={{
              maxWidth: '650px',
              width: '100%',
              padding: '2rem',
              maxHeight: '90vh',
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={22} />
            </button>

            <span className="badge badge-active" style={{ marginBottom: '1rem' }}>
              {selectedProject.category} System
            </span>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            {selectedProject.businessValue && selectedProject.businessValue.length > 0 && (
              <>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--accent-teal)' }}>
                  Business Value & Impact
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                  {selectedProject.businessValue.map((bv, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        gap: '0.75rem', 
                        alignItems: 'flex-start',
                        background: 'rgba(16, 185, 129, 0.04)',
                        padding: '0.8rem 1.15rem',
                        borderRadius: '0.6rem',
                        border: '1px solid rgba(16, 185, 129, 0.15)'
                      }}
                    >
                      <CheckCircle size={16} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                        {bv}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
              Key Technical Features & Architecture
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {selectedProject.highlights.map((h, i) => {
                const parts = h.split(':');
                const hasTitle = parts.length > 1;
                const title = hasTitle ? parts[0].trim() : null;
                const desc = hasTitle ? parts.slice(1).join(':').trim() : h;

                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.85rem',
                      alignItems: 'flex-start',
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '0.9rem 1.15rem',
                      borderRadius: '0.6rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <Sparkles size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div style={{ flex: 1 }}>
                      {hasTitle ? (
                        <>
                          <div
                            style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '0.95rem',
                              fontWeight: 700,
                              // color: 'var(--accent-light)', 
                              marginBottom: '0.3rem',
                              letterSpacing: '0.01em'
                            }}
                          >
                            {title}
                          </div>
                          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                            {desc}
                          </div>
                        </>
                      ) : (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{h}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Technologies Utilized
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="badge">
                  {t}
                </span>
              ))}
            </div>

            {selectedProject.url ? (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open Live Project URL <ExternalLink size={16} />
              </a>
            ) : (
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  borderRadius: '0.6rem',
                  background: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid var(--accent-glow)',
                  color: 'var(--text-muted)',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Server size={18} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>Enterprise Architecture System — Full codebase & technical documentation available upon request.</span>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
