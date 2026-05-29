// brand-tokens.jsx — Occasio canonical wordmark, symbol, palette, type tokens.
// All visual atoms used across the brand system live here.

const K = {
  ink:      '#0d0a1f',
  ink2:     '#1a1334',
  paper:    '#f6f3ff',
  paper2:   '#ece6ff',
  violet:   '#a78bfa',
  violet2:  '#8b5cf6',
  violet3:  '#c4b5fd',
  violet4:  '#6d4ed8',
};
const BEAM_GRADIENT = `linear-gradient(90deg, rgba(167,139,250,0.05), ${K.violet2} 65%, ${K.violet} 100%)`;
const BEAM_REVERSED = `linear-gradient(90deg, rgba(255,255,255,0.1), #fff 65%, ${K.violet3} 100%)`;
const BEAM_MONO     = (c) => `linear-gradient(90deg, ${c}00, ${c} 65%, ${c} 100%)`;

// ============================================================
// CANONICAL WORDMARK — Occasio Strategy
// All other assets reference this. Scales by `size` prop.
// ============================================================
function OccasioWordmark({
  size = 42,
  showSubline = true,
  color = 'currentColor',
  beam = BEAM_GRADIENT,        // pass a CSS background string
  beamWidth,                    // override beam width in px
  align = 'center',             // 'center' | 'left'
}) {
  const subSize  = Math.max(8, size * 0.23);
  const gap      = size * 0.32;
  const beamW    = beamWidth || size * 5.2;
  const beamH    = Math.max(2, Math.round(size * 0.065));
  const subGap   = size * 0.22;

  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: align === 'left' ? 'flex-start' : 'center',
      alignSelf: 'flex-start',
      gap, color,
    }}>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: size,
        letterSpacing: '0.16em',
        lineHeight: 1,
        textIndent: '0.16em',
        whiteSpace: 'nowrap',
      }}>OCCASIO</div>
      <div style={{
        alignSelf: 'stretch',
        height: beamH, background: beam,
      }} />
      {showSubline && <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: subSize,
        letterSpacing: '0.42em',
        textTransform: 'uppercase',
        opacity: 0.6,
        marginTop: subGap,
        whiteSpace: 'nowrap',
      }}>S T R A T E G Y</div>}
    </div>
  );
}

// ============================================================
// OCCASIO SYMBOL — the "O" mark for favicon/avatar/app icons.
// An O (mirroring the wordmark's first letter) with the beam underneath,
// packed into a square tile.
// ============================================================
function OccasioSymbol({
  size = 80,
  variant = 'dark',          // 'dark' | 'light' | 'violet' | 'gradient'
  shape = 'rounded',         // 'rounded' | 'circle' | 'square'
}) {
  const radius = shape === 'circle' ? '50%' : (shape === 'square' ? 0 : size * 0.18);

  let bg, fg, beam;
  if (variant === 'dark')        { bg = K.ink;   fg = K.paper; beam = BEAM_GRADIENT; }
  else if (variant === 'light')  { bg = K.paper; fg = K.ink;   beam = BEAM_GRADIENT; }
  else if (variant === 'violet') { bg = K.violet2; fg = K.paper; beam = BEAM_MONO(K.paper); }
  else if (variant === 'gradient') {
    bg = `linear-gradient(135deg, ${K.violet4}, ${K.ink} 65%)`; fg = K.paper; beam = BEAM_REVERSED;
  }

  return (
    <div style={{
      width: size, height: size,
      background: bg, color: fg, borderRadius: radius,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: size * 0.08,
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700,
        fontSize: size * 0.56,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>O</div>
      <div style={{
        width: size * 0.45,
        height: Math.max(1.5, size * 0.04),
        background: beam,
      }} />
    </div>
  );
}

// ============================================================
// PALETTE SWATCH — shows a color chip with hex + name
// ============================================================
function Swatch({ color, name, hex, dark = false, beam = false, size = 'md' }) {
  const h = size === 'lg' ? 140 : 96;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 160 }}>
      <div style={{
        height: h, borderRadius: 6,
        background: beam ? BEAM_GRADIENT : color,
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
      }} />
      <div style={{
        fontFamily: 'Manrope, sans-serif', fontSize: 12, fontWeight: 600,
      }}>{name}</div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.06em', opacity: 0.6, textTransform: 'uppercase',
      }}>{hex}</div>
    </div>
  );
}

// ============================================================
// TYPE SPECIMEN — Manrope + JetBrains Mono
// ============================================================
function TypeSpecimen({ dark = true }) {
  const c = dark ? K.paper : K.ink;
  const muted = dark ? 'rgba(246,243,255,0.55)' : 'rgba(13,10,31,0.55)';
  return (
    <div style={{ color: c, padding: '32px 36px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: muted, marginBottom: 22,
      }}>Manrope · sans-serif humanista</div>
      <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 36, lineHeight: 1, marginBottom: 8 }}>
        Aa Bb Cc Dd
      </div>
      <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, opacity: 0.85, marginBottom: 24 }}>
        300 Light · 400 Regular · 500 Medium · 600 Semibold · 700 Bold
      </div>

      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: muted, marginBottom: 12, marginTop: 8,
      }}>JetBrains Mono · numérica & técnica</div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 22, opacity: 0.9 }}>
        0 1 2 3 4 5 6 7 8 9
      </div>
    </div>
  );
}

// ============================================================
// BEAM CONSTRUCTION DIAGRAM — explains the gradient
// ============================================================
function BeamDiagram() {
  return (
    <div style={{ padding: '36px 40px', width: '100%', boxSizing: 'border-box', color: K.paper }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        opacity: 0.55, marginBottom: 18,
      }}>El beam — trayectoria de cambio</div>

      <div style={{ position: 'relative', height: 64, marginBottom: 12 }}>
        <div style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          width: '100%', height: 6, background: BEAM_GRADIENT, borderRadius: 1,
        }} />
        {[0, 25, 50, 65, 100].map(p => (
          <div key={p} style={{
            position: 'absolute', left: `${p}%`, top: 0, bottom: 0,
            width: 1, background: 'rgba(246,243,255,0.18)',
          }} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, opacity: 0.65 }}>
        <span>0% · ~transparente</span>
        <span style={{ color: K.violet3 }}>65% · #8b5cf6</span>
        <span style={{ color: K.violet }}>100% · #a78bfa</span>
      </div>

      <div style={{ marginTop: 22, fontFamily: 'Manrope, sans-serif', fontSize: 12, lineHeight: 1.5, opacity: 0.75, maxWidth: 480 }}>
        La barra recorre la palabra de penumbra a luz: un dato bruto que resuelve
        en una decisión. Es el único elemento gráfico vivo del logo — no se distorsiona,
        no se replica en otros contextos.
      </div>
    </div>
  );
}

// ============================================================
// CLEAR SPACE DIAGRAM
// ============================================================
function ClearSpaceDiagram() {
  return (
    <div style={{
      padding: 40, width: '100%', height: '100%', boxSizing: 'border-box',
      color: K.paper, position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        padding: 36,
        border: '1px dashed rgba(167,139,250,0.35)',
      }}>
        <OccasioWordmark size={28} />
        {/* x markers */}
        {[
          { top: -8, left: 24, label: 'x' },
          { bottom: -8, left: 24, label: 'x' },
          { top: '50%', left: -16, label: 'x' },
          { top: '50%', right: -16, label: 'x' },
        ].map((p, i) => (
          <div key={i} style={{
            position: 'absolute', ...p,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10, color: K.violet3,
            transform: p.top === '50%' ? 'translateY(-50%)' : undefined,
          }}>{p.label}</div>
        ))}
      </div>
      <div style={{
        position: 'absolute', bottom: 28, left: 40,
        fontFamily: 'Manrope, sans-serif', fontSize: 12, opacity: 0.7,
        maxWidth: 320,
      }}>
        <b>Clear space:</b> mantener un margen mínimo de <span style={{ color: K.violet3 }}>x</span> (= altura de la K)
        en los cuatro lados. Nada toca al logo dentro de ese margen.
      </div>
    </div>
  );
}

Object.assign(window, {
  K, BEAM_GRADIENT, BEAM_REVERSED, BEAM_MONO,
  OccasioWordmark, OccasioSymbol,
  Swatch, TypeSpecimen, BeamDiagram, ClearSpaceDiagram,
});
