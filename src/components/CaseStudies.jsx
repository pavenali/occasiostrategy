import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingDown, TrendingUp, Cloud } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const caseIcons = {
  1: [TrendingUp, TrendingUp, TrendingDown],
  2: [TrendingUp, TrendingUp, TrendingUp],
  3: [TrendingUp, Cloud, TrendingUp],
}

export default function CaseStudies() {
  const { t } = useLang()

  const cases = [1, 2, 3].map((n) => ({
    n: String(n).padStart(2, '0'),
    sector: t(`work.case${n}.sector`),
    badge: t(`work.case${n}.badge`),
    title: t(`work.case${n}.title`),
    challenge: t(`work.case${n}.challenge`),
    solution: t(`work.case${n}.solution`),
    impact: [1, 2, 3].map((j) => ({
      icon: caseIcons[n][j - 1],
      label: t(`work.case${n}.i${j}`),
    })),
  }))

  return (
    <section id="work" className="section-pad relative bg-ink-200/40">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">{t('work.eyebrow')}</span>
          <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
            {t('work.title.a')}
            <span className="ink-gradient">{t('work.title.b')}</span>
          </h2>
          <p className="mt-5 text-paper-muted text-[15px] leading-relaxed">
            {t('work.intro')}
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="surface surface-hover p-7 lg:p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet-500/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-beam text-violet-200">
                      {c.sector}
                    </span>
                    <span className="font-mono text-[10px] text-paper-muted">
                      /{c.n}
                    </span>
                  </div>
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-400/25 text-[10px] font-mono uppercase tracking-wider text-violet-200">
                    {c.badge}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl lg:text-[1.65rem] text-paper leading-[1.2] tracking-tighter">
                    {c.title}
                  </h3>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono mb-2">
                      {t('work.challenge')}
                    </div>
                    <p className="text-[13.5px] text-paper-muted leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono mb-2">
                      {t('work.solution')}
                    </div>
                    <p className="text-[13.5px] text-paper-muted leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono mb-3">
                    {t('work.impact')}
                  </div>
                  <ul className="space-y-2.5">
                    {c.impact.map((imp) => (
                      <li
                        key={imp.label}
                        className="flex items-start gap-2.5 text-[13px] text-paper"
                      >
                        <div className="mt-0.5 w-5 h-5 rounded-md bg-violet-500/15 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
                          <imp.icon size={11} className="text-violet-200" />
                        </div>
                        <span className="leading-snug">{imp.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative mt-8 pt-5 border-t border-bg-border flex items-center justify-between text-[11px] text-paper-muted font-mono">
                <span>{t('work.confidential')}</span>
                <ArrowUpRight
                  size={14}
                  className="text-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
