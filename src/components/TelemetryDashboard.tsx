'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TelemetryDashboard() {
  const [timeframe, setTimeframe] = useState<'1H' | '24H' | '7D'>('1H');
  const [activeNodes, setActiveNodes] = useState(12845);
  const [processingRate, setProcessingRate] = useState(492.3);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dynamic live fluctuations to make the dashboard feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodes((prev) => prev + Math.floor((Math.random() - 0.45) * 8));
      setProcessingRate((prev) => +(prev + (Math.random() - 0.48) * 2.5).toFixed(1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // HTML5 Canvas animated telemetry stream chart
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 600;
      canvas.height = canvas.parentElement?.clientHeight || 220;
    };
    resize();
    window.addEventListener('resize', resize);

    const renderChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw subtle horizontal grid lines
      ctx.strokeStyle = 'rgba(126, 161, 66, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 30; y < h; y += 45) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Wave 1 (Deep Forest Green Accent)
      ctx.beginPath();
      const points1: Array<[number, number]> = [];
      const step = 20;
      for (let x = 0; x <= w + step; x += step) {
        const y = h * 0.55 + Math.sin((x + offset * 1.5) * 0.015) * 35 + Math.cos((x + offset) * 0.02) * 15;
        points1.push([x, y]);
      }
      ctx.moveTo(0, h);
      points1.forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.lineTo(w, h);
      ctx.closePath();

      const grad1 = ctx.createLinearGradient(0, 0, 0, h);
      grad1.addColorStop(0, 'rgba(31, 94, 73, 0.45)');
      grad1.addColorStop(1, 'rgba(5, 26, 20, 0.0)');
      ctx.fillStyle = grad1;
      ctx.fill();

      // Draw Wave 2 (Vibrant Tech Olive Line)
      ctx.beginPath();
      const points2: Array<[number, number]> = [];
      for (let x = 0; x <= w + step; x += step) {
        const y = h * 0.42 + Math.sin((x + offset * 2) * 0.02) * 28 + Math.cos((x + offset * 0.8) * 0.012) * 22;
        points2.push([x, y]);
      }

      ctx.moveTo(0, h);
      points2.forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.lineTo(w, h);
      ctx.closePath();

      const grad2 = ctx.createLinearGradient(0, 0, 0, h);
      grad2.addColorStop(0, 'rgba(126, 161, 66, 0.35)');
      grad2.addColorStop(1, 'rgba(11, 43, 33, 0.0)');
      ctx.fillStyle = grad2;
      ctx.fill();

      // Stroke top border of Wave 2 with glowing tech green
      ctx.beginPath();
      points2.forEach(([x, y], idx) => {
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = '#96c449';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(150, 196, 73, 0.6)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      offset += 0.8;
      animId = requestAnimationFrame(renderChart);
    };

    renderChart();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [timeframe]);

  return (
    <section id="dashboard" className="section-wrapper dashboard-preview-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Mission Control Telemetry</span>
          </div>
          <h2 className="section-title">
            Enterprise Dashboard Design That <br />
            <span className="gradient-brand">Command Real-Time Operational Clarity.</span>
          </h2>
          <p className="section-desc">
            We architect and design bespoke executive dashboards, telemetry command centers, and real-time data visualizers that make complex enterprise signals effortlessly actionable.
          </p>
        </div>

        {/* Dashboard Showcase Frame */}
        <div className="dashboard-showcase-box">
          {/* Top Window Bar */}
          <div className="dash-topbar">
            <div className="dash-window-actions">
              <div className="terminal-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="dash-title-tag">
                <span className="live-pulse-badge">
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                  CLUSTER: PRODUCTION_US_EAST
                </span>
                <span style={{ color: 'var(--text-muted)' }}>|</span>
                <span>Welty Telemetry Suite v4.2</span>
              </div>
            </div>

            <div className="dash-tabs">
              {(['1H', '24H', '7D'] as const).map((t) => (
                <button
                  key={t}
                  className={`dash-tab-btn ${timeframe === t ? 'active' : ''}`}
                  onClick={() => setTimeframe(t)}
                >
                  {t} View
                </button>
              ))}
            </div>
          </div>

          {/* Inner Content Grid */}
          <div className="dash-inner-content">
            {/* Left Main Chart Area */}
            <div className="dash-graph-card">
              <div className="graph-header">
                <div>
                  <h4>Distributed Neural Flow & Event Throughput</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Continuous event stream across multi-tenant edge nodes
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: '#96c449', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', backgroundColor: '#96c449', borderRadius: '50%', display: 'inline-block' }} />
                    Active Pipeline
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#2dd4bf', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', backgroundColor: '#2dd4bf', borderRadius: '50%', display: 'inline-block' }} />
                    Edge Cache
                  </span>
                </div>
              </div>

              <div className="canvas-chart-wrap">
                <canvas id="telemetry-canvas" ref={canvasRef} />
              </div>

              {/* Event Stream Row */}
              <ul className="stream-list">
                <li className="stream-item">
                  <span>[0.02s ago] Kubernetes worker node pod auto-scaled +1</span>
                  <span style={{ color: '#96c449' }}>200 OK</span>
                </li>
                <li className="stream-item">
                  <span>[0.45s ago] Multi-agent reasoning pipeline completed 1.8k tokens</span>
                  <span style={{ color: '#2dd4bf' }}>VERIFIED</span>
                </li>
                <li className="stream-item">
                  <span>[1.12s ago] Redis distributed cache hit ratio at 98.4%</span>
                  <span style={{ color: '#96c449' }}>OPTIMAL</span>
                </li>
              </ul>
            </div>

            {/* Right KPI Sidebar */}
            <div className="dash-kpi-column">
              <div className="kpi-card">
                <div className="kpi-title">Active Cloud Nodes</div>
                <div className="kpi-value-row">
                  <div className="value kpi-val">{mounted ? activeNodes.toLocaleString('en-US') : activeNodes}</div>
                  <div className="kpi-change">▲ +4.2%</div>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  100% healthy across 3 regions
                </p>
              </div>

              <div className="kpi-card">
                <div className="kpi-title">Neural Processing Rate</div>
                <div className="kpi-value-row">
                  <div className="kpi-val" style={{ color: 'var(--color-brand-tech-glow)' }}>
                    {processingRate} <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>GPT/s</span>
                  </div>
                  <div className="kpi-change">▲ +12%</div>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  P99 latency &lt; 14ms
                </p>
              </div>

              <div className="kpi-card">
                <div className="kpi-title">System Alert Status</div>
                <div className="kpi-value-row">
                  <div className="kpi-val" style={{ color: '#2dd4bf' }}>STABLE</div>
                  <span className="live-pulse-badge">0 CRITICAL</span>
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Automated self-healing active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
