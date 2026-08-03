import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Cpu, Layout, Server, Database, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend Excellence', 'Backend & Systems', 'Database & Data Architecture', 'Cloud & Hosting Platforms'];

  const filteredCategories = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(cat => cat.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal delay={100}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="badge" style={{ marginBottom: '0.75rem' }}>
              <Cpu size={14} />
              <span>Tech Stack & Expertise</span>
            </div>
            <h2 className="section-title">
              Skills & <span className="accent-text">Technologies</span>
            </h2>
            <p className="section-subtitle">
              Engineered proficiency across frontend interfaces, backend services, database systems, and cloud hosting platforms.
            </p>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`badge ${activeCategory === cat ? 'badge-active' : ''}`}
                  style={{ 
                    cursor: 'pointer',
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.9rem'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredCategories.map((group, gIdx) => (
            <div key={gIdx}>
              {/* Category Subhead */}
              <ScrollReveal delay={150} animation="fade-in">
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  {group.category.includes('Frontend') && <Layout size={20} color="var(--accent-primary)" />}
                  {group.category.includes('Backend') && <Server size={20} color="var(--accent-cyan)" />}
                  {group.category.includes('Database') && <Database size={20} color="var(--accent-teal)" />}
                  {(group.category.includes('Cloud') || group.category.includes('Hosting')) && <Cloud size={20} color="var(--accent-amber)" />}
                  {group.category}
                </h3>
              </ScrollReveal>

              {/* Skill Cards Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                  gap: '1.5rem' 
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <ScrollReveal key={sIdx} delay={sIdx * 60} animation="fade-in-up" style={{ display: 'flex' }}>
                    <SpotlightCard 
                      style={{ 
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}
                    >
                      <div>
                        {/* Title & Tag */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <h4 
                            style={{ 
                              fontFamily: 'var(--font-heading)',
                              fontSize: '1.15rem',
                              fontWeight: 700,
                              color: 'var(--text-main)'
                            }}
                          >
                            {skill.name}
                          </h4>
                          <span 
                            style={{ 
                              fontSize: '0.75rem', 
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--accent-light)',
                              background: 'var(--accent-glow)',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '0.4rem'
                            }}
                          >
                            {skill.tag}
                          </span>
                        </div>

                        {/* Description */}
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                          {skill.desc}
                        </p>
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
