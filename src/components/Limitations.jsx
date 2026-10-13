import React from 'react';

export default function Limitations() {
  const guardrails = [
    {
      code: 'PROTOCOL-01',
      title: 'Experimental Research Prototype Only',
      desc: 'This platform and quantum feature map circuits represent an exploratory academic research prototype. It is strictly not a clinical diagnostic tool, medical device, patient stratification aid, or therapeutic decision-support system.',
      badge: 'Non-Clinical',
      badgeClass: 'pill-prototype',
    },
    {
      code: 'PROTOCOL-02',
      title: 'No Premature Claims of Quantum Advantage',
      desc: 'Performance metrics observed on small or reduced-dimension cohorts do not demonstrate asymptotic quantum computational advantage or superiority over fully optimized classical algorithms.',
      badge: 'Theoretical Scope',
      badgeClass: 'pill-quantum',
    },
    {
      code: 'PROTOCOL-03',
      title: 'High Sensitivity to Preprocessing Methodology',
      desc: 'All statistical findings are heavily contingent on feature selection algorithms (e.g. PCA, SelectKBest, variance thresholding), scaling parameters, and patient inclusion criteria.',
      badge: 'Data Sensitivity',
      badgeClass: 'pill-pending',
    },
    {
      code: 'PROTOCOL-04',
      title: 'Strict Evaluation Parity Requirement',
      desc: 'Any comparative benchmarking between quantum and classical models must execute on strictly identical holdout splits, cross-validation folds, random seeds, and class stratification.',
      badge: 'Evaluation Rigor',
      badgeClass: 'pill-sky',
    },
    {
      code: 'PROTOCOL-05',
      title: 'Prohibition of Synthetic Findings as Real Data',
      desc: 'Synthetic, simulated, or randomized test vectors utilized for software verification must never be represented, reported, or published as genuine oncological research findings.',
      badge: 'Data Integrity',
      badgeClass: 'pill-prototype',
    },
  ];

  return (
    <section id="limitations" className="section-wrapper section-light scroll-anchor">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">
            Responsible Use &bull; Governance
          </div>
          <h2 className="section-title">Ethical Guardrails &amp; Scientific Limitations</h2>
          <p className="section-subtitle">
            Mandatory ethical and experimental protocols governing all computational workflows conducted
            under the Qiskit Fall Fest 2026 hackathon initiative.
          </p>
        </div>

        {/* Stripe-style White Card Table */}
        <div className="stripe-card" style={{ padding: '0.75rem 2rem' }}>
          {guardrails.map((item, idx) => (
            <div
              key={item.code}
              style={{
                padding: '1.5rem 0',
                borderBottom: idx !== guardrails.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--color-slate-light)', fontWeight: 600 }}>
                    {item.code}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>

                <span className={`status-pill ${item.badgeClass}`}>
                  {item.badge}
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-slate)', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
