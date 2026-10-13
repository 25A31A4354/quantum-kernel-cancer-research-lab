import React from 'react';

export default function ResearchInsights({ insights, models }) {
  const isReady = insights?.ready;

  const analyticalAxes = [
    {
      pill: 'Rare Phenotype Detection',
      pillColor: 'pill-quantum',
      title: 'Minority Class Sensitivity & Macro-F1',
      desc: 'Evaluating Macro-F1 resilience across skewed oncological cohorts to determine whether quantum feature mapping improves minority class detection without degrading specificity.',
    },
    {
      pill: 'Clinical Metric Skew',
      pillColor: 'pill-sky',
      title: 'Accuracy vs. Balanced Accuracy Discrepancy',
      desc: 'Investigating whether unweighted classification accuracy conceals false negatives in imbalanced clinical samples, prioritizing balanced accuracy for clinical decision boundaries.',
    },
    {
      pill: 'Computational Complexity',
      pillColor: 'pill-prototype',
      title: 'Kernel Matrix Computation vs. Gram Cache',
      desc: 'Assessing polynomial O(N²) scaling overhead of quantum transition state fidelity measurements compared against classical matrix multiplication caching.',
    },
  ];

  return (
    <section id="insights" className="section-wrapper section-white scroll-anchor">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">Synthesis &amp; Analysis</div>
          <h2 className="section-title">Research Findings &amp; Empirical Synthesis</h2>
          <p className="section-subtitle">
            Critical comparative synthesis of quantum Hilbert space representations versus classical support vector baselines.
            Conclusions are formulated exclusively from verified cross-validation runs.
          </p>
        </div>

        {!isReady ? (
          <div className="stripe-card" style={{ padding: '3rem 2.5rem' }}>
            <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(23, 105, 255, 0.08)',
                  color: 'var(--color-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Insights will be generated from verified experiment results.
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Automated synthesis triggers once both classical and quantum pipelines conclude cross-validated
                evaluation on the locked holdout split.
              </p>

              {/* 3 Stripe-Style Analytical Target Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                  textAlign: 'left',
                }}
              >
                {analyticalAxes.map((axis, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                    }}
                  >
                    <span className={`status-pill ${axis.pillColor}`} style={{ marginBottom: '0.65rem' }}>
                      {axis.pill}
                    </span>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0.35rem 0' }}>
                      {axis.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-slate)', lineHeight: 1.5, margin: 0 }}>
                      {axis.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="stripe-card">
              <span className="status-pill pill-quantum" style={{ marginBottom: '0.75rem' }}>Model Comparison</span>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-navy)', fontWeight: 600 }}>{insights.superiorModel}</p>
            </div>

            <div className="stripe-card">
              <span className="status-pill pill-sky" style={{ marginBottom: '0.75rem' }}>Class Skew</span>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-slate)' }}>{insights.balancedAccuracyAnalysis}</p>
            </div>

            <div className="stripe-card">
              <span className="status-pill pill-prototype" style={{ marginBottom: '0.75rem' }}>Error Diagnostics</span>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-slate)' }}>{insights.errorAnalysis}</p>
            </div>

            <div className="stripe-card">
              <span className="status-pill pill-quantum" style={{ marginBottom: '0.75rem' }}>Computational Cost</span>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-slate)' }}>{insights.computationalCostAnalysis}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
