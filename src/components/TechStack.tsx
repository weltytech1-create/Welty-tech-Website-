'use client';

import React from 'react';

const technologies = [
  { name: 'Next.js 16.3 (App Router)', category: 'Frontend Architecture' },
  { name: 'React 19 & Server Components', category: 'UI Runtime' },
  { name: 'TypeScript', category: 'Type Safety' },
  { name: 'Python & FastAPI', category: 'High-Speed Microservices' },
  { name: 'LangGraph & Multi-Agent Swarms', category: 'Agentic AI' },
  { name: 'PyTorch & HuggingFace', category: 'Deep Learning' },
  { name: 'PostgreSQL & pgvector', category: 'Semantic Storage' },
  { name: 'Redis Streams & WebSockets', category: 'Real-time Telemetry' },
  { name: 'Docker & Kubernetes', category: 'Cloud Orchestration' },
  { name: 'AWS & Cloudflare Edge', category: 'Global Infrastructure' }
];

export default function TechStack() {
  return (
    <section className="section-wrapper" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
            Powered By Battle-Tested Enterprise Technologies
          </span>
        </div>

        <div className="tech-stack-row">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-chip">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tech-glow)', display: 'inline-block' }} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
