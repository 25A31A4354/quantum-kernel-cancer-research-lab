import React from 'react';

export default function DatasetInfo({ dataset }) {
  const isPending = !dataset || dataset.status === 'pending';

  const renderValue = (val, placeholder = 'Pending dataset verification') => {
    if (val === null || val === undefined || val === '') {
      return <span className="spec-kv-pending">{placeholder}</span>;
    }
    return <span className="spec-kv-value">{val}</span>;
  };

  return (
    <section id="dataset" className="section-wrapper section-light scroll-anchor">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">Data Governance</div>
            <h2 className="section-title">Cohort Metadata &amp; Preprocessing Provenance</h2>
            <p className="section-subtitle">
              Strict experimental protocol requires verified biological provenance before model training.
              Synthetic or placeholder records are prohibited from being presented as real clinical findings.
            </p>
          </div>

          <span className="status-pill pill-pending">
            {isPending ? 'Pending Dataset Verification' : 'Verified Cohort'}
          </span>
        </div>

        {/* 3 Stripe-Style Elevated White Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {/* Card 1: Provenance & Identity */}
          <div className="stripe-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(23, 105, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-blue)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                Cohort Provenance
              </h3>
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Dataset Name</span>
              {renderValue(dataset?.name)}
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Source URL / Accession</span>
              {dataset?.sourceUrl ? (
                <a
                  href={dataset.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-blue)', textDecoration: 'none', fontWeight: 600 }}
                >
                  {dataset.sourceUrl}
                </a>
              ) : (
                renderValue(null)
              )}
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Target Phenotype</span>
              {renderValue(dataset?.targetLabel)}
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Class Definitions</span>
              {renderValue(dataset?.classDefinitions)}
            </div>
          </div>

          {/* Card 2: Feature Matrix Dimensions */}
          <div className="stripe-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(2, 132, 199, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                Dimensionality &amp; Cohort
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>TOTAL SAMPLES (N)</div>
                <div className="mono tabular-nums" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                  {renderValue(dataset?.samplesCount)}
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>FEATURE COUNT (D)</div>
                <div className="mono tabular-nums" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                  {renderValue(dataset?.featuresCount)}
                </div>
              </div>
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Feature Selection</span>
              {renderValue(dataset?.featureExtractionMethod)}
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Class Distribution</span>
              {renderValue(dataset?.classDistribution ? JSON.stringify(dataset.classDistribution) : null)}
            </div>
          </div>

          {/* Card 3: Validation Splits & Preprocessing */}
          <div className="stripe-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(23, 105, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-blue)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                Evaluation Protocol
              </h3>
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Train / Test Partition</span>
              <span className="tabular-nums">
                {dataset?.trainTestSplit?.trainRatio
                  ? `${(dataset.trainTestSplit.trainRatio * 100).toFixed(0)}% Train / ${(dataset.trainTestSplit.testRatio * 100).toFixed(0)}% Test`
                  : renderValue(null)}
              </span>
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Validation Strategy</span>
              {renderValue(dataset?.trainTestSplit?.strategy)}
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Missing Value Imputation</span>
              {renderValue(dataset?.missingValuesHandling)}
            </div>

            <div className="spec-kv-row">
              <span className="spec-kv-label">Random Seed</span>
              <span className="tabular-nums">{renderValue(dataset?.trainTestSplit?.randomState)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
