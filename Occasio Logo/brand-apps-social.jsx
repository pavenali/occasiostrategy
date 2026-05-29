// brand-apps-social.jsx — Instagram avatar, feed posts, story, LinkedIn cover.

// ============================================================
// INSTAGRAM PROFILE — avatar + bio strip
// ============================================================
function IGProfile() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#fafafa',
      display: 'flex', flexDirection: 'column',
      padding: '32px 28px',
      fontFamily: 'Manrope, sans-serif',
      color: '#262626',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          padding: 3,
          background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%',
            background: '#fafafa', padding: 2, boxSizing: 'border-box',
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
              <OccasioSymbol size={78} variant="dark" shape="circle" />
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
            <span style={{ fontWeight: 500, fontSize: 17 }}>occasio.strategy</span>
            <button style={{
              background: '#0095f6', color: '#fff', border: 0, padding: '5px 14px',
              borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: 'pointer',
            }}>Follow</button>
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13 }}>
            <span><b>87</b> posts</span>
            <span><b>4,210</b> followers</span>
            <span><b>312</b> following</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, fontSize: 13, lineHeight: 1.4, maxWidth: 380 }}>
        <div style={{ fontWeight: 600 }}>Occasio · Strategy</div>
        <div style={{ color: '#555' }}>The opportune moment for enterprise data.</div>
        <div style={{ color: '#00376b', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, marginTop: 4 }}>occasio.com</div>
      </div>
    </div>
  );
}

// ============================================================
// IG POST — square, quote/insight format
// ============================================================
function IGPostQuote() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(circle at 80% 20%, #2d1f5e 0%, #0d0a1f 65%, #08061a 100%)',
      color: K.paper,
      display: 'flex', flexDirection: 'column',
      padding: 40,
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <div style={{ position: 'absolute', top: 32, left: 36 }}>
        <OccasioSymbol size={40} variant="dark" shape="rounded" />
      </div>

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: K.violet3, marginBottom: 18,
        }}>· Insight 04 / 26</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600, fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em',
        }}>
          A dashboard nobody opens
          <br />
          is data without an <span style={{ color: K.violet }}>occasio</span>.
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: 'rgba(246,243,255,0.45)',
        letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        <span>occasio.com</span>
        <span>· @occasio.strategy</span>
      </div>
    </div>
  );
}

// ============================================================
// IG POST — stat / number focus
// ============================================================
function IGPostStat() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: K.paper,
      color: K.ink,
      display: 'flex', flexDirection: 'column',
      padding: 40,
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <div>
        <OccasioWordmark size={16} showSubline={false} align="left" beamWidth={80} />
      </div>

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: K.violet4, marginBottom: 14, opacity: 0.85,
        }}>· Revenue uplift · 2025</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 800, fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.045em',
          background: 'linear-gradient(135deg, #6d4ed8 0%, #8b5cf6 60%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>
          $30M
        </div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 500, fontSize: 16, lineHeight: 1.3, maxWidth: 340,
          marginTop: 14, opacity: 0.75,
        }}>
          Generados para clientes en 18 meses, acertando el momento de actuar.
        </div>
      </div>

      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: 'rgba(13,10,31,0.5)',
        letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        Pablo Avenali · Occasio Strategy
      </div>
    </div>
  );
}

// ============================================================
// IG POST — announcement / cover format
// ============================================================
function IGPostAnnounce() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: K.violet2,
      color: K.paper,
      display: 'flex', flexDirection: 'column',
      padding: 40,
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
        opacity: 0.85,
      }}>· New · Open for engagements 2026</div>

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 38, lineHeight: 1.0, letterSpacing: '-0.03em',
        }}>
          Analytics
          <br />
          que mueven
          <br />
          el negocio.
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <OccasioWordmark size={14} showSubline={false} align="left" beam={`linear-gradient(90deg, rgba(255,255,255,0.1), #fff)`} beamWidth={70} />
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85,
        }}>occasio.com →</div>
      </div>
    </div>
  );
}

// ============================================================
// IG STORY — vertical 9:16
// ============================================================
function IGStory() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(ellipse at 50% 100%, #2d1f5e 0%, #0d0a1f 60%, #08061a 100%)',
      color: K.paper,
      display: 'flex', flexDirection: 'column',
      padding: '36px 28px',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      {/* progress bar */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
        <div style={{ flex: 1, height: 2, background: K.paper, opacity: 0.9 }} />
        <div style={{ flex: 1, height: 2, background: K.paper, opacity: 0.25 }} />
        <div style={{ flex: 1, height: 2, background: K.paper, opacity: 0.25 }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden' }}>
          <OccasioSymbol size={28} variant="dark" shape="circle" />
        </div>
        <div style={{ fontSize: 12, fontWeight: 500 }}>occasio.strategy</div>
        <div style={{ fontSize: 11, opacity: 0.6 }}>· 2h</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: K.violet3, marginBottom: 12,
        }}>· Insight</div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700, fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.025em',
        }}>
          El dato no falta.
          <br />
          Falta saber <span style={{ color: K.violet }}>cuándo</span> usarlo.
        </div>
        <div style={{
          marginTop: 24,
          padding: '10px 18px',
          background: K.violet2, borderRadius: 999,
          fontSize: 12, fontWeight: 600,
          display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8,
        }}>
          Leer más →
        </div>
      </div>

      <OccasioWordmark size={11} showSubline={false} align="left" beamWidth={60} />
    </div>
  );
}

// ============================================================
// LINKEDIN COVER — 1584x396 (wide banner)
// ============================================================
function LinkedInCover() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(ellipse at 30% 50%, #2d1f5e 0%, #0d0a1f 60%, #08061a 100%)',
      color: K.paper,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 70px',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
        <OccasioWordmark size={24} showSubline={true} align="left" beamWidth={130} />
        <div style={{
          marginTop: 18,
          fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          Turning enterprise data into <span style={{ color: K.violet }}>measurable</span> business outcomes.
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        opacity: 0.55,
      }}>
        <span>· 20+ years</span>
        <span>· Accenture · HSBC · Telefónica</span>
        <span>· Cencosud</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  IGProfile, IGPostQuote, IGPostStat, IGPostAnnounce, IGStory, LinkedInCover,
});
