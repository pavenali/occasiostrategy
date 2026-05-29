import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Testimonials() {
  const { t } = useLang()

  const testimonials = [1, 2, 3].map((i) => ({
    quote: t(`tst.q${i}`),
    name: t(`tst.r${i}.name`),
    role: t(`tst.r${i}.role`),
  }))

  return (
    <section id="testimonials" className="section-pad relative">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">{t('tst.eyebrow')}</span>
          <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
            {t('tst.title.a')}
            <span className="ink-gradient">{t('tst.title.b')}</span>
          </h2>
          <p className="mt-5 text-paper-muted text-[13px] font-mono">
            {t('tst.disclaimer')}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-3">
          {testimonials.map((tt, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface surface-hover p-7 relative flex flex-col"
            >
              <Quote
                size={28}
                className="text-violet-400/40 absolute top-5 right-5"
              />
              <blockquote className="text-[15px] text-paper leading-relaxed relative z-10 flex-1 tracking-tight">
                “{tt.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-bg-border">
                <div className="font-display font-semibold text-[13px] text-paper tracking-tight">
                  {tt.name}
                </div>
                <div className="text-[11px] text-paper-muted mt-0.5 font-mono">
                  {tt.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
