'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const serviceOptions = [
  'SaaS Product Engineering',
  'Autonomous AI Workflows',
  'Enterprise Dashboard Design',
  'Modern Web Development',
  'UI/UX & Product Design',
  'Cloud & DevOps Scale'
];

export default function ConsultationSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Autonomous AI Workflows']);
  const [budget, setBudget] = useState<number>(35000);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'WT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setShowModal(true);

    // Trigger celebratory confetti in Welty Tech brand colors
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7ea142', '#96c449', '#2dd4bf', '#0b2b21', '#ffffff']
      });
    } catch {
      // safe fallback
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Direct Architecture Discovery</span>
          </div>
          <h2 className="section-title">
            Ready to Engineer Your <br />
            <span className="gradient-brand">Competitive Advantage?</span>
          </h2>
          <p className="section-desc">
            Connect directly with a Welty Tech principal architect. We review your technical requirements and provide a confidential roadmap within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Credentials */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.8rem' }}>
              Direct Technical Advisory
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Skip the sales runaround. At Welty Tech, your first meeting is an in-depth technical discovery session with senior engineering leadership.
            </p>

            <ul className="contact-direct-list">
              <li className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h5>Direct Engineering Inquiries</h5>
                  <a href="mailto:solutions@welty.in">solutions@welty.in</a>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h5>Guaranteed SLA Response</h5>
                  <p>Within 24 business hours</p>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h5>Security & NDA Protection</h5>
                  <p>Mutual NDA executed prior to code review</p>
                </div>
              </li>
            </ul>

            <div className="contact-guarantee-badge">
              <span className="pulse-dot" style={{ width: '8px', height: '8px' }} />
              <span>Available for immediate enterprise deployment sprints.</span>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.4rem' }}>
                <span className="form-label">Select Target Services (Multiple selection supported):</span>
                <div className="service-pills-selector">
                  {serviceOptions.map((srv, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`pill-option ${selectedServices.includes(srv) ? 'selected' : ''}`}
                      onClick={() => toggleService(srv)}
                    >
                      {selectedServices.includes(srv) ? '✓ ' : '+ '}
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range Slider */}
              <div className="calc-slider-group" style={{ marginBottom: '1.6rem' }}>
                <div className="calc-slider-header">
                  <span className="form-label" style={{ marginBottom: 0 }}>Estimated Project Budget</span>
                  <span className="calc-val-display">${mounted ? budget.toLocaleString('en-US') : budget}+</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="150000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  aria-label="Project Budget Slider"
                />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="client-name">Your Full Name *</label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Alex Henderson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="client-email">Work Email *</label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    className="form-control"
                    placeholder="alex@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-company">Company / Organization *</label>
                <input
                  id="client-company"
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Nexus Global Technologies"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-message">Project Scope & Objectives *</label>
                <textarea
                  id="client-message"
                  required
                  className="form-control"
                  placeholder="Describe your current bottleneck, desired architecture, or specific AI workflows to automate..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                <span>Transmit Inquiry to Senior Engineering</span>
                <span className="btn-icon-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <div className={`modal-overlay ${showModal ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          <div className="modal-icon-success">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3>Inquiry Confirmed!</h3>
          <p>
            Thank you, <strong>{name}</strong>. Your project brief has been assigned reference ID <strong style={{ color: 'var(--color-brand-tech-glow)' }}>{ticketId}</strong>. A Welty Tech principal architect will review your selected services ({selectedServices.join(', ')}) and contact you at <strong>{email}</strong> within 24 hours.
          </p>
          <button className="btn btn-primary" onClick={closeModal}>
            <span>Return to Overview</span>
          </button>
        </div>
      </div>
    </section>
  );
}
