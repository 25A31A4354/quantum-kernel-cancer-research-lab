import React from 'react';

export default function ModelComparison({ models }) {
  const classical = models?.classical;
  const quantum = models?.quantum;

  const renderMetric = (val) => {
    if (val === null || val === undefined) {
      return (
        <span style={{ color: 'var(--color-slate-muted)', fontSize: '0.86rem', fontStyle: 'italic', fontWeight: 500 }}>
          Pending experiment results
        </span>
      );
    }
    return (
      <span className="mono tabular-nums" style={{ color: 'var(--color-navy)', fontSize: '1.45rem', fontWeight: 700 }}>
        {(val * 100).toFixed(2)}%
      </span>
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="status-pill" style={{ background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0' }}>COMPLETED</span>;
      case 'in_progress':
        return <span className="status-pill pill-quantum">IN PROGRESS</span>;
      case 'failed':
        return <span className="status-pill" style={{ background: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca' }}>FAILED</span>;
      default:
        return <span className="status-pill pill-pending">AWAITING EXPERIMENT RUN</span>;
    }
  };

  return (
    <section id="comparison" className="section-wrapper section-white scroll-anchor">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">Controlled Benchmark</div>
          <h2 className="section-title">Classical Baseline vs. Quantum Kernel Model</h2>
          <p className="section-subtitle">
            Side-by-side empirical benchmark evaluated on strictly identical cross-validation partitions.
            Neither pipeline receives preferential feature pre-selection or hyperparameter tuning.
          </p>
        </div>

        {/* 2-Column Model Comparison Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Classical Baseline Card */}
          <div
            className="stripe-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '4px solid var(--color-slate)',
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--color-slate)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  CLASSICAL BASELINE
                </span>
                {getStatusBadge(classical?.status)}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                {classical?.name || 'Classical Support Vector Classifier'}
              </h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-slate)', marginBottom: '1.25rem' }}>
                Framework: <strong style={{ color: 'var(--color-navy)' }}>{classical?.framework || 'scikit-learn'}</strong>
              </div>

              {/* Kernel Spec Box */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  KERNEL METHOD
                </div>
                <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                  {classical?.kernelMethod || 'Radial Basis Function (RBF) Kernel'}
                </div>
              </div>

              {/* Metrics Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div className="spec-kv-row" style={{ alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'var(--color-navy)', fontWeight: 600 }}>Accuracy</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Overall classification correctness</div>
                  </div>
                  {renderMetric(classical?.metrics?.accuracy)}
                </div>

                <div className="spec-kv-row" style={{ alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'var(--color-navy)', fontWeight: 600 }}>Balanced Accuracy</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Macro-average recall per class</div>
                  </div>
                  {renderMetric(classical?.metrics?.balancedAccuracy)}
                </div>

                <div className="spec-kv-row" style={{ alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'var(--color-navy)', fontWeight: 600 }}>Macro-F1</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Harmonic mean of precision &amp; recall</div>
                  </div>
                  {renderMetric(classical?.metrics?.macroF1)}
                </div>
              </div>
            </div>

            {/* Architecture Telemetry Footer */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: 'var(--color-slate)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>Execution: x86 Classical CPU</span>
              <span>Wall Clock: {classical?.runtimeSeconds ? `${classical.runtimeSeconds}s` : 'Pending'}</span>
            </div>
          </div>

          {/* Quantum-Kernel Model Card (Stripe-styled with electric gradient accent, but no superiority bias) */}
          <div
            className="stripe-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '4px solid var(--color-blue)',
              position: 'relative',
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--color-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  QUANTUM KERNEL CANDIDATE
                </span>
                {getStatusBadge(quantum?.status)}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                {quantum?.name || 'Qiskit Quantum Kernel Model'}
              </h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-slate)', marginBottom: '1.25rem' }}>
                Framework: <strong style={{ color: 'var(--color-navy)' }}>{quantum?.framework || 'Qiskit Machine Learning'}</strong>
              </div>

              {/* Kernel Spec Box */}
              <div
                style={{
                  background: 'rgba(23, 105, 255, 0.04)',
                  border: '1px solid rgba(23, 105, 255, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--color-blue)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  QUANTUM FEATURE MAP &amp; KERNEL
                </div>
                <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                  {quantum?.kernelMethod || 'FidelityQuantumKernel (ZZFeatureMap, depth=2)'}
                </div>
              </div>

              {/* Metrics Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div className="spec-kv-row" style={{ alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'var(--color-navy)', fontWeight: 600 }}>Accuracy</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Overall classification correctness</div>
                  </div>
                  {renderMetric(quantum?.metrics?.accuracy)}
                </div>

                <div className="spec-kv-row" style={{ alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'var(--color-navy)', fontWeight: 600 }}>Balanced Accuracy</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Macro-average recall per class</div>
                  </div>
                  {renderMetric(quantum?.metrics?.balancedAccuracy)}
                </div>

                <div className="spec-kv-row" style={{ alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'var(--color-navy)', fontWeight: 600 }}>Macro-F1</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Harmonic mean of precision &amp; recall</div>
                  </div>
                  {renderMetric(quantum?.metrics?.macroF1)}
                </div>
              </div>
            </div>

            {/* Architecture Telemetry Footer */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: 'var(--color-slate)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>Backend: Statevector Simulator</span>
              <span>Wall Clock: {quantum?.runtimeSeconds ? `${quantum.runtimeSeconds}s` : 'Pending'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
