// brand-book.jsx — Canvas layout assembling the full brand system.

function Tile({ variant = 'dark', children, caption }) {
  return (
    <div className={`tile ${variant}`}>
      {children}
      {caption ? <div className="caption">{caption}</div> : null}
    </div>
  );
}

function BookIntro() {
  return (
    <div style={{
      maxWidth: 780,
      padding: '0 8px 28px',
      fontFamily: 'Manrope, sans-serif',
      color: '#3a3328',
    }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
        opacity: 0.55, marginBottom: 10,
      }}>
        Occasio · brand system · v1.0
      </div>
      <h1 style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700, fontSize: 34, margin: '0 0 16px',
        letterSpacing: '-0.025em', lineHeight: 1.05,
      }}>
        Sistema de marca · variante 07 <span style={{ color: '#7c3aed' }}>gradient beam</span>
      </h1>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: '0 0 12px', opacity: 0.85 }}>
        Este es el sistema visual completo de Occasio, desarrollado a partir de la
        variante elegida. Cubre los tres pilares de uso — <b>identidad</b> (logo,
        símbolo, paleta, tipografía), <b>digital</b> (web, email, social) e <b>impreso</b>
        (membrete, tarjeta, presentaciones).
      </p>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: '0 0 12px', opacity: 0.85 }}>
        Cada artboard es un asset listo para usar. Abrí cualquiera en pantalla
        completa (icono de expandir) para verlo en tamaño real. Las medidas y reglas
        de uso están en la sección "Reglas".
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.55 }}>
        Todo está construido en código (SVG + HTML) — para exportar a formatos finales
        (SVG, PNG, PDF) avisame y armamos el paquete técnico.
      </p>
    </div>
  );
}

function Book() {
  return (
    <DesignCanvas>
      <BookIntro />

      {/* ─────────────────────────── SISTEMA ─────────────────────────── */}
      <DCSection
        id="system"
        title="01 · Sistema base"
        subtitle="Paleta, tipografía y el beam — los átomos del sistema."
      >
        <DCArtboard id="palette-dark" label="Paleta · oscura" width={760} height={260}>
          <div style={{
            width: '100%', height: '100%', background: K.ink, color: K.paper,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24,
            padding: 32, boxSizing: 'border-box',
          }}>
            <Swatch color={K.ink}    name="Ink"      hex="#0D0A1F" dark />
            <Swatch color={K.ink2}   name="Ink Mid"  hex="#1A1334" dark />
            <Swatch color={K.violet4} name="Violet 4" hex="#6D4ED8" dark />
            <Swatch color={K.violet2} name="Violet 2" hex="#8B5CF6" dark />
            <Swatch color={K.violet}  name="Violet"   hex="#A78BFA" dark />
            <Swatch beam={true}      name="Beam"     hex="GRADIENT" dark />
          </div>
        </DCArtboard>

        <DCArtboard id="palette-light" label="Paleta · clara" width={420} height={260}>
          <div style={{
            width: '100%', height: '100%', background: K.paper, color: K.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24,
            padding: 32, boxSizing: 'border-box',
          }}>
            <Swatch color={K.paper}   name="Paper"    hex="#F6F3FF" />
            <Swatch color={K.paper2}  name="Paper 2"  hex="#ECE6FF" />
            <Swatch color={K.violet3} name="Violet 3" hex="#C4B5FD" />
          </div>
        </DCArtboard>

        <DCArtboard id="type" label="Tipografía" width={580} height={320}>
          <div style={{ width: '100%', height: '100%', background: K.ink }}>
            <TypeSpecimen dark={true} />
          </div>
        </DCArtboard>

        <DCArtboard id="beam" label="El beam" width={580} height={320}>
          <div style={{ width: '100%', height: '100%', background: K.ink }}>
            <BeamDiagram />
          </div>
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────── LOGO ─────────────────────────── */}
      <DCSection
        id="logo"
        title="02 · Logo"
        subtitle="Lockup principal y todas sus variantes — para cada contexto, una pieza."
      >
        <DCArtboard id="lo-primary-dark" label="Primary · dark" width={520} height={280}>
          <Tile variant="darker" caption="PRIMARY · DARK BG">
            <OccasioWordmark size={42} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-primary-light" label="Primary · light" width={520} height={280}>
          <Tile variant="paper" caption="PRIMARY · LIGHT BG">
            <OccasioWordmark size={42} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-wordmark-dark" label="Wordmark only · dark" width={520} height={220}>
          <Tile variant="darker" caption="NO SUBLINE · DARK">
            <OccasioWordmark size={42} showSubline={false} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-wordmark-light" label="Wordmark only · light" width={520} height={220}>
          <Tile variant="paper" caption="NO SUBLINE · LIGHT">
            <OccasioWordmark size={42} showSubline={false} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-mono-violet" label="Monocromo violeta" width={520} height={220}>
          <Tile variant="paper" caption="SINGLE INK · VIOLET">
            <OccasioWordmark size={42} color={K.violet4} beam={BEAM_MONO(K.violet4)} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-mono-black" label="Monocromo · 1 tinta" width={520} height={220}>
          <Tile variant="paper" caption="SINGLE INK · BLACK">
            <OccasioWordmark size={42} color={K.ink} beam={BEAM_MONO(K.ink)} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-reversed-violet" label="Reverso sobre violeta" width={520} height={220}>
          <Tile variant="violet" caption="REVERSED ON VIOLET">
            <OccasioWordmark size={42} color={K.paper} beam={BEAM_REVERSED} />
          </Tile>
        </DCArtboard>

        <DCArtboard id="lo-horizontal" label="Lockup horizontal (símbolo + texto)" width={520} height={220}>
          <Tile variant="darker" caption="HORIZONTAL LOCKUP">
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <OccasioSymbol size={64} variant="dark" shape="rounded" />
              <OccasioWordmark size={26} showSubline={true} align="left" beamWidth={140} />
            </div>
          </Tile>
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────── SÍMBOLO ─────────────────────────── */}
      <DCSection
        id="symbol"
        title="03 · Símbolo / Favicon"
        subtitle="A escala chica el wordmark pierde lectura — el símbolo K acompaña al sistema."
      >
        <DCArtboard id="sy-grid" label="4 variantes del símbolo" width={760} height={220}>
          <div style={{
            width: '100%', height: '100%', background: K.paper,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <OccasioSymbol size={92} variant="dark" />
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Dark</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <OccasioSymbol size={92} variant="light" />
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Light</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <OccasioSymbol size={92} variant="violet" />
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Violet</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <OccasioSymbol size={92} variant="gradient" />
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Gradient</div>
            </div>
          </div>
        </DCArtboard>

        <DCArtboard id="sy-shapes" label="Formas — para cada plataforma" width={520} height={220}>
          <div style={{
            width: '100%', height: '100%', background: K.paper,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22,
          }}>
            <OccasioSymbol size={84} variant="dark" shape="square" />
            <OccasioSymbol size={84} variant="dark" shape="rounded" />
            <OccasioSymbol size={84} variant="dark" shape="circle" />
          </div>
        </DCArtboard>

        <DCArtboard id="sy-favicon" label="Favicon · escalas" width={580} height={220}>
          <FaviconStrip />
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────── WEB ─────────────────────────── */}
      <DCSection
        id="web"
        title="04 · Web"
        subtitle="Header del sitio, OG card para compartir, firma de email."
      >
        <DCArtboard id="we-header-dark" label="Website header · dark" width={760} height={300}>
          <SiteHeaderDark />
        </DCArtboard>

        <DCArtboard id="we-header-light" label="Website header · light" width={760} height={300}>
          <SiteHeaderLight />
        </DCArtboard>

        <DCArtboard id="we-og" label="OG card · 1200×630" width={760} height={400}>
          <OGCard />
        </DCArtboard>

        <DCArtboard id="we-email" label="Email signature" width={520} height={320}>
          <EmailSignature />
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────── SOCIAL ─────────────────────────── */}
      <DCSection
        id="social"
        title="05 · Redes sociales"
        subtitle="Instagram (perfil, feed, story) y LinkedIn — formatos nativos."
      >
        <DCArtboard id="ig-profile" label="Instagram · perfil" width={520} height={280}>
          <IGProfile />
        </DCArtboard>

        <DCArtboard id="ig-post-quote" label="IG post · insight" width={360} height={360}>
          <IGPostQuote />
        </DCArtboard>

        <DCArtboard id="ig-post-stat" label="IG post · stat" width={360} height={360}>
          <IGPostStat />
        </DCArtboard>

        <DCArtboard id="ig-post-announce" label="IG post · announce" width={360} height={360}>
          <IGPostAnnounce />
        </DCArtboard>

        <DCArtboard id="ig-story" label="IG story · 9:16" width={240} height={420}>
          <IGStory />
        </DCArtboard>

        <DCArtboard id="li-cover" label="LinkedIn · cover" width={760} height={220}>
          <LinkedInCover />
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────── PRINT ─────────────────────────── */}
      <DCSection
        id="print"
        title="06 · Impreso & corporativo"
        subtitle="Membrete, tarjetas, sobre, slides — todo listo para llevar a imprenta."
      >
        <DCArtboard id="pr-letterhead" label="Membrete A4" width={480} height={680}>
          <Letterhead />
        </DCArtboard>

        <DCArtboard id="pr-card-front" label="Tarjeta personal · frente" width={420} height={260}>
          <BusinessCardFront />
        </DCArtboard>

        <DCArtboard id="pr-card-back" label="Tarjeta personal · dorso" width={420} height={260}>
          <BusinessCardBack />
        </DCArtboard>

        <DCArtboard id="pr-envelope" label="Sobre DL" width={520} height={240}>
          <Envelope />
        </DCArtboard>

        <DCArtboard id="pr-slide" label="Slide cover 16:9" width={640} height={360}>
          <PresentationCover />
        </DCArtboard>

        <DCArtboard id="pr-footer-light" label="Footer de documento · light" width={640} height={140}>
          <DocumentFooter dark={false} />
        </DCArtboard>

        <DCArtboard id="pr-footer-dark" label="Footer de documento · dark" width={640} height={140}>
          <DocumentFooter dark={true} />
        </DCArtboard>
      </DCSection>

      {/* ─────────────────────────── REGLAS ─────────────────────────── */}
      <DCSection
        id="rules"
        title="07 · Reglas de uso"
        subtitle="Mínimos para mantener la marca consistente."
      >
        <DCArtboard id="ru-clearspace" label="Clear space" width={520} height={280}>
          <div style={{ width: '100%', height: '100%', background: K.ink }}>
            <ClearSpaceDiagram />
          </div>
        </DCArtboard>

        <DCArtboard id="ru-minsize" label="Tamaños mínimos" width={520} height={280}>
          <div style={{
            width: '100%', height: '100%', background: K.paper,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18,
            padding: 24, boxSizing: 'border-box',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 30 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <OccasioWordmark size={32} />
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Digital · 32px</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <OccasioWordmark size={18} />
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Min digital · 18px</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <OccasioWordmark size={12} showSubline={false} />
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, opacity: 0.6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Min sin subline · 12px</div>
              </div>
            </div>
            <div style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 12, opacity: 0.7,
              textAlign: 'center', maxWidth: 380, marginTop: 12, lineHeight: 1.5,
            }}>
              Bajo 18px se cae la subline. Bajo 12px se usa el <b>símbolo</b> solo.
            </div>
          </div>
        </DCArtboard>

        <DCArtboard id="ru-donts" label="Don'ts" width={760} height={300}>
          <Donts />
        </DCArtboard>
      </DCSection>

      <DCPostIt x={40} y={40}>
        <b>Cómo usar este brand book:</b> abrí cualquier artboard a pantalla completa
        (botón de expandir en el header) para verlo a tamaño real. Para llevar a
        imprenta o exportar, avisame y armo SVG/PDF de los assets clave.
      </DCPostIt>

      <DCPostIt x={40} y={220}>
        <b>El beam es lo único que no se toca:</b> mismo gradiente, mismo ángulo
        (siempre horizontal, dim → bright de izq. a der.). En monocromo, se sustituye
        por un único tono pero conserva la forma.
      </DCPostIt>
    </DesignCanvas>
  );
}

// ============================================================
// DONTS — common mistakes to avoid
// ============================================================
function Donts() {
  const wrap = (label, child) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1 }}>
      <div style={{
        width: '100%', height: 86, background: K.ink, color: K.paper,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {child}
        <div style={{
          position: 'absolute', top: 8, right: 8,
          width: 18, height: 18, borderRadius: '50%',
          background: '#e94e6b', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700,
        }}>✕</div>
      </div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
        letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65,
        textAlign: 'center',
      }}>{label}</div>
    </div>
  );

  return (
    <div style={{
      width: '100%', height: '100%', background: '#faf8f1',
      padding: 28, boxSizing: 'border-box',
      display: 'flex', gap: 18, alignItems: 'center',
    }}>
      {wrap('No distorsionar', <div style={{ transform: 'scale(1.6, 0.7)' }}><OccasioWordmark size={20} /></div>)}
      {wrap('No rotar el beam',
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: 18, letterSpacing: '0.16em' }}>OCCASIO</div>
          <div style={{ width: 90, height: 2, background: BEAM_GRADIENT, transform: 'rotate(-18deg)' }} />
        </div>
      )}
      {wrap('No colores ajenos',
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: 18, letterSpacing: '0.16em' }}>OCCASIO</div>
          <div style={{ width: 90, height: 2, background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }} />
        </div>
      )}
      {wrap('No fondos cargados',
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <OccasioWordmark size={18} showSubline={false} />
        </div>
      )}
    </div>
  );
}

const rootBook = ReactDOM.createRoot(document.getElementById('root'));
rootBook.render(<Book />);
