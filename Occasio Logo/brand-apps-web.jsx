// brand-apps-web.jsx — Web applications: website header (dark/light),
// email signature, OG card, 404.

// ============================================================
// SITE HEADER DARK — full website hero strip
// ============================================================
function SiteHeaderDark() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(circle at 50% 0%, #1a1334 0%, #0d0a1f 55%, #08061a 100%)',
      color: K.paper,
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 32px',
      }}>
        <OccasioWordmark size={18} showSubline={false} align="left" beamWidth={94} />
        <nav style={{
          display: 'flex', gap: 28,
          fontFamily: 'Manrope, sans-serif', fontSize: 13, fontWeight: 500,
          color: 'rgba(246,243,255,0.7)',
        }}>
          <span>About</span><span>Services</span><span>Cases</span><span>Contact</span>
        </nav>
        <button style={{
          background: K.violet2, color: K.paper, border: 0,
          padding: '9px 18px', borderRadius: 999,
          fontFamily: 'Manrope, sans-serif', fontSize: 13, fontWeight: 600,
          cursor: 'pointer',
        }}>Let's talk</button>
      </div>

      <div style={{
        flex: 1, padding: '20px 40px 40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10, letterSpacing: '0.3em',
          color: K.violet3, textTransform: 'uppercase',
          marginBottom: 14,
        }}>· The opportune moment · 2026</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 38, lineHeight: 1.05, letterSpacing: '-0.025em',
          maxWidth: 520,
        }}>
          Turning enterprise data into <span style={{ color: K.violet }}>measurable</span> business outcomes.
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SITE HEADER LIGHT — alternative palette for daytime/print web
// ============================================================
function SiteHeaderLight() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: K.paper,
      color: K.ink,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 32px',
        borderBottom: '1px solid rgba(13,10,31,0.08)',
      }}>
        <OccasioWordmark size={18} showSubline={false} align="left" beamWidth={94} />
        <nav style={{
          display: 'flex', gap: 28,
          fontFamily: 'Manrope, sans-serif', fontSize: 13, fontWeight: 500,
          color: 'rgba(13,10,31,0.7)',
        }}>
          <span>About</span><span>Services</span><span>Cases</span><span>Contact</span>
        </nav>
        <button style={{
          background: K.ink, color: K.paper, border: 0,
          padding: '9px 18px', borderRadius: 999,
          fontFamily: 'Manrope, sans-serif', fontSize: 13, fontWeight: 600,
          cursor: 'pointer',
        }}>Let's talk</button>
      </div>

      <div style={{
        flex: 1, padding: '20px 40px 40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10, letterSpacing: '0.3em',
          color: K.violet4, textTransform: 'uppercase',
          marginBottom: 14,
        }}>· The opportune moment · 2026</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 38, lineHeight: 1.05, letterSpacing: '-0.025em',
          maxWidth: 520,
        }}>
          Turning enterprise data into <span style={{ color: K.violet4 }}>measurable</span> business outcomes.
        </div>
      </div>
    </div>
  );
}

// ============================================================
// EMAIL SIGNATURE — corporate email footer
// ============================================================
function EmailSignature() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: K.paper, color: K.ink,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{
        width: '88%', maxWidth: 520,
        background: '#fff',
        padding: 28,
        borderRadius: 6,
        boxShadow: '0 4px 20px rgba(13,10,31,0.06)',
        fontFamily: 'Manrope, sans-serif',
      }}>
        <div style={{
          fontSize: 11, color: 'rgba(13,10,31,0.5)', marginBottom: 18,
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          — best,
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <OccasioSymbol size={56} variant="dark" shape="rounded" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Pablo Avenali</div>
            <div style={{ fontSize: 12, color: 'rgba(13,10,31,0.6)' }}>Founder · Analytics Strategy</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
              letterSpacing: '0.05em', marginTop: 6,
            }}>pablo@occasio.com · +54 11 5555 5555</div>
          </div>
        </div>
        <div style={{
          marginTop: 22, paddingTop: 16,
          borderTop: '1px solid rgba(13,10,31,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, opacity: 0.55,
        }}>
          <span>occasio.com</span>
          <span>LinkedIn · GitHub · Substack</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// OG CARD — social link preview (1200x630 aspect)
// ============================================================
function OGCard() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(circle at 75% 30%, #2d1f5e 0%, #0d0a1f 60%, #08061a 100%)',
      color: K.paper,
      display: 'flex', flexDirection: 'column',
      padding: '40px 56px',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      {/* top: wordmark */}
      <div>
        <OccasioWordmark size={20} showSubline={true} align="left" beamWidth={110} />
      </div>

      {/* center: title */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: K.violet3, marginBottom: 14,
        }}>· Case study · Q2 2026</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.025em',
          maxWidth: 720,
        }}>
          How HSBC reduced churn 25% by acting on the <span style={{ color: K.violet }}>right</span> data moment.
        </div>
      </div>

      {/* bottom: url + tag */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
        color: 'rgba(246,243,255,0.55)',
        letterSpacing: '0.08em',
      }}>
        <span>occasio.com/cases/hsbc</span>
        <span>· 6 min read</span>
      </div>
    </div>
  );
}

// ============================================================
// FAVICON STRIP — multiple favicon sizes
// ============================================================
function FaviconStrip() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: K.paper,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36,
      position: 'relative',
    }}>
      {[16, 32, 48, 64].map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <OccasioSymbol size={s} variant="dark" shape="rounded" />
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
            opacity: 0.55, letterSpacing: '0.1em',
          }}>{s}×{s}</div>
        </div>
      ))}
      <div style={{ width: 1, height: 80, background: 'rgba(13,10,31,0.1)' }} />
      <OccasioSymbol size={64} variant="gradient" shape="rounded" />
      <OccasioSymbol size={64} variant="violet" shape="rounded" />
    </div>
  );
}

Object.assign(window, {
  SiteHeaderDark, SiteHeaderLight, EmailSignature, OGCard, FaviconStrip,
});
