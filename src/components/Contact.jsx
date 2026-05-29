import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const EMAIL = 'info@occasiostrategy.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/occasiostrategy'
const INSTAGRAM_URL = 'https://www.instagram.com/occasiostrategy'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New inquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const channels = [
    { icon: Mail, label: t('contact.email.label'), value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: t('contact.linkedin.label'), value: '/in/occasiostrategy', href: LINKEDIN_URL },
    { icon: Instagram, label: t('contact.instagram.label'), value: '@occasiostrategy', href: INSTAGRAM_URL },
  ]

  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute inset-0 bg-violet-glow-radial opacity-60 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">{t('contact.eyebrow')}</span>
            <h2 className="mt-6 heading-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              {t('contact.title.a')}
              <span className="ink-gradient">{t('contact.title.b')}</span>
            </h2>
            <p className="mt-6 text-paper-muted text-[15px] leading-relaxed">
              {t('contact.intro')}
            </p>

            <div className="mt-10 space-y-2">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="surface surface-hover p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center">
                    <c.icon size={16} className="text-violet-200" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-beam font-mono text-paper-muted">
                      {c.label}
                    </div>
                    <div className="font-medium text-paper text-[14px]">{c.value}</div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-violet-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 surface p-7 lg:p-10 space-y-5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 beam" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label={t('contact.form.name')}
                name="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label={t('contact.form.company')}
                name="company"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
              />
            </div>
            <Field
              label={t('contact.form.email')}
              name="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
            <div>
              <label className="text-[10px] uppercase tracking-beam text-paper-muted font-mono">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="mt-2 w-full bg-ink border border-bg-border rounded-xl px-4 py-3 text-[14px] text-paper placeholder:text-paper-subtle focus:outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-300 transition-colors resize-none"
                placeholder={t('contact.form.placeholder')}
              />
            </div>
            <button type="submit" className="btn-primary w-full group !py-3.5">
              {sent ? (
                <>
                  <CheckCircle2 size={15} />
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  {t('contact.form.send')}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
            <p className="text-[11px] text-paper-subtle text-center font-mono">
              {t('contact.form.note')}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-beam text-paper-muted font-mono">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-ink border border-bg-border rounded-xl px-4 py-3 text-[14px] text-paper placeholder:text-paper-subtle focus:outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-300 transition-colors"
      />
    </div>
  )
}
