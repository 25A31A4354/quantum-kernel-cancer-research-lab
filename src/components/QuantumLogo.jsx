import React from 'react';

/**
 * Quantum Kernel Matrix Branding Icon
 * 
 * Inspired by the research concept: a quantum kernel matrix comparing relationships
 * between data points in Hilbert space.
 * - Compact geometric mark built from a small matrix of connected nodes
 * - Integrates a subtle letter Q, with the tail formed by a connected diagonal edge and terminal node
 * - Deep navy (#0f172a) base, electric blue (#1769ff), and cyan (#00c2d6) accents
 * - Flat, crisp shapes with consistent stroke widths and clean negative space
 * - Recognizable at 16x16 and 32x32 pixels
 * - Scalable vector with transparent background
 */
export default function QuantumLogo({ size = 32, dark = false, style = {}, className = '' }) {
  const baseColor = dark ? '#ffffff' : '#0f172a';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
      className={className}
      aria-label="Quantum Kernel Lab Symbol"
    >
      {/* Outer Matrix Perimeter Loop (Forms the body of the Letter Q) */}
      <rect
        x="6"
        y="6"
        width="16"
        height="16"
        rx="3.5"
        stroke={baseColor}
        strokeWidth="2"
      />

      {/* Internal Kernel Pairwise Similarity Links */}
      <line x1="6" y1="14" x2="22" y2="14" stroke="#1769ff" strokeWidth="1.8" />
      <line x1="14" y1="6" x2="14" y2="22" stroke="#1769ff" strokeWidth="1.8" />

      {/* Diagonal Kernel Projection Line forming the Q-Tail */}
      <line
        x1="14"
        y1="14"
        x2="27.5"
        y2="27.5"
        stroke="#00c2d6"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Matrix Data Nodes */}
      {/* Corner Reference Nodes */}
      <circle cx="6" cy="6" r="2" fill={baseColor} />
      <circle cx="22" cy="6" r="2" fill={baseColor} />
      <circle cx="6" cy="22" r="2" fill={baseColor} />

      {/* Orthogonal Kernel Measurement Nodes */}
      <circle cx="14" cy="6" r="2" fill="#1769ff" />
      <circle cx="6" cy="14" r="2" fill="#1769ff" />
      <circle cx="22" cy="14" r="2" fill="#1769ff" />
      <circle cx="14" cy="22" r="2" fill="#1769ff" />

      {/* Central Kernel State Evaluation Node */}
      <circle cx="14" cy="14" r="2.3" fill="#1769ff" />

      {/* Lower-Right Matrix Intersection Node & Terminal Q-Tail Node */}
      <circle cx="22" cy="22" r="2.2" fill="#00c2d6" />
      <circle cx="27.5" cy="27.5" r="2.5" fill="#00c2d6" />
    </svg>
  );
}
