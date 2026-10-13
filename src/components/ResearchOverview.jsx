import React from 'react';

export default function ResearchOverview() {
  return (
    <section id="overview" className="section-wrapper section-white scroll-anchor">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">Scientific Methodology</div>
          <h2 className="section-title">Research Objective &amp; Quantum Theory</h2>
          <p className="section-subtitle">
            Evaluating whether mapping cancer genomics into quantum Hilbert states reveals separable decision boundaries
            that classical non-linear kernels cannot efficiently represent.
          </p>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Research Question, Objective & Provisional Task */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Highlighted Question Callout */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid #1769ff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  marginBottom: '1.75rem',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: '#1769ff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.65rem',
                  }}
                >
                  Core Research Question
                </div>
                <blockquote
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    lineHeight: 1.48,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  &ldquo;Can a quantum-kernel model learn useful patterns from the selected cancer-related dataset, and how does it compare with a classical baseline?&rdquo;
                </blockquote>
              </div>

              {/* Research Objective */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Empirical Benchmark Framework
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65 }}>
                  The research goal is to compare Qiskit quantum-kernel models against classical machine learning baselines on cancer datasets.
                  Instead of presuming quantum advantage, we measure concrete empirical metrics (Accuracy, Balanced Accuracy, and Macro-F1)
                  under identical data partitions.
                </p>
              </div>
            </div>

            {/* Task Callout (Accurately documented benchmark dataset) */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#0369a1',
                  backgroundColor: '#e0f2fe',
                  border: '1px solid #bae6fd',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '9999px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                Benchmark Task
              </span>
              <div style={{ fontSize: '0.86rem', lineHeight: 1.55 }}>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.2rem' }}>
                  Target Phenotype: Benign vs. Malignant Breast Mass Classification
                </strong>
                <span style={{ color: '#475569' }}>
                  Evaluated using the Breast Cancer Wisconsin Diagnostic cohort (569 fine-needle aspirates, 30 continuous cell nuclei morphology measurements) as a verified, peer-reviewed clinical benchmark after confirming local unavailability of raw lung cancer EGFR sequencing files.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Navy Technical Quantum Circuit & Theory Panel */}
          <div className="navy-tech-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="mono" style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 600 }}>
                  QUANTUM FEATURE MAP
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#38bdf8',
                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                  }}
                >
                  Qiskit ML 0.7+
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
                State Transition Fidelity
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                A quantum kernel maps classical features <span className="mono" style={{ color: '#38bdf8' }}>x</span> to
                quantum states <span className="mono" style={{ color: '#93c5fd' }}>|&phi;(x)&rang;</span> using parameterized unitary evolution <span className="mono">U(x)</span>.
                Inner products represent state overlap amplitudes:
              </p>

              {/* Exact Formula Strip */}
              <div
                style={{
                  background: 'rgba(10, 15, 29, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem 1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <span>K(x, x&apos;) = |&lang;0| U<sup>&dagger;</sup>(x) U(x&apos;) |0&rang;|<sup>2</sup></span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Gram Metric</span>
              </div>

              {/* Vector Circuit Schematic (ZZFeatureMap) */}
              <div
                style={{
                  background: 'rgba(10, 15, 29, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  overflowX: 'auto',
                  marginBottom: '1rem',
                }}
              >
                <svg viewBox="0 0 460 110" style={{ width: '100%', minWidth: '400px', height: 'auto', display: 'block' }}>
                  {/* Wires */}
                  <text x="10" y="35" fill="#94a3b8" fontSize="11" fontFamily="var(--font-mono)">|0⟩ q0</text>
                  <line x1="55" y1="32" x2="440" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

                  <text x="10" y="82" fill="#94a3b8" fontSize="11" fontFamily="var(--font-mono)">|0⟩ q1</text>
                  <line x1="55" y1="78" x2="440" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

                  {/* Hadamard Gates */}
                  <rect x="75" y="18" width="28" height="28" rx="4" fill="#1769ff" />
                  <text x="84" y="36" fill="#ffffff" fontSize="12" fontFamily="var(--font-mono)" fontWeight="700">H</text>

                  <rect x="75" y="64" width="28" height="28" rx="4" fill="#1769ff" />
                  <text x="84" y="82" fill="#ffffff" fontSize="12" fontFamily="var(--font-mono)" fontWeight="700">H</text>

                  {/* Rotations */}
                  <rect x="125" y="18" width="58" height="28" rx="4" fill="#1e293b" stroke="rgba(255,255,255,0.2)" />
                  <text x="132" y="36" fill="#38bdf8" fontSize="10.5" fontFamily="var(--font-mono)">Rz(x₀)</text>

                  <rect x="125" y="64" width="58" height="28" rx="4" fill="#1e293b" stroke="rgba(255,255,255,0.2)" />
                  <text x="132" y="82" fill="#38bdf8" fontSize="10.5" fontFamily="var(--font-mono)">Rz(x₁)</text>

                  {/* Entanglement CNOTs */}
                  <circle cx="215" cy="32" r="4" fill="#38bdf8" />
                  <line x1="215" y1="32" x2="215" y2="78" stroke="#38bdf8" strokeWidth="1.5" />
                  <circle cx="215" cy="78" r="7" fill="transparent" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="215" y1="71" x2="215" y2="85" stroke="#38bdf8" strokeWidth="1.2" />
                  <line x1="208" y1="78" x2="222" y2="78" stroke="#38bdf8" strokeWidth="1.2" />

                  {/* Phase Interaction */}
                  <rect x="245" y="64" width="82" height="28" rx="4" fill="#0284c7" />
                  <text x="252" y="82" fill="#ffffff" fontSize="10" fontFamily="var(--font-mono)">Rz(2φ(x))</text>

                  <circle cx="355" cy="32" r="4" fill="#38bdf8" />
                  <line x1="355" y1="32" x2="355" y2="78" stroke="#38bdf8" strokeWidth="1.5" />
                  <circle cx="355" cy="78" r="7" fill="transparent" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="355" y1="71" x2="355" y2="85" stroke="#38bdf8" strokeWidth="1.2" />
                  <line x1="348" y1="78" x2="362" y2="78" stroke="#38bdf8" strokeWidth="1.2" />

                  {/* Measurement */}
                  <rect x="395" y="20" width="24" height="24" rx="3" fill="#1e293b" stroke="rgba(255,255,255,0.2)" />
                  <path d="M400 37 A5 5 0 0 1 414 37 M407 33 L412 25" fill="none" stroke="#38bdf8" strokeWidth="1.2" />

                  <rect x="395" y="66" width="24" height="24" rx="3" fill="#1e293b" stroke="rgba(255,255,255,0.2)" />
                  <path d="M400 83 A5 5 0 0 1 414 83 M407 79 L412 71" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.85rem' }}>
              <span>Phase: &phi;(x) = (&pi; - x₀)(&pi; - x₁)</span>
              <span className="mono" style={{ color: '#38bdf8' }}>Fidelity Matrix Output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
