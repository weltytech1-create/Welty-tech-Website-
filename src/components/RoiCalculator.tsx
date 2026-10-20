'use client';

import React, { useState, useEffect } from 'react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [manualHours, setManualHours] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const automationEfficiency = 0.70;
  const annualHoursSaved = Math.round(teamSize * manualHours * 50 * automationEfficiency);
  const annualDollarSaved = Math.round(annualHoursSaved * hourlyRate);
  const velocityMultiplier = +(1 + (manualHours * 0.15)).toFixed(1);

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    return num.toLocaleString('en-US');
  };

  return (
    <section id="calculator" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Interactive ROI Engine</span>
          </div>
          <h2 className="section-title">
            Quantify Your Enterprise Savings With <br />
            <span className="gradient-text">Welty Tech SaaS & AI Workflows.</span>
          </h2>
          <p className="section-desc">
            Adjust the metrics below to model the real operational capital reclaimed when manual tasks and legacy tech debt are replaced by autonomous agentic workflows.
          </p>
        </div>

        <div className="roi-calculator-wrap">
          {/* Sliders Input Card */}
          <div className="calc-inputs-card">
            {/* Slider 1: Team Size */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-label">Total Operations & Tech Team Size</span>
                <span className="calc-val-display">{teamSize} Specialists</span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                aria-label="Team Size"
              />
            </div>

            {/* Slider 2: Weekly Manual Hours */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-label">Repetitive / Manual Hours per Week (per Person)</span>
                <span className="calc-val-display">{manualHours} hrs/wk</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                aria-label="Manual Hours per week"
              />
            </div>

            {/* Slider 3: Hourly Cost */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-label">Average Blended Hourly Cost</span>
                <span className="calc-val-display">${hourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                aria-label="Hourly Cost"
              />
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(6, 18, 14, 0.6)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                ⚡ <strong>Senior Architecture Impact:</strong> Welty Tech workflows deploy with automated regression tests, self-healing queues, and zero downtime maintenance.
              </p>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="calc-results-card">
            <span className="badge-pill" style={{ marginBottom: '1rem' }}>
              Projected Annual Impact
            </span>

            <div className="roi-big-metric">
              <div className="roi-currency">
                ${formatNumber(annualDollarSaved)}
              </div>
              <div className="roi-label">Estimated Annual Capital Reclaimed</div>
            </div>

            <div className="roi-breakdown-grid">
              <div className="breakdown-box">
                <div className="sub-val" style={{ color: 'var(--color-brand-tech-glow)' }}>
                  {formatNumber(annualHoursSaved)} hrs
                </div>
                <div className="sub-label">Engineering Hours Saved / Year</div>
              </div>

              <div className="breakdown-box">
                <div className="sub-val" style={{ color: '#2dd4bf' }}>
                  {velocityMultiplier}x Faster
                </div>
                <div className="sub-label">Team Output Velocity</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Realize These Gains With Welty Tech</span>
                <span className="btn-icon-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
