// app-v2.jsx — Occasio logo v2 canvas (violet, change/innovation)

function TileV2({ variant = 'dark', children, caption }) {
  return (
    <div className={`logo-tile ${variant}`}>
      {children}
      {caption ? <div className="tile-caption">{caption}</div> : null}
    </div>
  );
}

function IntroV2() {
  return (
    <div style={{
      maxWidth: 740,
      padding: '0 8px 24px',
      fontFamily: 'Manrope, sans-serif',
      color: '#3a3328',
    }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        opacity: 0.55,
        marginBottom: 10,
      }}>
        Logo exploration · v2 · violet
      </div>
      <h1 style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700,
        fontSize: 32,
        margin: '0 0 14px',
        letterSpacing: '-0.025em',
        lineHeight: 1.05,
      }}>
        Wordmark OCCASIO — 8 maneras de codificar <span style={{ color: '#7c3aed' }}>cambio</span>
      </h1>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: '0 0 10px', opacity: 0.85 }}>
        Tomando como base el wordmark uppercase (#02 de la v1), cada variante incorpora
        un detalle distinto que codifica la idea de <b>transformación / innovación analítica</b>:
        un vector ascendente, una O en fase de cambio, un pulso de pixels, dos estados
        contrastados, un satélite orbitando un dato.
      </p>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: '0 0 10px', opacity: 0.85 }}>
        La paleta hereda los violetas del sitio actual — fondo púrpura profundo, acento
        violeta brillante <span style={{ background: '#a78bfa', color: '#0d0a1f', padding: '1px 6px', borderRadius: 3, fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>#a78bfa</span> — y la tipografía es Manrope humanista, pesada
        pero con tracking generoso para sentirse contemporánea sin parecer corporativa-rígida.
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.6 }}>
        Section 1: las 8 variantes en fondo oscuro a tamaño cómodo. Section 2: las mismas
        en fondo claro para validar contraste. Section 3: aplicación a un header tipo
        Pablo Avenali. Section 4: como favicon / avatar de redes / app icon.
      </p>
    </div>
  );
}

function AppV2() {
  const variants = [
    { id: 'v1', label: '01 · Base tick',          comp: <V1_BaseTick />,         caption: 'TICK · EL MOMENTO',          note: 'sutil, sobria — el punto de partida' },
    { id: 'v2', label: '02 · Vector ascendente',  comp: <V2_AscendingVector />,  caption: 'ASCENDING VECTOR',           note: 'flecha codificada · crecimiento' },
    { id: 'v3', label: '03 · O en fase',          comp: <V3_PhaseO />,           caption: 'PHASE O · ESTADO',           note: 'la letra cambia de estado' },
    { id: 'v4', label: '04 · Pulso de pixels',    comp: <V4_PixelUnderline />,   caption: 'PIXEL UNDERLINE · DATA',     note: 'datos que resuelven en señal' },
    { id: 'v5', label: '05 · Twin states',        comp: <V5_TwinTicks />,        caption: 'BEFORE / AFTER',             note: 'el cambio hecho visible' },
    { id: 'v6', label: '06 · O orbitada',         comp: <V6_OrbitedO />,         caption: 'ORBIT · DATA POINT',         note: 'analytics en movimiento' },
    { id: 'v7', label: '07 · Gradient beam',      comp: <V7_GradientBeam />,     caption: 'GRADIENT BEAM · TRAJECTORY', note: 'trayectoria de cambio' },
    { id: 'v8', label: '08 · K marcada',          comp: <V8_SlashedK />,         caption: 'SLASHED K · INFLECTION',     note: 'el corte / el instante kairos' },
  ];

  return (
    <DesignCanvas>
      <IntroV2 />

      {/* ─── DARK BG ─── */}
      <DCSection
        id="dark"
        title="Variantes — fondo oscuro"
        subtitle="Cada wordmark codifica el cambio de manera distinta. Vivirían sobre la paleta púrpura del sitio actual."
      >
        {variants.map(v => (
          <DCArtboard key={v.id} id={`dk-${v.id}`} label={v.label} width={420} height={220}>
            <TileV2 variant="darker" caption={v.caption}>{v.comp}</TileV2>
          </DCArtboard>
        ))}
      </DCSection>

      {/* ─── PAPER BG ─── */}
      <DCSection
        id="paper"
        title="Variantes — fondo claro"
        subtitle="Verificación de contraste y comportamiento sobre fondo claro (decks, documentos, factura)."
      >
        {variants.map(v => (
          <DCArtboard key={v.id} id={`pp-${v.id}`} label={v.label} width={420} height={220}>
            <TileV2 variant="paper" caption={v.caption}>{v.comp}</TileV2>
          </DCArtboard>
        ))}
      </DCSection>

      {/* ─── APPLIED TO HEADER ─── */}
      <DCSection
        id="apps"
        title="Aplicación · header tipo website actual"
        subtitle="Cómo se vería en el header con el resto del lenguaje del sitio (botón violeta, copy, monoespaciada)."
      >
        {variants.map(v => (
          <DCArtboard key={`hd-${v.id}`} id={`hd-${v.id}`} label={v.label} width={620} height={260}>
            <SiteHeader logo={v.comp} label={v.note} />
          </DCArtboard>
        ))}
      </DCSection>

      {/* ─── FAVICON / AVATAR / APP ICON ─── */}
      <DCSection
        id="avatars"
        title="Favicon · avatar · app icon"
        subtitle="A escala chica el wordmark pierde legibilidad — recomendable acompañarlo de un símbolo (ver propuesta abajo)."
      >
        {variants.slice(0, 4).map(v => (
          <DCArtboard key={`av-${v.id}`} id={`av-${v.id}`} label={v.label} width={520} height={200}>
            <AvatarRow logo={v.comp} label={v.note} />
          </DCArtboard>
        ))}

        <DCArtboard id="favicon-symbols" label="Símbolos sugeridos para favicon" width={520} height={200}>
          <div style={{
            width: '100%', height: '100%', background: '#f0eee9',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26,
            position: 'relative',
          }}>
            {/* Symbol A — vector arrow inside square */}
            <div style={{
              width: 72, height: 72, borderRadius: 14,
              background: V.ink, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <line x1="8" y1="30" x2="32" y2="10" stroke={V.paper} strokeWidth="3" strokeLinecap="round" />
                <line x1="32" y1="10" x2="24" y2="10" stroke={V.violet} strokeWidth="3" strokeLinecap="round" />
                <line x1="32" y1="10" x2="32" y2="18" stroke={V.violet} strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            {/* Symbol B — phase circle */}
            <div style={{
              width: 72, height: 72, borderRadius: 14,
              background: V.ink, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <defs>
                  <clipPath id="rh"><rect x="20" y="0" width="20" height="40" /></clipPath>
                </defs>
                <circle cx="20" cy="20" r="14" fill="none" stroke={V.paper} strokeWidth="3.5" />
                <circle cx="20" cy="20" r="14" fill={V.violet} clipPath="url(#rh)" />
              </svg>
            </div>
            {/* Symbol C — Occasio K */}
            <div style={{
              width: 72, height: 72, borderRadius: 14,
              background: `linear-gradient(135deg, ${V.violet4}, ${V.ink})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: V.paper,
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em',
              position: 'relative',
            }}>
              K
              <span style={{
                position: 'absolute',
                left: '52%', top: '52%',
                transform: 'translate(-50%, -50%) rotate(-32deg)',
                width: 22, height: 3,
                background: V.violet, borderRadius: 2,
              }} />
            </div>
            <div style={{
              position: 'absolute', bottom: 10, left: 16,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
              opacity: 0.45,
            }}>
              3 símbolos · vector · phase · K
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      <DCPostIt x={40} y={40}>
        Mi recomendación: <b>V2 (vector ascendente)</b> o <b>V4 (pulso de pixels)</b> tienen
        el mejor balance — sobrias, lecturizables, y codifican <i>cambio + analytics</i> sin gritar.
        V3 (phase O) y V6 (orbitada) son más conceptuales pero pierden a escala pequeña.
      </DCPostIt>

      <DCPostIt x={40} y={220}>
        Próximo paso natural: una vez elegida la variante, construyo un sistema completo
        (lockup horizontal/stacked, monocromo, sobre fondo claro, favicon SVG, espaciado mínimo).
      </DCPostIt>
    </DesignCanvas>
  );
}

const rootV2 = ReactDOM.createRoot(document.getElementById('root'));
rootV2.render(<AppV2 />);
