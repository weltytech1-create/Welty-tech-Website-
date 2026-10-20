'use client';

import React from 'react';
import Image from 'next/image';

const cases = [
  {
    category: 'FinTech SaaS Platform',
    title: 'High-Concurrency Multi-Tenant Payment Engine',
    desc: 'Architected and deployed an enterprise billing and credit reconciliation engine handling $120M+ in annual transaction flow with zero downtime.',
    statNum: '5.2x Faster',
    statText: 'Processing Speed & P99 Latency under 22ms',
    image: '/images/saas-dashboard.jpg'
  },
  {
    category: 'AI Workflow Swarm',
    title: 'Autonomous Global Logistics & Fleet Orchestration',
    desc: 'Integrated a multi-agent LangGraph pipeline linking SAP ERP, customs clearance APIs, and automated carrier routing dispatch bots.',
    statNum: '72% Reduced',
    statText: 'Manual Work Hours Reclaimed Annually',
    image: '/images/ai-workflows.jpg'
  },
  {
    category: 'Mission-Critical Dashboard',
    title: 'Real-Time Biometric & Cloud Telemetry Center',
    desc: 'Engineered a dark-mode WebSocket telemetry cockpit visualizing 14,000 concurrent sensor feeds with predictive anomaly notifications.',
    statNum: '< 35ms',
    statText: 'Sub-second real-time telemetry render time',
    image: '/images/welty-hero-3d.jpg'
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="section-title">
            Engineered For Impact. <br />
            <span className="gradient-brand">Validated By Real Global Results.</span>
          </h2>
          <p className="section-desc">
            Explore how Welty Tech has partnered with visionary startups and enterprise titans to deliver transformational digital and AI breakthroughs.
          </p>
        </div>

        <div className="case-studies-grid">
          {cases.map((item, idx) => (
            <div key={idx} className="glass-card case-card">
              <div className="case-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
                <span className="case-badge">{item.category}</span>
              </div>

              <div className="case-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="case-metric-highlight">
                  <div>
                    <div className="case-stat-num">{item.statNum}</div>
                    <div className="case-stat-text">{item.statText}</div>
                  </div>
                  <a href="#contact" className="link-arrow">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
