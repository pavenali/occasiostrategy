import { motion } from 'framer-motion'
import {
  LineChart,
  BarChart3,
  Brain,
  Workflow,
  Sparkles,
  Database,
  Bot,
  FileBarChart,
  TrendingUp,
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const icons = [LineChart, BarChart3, Brain, Workflow, TrendingUp, Database, Bot, FileBarChart, Sparkles]

export default function Services() {
  const { t } = useLang()

  const services = Array.from({ length: 9 }, (_, i) => ({
    icon: icons[i],
    n: String(i + 1).padStart(2, '0'),
    title: t(`services.s${i + 1}.title`),
    body: t(`services.s${i + 1}.body`),
  }))

  return (
    <section id="services" className="section-pad relative bg-ink-200/40">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t('services.eyebrow')}</span>
            <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              {t('services.title.a')}
              <span className="ink-gradient">{t('services.title.b')}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-paper-muted text-[15px] leading-relaxed">
            {t('services.intro')}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bg-border rounded-3xl overflow-hidden border border-bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-bg-surface p-8 group relative overflow-hidden transition-colors duration-300 hover:bg-bg-elevated"
            >
              <div className="flex items-start justify-between mb-7">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center transition-all duration-300 group-hover:border-violet-300/40 group-hover:bg-violet-400/15">
                  <s.icon size={18} className="text-violet-200" />
                </div>
                <span className="font-mono text-[10px] text-paper-muted tracking-wider">
                  /{s.n}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[17px] text-paper tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] text-paper-muted leading-relaxed">
                {s.body}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-beam-soft transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
