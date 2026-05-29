import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext.jsx'

const groups = [
  {
    key: 'data',
    items: ['SQL', 'Teradata', 'BigQuery', 'MySQL', 'SAS Enterprise Guide', 'Celebrus 8'],
  },
  {
    key: 'bi',
    items: ['Power BI', 'Microsoft Fabric', 'Microstrategy', 'Cognos', 'Adobe Analytics'],
  },
  {
    key: 'cloud',
    items: ['AWS (Redshift, SageMaker)', 'Microsoft Azure', 'Google Cloud Platform'],
  },
  {
    key: 'ai',
    items: ['OpenAI GPT', 'Claude', 'Copilot Studio', 'n8n', 'SAS Miner'],
  },
  {
    key: 'prog',
    items: ['Python', 'R', 'SQL'],
  },
  {
    key: 'erp',
    items: ['SAP FI-CO', 'Oracle ERP', 'JD Edwards', 'Tango'],
  },
]

export default function TechStack() {
  const { t } = useLang()

  return (
    <section id="capabilities" className="section-pad relative">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">{t('stack.eyebrow')}</span>
          <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
            {t('stack.title.a')}
            <span className="ink-gradient">{t('stack.title.b')}</span>
          </h2>
          <p className="mt-5 text-paper-muted text-[15px] leading-relaxed">
            {t('stack.intro')}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface surface-hover p-6"
            >
              <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono">
                {t(`stack.group.${g.key}`)}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-[12px] px-2.5 py-1.5 rounded-lg bg-ink/60 border border-bg-border text-paper font-mono hover:border-violet-300/50 hover:bg-violet-500/10 transition-colors cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 surface p-6 lg:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 beam" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono">
                {t('stack.credentials.label')}
              </div>
              <div className="mt-2 font-display font-semibold text-paper text-[15px] tracking-tight">
                {t('stack.credentials.body')}
              </div>
            </div>
            <a href="#contact" className="btn-ghost !text-[11px] whitespace-nowrap">
              {t('stack.credentials.cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
