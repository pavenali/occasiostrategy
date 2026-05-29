import { motion } from 'framer-motion'
import { MapPin, Languages, GraduationCap } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
            {t('about.title.a')}
            <span className="ink-gradient">{t('about.title.b')}</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Founder card */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-violet-600/40 to-transparent rounded-3xl blur-2xl opacity-50 animate-pulse-soft" />
              <div className="relative rounded-3xl overflow-hidden border border-bg-border bg-bg-surface">
                <img
                  src="/assets/pablo-avenali.png"
                  alt="Pablo Avenali — Founder & Principal, Occasio Strategy"
                  className="w-full h-auto aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] font-mono uppercase tracking-beam text-violet-200">
                    {t('about.founder.label')}
                  </div>
                  <div className="mt-1.5 font-display font-semibold text-paper text-lg">
                    {t('about.founder.name')}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-paper-dim/80 leading-relaxed text-[15px] lg:text-base">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            <div className="my-8 beam" />

            <div className="text-[10px] font-mono uppercase tracking-beam text-violet-200 mb-3">
              {t('about.founder.label')}
            </div>
            <p className="text-sm text-paper-muted leading-relaxed">
              {t('about.founder.bio')}
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {[
                {
                  icon: MapPin,
                  label: t('about.location.label'),
                  value: t('about.location.value'),
                },
                {
                  icon: Languages,
                  label: t('about.languages.label'),
                  value: t('about.languages.value'),
                },
                {
                  icon: GraduationCap,
                  label: t('about.education.label'),
                  value: t('about.education.value'),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="surface surface-hover p-4"
                >
                  <item.icon size={16} className="text-violet-200" />
                  <div className="mt-3 text-[10px] font-mono uppercase tracking-beam text-paper-muted">
                    {item.label}
                  </div>
                  <div className="mt-1 font-medium text-[13px] text-paper">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
