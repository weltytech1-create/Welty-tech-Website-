'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: "How do Welty Tech's AI Workflows differ from basic tools like Zapier or Make?",
    a: "Unlike simple trigger-action zaps that break on subtle data anomalies, Welty Tech builds autonomous agentic pipelines with multi-step reasoning, semantic chunking, custom LLM fine-tuning, vector database memory (RAG), and deterministic fallback guardrails. Our workflows handle ambiguous edge cases, complex API authentication, and enterprise-scale concurrency without human intervention."
  },
  {
    q: 'Can Welty Tech build a full multi-tenant SaaS from zero to production launch?',
    a: 'Yes. We specialize in greenfield SaaS architecture: multi-tenant database isolation, Stripe/billing subscription engines, enterprise single sign-on (SSO/SAML), role-based access control (RBAC), and automated CI/CD pipelines. We take you from architectural blueprint to audited, scalable production release.'
  },
  {
    q: 'How do you guarantee enterprise data security with artificial intelligence?',
    a: 'Data privacy is baked into our foundation. We deploy zero-retention API configurations, dedicated private VPC model hosting, on-premise local LLM deployments (e.g. Llama 3 / Mistral), and token-level PII redaction so your proprietary corporate data is never utilized for public model training.'
  },
  {
    q: 'What makes your real-time dashboard design distinct from off-the-shelf BI tools?',
    a: 'Off-the-shelf BI tools like Tableau or PowerBI often suffer from high latency, clunky rendering, and limited custom UX. Welty Tech designs bespoke WebSocket and Canvas-rendered cockpits that stream millions of live events in sub-50ms with dark-mode glassmorphic aesthetics tailored precisely to your executive workflow.'
  },
  {
    q: 'How does your senior engagement model work?',
    a: 'You work directly with principal architects, seasoned UI/UX designers, and senior AI systems engineers. We work in rapid, transparent 2-week agile sprints with continuous staging deployments, detailed documentation, and direct Slack/Teams integration with your leadership.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <br />
            <span className="gradient-text">Enterprise Questions.</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about our engineering standards, AI workflow capabilities, and delivery methodology.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'active' : ''}`}>
              <button className="faq-trigger" onClick={() => toggle(idx)} aria-expanded={openIndex === idx}>
                <span>{faq.q}</span>
                <span className="faq-icon-arrow">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div className="faq-content">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
