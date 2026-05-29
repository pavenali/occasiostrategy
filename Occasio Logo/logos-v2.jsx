// logos-v2.jsx — Wordmark #02 evolved into 8 directions exploring
// CHANGE / TRANSFORMATION / INNOVATION in an analytics brand.
// Palette: dark violet + bright violet accent (matches user's website).
// All components inherit text color from parent — works on dark + paper bgs.

const V = {
  ink:      '#0d0a1f',
  ink2:     '#1a1334',
  paper:    '#f6f3ff',
  violet:   '#a78bfa',
  violet2:  '#8b5cf6',
  violet3:  '#c4b5fd',
  violet4:  '#6d4ed8',
};

const WORD_FONT = {
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 600,
  fontSize: 42,
  letterSpacing: '0.16em',
  lineHeight: 1,
  textIndent: '0.16em',
};

const SUBLINE = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 9.5,
  letterSpacing: '0.42em',
  textTransform: 'uppercase',
  opacity: 0.55,
};

function Subline({ children = 'S T R A T E G Y', mt = 14 }) {
  return <div style={{ ...SUBLINE, marginTop: mt }}>{children}</div>;
}

function Stack({ children, gap = 12 }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap, color: 'inherit',
    }}>
      {children}
    </div>
  );
}

// ============================================================
// V1) BASE — OCCASIO uppercase, violet tick under 'O'
// ============================================================
function V1_BaseTick() {
  return (
    <Stack gap={18}>
      <div style={{ ...WORD_FONT, position: 'relative' }}>
        OCCASIO
        <span style={{
          position: 'absolute',
          left: 'calc(50% + 3px)',
          transform: 'translateX(-50%)',
          bottom: -10,
          width: 14, height: 2.5,
          background: V.violet,
        }} />
      </div>
      <Subline mt={6} />
    </Stack>
  );
}

// ============================================================
// V2) ASCENDING VECTOR
// ============================================================
function V2_AscendingVector() {
  return (
    <Stack gap={18}>
      <div style={{ ...WORD_FONT, position: 'relative' }}>
        OCCASIO
        <svg
          width="32" height="14"
          style={{
            position: 'absolute',
            left: 'calc(50% + 2px)',
            transform: 'translateX(-50%)',
            bottom: -16,
          }}
        >
          <line x1="2" y1="11" x2="28" y2="3"
                stroke={V.violet} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="3" x2="22" y2="3"
                stroke={V.violet} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="3" x2="28" y2="9"
                stroke={V.violet} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <Subline mt={10} />
    </Stack>
  );
}

// ============================================================
// V3) PHASE O — half-filled letter O
// ============================================================
function V3_PhaseO() {
  return (
    <Stack gap={18}>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600, fontSize: 42, letterSpacing: '0.16em',
        lineHeight: 1,
        paddingLeft: '0.16em',
      }}>
        <span>KAIR</span>
        <span style={{ display: 'inline-block', width: 30, height: 30, position: 'relative', margin: '0 0.08em' }}>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <defs>
              <clipPath id="rightHalf">
                <rect x="15" y="0" width="15" height="30" />
              </clipPath>
            </defs>
            <circle cx="15" cy="15" r="13" fill="none" stroke="currentColor" strokeWidth="3.2" />
            <circle cx="15" cy="15" r="13" fill={V.violet} clipPath="url(#rightHalf)" />
          </svg>
        </span>
        <span>S</span>
      </div>
      <Subline mt={8} />
    </Stack>
  );
}

// ============================================================
// V4) PIXEL UNDERLINE
// ============================================================
function V4_PixelUnderline() {
  const dots = [
    { s: 2,   o: 0.25 },
    { s: 2.5, o: 0.35 },
    { s: 3,   o: 0.5  },
    { s: 3.5, o: 0.65 },
    { s: 4,   o: 0.85 },
    { s: 5,   o: 1    },
  ];
  return (
    <Stack gap={18}>
      <div style={WORD_FONT}>OCCASIO</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: -4 }}>
        {dots.map((d, i) => (
          <span key={i} style={{
            width: d.s * 2, height: d.s * 2, borderRadius: '50%',
            background: V.violet, opacity: d.o,
          }} />
        ))}
      </div>
      <Subline mt={6} />
    </Stack>
  );
}

// ============================================================
// V5) TWIN-STATE TICKS — uses currentColor for the dim tick
// ============================================================
function V5_TwinTicks() {
  return (
    <Stack gap={18}>
      <div style={{ ...WORD_FONT, position: 'relative' }}>
        OCCASIO
        <div style={{
          position: 'absolute',
          left: 'calc(50% + 3px)',
          transform: 'translateX(-50%)',
          bottom: -12,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 10, height: 2.5, background: 'currentColor', opacity: 0.3 }} />
          <span style={{ width: 14, height: 2.5, background: V.violet }} />
        </div>
      </div>
      <Subline mt={10} />
    </Stack>
  );
}

// ============================================================
// V6) ORBITED O
// ============================================================
function V6_OrbitedO() {
  return (
    <Stack gap={18}>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600, fontSize: 42, letterSpacing: '0.16em',
        lineHeight: 1,
        paddingLeft: '0.16em',
      }}>
        <span>KAIR</span>
        <span style={{ display: 'inline-block', width: 34, height: 34, position: 'relative', margin: '0 0.06em' }}>
          <svg width="34" height="34" viewBox="0 0 34 34" style={{ overflow: 'visible' }}>
            <circle cx="17" cy="17" r="13" fill="none" stroke="currentColor" strokeWidth="3.2" />
            <ellipse cx="17" cy="17" rx="16.5" ry="6"
                     fill="none" stroke={V.violet} strokeWidth="1" opacity="0.5"
                     transform="rotate(-25 17 17)" />
            <circle cx="32" cy="11.3" r="2.6" fill={V.violet} />
          </svg>
        </span>
        <span>S</span>
      </div>
      <Subline mt={8} />
    </Stack>
  );
}

// ============================================================
// V7) GRADIENT BEAM
// ============================================================
function V7_GradientBeam() {
  return (
    <Stack gap={18}>
      <div style={WORD_FONT}>OCCASIO</div>
      <div style={{
        width: 220, height: 3,
        background: `linear-gradient(90deg, rgba(167,139,250,0.05), ${V.violet2} 65%, ${V.violet} 100%)`,
        marginTop: -2,
      }} />
      <Subline mt={4} />
    </Stack>
  );
}

// ============================================================
// V8) SLASHED K
// ============================================================
function V8_SlashedK() {
  return (
    <Stack gap={18}>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600, fontSize: 42, letterSpacing: '0.16em',
        lineHeight: 1,
        paddingLeft: '0.16em',
      }}>
        <span style={{ position: 'relative' }}>
          K
          <span style={{
            position: 'absolute',
            left: '52%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(-32deg)',
            width: 18, height: 2.5,
            background: V.violet,
            borderRadius: 2,
          }} />
        </span>
        <span>AIROS</span>
      </div>
      <Subline mt={8} />
    </Stack>
  );
}

// ============================================================
// SITE HEADER — emulates the user's website chrome
// ============================================================
function SiteHeader({ logo, label = '' }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(circle at 50% 0%, #1a1334 0%, #0d0a1f 55%, #08061a 100%)',
      color: V.paper,
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 28px',
      }}>
        <div style={{ transform: 'scale(0.5)', transformOrigin: 'left center', color: V.paper }}>
          {logo}
        </div>
        <nav style={{
          display: 'flex', gap: 26,
          fontFamily: 'Manrope, sans-serif', fontSize: 12, fontWeight: 500,
          color: 'rgba(246,243,255,0.7)',
        }}>
          <span>About</span><span>Services</span><span>Work</span><span>Contact</span>
        </nav>
        <button style={{
          background: V.violet2, color: V.paper, border: 0,
          padding: '8px 16px', borderRadius: 999,
          fontFamily: 'Manrope, sans-serif', fontSize: 12, fontWeight: 600,
          cursor: 'pointer',
        }}>Let's talk</button>
      </div>

      <div style={{ flex: 1, padding: '8px 36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9, letterSpacing: '0.3em',
          color: V.violet3, textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          · The opportune moment · 2026
        </div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.02em',
          maxWidth: 460,
        }}>
          Data into <span style={{ color: V.violet }}>measurable</span> business outcomes.
        </div>
      </div>

      {label && <div style={{
        position: 'absolute', bottom: 10, left: 16,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
        opacity: 0.4, color: V.paper,
      }}>
        {label}
      </div>}
    </div>
  );
}

// ============================================================
// AVATAR ROW — favicon, circular avatar, app-icon tile
// ============================================================
function AvatarRow({ logo, label }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#f0eee9',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22,
      position: 'relative',
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 8,
        background: V.ink, color: V.paper,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ transform: 'scale(0.32)', transformOrigin: 'center' }}>{logo}</div>
      </div>
      <div style={{
        width: 92, height: 92, borderRadius: '50%',
        background: V.ink, color: V.paper,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}>{logo}</div>
      </div>
      <div style={{
        width: 92, height: 92, borderRadius: 20,
        background: `linear-gradient(135deg, ${V.violet4}, ${V.ink} 70%)`,
        color: V.paper,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}>{logo}</div>
      </div>
      {label && <div style={{
        position: 'absolute', bottom: 10, left: 16,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
        opacity: 0.4,
      }}>
        {label}
      </div>}
    </div>
  );
}

Object.assign(window, {
  V1_BaseTick, V2_AscendingVector, V3_PhaseO, V4_PixelUnderline,
  V5_TwinTicks, V6_OrbitedO, V7_GradientBeam, V8_SlashedK,
  SiteHeader, AvatarRow, V,
});
