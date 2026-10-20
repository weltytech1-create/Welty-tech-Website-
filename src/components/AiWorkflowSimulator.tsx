'use client';

import React, { useState, useEffect } from 'react';

interface NodeStep {
  stepNum: string;
  title: string;
  desc: string;
  meta: string;
}

interface Preset {
  id: string;
  name: string;
  nodes: NodeStep[];
  logs: string[];
}

const presets: Preset[] = [
  {
    id: 'lead-gen',
    name: 'Lead-to-Revenue Agent',
    nodes: [
      { stepNum: '01', title: 'Webhook Ingest', desc: 'Captures form payload & parses enterprise intent', meta: 'JSON schema validation' },
      { stepNum: '02', title: 'Deep Web Intel', desc: 'Agent crawls LinkedIn & company funding data', meta: 'SerpAPI + Tavily' },
      { stepNum: '03', title: 'AI Scoring Engine', desc: 'Predictive qualification with custom Claude/GPT-4o', meta: 'Score: 94/100 (High-Intent)' },
      { stepNum: '04', title: 'CRM Sync & Booking', desc: 'Enriches HubSpot, generates personalized pitch & slot', meta: 'HubSpot API + Calendly' }
    ],
    logs: [
      '[18:42:01.120] INGEST: New lead received from landing page (ID: lead_99a8b1)',
      '[18:42:01.350] INTEL: Querying company data; valuation: $45M, employees: 120',
      '[18:42:01.780] REASONING: ICP matching completed -> Priority Grade A',
      '[18:42:02.110] DISPATCH: HubSpot CRM deal created, executive intro email drafted',
      '[18:42:02.340] SUCCESS: Pipeline terminated with 0 human bottlenecks. Latency: 1.22s'
    ]
  },
  {
    id: 'support-rag',
    name: 'Support Knowledge Swarm',
    nodes: [
      { stepNum: '01', title: 'Omni Ingestion', desc: 'Listens across Slack, Zendesk, Email, and Intercom', meta: 'Stream listener' },
      { stepNum: '02', title: 'Vector RAG Query', desc: 'High-dimensional search against company docs', meta: 'Pinecone / pgvector' },
      { stepNum: '03', title: 'Deterministic Draft', desc: 'Synthesizes verified technical resolution', meta: 'Hallucination check: 0.0%' },
      { stepNum: '04', title: 'Auto-Resolution', desc: 'Executes API action or escalates with context', meta: 'Zendesk ticket closed' }
    ],
    logs: [
      '[18:42:01.050] TICKET: Customer asks: "How to rotate API key in staging cluster?"',
      '[18:42:01.210] EMBEDDING: text-embedding-3-large vectorized in 28ms',
      '[18:42:01.440] RETRIEVAL: Found 3 relevant docs chunks (similarity score: 0.96)',
      '[18:42:01.890] GUARDRAILS: Strict security check passed, no secret tokens leaked',
      '[18:42:02.150] RESOLVED: Custom tailored solution delivered to user in 1.1s'
    ]
  },
  {
    id: 'devops-heal',
    name: 'Auto-Healing Cloud Agent',
    nodes: [
      { stepNum: '01', title: 'Telemetry Hook', desc: 'Monitors Datadog / Prometheus error spikes', meta: '500 Error rate > 2.5%' },
      { stepNum: '02', title: 'Log Root Cause', desc: 'Parses Kubernetes pod crash logs & stack trace', meta: 'Memory leak in worker-04' },
      { stepNum: '03', title: 'Canary Rollback', desc: 'Triggers ArgoCD rollback to previous stable tag', meta: 'Release v2.4.1 restored' },
      { stepNum: '04', title: 'Incident Report', desc: 'Generates post-mortem and notifies oncall on Slack', meta: 'Slack #engineering alert' }
    ],
    logs: [
      '[18:42:01.010] ALERT: Memory threshold exceeded on cluster-us-east-1',
      '[18:42:01.290] AGENT: Identifying offending deployment container SHA-e4891',
      '[18:42:01.620] MITIGATION: Invoking Kubernetes auto-scaler & rerouting traffic',
      '[18:42:01.990] RECOVERY: Pod restarted, health check 200 OK restored',
      '[18:42:02.210] INCIDENT: Post-mortem generated and posted to Slack channel'
    ]
  }
];

export default function AiWorkflowSimulator() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logEntries, setLogEntries] = useState<string[]>(presets[0].logs);
  const [executionCount, setExecutionCount] = useState(14820);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activePreset = presets[activePresetIndex];

  const handleSelectPreset = (index: number) => {
    setActivePresetIndex(index);
    setCurrentStep(0);
    setIsRunning(false);
    setLogEntries(presets[index].logs);
  };

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setLogEntries([`[${new Date().toLocaleTimeString()}] Initializing ${activePreset.name}...`]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step <= activePreset.nodes.length) {
        setCurrentStep(step);
        const newLog = activePreset.logs[step - 1] || `[${new Date().toLocaleTimeString()}] Processing step ${step}...`;
        setLogEntries((prev) => [...prev, newLog]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setExecutionCount((c) => c + 1);
        setLogEntries((prev) => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] ALL 4 AGENT NODES COMPLETED SUCCESSFULLY [200 OK]`
        ]);
      }
    }, 700);
  };

  return (
    <section id="simulator" className="interactive-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>Interactive Demonstration</span>
          </div>
          <h2 className="section-title">
            Experience Welty Tech’s <br />
            <span className="gradient-text">Autonomous AI Workflow Engine.</span>
          </h2>
          <p className="section-desc">
            Test how our custom agentic pipelines eliminate operational friction. Select a real-world enterprise workflow below and simulate live execution in real time.
          </p>
        </div>

        <div className="workflow-simulator-card">
          {/* Header & Preset Switcher */}
          <div className="simulator-header">
            <div className="simulator-title-wrap">
              <h3>{activePreset.name}</h3>
              <p>Autonomous multi-agent orchestration pipeline with deterministic state machine</p>
            </div>

            <div className="workflow-preset-selector">
              {presets.map((preset, idx) => (
                <button
                  key={preset.id}
                  className={`preset-btn ${activePresetIndex === idx ? 'active' : ''}`}
                  onClick={() => handleSelectPreset(idx)}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Pipeline Nodes */}
          <div className="workflow-pipeline-container">
            {activePreset.nodes.map((node, nIdx) => {
              const isCompleted = currentStep > nIdx + 1;
              const isActive = currentStep === nIdx + 1;

              return (
                <div
                  key={nIdx}
                  className={`pipeline-node ${isActive ? 'active-step' : ''} ${isCompleted ? 'completed-step' : ''}`}
                  onClick={() => setCurrentStep(nIdx + 1)}
                >
                  <div className="node-header">
                    <span className="node-number">NODE {node.stepNum}</span>
                    <span className="node-status-dot" />
                  </div>
                  <h4 className="node-title">{node.title}</h4>
                  <p className="node-desc">{node.desc}</p>
                  <div className="node-meta">
                    <span>{node.meta}</span>
                  </div>
                  {nIdx < activePreset.nodes.length - 1 && <div className="node-connector" />}
                </div>
              );
            })}
          </div>

          {/* Bottom Execution Panel: Terminal Log & Live Stats */}
          <div className="simulator-bottom-panel">
            {/* Terminal Box */}
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span>welty-agent-runtime v16.3 :: telemetry stream</span>
                <span>STATE: {isRunning ? 'EXECUTING' : 'READY'}</span>
              </div>

              <div>
                {logEntries.map((log, lIdx) => (
                  <div key={lIdx} className="log-entry">
                    <span className="log-ok">&gt;</span> {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Simulator Controls & Stats */}
            <div className="simulator-controls">
              <div className="sim-stats-grid">
                <div className="sim-stat-box">
                  <div className="title">Throughput</div>
                  <div className="value">42ms</div>
                </div>
                <div className="sim-stat-box">
                  <div className="title">Accuracy</div>
                  <div className="value" style={{ color: 'var(--color-brand-tech-glow)' }}>99.8%</div>
                </div>
                <div className="sim-stat-box">
                  <div className="title">Total Runs</div>
                  <div className="value">{mounted ? executionCount.toLocaleString('en-US') : executionCount}</div>
                </div>
              </div>

              <div className="sim-actions-row">
                <button
                  className="btn btn-primary"
                  onClick={runSimulation}
                  disabled={isRunning}
                  style={{ width: '100%', opacity: isRunning ? 0.7 : 1 }}
                >
                  {isRunning ? (
                    <>
                      <span className="pulse-dot" />
                      <span>Simulating Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span>Trigger Simulation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
