'use client';

import React from 'react';

interface ServiceItem {
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    tag: 'Cloud & Scalability',
    title: 'SaaS Product Engineering',
    desc: 'Architecting robust, multi-tenant cloud platforms designed for hyper-growth with zero technical debt and high-throughput reliability.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    features: [
      'Multi-Tenant Architecture & Data Isolation',
      'Stripe & LemonSqueezy Automated Billing',
      'Granular Role-Based Access Control (RBAC)',
      'Event-Driven Microservices & Edge APIs'
    ]
  },
  {
    tag: 'Next-Gen Frontend',
    title: 'Modern Web Development',
    desc: 'Engineering blazing-fast, SEO-optimized web applications with modern Next.js 16.3 and React 19 frameworks engineered for conversion.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      'Next.js 16.3 App Router & Server Components',
      'Sub-Second Global Core Web Vitals',
      'Interactive Canvas & WebGL Visuals',
      'Headless CMS & Micro-Frontend Integration'
    ]
  },
  {
    tag: 'Aesthetic & UX',
    title: 'UI/UX & Product Design',
    desc: 'Crafting award-winning digital experiences, design systems, and intuitive user interfaces that engage users and elevate brand equity.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      'Enterprise Figma Design Systems & Tokens',
      'User Journey Mapping & Usability Audits',
      'Dark/Light Dynamic Glassmorphism',
      'Conversion Rate Optimization (CRO) Layouts'
    ]
  },
  {
    tag: 'Data & Telemetry',
    title: 'Enterprise Dashboard Design',
    desc: 'Transforming complex data rivers into intuitive, real-time executive cockpits and mission control telemetry centers.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      'Real-Time WebSocket & Kafka Telemetry',
      'Interactive Canvas & D3.js Visualizations',
      'Custom KPI Drill-Downs & Export Engines',
      'Predictive Anomaly Detection Alerts'
    ]
  },
  {
    tag: 'Intelligence & RPA',
    title: 'Autonomous AI Automation',
    desc: 'Empowering enterprise operations with autonomous AI agents that handle repetitive tasks, customer inquiries, and complex workflows 24/7.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      'Custom LLM Fine-Tuning & Prompt Guardrails',
      'Autonomous Swarm Agents for Ops & Support',
      'Multi-Format Document OCR & Extraction',
      'Human-in-the-Loop Supervision Interfaces'
    ]
  },
  {
    tag: 'Integration & Pipelines',
    title: 'End-to-End AI Workflows',
    desc: 'Orchestrating interconnected AI pipelines that bridge CRM, ERP, databases, and third-party tools into a unified self-running machine.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: [
      'LangGraph & LangChain Multi-Step Pipelines',
      'Enterprise Vector Knowledge Bases (RAG)',
      'Automated Lead Qualification & CRM Sync',
      'Continuous Feedback & Self-Optimizing Nodes'
    ]
  }
];

export default function ServicesMatrix() {
  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="section-title">
            Engineered to Solve Your Most <br />
            <span className="gradient-brand">Demanding Digital Challenges.</span>
          </h2>
          <p className="section-desc">
            From initial product architecture to autonomous agent deployment, Welty Tech provides end-to-end technical mastery across the full modern software spectrum.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="glass-card service-card">
              <div className="service-card-top">
                <div className="service-icon-box">{service.icon}</div>
                <span className="service-tag">{service.tag}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <ul className="service-features-list">
                  {service.features.map((feat, fIndex) => (
                    <li key={fIndex} className="service-feature-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-action">
                <a href="#contact" className="link-arrow">
                  <span>Inquire for {service.title}</span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
