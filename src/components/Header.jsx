import React, { useState, useEffect } from 'react';
import QuantumLogo from './QuantumLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'dataset', label: 'Dataset', href: '#dataset' },
    { id: 'comparison', label: 'Models', href: '#comparison' },
    { id: 'visualizations', label: 'Telemetry', href: '#visualizations' },
    { id: 'insights', label: 'Insights', href: '#insights' },
    { id: 'limitations', label: 'Governance', href: '#limitations' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'rgba(226, 232, 240, 0.8)'}`,
        transition: 'all 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
        }}
      >
        {/* Left: Brand Identity (Minimal Logo + Clean Wordmark) */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            textDecoration: 'none',
            minWidth: 0,
          }}
        >
          <QuantumLogo size={28} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap', minWidth: 0 }}>
            <span
              style={{
                fontSize: '0.94rem',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              Quantum Kernel Lab
            </span>
            <span
              className="brand-subtitle"
              style={{
                fontSize: '0.75rem',
                color: '#64748b',
                letterSpacing: '-0.01em',
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
            >
              Cancer Research &bull; Qiskit Fall Fest 2026
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#475569',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1769ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Small Understated Research Status Label & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.72rem',
              fontWeight: 500,
              padding: '0.2rem 0.65rem',
              borderRadius: '9999px',
              backgroundColor: '#f1f5f9',
              color: '#475569',
              border: '1px solid #e2e8f0',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
            Prototype
          </span>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#334155',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
            }}
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '0.85rem 1.5rem 1.25rem',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#1e293b',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.35rem 0',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .mobile-nav-toggle { display: block !important; }
        }
        @media (max-width: 640px) {
          .brand-subtitle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
