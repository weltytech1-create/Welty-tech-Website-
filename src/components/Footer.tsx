'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#hero" className="brand-logo-link">
              <div className="logo-symbol-wrap">
                <Image
                  src="/images/welty-logo.jpg"
                  alt="Welty Tech Icon"
                  width={44}
                  height={44}
                />
              </div>
              <div className="brand-text">
                <div className="brand-title">
                  <span className="welty">Welty</span>
                  <span className="tech">Tech</span>
                </div>
                <span className="brand-tagline">SaaS • Dashboards • AI</span>
              </div>
            </a>

            <p>
              Engineering enterprise-grade SaaS platforms, real-time analytics cockpits, and autonomous agentic AI workflows for the world&apos;s most ambitious organizations.
            </p>

            <div className="footer-status-pill">
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
              <span>GLOBAL STATUS: ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="footer-col">
            <h5>Core Capabilities</h5>
            <ul className="footer-links">
              <li><a href="#services">SaaS Product Engineering</a></li>
              <li><a href="#services">Autonomous AI Workflows</a></li>
              <li><a href="#services">Enterprise Dashboard Design</a></li>
              <li><a href="#services">Modern Web Development</a></li>
              <li><a href="#services">UI/UX & Product Systems</a></li>
              <li><a href="#services">Cloud Infrastructure & Edge</a></li>
            </ul>
          </div>

          {/* Column 3: Interactive Suite */}
          <div className="footer-col">
            <h5>Interactive Suite</h5>
            <ul className="footer-links">
              <li><a href="#simulator">AI Workflow Simulator</a></li>
              <li><a href="#dashboard">Telemetry Command Center</a></li>
              <li><a href="#calculator">SaaS & AI ROI Calculator</a></li>
              <li><a href="#case-studies">Enterprise Case Studies</a></li>
              <li><a href="#about">The Welty Tech Story</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance & Global Offices */}
          <div className="footer-col">
            <h5>Enterprise Assurance</h5>
            <ul className="footer-links">
              <li><a href="#contact">Direct Senior Discovery</a></li>
              <li><a href="#contact">solutions@welty.in</a></li>
              <li><a href="#about">SOC2 & ISO 27001 Ready</a></li>
              <li><a href="#about">Zero Model Retention Guarantee</a></li>
              <li><a href="#about">Sub-50ms SLA Commitment</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Welty Tech. All rights reserved. Built with Next.js 16.3.0 &amp; React 19.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
