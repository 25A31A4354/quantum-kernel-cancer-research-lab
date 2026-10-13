import React from 'react';
import QuantumLogo from './QuantumLogo';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '3.5rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Identity & Context (Minimal Logo + Clean Wordmark) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <QuantumLogo size={26} dark={true} />
            <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Quantum Kernel Cancer Research Lab
            </span>
            <span style={{ color: '#475569' }}>&bull;</span>
            <span style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600 }}>
              Qiskit Fall Fest 2026
            </span>
          </div>

          {/* Research Prototype Disclaimer */}
          <p
            style={{
              fontSize: '0.84rem',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong>Research Prototype Notice:</strong> Developed strictly for academic and hackathon evaluation.
            All findings are experimental and non-clinical. Not intended for disease diagnosis, prognosis, or medical decisions.
            No claim of quantum computational supremacy or clinical validity is asserted.
          </p>

          {/* Technical Stack Tags */}
          <div
            style={{
              fontSize: '0.76rem',
              color: '#64748b',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Qiskit Machine Learning &bull; Statevector Simulation &bull; Controlled Empirical Benchmarks
          </div>
        </div>
      </div>
    </footer>
  );
}
