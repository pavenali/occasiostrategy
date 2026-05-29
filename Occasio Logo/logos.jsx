// logos.jsx — 12 Occasio logo concepts as SVG React components
// All take optional fg/bg colors. Designed to sit centered in a tile.

const C = {
  teal:   '#0a1f1c',
  tealMid:'#1a3a34',
  cream:  '#e8e4d8',
  sage:   '#7cb89c',
  sageLt: '#9ccab0',
  gold:   '#c9a26e',
};

// ============================================================
// 1) WORDMARK — lowercase humanist with Greek κ as initial
// "κairos" — Greek kappa + Latin letters. Sage dot on the 'i'.
// ============================================================
function Logo01_KappaWordmark({ scale = 1 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 0, transform: `scale(${scale})` }}>
      <span style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 400,
        fontStyle: 'italic',
        fontSize: 78,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        marginRight: '-2px',
      }}>κ</span>
      <span style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 500,
        fontSize: 56,
        lineHeight: 1,
        letterSpacing: '-0.035em',
        position: 'relative',
      }}>
        airos
        <span style={{
          position: 'absolute',
          top: '-6px',
          left: '20px',
          width: 8, height: 8,
          borderRadius: '50%',
          background: C.sage,
        }} />
      </span>
    </div>
  );
}

// ============================================================
// 2) WORDMARK — all caps geometric, with kairos "moment" tick
// OCCASIO in uppercase, single sage tick under the 'O' marking the moment.
// ============================================================
function Logo02_UppercaseTick() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: '0.18em',
        position: 'relative',
      }}>
        OCCASIO
        <span style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: -10,
          width: 14, height: 2,
          background: C.sage,
        }} />
      </div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9,
        letterSpacing: '0.4em',
        opacity: 0.55,
        marginTop: 12,
      }}>
        S T R A T E G Y
      </div>
    </div>
  );
}

// ============================================================
// 3) MONOGRAM — Greek lowercase κ, geometric reinterpretation
// ============================================================
function Logo03_KappaMark({ size = 96, fg = 'currentColor', accent = C.sage }) {
  // Custom geometric κ: vertical stem + two diagonal arms meeting at midpoint
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      {/* vertical stem */}
      <rect x="20" y="20" width="6" height="60" fill={fg} />
      {/* upper diagonal */}
      <path d="M 26 50 L 70 22" stroke={fg} strokeWidth="6" strokeLinecap="square" />
      {/* lower diagonal — accent for the kairos moment */}
      <path d="M 26 50 L 70 78" stroke={accent} strokeWidth="6" strokeLinecap="square" />
      {/* node at the intersection — the moment */}
      <circle cx="26" cy="50" r="3.5" fill={fg} />
    </svg>
  );
}

// ============================================================
// 4) LOCKUP — κ mark + wordmark side by side
// ============================================================
function Logo04_MarkPlusWord() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <Logo03_KappaMark size={56} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontSize: 30,
          letterSpacing: '-0.025em',
          lineHeight: 1,
        }}>
          Occasio
        </div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          opacity: 0.6,
          marginTop: 4,
        }}>
          Analytics
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 5) SPIRAL — Fibonacci quarter-arc spiral (progression infinita)
// ============================================================
function Logo05_Spiral({ fg = 'currentColor', accent = C.sage }) {
  // Quarter-arc spiral built from 4 segments
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* outer arc */}
        <path d="M 50 95 A 45 45 0 0 1 5 50" stroke={fg} strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* next */}
        <path d="M 5 50 A 28 28 0 0 1 33 22" stroke={fg} strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* next */}
        <path d="M 33 22 A 17 17 0 0 1 50 39" stroke={fg} strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* innermost — accent */}
        <path d="M 50 39 A 10 10 0 0 1 60 49" stroke={accent} strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* center node */}
        <circle cx="60" cy="49" r="3" fill={accent} />
      </svg>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: 30,
        letterSpacing: '-0.025em',
      }}>
        Occasio
      </div>
    </div>
  );
}

// ============================================================
// 6) INFLECTION CURVE — smooth S-curve with node at inflection
// "Punto de inflexión / momento oportuno"
// ============================================================
function Logo06_Inflection({ fg = 'currentColor', accent = C.sage }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <svg width="120" height="56" viewBox="0 0 120 56" fill="none">
        <path d="M 6 48 C 30 48, 40 32, 60 28 C 80 24, 90 16, 114 8"
              stroke={fg} strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* inflection node */}
        <circle cx="60" cy="28" r="5" fill={accent} />
        <circle cx="60" cy="28" r="10" fill="none" stroke={accent} strokeWidth="1" opacity="0.4" />
      </svg>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: 28,
        letterSpacing: '-0.025em',
      }}>
        Occasio
      </div>
    </div>
  );
}

// ============================================================
// 7) HOURGLASS — two triangles meeting at point (the moment)
// ============================================================
function Logo07_Hourglass({ fg = 'currentColor', accent = C.sage }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <svg width="48" height="60" viewBox="0 0 60 80" fill="none">
        {/* top triangle (open) */}
        <path d="M 6 6 L 54 6 L 30 38 Z" stroke={fg} strokeWidth="3" fill="none" strokeLinejoin="miter" />
        {/* bottom triangle (filled accent — the realized moment) */}
        <path d="M 30 42 L 54 74 L 6 74 Z" fill={accent} />
        {/* center dot */}
        <circle cx="30" cy="40" r="2.5" fill={fg} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{
          fontFamily: 'Fraunces, serif',
          fontWeight: 400,
          fontSize: 32,
          letterSpacing: '-0.01em',
        }}>
          Occasio
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: 0.55,
          marginTop: 6,
        }}>
          Analytics
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 8) CONVERGENCE — rays converging to a single point
// ============================================================
function Logo08_Convergence({ fg = 'currentColor', accent = C.sage }) {
  // Lines from edges converging to a single sage point (the decision moment)
  const cx = 36, cy = 36;
  const lines = [
    [4, 8], [4, 36], [4, 64],
    [36, 4], [36, 68],
    [68, 8], [68, 36], [68, 64],
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        {lines.map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2={cx} y2={cy}
                stroke={fg} strokeWidth="1.4" strokeLinecap="round" opacity={0.45} />
        ))}
        <circle cx={cx} cy={cy} r="5" fill={accent} />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke={accent} strokeWidth="1" opacity="0.3" />
      </svg>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: 30,
        letterSpacing: '-0.025em',
      }}>
        Occasio
      </div>
    </div>
  );
}

// ============================================================
// 9) ARC + TICK — partial circle, single tick at "the moment"
// Clock metaphor reduced to its essence.
// ============================================================
function Logo09_ArcTick({ fg = 'currentColor', accent = C.sage }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* 3/4 arc */}
        <path d="M 56 32 A 24 24 0 1 0 32 56"
              stroke={fg} strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* single sage tick at the "kairos moment" (top-right) */}
        <line x1="50" y1="14" x2="56" y2="8" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="56" cy="8" r="3" fill={accent} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontSize: 30,
          letterSpacing: '-0.025em',
        }}>
          Occasio
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: 0.55,
          marginTop: 6,
        }}>
          Analytics
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 10) ASCENDING CHEVRON — K read as upward motion
// A geometric K where the diagonals are read as an upward chevron.
// ============================================================
function Logo10_KChevron({ fg = 'currentColor', accent = C.sage }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* vertical stem */}
        <rect x="10" y="10" width="5" height="44" fill={fg} />
        {/* lower diagonal */}
        <path d="M 15 32 L 50 54" stroke={fg} strokeWidth="5" strokeLinecap="square" />
        {/* upper diagonal — accent, the ascending arrow */}
        <path d="M 15 32 L 50 10" stroke={accent} strokeWidth="5" strokeLinecap="square" />
        {/* arrowhead implied at the upper terminal */}
        <path d="M 50 10 L 50 22 M 50 10 L 38 10"
              stroke={accent} strokeWidth="5" strokeLinecap="square" fill="none" />
      </svg>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: 30,
        letterSpacing: '-0.025em',
      }}>
        Occasio
      </div>
    </div>
  );
}

// ============================================================
// 11) STACKED EDITORIAL — Fraunces serif, large + tagline
// "Premium / editorial" treatment for presentation slides
// ============================================================
function Logo11_StackedEditorial() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 400,
        fontSize: 56,
        letterSpacing: '-0.025em',
        lineHeight: 0.95,
      }}>
        Occasio
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        opacity: 0.7,
      }}>
        <span style={{ width: 24, height: 1, background: 'currentColor', opacity: 0.5 }} />
        Analytics
        <span style={{ width: 24, height: 1, background: 'currentColor', opacity: 0.5 }} />
      </div>
    </div>
  );
}

// ============================================================
// 12) MOMENT BRACKETS — wordmark framed by two thin brackets
// "[ kairos ]" — the bracketed moment, set in a monospace-influenced sans
// ============================================================
function Logo12_Brackets({ accent = C.sage }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 300,
        fontSize: 56,
        lineHeight: 1,
        color: accent,
      }}>[</span>
      <span style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: 36,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        kairos
      </span>
      <span style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 300,
        fontSize: 56,
        lineHeight: 1,
        color: accent,
      }}>]</span>
    </div>
  );
}

// ============================================================
// APPLICATION COMPONENTS (header / avatar / business card)
// ============================================================
function AppHeader({ logo, dark = true }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: dark ? C.teal : C.cream,
      color: dark ? C.cream : C.teal,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 28px',
        borderBottom: `1px solid ${dark ? 'rgba(232,228,216,0.08)' : 'rgba(10,31,28,0.08)'}`,
      }}>
        <div style={{ transform: 'scale(0.55)', transformOrigin: 'left center' }}>
          {logo}
        </div>
        <div style={{
          display: 'flex', gap: 24,
          fontFamily: 'Manrope, sans-serif', fontSize: 12, fontWeight: 500,
          opacity: 0.7,
        }}>
          <span>Insights</span><span>Models</span><span>Cases</span><span>Contact</span>
        </div>
      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 28px',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase',
          opacity: 0.5, marginBottom: 10,
        }}>
          The opportune moment
        </div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontWeight: 400,
          fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.02em',
          maxWidth: 280,
        }}>
          Data turned into decisions, at the right moment.
        </div>
      </div>
    </div>
  );
}

function AppAvatar({ mark, bg = C.teal, fg = C.cream }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#f0eee9',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24,
    }}>
      <div style={{
        width: 88, height: 88, borderRadius: '50%',
        background: bg, color: fg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{mark}</div>
      <div style={{
        width: 88, height: 88, borderRadius: 16,
        background: bg, color: fg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{mark}</div>
      <div style={{
        width: 88, height: 88,
        background: bg, color: fg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{mark}</div>
    </div>
  );
}

function AppCard({ logo }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#e9e5d9',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{
        width: '88%', aspectRatio: '1.7 / 1',
        background: C.teal, color: C.cream,
        borderRadius: 6,
        padding: '22px 26px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        boxShadow: '0 18px 40px rgba(10,31,28,0.18)',
      }}>
        <div style={{ transform: 'scale(0.65)', transformOrigin: 'left top' }}>
          {logo}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{
              fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 13,
            }}>Pablo Avenali</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
              letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6,
              marginTop: 4,
            }}>Founder · Analytics</div>
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
            letterSpacing: '0.15em', opacity: 0.5,
          }}>occasio.com</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Logo01_KappaWordmark, Logo02_UppercaseTick, Logo03_KappaMark,
  Logo04_MarkPlusWord, Logo05_Spiral, Logo06_Inflection,
  Logo07_Hourglass, Logo08_Convergence, Logo09_ArcTick,
  Logo10_KChevron, Logo11_StackedEditorial, Logo12_Brackets,
  AppHeader, AppAvatar, AppCard,
  C,
});
