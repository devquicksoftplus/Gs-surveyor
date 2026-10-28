import React from 'react';

/**
 * Brand Logo component for GS Surveyor's & Consultancy
 * Clean, bold, executive "GS" monogram badge with forest green & bronze accents
 */
export default function Logo({ size = 'md', className = '' }) {
  // Dimensions for different contexts
  const dim = size === 'sm' ? 36 : size === 'lg' ? 54 : 44;

  return (
    <div 
      className={`brand-logo-container ${size} ${className}`}
      style={{
        width: dim,
        height: dim,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        width={dim}
        height={dim}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-svg"
      >
        <defs>
          <linearGradient id="logoForestBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E4335" />
            <stop offset="50%" stopColor="#19362B" />
            <stop offset="100%" stopColor="#12271F" />
          </linearGradient>

          <linearGradient id="logoBronze" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9BA8C" />
            <stop offset="45%" stopColor="#C98C55" />
            <stop offset="100%" stopColor="#9C6433" />
          </linearGradient>

          <linearGradient id="logoBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DCA370" />
            <stop offset="50%" stopColor="#8C5525" />
            <stop offset="100%" stopColor="#BA7D47" />
          </linearGradient>

          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer Premium Badge */}
        <rect 
          x="3.5" 
          y="3.5" 
          width="93" 
          height="93" 
          rx="22" 
          fill="url(#logoForestBg)" 
          stroke="url(#logoBorder)" 
          strokeWidth="3.5" 
        />

        {/* Subtle Fine Inner Perimeter Line */}
        <rect 
          x="10.5" 
          y="10.5" 
          width="79" 
          height="79" 
          rx="16" 
          fill="none" 
          stroke="url(#logoBronze)" 
          strokeWidth="1" 
          opacity="0.35" 
        />

        {/* Plain, Bold, Prominent GS Lettermark */}
        <text 
          x="50" 
          y="56" 
          textAnchor="middle" 
          dominantBaseline="central"
          fill="url(#logoBronze)" 
          fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontWeight="900" 
          fontSize="44" 
          letterSpacing="1"
          filter="url(#logoGlow)"
        >
          GS
        </text>

        {/* Subtle Surveyor Benchmark Accent Pip */}
        <circle cx="50" cy="80" r="2.8" fill="url(#logoBronze)" />
      </svg>
    </div>
  );
}
