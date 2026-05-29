import { motion } from 'framer-motion'
import {
  ShoppingBag,
  Landmark,
  Wheat,
  Package,
  ShoppingCart,
  Truck,
  HeartPulse,
  Building2,
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Industries() {
  const { t } = useLang()

  const items = [
    { icon: ShoppingBag, key: 'retail' },
    { icon: Landmark, key: 'finance' },
    { icon: Wheat, key: 'agro' },
    { icon: Package, key: 'fmcg' },
    { icon: ShoppingCart, key: 'ecom' },
    { icon: Truck, key: 'log' },
    { icon: HeartPulse, key: 'health' },
    { icon: Building2, key: 'gov' },
  ]

  return (
    <section id="industries" className="section-pad relative">
      <div className="absolute inset-0 bg-violet-glow-radial opacity-40 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t('industries.eyebrow')}</span>
            <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              {t('industries.title.a')}
              <span className="ink-gradient">{t('industries.title.b')}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-paper-muted text-[15px] leading-relaxed">
            {t('industries.intro')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((ind, i) => (
            <motion.div
              key={ind.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="surface surface-hover p-6 flex flex-col items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-300/5 border border-violet-400/25 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <ind.icon size={18} className="text-violet-200" />
              </div>
              <div>
                <div className="font-display font-semibold text-paper text-[15px] tracking-tight">
                  {t(`industries.${ind.key}`)}
                </div>
                <div className="text-[11px] text-paper-muted mt-1 font-mono">
                  {t(`industries.${ind.key}.note`)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
