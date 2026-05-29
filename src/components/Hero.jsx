import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLang()

  const stats = [
    { value: '20+', label: t('hero.stat.years') },
    { value: '$30M', label: t('hero.stat.revenue') },
    { value: '40%', label: t('hero.stat.cost') },
    { value: '25%', label: t('hero.stat.churn') },
  ]

  return (
    <section className="relative overflow-hidden pt-32 lg:pt-44 pb-24 lg:pb-32">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-violet-glow-radial pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center top, black 25%, transparent 70%)',
        }}
      />
      <div className="absolute top-1/4 -right-40 w-[28rem] h-[28rem] rounded-full bg-violet-500/15 blur-3xl animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[28rem] h-[28rem] rounded-full bg-violet-600/10 blur-3xl animate-pulse-soft pointer-events-none" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="eyebrow">{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 heading-display text-center text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] max-w-[60rem] mx-auto"
        >
          {t('hero.title.a')}
          <span className="ink-gradient">{t('hero.title.b')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 text-center text-base sm:text-lg text-paper-muted max-w-[42rem] mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact" className="btn-primary group">
            {t('hero.cta.primary')}
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a href="#work" className="btn-ghost">
            {t('hero.cta.secondary')}
          </a>
        </motion.div>

        {/* Brand beam — signature horizontal element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="beam-thick rounded-full" />
        </motion.div>

        {/* Metrics — laid out in restrained editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bg-border rounded-3xl overflow-hidden border border-bg-border"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-bg-surface px-6 py-9 flex flex-col items-center text-center"
            >
              <div className="metric text-[2rem] lg:text-[2.5rem] ink-gradient">
                {s.value}
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-beam text-paper-muted max-w-[14ch]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
