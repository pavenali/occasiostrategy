// app.jsx — Occasio logo design canvas

const { useState } = React;

function Tile({ variant = 'dark', children, caption }) {
  const cls = `logo-tile ${variant}`;
  return (
    <div className={cls}>
      {children}
      {caption ? <div className="tile-caption">{caption}</div> : null}
    </div>
  );
}

function Intro() {
  return (
    <div style={{
      maxWidth: 720,
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
        Logo exploration · v1
      </div>
      <h1 style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 400,
        fontSize: 36,
        margin: '0 0 14px',
        letterSpacing: '-0.02em',
        lineHeight: 1.05,
      }}>
        Occasio <span style={{ opacity: 0.5 }}>·</span> 12 direcciones
      </h1>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: '0 0 10px', opacity: 0.85 }}>
        <b>Occasio</b> (καιρός) — el momento oportuno en griego clásico, opuesto a <i>chronos</i> (el tiempo
        que pasa). Para una marca de analytics, esa idea es perfecta: los datos sirven cuando
        revelan <i>cuándo</i> actuar, no solo <i>qué</i> pasó.
      </p>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: '0 0 10px', opacity: 0.85 }}>
        Cada propuesta interpreta una metáfora distinta — espiral, curva de inflexión,
        convergencia, reloj de arena, K ascendente — usando la paleta <b>teal profundo / crema / sage</b>
        con tipografía humanista (<i>Manrope</i>) y toques editoriales (<i>Fraunces</i>).
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.6 }}>
        Las primeras tres secciones son atómicas: wordmarks puros, lockups (símbolo + texto)
        y símbolos abstractos. La última muestra los candidatos más fuertes aplicados
        en un header, como avatar de redes y como tarjeta personal.
      </p>
    </div>
  );
}

function App() {
  return (
    <DesignCanvas>
      <Intro />

      {/* ─────────────────────────────── WORDMARKS ─────────────────────────────── */}
      <DCSection
        id="wordmarks"
        title="Wordmarks"
        subtitle="Solo tipografía — funcionan al máximo de simplicidad, ideal para header y firma."
      >
        <DCArtboard id="wm-1" label="01 · κairos — kappa griego" width={420} height={220}>
          <Tile variant="dark" caption="GREEK KAPPA · SAGE DOT">
            <Logo01_KappaWordmark />
          </Tile>
        </DCArtboard>

        <DCArtboard id="wm-2" label="02 · OCCASIO — uppercase tick" width={360} height={220}>
          <Tile variant="dark" caption="UPPERCASE · MOMENT TICK">
            <Logo02_UppercaseTick />
          </Tile>
        </DCArtboard>

        <DCArtboard id="wm-3" label="11 · Editorial serif" width={400} height={220}>
          <Tile variant="cream" caption="FRAUNCES · STACKED">
            <Logo11_StackedEditorial />
          </Tile>
        </DCArtboard>

        <DCArtboard id="wm-4" label="12 · [ kairos ]" width={420} height={220}>
          <Tile variant="dark" caption="BRACKETED · THE MOMENT">
            <Logo12_Brackets />
          </Tile>
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────────── LOCKUPS ─────────────────────────────── */}
      <DCSection
        id="lockups"
        title="Lockups — símbolo + texto"
        subtitle="Combination marks. El símbolo puede vivir solo como favicon o avatar."
      >
        <DCArtboard id="lk-1" label="03 · Kappa monogram lockup" width={420} height={240}>
          <Tile variant="dark" caption="KAPPA · MONOGRAM">
            <Logo04_MarkPlusWord />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lk-2" label="05 · Espiral progresiva" width={420} height={240}>
          <Tile variant="dark" caption="FIBONACCI SPIRAL · EVOLUCIÓN">
            <Logo05_Spiral />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lk-3" label="06 · Punto de inflexión" width={420} height={240}>
          <Tile variant="cream" caption="INFLECTION POINT">
            <Logo06_Inflection />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lk-4" label="07 · Reloj de arena (kairos)" width={420} height={240}>
          <Tile variant="dark" caption="HOURGLASS · EL MOMENTO">
            <Logo07_Hourglass />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lk-5" label="08 · Convergencia de datos" width={420} height={240}>
          <Tile variant="dark" caption="CONVERGENCE · DECISION POINT">
            <Logo08_Convergence />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lk-6" label="09 · Arco + tick" width={420} height={240}>
          <Tile variant="cream" caption="CLOCK ARC · MOMENT TICK">
            <Logo09_ArcTick />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lk-7" label="10 · K ascendente (flecha)" width={420} height={240}>
          <Tile variant="dark" caption="ASCENDING K · GROWTH">
            <Logo10_KChevron />
          </Tile>
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────────── SYMBOL ONLY ─────────────────────────────── */}
      <DCSection
        id="symbols"
        title="Símbolos puros"
        subtitle="Para favicon, avatar de LinkedIn, app icon. Los mismos símbolos sin texto."
      >
        <DCArtboard id="sy-1" label="κ — Kappa" width={220} height={220}>
          <Tile variant="dark">
            <Logo03_KappaMark size={120} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="sy-2" label="Espiral" width={220} height={220}>
          <Tile variant="cream">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
              <path d="M 50 95 A 45 45 0 0 1 5 50" stroke={C.teal} strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M 5 50 A 28 28 0 0 1 33 22" stroke={C.teal} strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M 33 22 A 17 17 0 0 1 50 39" stroke={C.teal} strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M 50 39 A 10 10 0 0 1 60 49" stroke={C.sage} strokeWidth="5" strokeLinecap="round" fill="none" />
              <circle cx="60" cy="49" r="3" fill={C.sage} />
            </svg>
          </Tile>
        </DCArtboard>

        <DCArtboard id="sy-3" label="Reloj de arena" width={220} height={220}>
          <Tile variant="dark">
            <svg width="84" height="112" viewBox="0 0 60 80" fill="none">
              <path d="M 6 6 L 54 6 L 30 38 Z" stroke={C.cream} strokeWidth="3" fill="none" strokeLinejoin="miter" />
              <path d="M 30 42 L 54 74 L 6 74 Z" fill={C.sage} />
              <circle cx="30" cy="40" r="2.5" fill={C.cream} />
            </svg>
          </Tile>
        </DCArtboard>

        <DCArtboard id="sy-4" label="Convergencia" width={220} height={220}>
          <Tile variant="dark">
            <svg width="120" height="120" viewBox="0 0 72 72" fill="none">
              {[[4,8],[4,36],[4,64],[36,4],[36,68],[68,8],[68,36],[68,64]].map(([x,y], i) => (
                <line key={i} x1={x} y1={y} x2={36} y2={36}
                      stroke={C.cream} strokeWidth="1.4" strokeLinecap="round" opacity={0.45} />
              ))}
              <circle cx={36} cy={36} r="5" fill={C.sage} />
              <circle cx={36} cy={36} r="10" fill="none" stroke={C.sage} strokeWidth="1" opacity="0.3" />
            </svg>
          </Tile>
        </DCArtboard>

        <DCArtboard id="sy-5" label="K ascendente" width={220} height={220}>
          <Tile variant="cream">
            <svg width="110" height="110" viewBox="0 0 64 64" fill="none">
              <rect x="10" y="10" width="5" height="44" fill={C.teal} />
              <path d="M 15 32 L 50 54" stroke={C.teal} strokeWidth="5" strokeLinecap="square" />
              <path d="M 15 32 L 50 10" stroke={C.sage} strokeWidth="5" strokeLinecap="square" />
              <path d="M 50 10 L 50 22 M 50 10 L 38 10"
                    stroke={C.sage} strokeWidth="5" strokeLinecap="square" fill="none" />
            </svg>
          </Tile>
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────────── APPLICATIONS ─────────────────────────────── */}
      <DCSection
        id="apps"
        title="Aplicaciones — cómo se ve en uso"
        subtitle="Probando los candidatos más fuertes en contextos reales: header de website, avatar y tarjeta."
      >
        <DCArtboard id="ap-1" label="Header · κairos wordmark" width={520} height={300}>
          <AppHeader logo={<Logo01_KappaWordmark />} dark={true} />
        </DCArtboard>

        <DCArtboard id="ap-2" label="Header · Kappa lockup" width={520} height={300}>
          <AppHeader logo={<Logo04_MarkPlusWord />} dark={true} />
        </DCArtboard>

        <DCArtboard id="ap-3" label="Header · cream variant" width={520} height={300}>
          <AppHeader logo={<Logo07_Hourglass />} dark={false} />
        </DCArtboard>

        <DCArtboard id="ap-4" label="Avatar · Kappa" width={520} height={220}>
          <AppAvatar mark={<Logo03_KappaMark size={48} fg={C.cream} accent={C.sage} />} />
        </DCArtboard>

        <DCArtboard id="ap-5" label="Avatar · Espiral" width={520} height={220}>
          <AppAvatar mark={
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <path d="M 50 95 A 45 45 0 0 1 5 50" stroke={C.cream} strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M 5 50 A 28 28 0 0 1 33 22" stroke={C.cream} strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M 33 22 A 17 17 0 0 1 50 39" stroke={C.cream} strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M 50 39 A 10 10 0 0 1 60 49" stroke={C.sage} strokeWidth="6" strokeLinecap="round" fill="none" />
              <circle cx="60" cy="49" r="4" fill={C.sage} />
            </svg>
          } />
        </DCArtboard>

        <DCArtboard id="ap-6" label="Tarjeta personal" width={520} height={300}>
          <AppCard logo={<Logo04_MarkPlusWord />} />
        </DCArtboard>
      </DCSection>

      <DCPostIt x={40} y={40}>
        Hover el header de cualquier artboard y haz click en el ícono de expandir
        para verlo en pantalla completa. ←/→ navega entre artboards en focus mode.
      </DCPostIt>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
