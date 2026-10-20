'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutCompany() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>The Welty Tech Story</span>
          </div>
          <h2 className="section-title">
            Architected for Longevity. <br />
            <span className="gradient-brand">Engineered for Exponential Scale.</span>
          </h2>
          <p className="section-desc">
            Welty Tech was born from a fundamental belief: modern digital infrastructure must be as deeply rooted and resilient as ancient nature, yet as agile and forward-thinking as modern generative artificial intelligence.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Brand Identity Breakdown */}
          <div className="about-symbol-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-glass-bright)' }}>
                <Image
                  src="/images/welty-logo.jpg"
                  alt="Welty Tech Emblem"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>The Welty Tech Identity</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  Mountain Peak 'W' + Perennial Tech Tree 'T'
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              In our brand crest, the geometric mountain ridges embody the summit of modern cloud reliability—unshakable under high compute loads. The flourishing green banyan tree represents organic expansion, autonomous intelligence, and evergreen software systems that nourish your enterprise long into the future.
            </p>

            <div className="dna-badges-list">
              <div className="dna-card">
                <h5>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#96c449">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Zero-Debt Stack
                </h5>
                <p>Modular micro-frontends, clean domain architectures, and typed contracts.</p>
              </div>

              <div className="dna-card">
                <h5>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#96c449">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Agentic Workflows
                </h5>
                <p>Autonomous LLM pipelines that operate with deterministic guardrails.</p>
              </div>

              <div className="dna-card">
                <h5>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#96c449">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
                  </svg>
                  Sub-50ms Telemetry
                </h5>
                <p>Real-time analytics engine streaming millions of data points effortlessly.</p>
              </div>

              <div className="dna-card">
                <h5>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#96c449">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Capital Efficiency
                </h5>
                <p>Directly shrinking manual team hours and multiplying engineering velocity.</p>
              </div>
            </div>
          </div>

          {/* Right: Engineering Principles & Standards */}
          <div className="about-content-column">
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
              Why Global Enterprises Partner With Welty Tech
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.8rem' }}>
              We do not treat software as disposable scripts. Every platform we build—from high-load SaaS platforms to autonomous multi-agent pipelines—is engineered by senior specialists with high rigor, enterprise security compliance, and frictionless user interfaces.
            </p>

            <ul className="values-list">
              <li className="value-item">
                <div className="value-check-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4>Senior-Only Technical Leadership</h4>
                  <p>Direct collaboration with principal architects and AI engineers with no junior handoffs.</p>
                </div>
              </li>

              <li className="value-item">
                <div className="value-check-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4>Deterministic AI Guardrails</h4>
                  <p>We eliminate hallucinations with retrieval-augmented pipelines, multi-layer verification, and human audit checkpoints.</p>
                </div>
              </li>

              <li className="value-item">
                <div className="value-check-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4>Hyperscale Ready From Day One</h4>
                  <p>Architected for horizontal auto-scaling, distributed caching, resilient databases, and instant global CDN distribution.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
