import { Mail, Linkedin, Instagram } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import BrandMark from './BrandMark.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const EMAIL = 'info@occasiostrategy.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/occasiostrategy'
const INSTAGRAM_URL = 'https://www.instagram.com/occasiostrategy'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-bg-border bg-ink-100 relative">
      <div className="absolute top-0 left-0 right-0 beam opacity-50" />
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <BrandMark size={36} />
            <p className="mt-6 text-[14px] text-paper-muted leading-relaxed max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono">
              {t('footer.navigate')}
            </div>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              {[
                [t('nav.about'), '#about'],
                [t('nav.services'), '#services'],
                [t('nav.work'), '#work'],
                [t('nav.capabilities'), '#capabilities'],
                [t('nav.contact'), '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-paper-muted hover:text-paper transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-beam text-violet-200 font-mono">
              {t('footer.connect')}
            </div>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 text-[13.5px] text-paper-muted hover:text-paper transition-colors"
              >
                <Mail size={15} className="text-violet-200" />
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[13.5px] text-paper-muted hover:text-paper transition-colors"
              >
                <Linkedin size={15} className="text-violet-200" />
                linkedin.com/in/occasiostrategy
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[13.5px] text-paper-muted hover:text-paper transition-colors"
              >
                <Instagram size={15} className="text-violet-200" />
                @occasiostrategy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bg-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-paper-subtle font-mono">
          <span>© {new Date().getFullYear()} Occasio Strategy. {t('footer.legal')}</span>
          <span>{t('footer.built')}</span>
        </div>
      </div>
    </footer>
  )
}
