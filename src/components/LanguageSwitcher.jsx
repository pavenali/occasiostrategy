import { useLang, SUPPORTED_LANGS } from '../i18n/LanguageContext.jsx'

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`inline-flex items-center gap-px rounded-full border border-bg-border bg-bg-surface/60 backdrop-blur p-0.5 ${
        compact ? 'text-[10px]' : 'text-[11px]'
      }`}
      role="group"
      aria-label="Language switcher"
    >
      {SUPPORTED_LANGS.map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`px-3 py-1.5 rounded-full font-mono uppercase tracking-wider transition-all duration-200 ${
              active
                ? 'bg-violet-400 text-paper shadow-beam'
                : 'text-paper-muted hover:text-paper'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
