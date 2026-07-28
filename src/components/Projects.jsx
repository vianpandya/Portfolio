import React, { useState } from 'react';
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
  Globe
} from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = ['All', 'Frontend', 'Full-Stack'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
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
                onClick={() => setActiveTab(tab)}
                className={`badge ${activeTab === tab ? 'badge-active' : ''}`}
                style={{
                  cursor: 'pointer',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.9rem'
                }}
              >
                {tab === 'All' && 'All Projects'}
                {tab === 'Frontend' && 'Frontend Web Apps (Live Links)'}
                {tab === 'Full-Stack' && 'Full-Stack Systems'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Header Category Badge & Type */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: project.category === 'Frontend' ? 'var(--accent-teal)' : 'var(--accent-primary)',
                      background: project.category === 'Frontend' ? 'rgba(16, 185, 129, 0.12)' : 'var(--accent-glow)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontWeight: 600
                    }}
                  >
                    {project.category === 'Frontend' ? <Globe size={12} /> : <Server size={12} />}
                    {project.category}
                  </span>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        fontSize: '0.78rem',
                        gap: '0.3rem',
                        color: 'var(--text-main)',
                        borderColor: 'var(--accent-primary)',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    lineHeight: 1.3,
                    marginBottom: '0.6rem'
                  }}
                >
                  {project.title}
                </h3>

                {/* Compact Description (2 lines max) */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Bottom Tech Pills & Actions */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '0.35rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-light)',
                        padding: '0.2rem 0.3rem'
                      }}
                    >
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.88rem' }}
                  >
                    View Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

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

            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
              Key Technical Features & Architecture
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {selectedProject.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-subtle)' }}>
                  <Sparkles size={16} color="var(--accent-teal)" style={{ marginTop: '0.1rem' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{h}</span>
                </div>
              ))}
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

            {selectedProject.url && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open Live Project URL <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
