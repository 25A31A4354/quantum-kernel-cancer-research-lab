import React from 'react';

export default function HeroSection({ models, dataset }) {
  const classicalModel = models?.classical || {};
  const quantumModel = models?.quantum || {};

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f8fafc',
        paddingTop: '4.5rem',
        paddingBottom: '5.5rem',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      {/* Stripe-Inspired Fluid Atmospheric Multicolour Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle 420px at 92% 38%, rgba(254, 240, 138, 0.45) 0%, rgba(253, 224, 71, 0.18) 35%, transparent 70%),
            radial-gradient(ellipse 65% 55% at 85% 15%, rgba(6, 182, 212, 0.22) 0%, transparent 65%),
            radial-gradient(ellipse 70% 60% at 65% 45%, rgba(14, 165, 233, 0.2) 0%, transparent 70%),
            radial-gradient(circle 500px at 45% 18%, rgba(23, 105, 255, 0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 75% 75%, rgba(139, 53, 232, 0.12) 0%, transparent 70%),
            linear-gradient(135deg, #f8fafc 0%, #edf6fd 45%, #f5f3ff 75%, #ffffff 100%)
          `,
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
          }}
        >
          {/* Left Column: Bold Headline & Editorial Content Grid */}
          <div>
            {/* Understated Research Status Label (Restrained & Elegant) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.32rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(203, 213, 225, 0.7)',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
                marginBottom: '1.6rem',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#0284c7',
                }}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  letterSpacing: '0.01em',
                }}
              >
                Qiskit Fall Fest 2026
              </span>
              <span style={{ color: '#94a3b8' }}>&bull;</span>
              <span
                style={{
                  fontSize: '0.76rem',
                  color: '#64748b',
                  fontWeight: 500,
                }}
              >
                Research Prototype
              </span>
            </div>

            {/* Dark Navy Headline with Controlled Line Breaks */}
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4.2vw, 3.5rem)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '1.35rem',
              }}
            >
              Can quantum kernels
              <br />
              discover useful patterns
              <br />
              in cancer data?
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: '1.14rem',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '520px',
                marginBottom: '2.25rem',
                fontWeight: 400,
              }}
            >
              An experimental research platform comparing quantum-kernel machine learning
              with classical baselines on cancer-related datasets.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href="#comparison"
                className="btn-primary"
                style={{
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.94rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.18)',
                }}
              >
                Explore the experiment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#overview"
                className="btn-secondary"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#0f172a',
                  borderColor: '#cbd5e1',
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.94rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                }}
              >
                View methodology
              </a>
            </div>

            {/* Technical Context Tags */}
            <div
              style={{
                marginTop: '2.5rem',
                fontSize: '0.8rem',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#0284c7' }}>&bull;</span> WDBC Cohort (Verified Benchmark)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#1769ff' }}>&bull;</span> ZZFeatureMap Kernel
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#475569' }}>&bull;</span> RBF-SVC Baseline
              </span>
            </div>
          </div>

          {/* Right Column: Floating Research Dashboard Composition */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Floating Panel 1: Primary Model Telemetry Preview (Clean Elevated Card) */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-floating)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                color: '#0f172a',
                transition: 'transform 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Dual-Model Telemetry Preview
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: dataset?.status === 'verified' ? '#047857' : '#92400e',
                    backgroundColor: dataset?.status === 'verified' ? '#ecfdf5' : '#fef3c7',
                    border: `1px solid ${dataset?.status === 'verified' ? '#a7f3d0' : '#fde68a'}`,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                  }}
                >
                  {dataset?.status === 'verified' ? 'Verified Empirical Results' : 'Pending experiment results'}
                </span>
              </div>

              {/* Side-by-side Balanced Model Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                {/* Classical Baseline Preview */}
                <div
                  style={{
                    background: '#f8fafc',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#64748b' }} />
                    <span style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>
                      Classical Baseline
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {classicalModel.name ? 'RBF-SVC' : 'Classical Baseline'}
                  </div>
                  <div className="mono tabular-nums" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>
                    {classicalModel.metrics?.balancedAccuracy !== null && classicalModel.metrics?.balancedAccuracy !== undefined
                      ? `${(classicalModel.metrics.balancedAccuracy * 100).toFixed(1)}%`
                      : '—'}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b' }}>Balanced Accuracy</div>
                </div>

                {/* Quantum-Kernel Model Preview (Equally weighted) */}
                <div
                  style={{
                    background: 'rgba(23, 105, 255, 0.03)',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(23, 105, 255, 0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#1769ff' }} />
                    <span style={{ fontSize: '0.72rem', color: '#1769ff', fontWeight: 700, textTransform: 'uppercase' }}>
                      Quantum Model
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {quantumModel.kernelMethod ? 'ZZFeatureMap' : 'Quantum Model'}
                  </div>
                  <div className="mono tabular-nums" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>
                    {quantumModel.metrics?.balancedAccuracy !== null && quantumModel.metrics?.balancedAccuracy !== undefined
                      ? `${(quantumModel.metrics.balancedAccuracy * 100).toFixed(1)}%`
                      : '—'}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b' }}>Balanced Accuracy</div>
                </div>
              </div>
            </div>

            {/* Floating Panel 2: Selective Dark Technical Panel for Quantum Gram Matrix */}
            <div
              style={{
                backgroundColor: '#0f172a',
                borderRadius: 'var(--radius-lg)',
                padding: '1.35rem 1.5rem',
                boxShadow: 'var(--shadow-navy)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                marginLeft: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="mono" style={{ fontSize: '0.76rem', color: '#38bdf8', fontWeight: 600 }}>
                  K(xᵢ, xⱼ) &bull; Hilbert State Overlap
                </span>
                <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontStyle: 'italic' }}>
                  ZZFeatureMap Gram Matrix
                </span>
              </div>

              {/* Mini Heatmap Visualization Grid */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: '3px',
                    width: '110px',
                    height: '110px',
                    flexShrink: 0,
                    background: '#0a0f1d',
                    padding: '3px',
                    borderRadius: '6px',
                  }}
                >
                  {[
                    1.0, 0.82, 0.34, 0.12, 0.55, 0.08,
                    0.82, 1.0, 0.41, 0.28, 0.63, 0.19,
                    0.34, 0.41, 1.0, 0.77, 0.29, 0.52,
                    0.12, 0.28, 0.77, 1.0, 0.18, 0.64,
                    0.55, 0.63, 0.29, 0.18, 1.0, 0.35,
                    0.08, 0.19, 0.52, 0.64, 0.35, 1.0,
                  ].map((val, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: `rgba(56, 189, 248, ${val})`,
                        borderRadius: '2px',
                      }}
                      title={`K_ij = ${val}`}
                    />
                  ))}
                </div>

                <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Quantum Hilbert Inner Product
                  </div>
                  <p style={{ margin: 0, fontSize: '0.74rem', color: '#94a3b8' }}>
                    Calculates pairwise transition fidelities |&lang;&phi;(xᵢ)|&phi;(xⱼ)&rang;|² evaluated via statevector simulation.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Chip 3: Dataset Status Badge */}
            <div
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#ffffff',
                borderRadius: '9999px',
                padding: '0.45rem 1rem',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontSize: '0.78rem',
                color: '#0f172a',
                fontWeight: 600,
                marginLeft: '2.5rem',
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: dataset?.status === 'verified' ? '#10b981' : '#d97706' }} />
              <span>Dataset Provenance:</span>
              <span style={{ color: '#64748b', fontWeight: 400 }}>
                {dataset?.status === 'verified' ? 'WDBC Cohort (Verified)' : 'Pending Verification'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
