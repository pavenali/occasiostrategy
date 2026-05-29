import { motion } from 'framer-motion'
import { Cpu, GitBranch, MessageSquare, Workflow, Search, Shield } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const icons = [Cpu, MessageSquare, Search, Workflow, GitBranch, Shield]

export default function AICapabilities() {
  const { t } = useLang()

  const capabilities = [1, 2, 3, 4, 5, 6].map((i) => ({
    icon: icons[i - 1],
    title: t(`ai.c${i}.title`),
    body: t(`ai.c${i}.body`),
  }))

  return (
    <section id="ai" className="section-pad relative bg-ink-200/40">
      <div className="absolute inset-x-0 top-0 beam opacity-60" />
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <span className="eyebrow">{t('ai.eyebrow')}</span>
            <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              {t('ai.title.a')}
              <span className="ink-gradient">{t('ai.title.b')}</span>
            </h2>
            <p className="mt-6 text-paper-muted text-[15px] leading-relaxed">
              {t('ai.intro1')}
            </p>
            <p className="mt-4 text-paper-muted text-[15px] leading-relaxed">
              {t('ai.intro2')}
            </p>
            <a href="#contact" className="mt-8 inline-flex btn-primary">
              {t('ai.cta')}
            </a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="surface surface-hover p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center">
                  <c.icon size={16} className="text-violet-200" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-paper text-[15px] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] text-paper-muted leading-relaxed">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
