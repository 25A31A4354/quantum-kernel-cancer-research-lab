import React, { useState } from 'react';

export default function PerformanceVisualizations({ models }) {
  const [activeTab, setActiveTab] = useState('metrics'); // 'metrics' | 'confusion'
  const classical = models?.classical;
  const quantum = models?.quantum;

  const hasMetrics =
    classical?.metrics?.accuracy !== null ||
    quantum?.metrics?.accuracy !== null;

  const hasClassicalCM = classical?.confusionMatrix !== null;
  const hasQuantumCM = quantum?.confusionMatrix !== null;

  return (
    <section id="visualizations" className="section-wrapper section-light scroll-anchor">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">Performance Telemetry</div>
            <h2 className="section-title">Comparative Metrics &amp; Error Diagnostics</h2>
            <p className="section-subtitle">
              Empirical evaluation visualising classification boundaries and confusion matrices.
              Charts will strictly reflect evaluated cross-validation runs without synthetic interpolation.
            </p>
          </div>

          {/* Stripe-style Pill Switcher */}
          <div
            style={{
              display: 'inline-flex',
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: '9999px',
              padding: '3px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <button
              onClick={() => setActiveTab('metrics')}
              style={{
                border: 'none',
                background: activeTab === 'metrics' ? 'var(--color-navy)' : 'transparent',
                color: activeTab === 'metrics' ? '#ffffff' : 'var(--color-slate)',
                padding: '6px 18px',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Metric Bars
            </button>
            <button
              onClick={() => setActiveTab('confusion')}
              style={{
                border: 'none',
                background: activeTab === 'confusion' ? 'var(--color-navy)' : 'transparent',
                color: activeTab === 'confusion' ? '#ffffff' : 'var(--color-slate)',
                padding: '6px 18px',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Confusion Matrices
            </button>
          </div>
        </div>

        {activeTab === 'metrics' ? (
          /* Metric Comparison View */
          <div className="stripe-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                Accuracy, Balanced Accuracy &amp; Macro-F1 Breakdown
              </h3>

              {/* Legend */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem', fontWeight: 600 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-slate)' }}>
                  <span style={{ width: '12px', height: '12px', backgroundColor: '#64748b', borderRadius: '3px' }}></span>
                  Classical Baseline (RBF-SVC)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-blue)' }}>
                  <span style={{ width: '12px', height: '12px', backgroundColor: 'var(--color-blue)', borderRadius: '3px' }}></span>
                  Quantum Kernel (ZZFeatureMap)
                </span>
              </div>
            </div>

            {!hasMetrics ? (
              <div className="stripe-empty-state">
                <svg style={{ width: '40px', height: '40px', color: '#94a3b8', marginBottom: '1rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18" />
                  <rect x="7" y="10" width="3" height="7" rx="1" />
                  <rect x="14" y="6" width="3" height="11" rx="1" />
                </svg>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                  Awaiting Verified Experiment Results
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-slate)', maxWidth: '480px', lineHeight: 1.55 }}>
                  Performance comparison bars will render automatically once cross-validation evaluation runs complete.
                  No simulated bars or synthetic prediction scores are displayed.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', padding: '0.5rem 0' }}>
                {['accuracy', 'balancedAccuracy', 'macroF1'].map((metricKey) => {
                  const label =
                    metricKey === 'accuracy'
                      ? 'Accuracy'
                      : metricKey === 'balancedAccuracy'
                      ? 'Balanced Accuracy'
                      : 'Macro-F1';
                  const cVal = classical?.metrics?.[metricKey] ?? 0;
                  const qVal = quantum?.metrics?.[metricKey] ?? 0;

                  return (
                    <div key={metricKey}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.45rem' }}>
                        <span style={{ color: 'var(--color-navy)', fontWeight: 600 }}>{label}</span>
                        <div className="mono tabular-nums" style={{ fontSize: '0.82rem' }}>
                          <span style={{ color: 'var(--color-slate)' }}>Classical: {(cVal * 100).toFixed(1)}%</span>
                          {' | '}
                          <span style={{ color: 'var(--color-blue)', fontWeight: 600 }}>Quantum: {(qVal * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {/* Classical Bar */}
                        <div style={{ height: '14px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div
                            style={{
                              height: '100%',
                              width: `${Math.min(cVal * 100, 100)}%`,
                              background: '#64748b',
                              borderRadius: '4px',
                            }}
                          />
                        </div>
                        {/* Quantum Bar */}
                        <div style={{ height: '14px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <div
                            style={{
                              height: '100%',
                              width: `${Math.min(qVal * 100, 100)}%`,
                              background: 'linear-gradient(90deg, #1769ff, #06b6d4)',
                              borderRadius: '4px',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Confusion Matrices View */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {/* Classical Matrix */}
            <div className="stripe-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                  Classical RBF-SVC Confusion Matrix
                </h3>
                <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--color-slate)' }}>
                  scikit-learn
                </span>
              </div>

              {!hasClassicalCM ? (
                <div className="stripe-empty-state" style={{ padding: '2.5rem 1rem' }}>
                  <svg style={{ width: '36px', height: '36px', color: '#94a3b8', marginBottom: '0.75rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="12" y1="3" x2="12" y2="21" />
                  </svg>
                  <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.2rem' }}>
                    Pending Test Predictions
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-slate)', margin: 0 }}>
                    Confusion matrix will render after classical model inference executes on the test partition.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', textAlign: 'center' }}>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>TRUE NEGATIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                      {classical.confusionMatrix.matrix[0][0]}
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    <div style={{ fontSize: '0.72rem', color: '#991b1b', fontWeight: 600 }}>FALSE POSITIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#dc2626', marginTop: '0.2rem' }}>
                      {classical.confusionMatrix.matrix[0][1]}
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    <div style={{ fontSize: '0.72rem', color: '#991b1b', fontWeight: 600 }}>FALSE NEGATIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#dc2626', marginTop: '0.2rem' }}>
                      {classical.confusionMatrix.matrix[1][0]}
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>TRUE POSITIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                      {classical.confusionMatrix.matrix[1][1]}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quantum Matrix */}
            <div className="stripe-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                  Quantum Kernel Confusion Matrix
                </h3>
                <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--color-blue)', fontWeight: 600 }}>
                  Qiskit QSVC
                </span>
              </div>

              {!hasQuantumCM ? (
                <div className="stripe-empty-state" style={{ padding: '2.5rem 1rem' }}>
                  <svg style={{ width: '36px', height: '36px', color: 'var(--color-blue)', marginBottom: '0.75rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="12" y1="3" x2="12" y2="21" />
                  </svg>
                  <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.2rem' }}>
                    Pending Experiment Results
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-slate)', margin: 0 }}>
                    Confusion matrix will render after quantum kernel matrix computation and dual optimization finish.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', textAlign: 'center' }}>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>TRUE NEGATIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                      {quantum.confusionMatrix.matrix[0][0]}
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    <div style={{ fontSize: '0.72rem', color: '#991b1b', fontWeight: 600 }}>FALSE POSITIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#dc2626', marginTop: '0.2rem' }}>
                      {quantum.confusionMatrix.matrix[0][1]}
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    <div style={{ fontSize: '0.72rem', color: '#991b1b', fontWeight: 600 }}>FALSE NEGATIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#dc2626', marginTop: '0.2rem' }}>
                      {quantum.confusionMatrix.matrix[1][0]}
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>TRUE POSITIVES</div>
                    <div className="mono tabular-nums" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                      {quantum.confusionMatrix.matrix[1][1]}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
