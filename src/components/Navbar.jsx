import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import BrandMark from './BrandMark.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#industries', label: t('nav.industries') },
    { href: '#work', label: t('nav.work') },
    { href: '#capabilities', label: t('nav.capabilities') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/80 backdrop-blur-xl border-b border-bg-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 lg:h-[72px]">
        <BrandMark size={32} />

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-paper-muted hover:text-paper transition-colors duration-200 tracking-tight"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-primary !py-2 !px-4 !text-[12px]"
          >
            {t('nav.cta')}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-paper"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-xl border-b border-bg-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-paper-muted hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
