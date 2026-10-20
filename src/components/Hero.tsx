'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="badge-pill">
              <span className="pulse-dot" />
              <span>Enterprise SaaS & Autonomous AI Workflows</span>
            </div>

            <h1 className="hero-headline">
              Where Organic Innovation Meets <span className="gradient-text">Intelligent SaaS</span> & AI Automation.
            </h1>

            <p className="hero-subtitle">
              Welty Tech engineers mission-critical SaaS platforms, high-performance web systems, real-time telemetry dashboards, and autonomous agentic AI workflows designed to scale global enterprises with peak efficiency.
            </p>

            <div className="hero-actions">
              <a href="#simulator" className="btn btn-primary">
                <span>Test AI Simulator</span>
                <span className="btn-icon-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>

              <a href="#services" className="btn btn-secondary">
                <span>Explore Capabilities</span>
              </a>
            </div>

            {/* Live Metrics Bar */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <div className="metric-number">
                  <span>99.98</span>
                  <span className="accent">%</span>
                </div>
                <div className="metric-label">Uptime Architecture</div>
              </div>

              <div className="metric-item">
                <div className="metric-number">
                  <span>4.8</span>
                  <span className="accent">x</span>
                </div>
                <div className="metric-label">Efficiency Multiplier</div>
              </div>

              <div className="metric-item">
                <div className="metric-number">
                  <span>140</span>
                  <span className="accent">+</span>
                </div>
                <div className="metric-label">Workflows Deployed</div>
              </div>

              <div className="metric-item">
                <div className="metric-number">
                  <span>$18</span>
                  <span className="accent">M+</span>
                </div>
                <div className="metric-label">Client Value Created</div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: The Iconic Welty Tech 3D Landscape */}
          <div className="hero-visual-card">
            <div className="hero-art-wrapper">
              <div className="hero-art-inner">
                <Image
                  src="/images/welty-hero-3d.jpg"
                  alt="Welty Tech 3D Nature & Technology Synergy Symbol"
                  width={700}
                  height={500}
                  priority
                />
              </div>
              <div className="hero-floating-glass-badge">
                <div className="badge-icon-box">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="badge-info">
                  <h4>Rooted in Reliability. Rising in Tech.</h4>
                  <p>Merging the enduring strength of nature with high-speed agentic AI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
