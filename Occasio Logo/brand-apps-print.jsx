// brand-apps-print.jsx — Letterhead, business card front/back, envelope,
// presentation cover slide, document footer.

// ============================================================
// LETTERHEAD A4 — full sheet
// ============================================================
function Letterhead() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#e6e2d6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%', height: '100%', maxWidth: 460, maxHeight: 640,
        background: '#fff', color: K.ink,
        padding: '46px 50px',
        boxShadow: '0 12px 40px rgba(13,10,31,0.12)',
        display: 'flex', flexDirection: 'column',
        fontFamily: 'Manrope, sans-serif',
        boxSizing: 'border-box',
      }}>
        {/* header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <OccasioWordmark size={16} showSubline={true} align="left" beamWidth={84} />
          <div style={{
            textAlign: 'right',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 8.5, letterSpacing: '0.1em',
            color: 'rgba(13,10,31,0.6)',
            lineHeight: 1.55,
          }}>
            Pablo Avenali, Founder<br/>
            pablo@occasio.com<br/>
            +54 11 5555 5555<br/>
            occasio.com
          </div>
        </div>

        {/* date / recipient */}
        <div style={{ marginTop: 40, fontSize: 10.5, fontFamily: 'JetBrains Mono, monospace', opacity: 0.6 }}>
          Buenos Aires · 24 may 2026
        </div>
        <div style={{ marginTop: 24, fontSize: 11, lineHeight: 1.6 }}>
          <b>Ref.:</b> Engagement Q3 2026 — Analytics Strategy
        </div>

        {/* body */}
        <div style={{ marginTop: 18, fontSize: 11, lineHeight: 1.7, color: 'rgba(13,10,31,0.85)', flex: 1 }}>
          Estimado/a,
          <br /><br />
          Tras la conversación inicial, comparto la propuesta para el diseño del sistema
          analítico — un enfoque que prioriza el momento oportuno (occasio) por encima
          de la cantidad de dashboards.
          <br /><br />
          El alcance, hitos y honorarios están detallados en las páginas siguientes.
          Quedo a disposición.
        </div>

        {/* signature */}
        <div style={{ marginTop: 24 }}>
          <div style={{
            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 13, marginBottom: 2,
          }}>Pablo Avenali</div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
            letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.55,
          }}>Founder · Analytics</div>
        </div>

        {/* footer */}
        <div style={{
          marginTop: 24, paddingTop: 14,
          borderTop: '1px solid rgba(13,10,31,0.1)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            width: 96, height: 2,
            background: BEAM_GRADIENT,
          }} />
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
            opacity: 0.45, letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            Occasio · The opportune moment
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// BUSINESS CARD — front
// ============================================================
function BusinessCardFront() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#e6e2d6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 32,
    }}>
      <div style={{
        width: '90%', aspectRatio: '1.7 / 1',
        background: K.ink, color: K.paper,
        padding: '28px 32px',
        borderRadius: 6,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        boxShadow: '0 18px 40px rgba(13,10,31,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* faint beam in background */}
        <div style={{
          position: 'absolute', left: -40, top: 100,
          width: 220, height: 1, background: BEAM_GRADIENT, opacity: 0.5,
          transform: 'rotate(-12deg)', transformOrigin: 'left center',
        }} />

        <OccasioWordmark size={16} showSubline={true} align="left" beamWidth={84} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16 }}>Pablo Avenali</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(246,243,255,0.55)',
            }}>Founder · Analytics</div>
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
            letterSpacing: '0.16em',
            color: 'rgba(246,243,255,0.55)', textAlign: 'right', lineHeight: 1.6,
          }}>
            pablo@occasio.com<br/>
            +54 11 5555 5555
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// BUSINESS CARD — back
// ============================================================
function BusinessCardBack() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#e6e2d6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 32,
    }}>
      <div style={{
        width: '90%', aspectRatio: '1.7 / 1',
        background: K.paper, color: K.ink,
        borderRadius: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 18px 40px rgba(13,10,31,0.25)',
        position: 'relative', overflow: 'hidden',
      }}>
        <OccasioSymbol size={80} variant="gradient" shape="rounded" />
        <div style={{
          position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(13,10,31,0.45)',
        }}>
          occasio.com
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ENVELOPE — DL window
// ============================================================
function Envelope() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#e6e2d6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 30,
    }}>
      <div style={{
        width: '90%', aspectRatio: '2.16 / 1',
        background: '#faf8f1', color: K.ink,
        borderRadius: 4,
        padding: '20px 26px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxShadow: '0 10px 30px rgba(13,10,31,0.12)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <OccasioWordmark size={13} showSubline={false} align="left" beamWidth={64} />
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
            letterSpacing: '0.12em', color: 'rgba(13,10,31,0.55)',
            lineHeight: 1.5, marginTop: 8,
          }}>
            Av. del Libertador 1234, Piso 8<br/>
            C1428 Buenos Aires · AR
          </div>
        </div>

        <div style={{
          width: '38%', height: '54%',
          background: 'rgba(13,10,31,0.06)',
          border: '1px dashed rgba(13,10,31,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(13,10,31,0.4)',
        }}>
          window
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PRESENTATION COVER SLIDE — 16:9
// ============================================================
function PresentationCover() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(circle at 70% 30%, #2d1f5e 0%, #0d0a1f 60%, #08061a 100%)',
      color: K.paper,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '48px 56px',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <OccasioWordmark size={18} showSubline={true} align="left" beamWidth={100} />
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.55,
        }}>· Q2 2026</div>
      </div>

      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: K.violet3, marginBottom: 18,
        }}>· Engagement proposal · HSBC</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 52, lineHeight: 1.0, letterSpacing: '-0.035em',
          maxWidth: 700,
        }}>
          Acting on the
          <br />
          <span style={{ color: K.violet }}>right</span> moment.
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(246,243,255,0.45)',
      }}>
        <span>Pablo Avenali · Founder</span>
        <span>occasio.com</span>
      </div>
    </div>
  );
}

// ============================================================
// DOCUMENT FOOTER — reusable beam strip
// ============================================================
function DocumentFooter({ dark = false }) {
  const bg = dark ? K.ink : '#fff';
  const fg = dark ? K.paper : K.ink;
  return (
    <div style={{
      width: '100%', height: '100%',
      background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '32px 56px',
      boxSizing: 'border-box',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
      position: 'relative',
    }}>
      <span style={{ opacity: 0.6 }}>Occasio Strategy · 2026</span>

      <div style={{
        flex: 1, margin: '0 28px', height: 1,
        background: dark
          ? 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.25))'
          : 'linear-gradient(90deg, rgba(13,10,31,0.1), rgba(13,10,31,0.18))',
      }} />

      <span style={{ opacity: 0.6 }}>Pag. 04 / 12</span>

      {/* beam accent */}
      <div style={{
        position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
        width: 80, height: 2,
        background: BEAM_GRADIENT,
      }} />
    </div>
  );
}

Object.assign(window, {
  Letterhead, BusinessCardFront, BusinessCardBack, Envelope,
  PresentationCover, DocumentFooter,
});
